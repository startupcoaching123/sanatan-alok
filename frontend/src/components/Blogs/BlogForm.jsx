import { useState, useRef, useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from '@tiptap/starter-kit';
import { Image } from '@tiptap/extension-image';
import { Link } from '@tiptap/extension-link';
import { TextStyle } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import { Table } from '@tiptap/extension-table';
import { TableCell } from '@tiptap/extension-table-cell';
import { TableHeader } from '@tiptap/extension-table-header';
import { TableRow } from '@tiptap/extension-table-row';
import { TextAlign } from '@tiptap/extension-text-align';
import axios from 'axios';


function BlogForm({ onSubmit, initialData, onCancel }) {
  const isNewPost = !initialData?._id;

  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    content: initialData?.content || '',
    metaDescription: initialData?.metaDescription || '',
    keywords: initialData?.keywords?.join(', ') || '',
    featuredImage: null,
    categories: initialData?.categories?.map((cat) => cat._id || cat) || [],
    status: initialData?.status || 'published',
    author: initialData?.author || '',
    publishedAt: initialData?.publishedAt
      ? new Date(initialData.publishedAt).toISOString().slice(0, 16)
      : new Date().toISOString().slice(0, 16),
    slug: initialData?.slug || '',
  });

  const BACKENDURL = import.meta.env.VITE_BACKEND_URL;

  const [previewImages, setPreviewImages] = useState({
    featuredImage: initialData?.featuredImage || null,
  });
  const [editorContent, setEditorContent] = useState(initialData?.content || '');
  const [isDirty, setIsDirty] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [categories, setCategories] = useState([]);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const [activeTab, setActiveTab] = useState('content');
  const [error, setError] = useState('');
  const featuredImageRef = useRef();

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
          HTMLAttributes: {
            class: 'heading',
          },
        },
      }),
      Table.configure({
        resizable: true,
        HTMLAttributes: {
          class: 'table-bordered',
        },
      }),
      TableRow,
      TableHeader,
      TableCell.configure({
        HTMLAttributes: {
          class: 'border border-gray-300 p-2',
        },
      }),
      Image.configure({
        inline: true,
        allowBase64: false,
        HTMLAttributes: {
          class: 'inline-image',
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-purple-500 hover:underline',
        },
        validate: (href) => /^https?:\/\//.test(href),
      }),
      TextStyle,
      Color,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        alignments: ['left', 'center', 'right'],
        defaultAlignment: 'left',
      }),
    ],
    content: editorContent,
    onUpdate: ({ editor }) => {
      setEditorContent(editor.getHTML());
      setIsDirty(true);
    },
    editorProps: {
      attributes: {
        class: 'prose max-w-none focus:outline-none min-h-[400px] p-6',
      },
    },
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${BACKENDURL}/api/categories`);
        setCategories(response.data);
      } catch (err) {
        console.error('Category fetch error:', err);
      }
    };
    fetchCategories();

    if (initialData?.content && editor) {
      editor.commands.setContent(initialData.content);
      setEditorContent(initialData.content);
    }
  }, [initialData?.content, editor]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setIsDirty(true);
  };

  const handleCategoryChange = (categoryId) => {
    setFormData(prev => {
      const newCategories = prev.categories.some(id =>
        id.toString() === categoryId.toString()
      )
        ? prev.categories.filter(id => id.toString() !== categoryId.toString())
        : [...prev.categories, categoryId];

      return {
        ...prev,
        categories: newCategories
      };
    });
    setIsDirty(true);
    setError('');
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === 'featuredImage' && files[0]) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
      setPreviewImages((prev) => ({ ...prev, featuredImage: URL.createObjectURL(files[0]) }));
      setError('');
      setIsDirty(true);
    }
  };

  const removeImage = (type) => {
    if (type === 'featuredImage') {
      setFormData((prev) => ({ ...prev, featuredImage: null }));
      setPreviewImages((prev) => ({ ...prev, featuredImage: null }));
      featuredImageRef.current.value = '';
      setError('Featured image is required.');
      setIsDirty(true);
    }
  };

  const setLink = () => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);

    if (url === null) return;

    let processedUrl = url;
    if (url && !/^https?:\/\//i.test(url)) {
      processedUrl = `https://${url}`;
    }

    if (processedUrl === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href: processedUrl }).run();
  };

  const addTable = () => {
    editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (!newCategory.trim()) return;

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `${BACKENDURL}/api/categories`,
        { name: newCategory.trim() },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCategories((prev) => [...prev, response.data]);
      setFormData((prev) => ({
        ...prev,
        categories: [...prev.categories, response.data._id],
      }));
      setNewCategory('');
      setShowAddCategory(false);
      setIsDirty(true);
    } catch (err) {
      console.error('Category creation error:', err);
      alert('Failed to create category. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editor) return;

    setError('');

    if (formData.categories.length === 0) {
      setError('Please select at least one category.');
      return;
    }

    if (formData.status === 'published' && !formData.featuredImage && !previewImages.featuredImage) {
      setError('Featured image is required for published posts');
      return;
    }

    setIsSubmitting(true);

    try {
      const updatedContent = editor.getHTML() || '<p></p>';
      const data = new FormData();

      data.append('title', formData.title);
      data.append('content', updatedContent);
      data.append('metaDescription', formData.metaDescription);
      data.append('keywords', formData.keywords);
      data.append('status', formData.status);
      data.append('author', formData.author);
      data.append('publishedAt', formData.publishedAt);
      data.append('slug', formData.slug);

      formData.categories.forEach(categoryId => {
        data.append('categories[]', categoryId);
      });

      if (formData.featuredImage) {
        data.append('featuredImage', formData.featuredImage);
      } else if (previewImages.featuredImage && typeof previewImages.featuredImage === 'string') {
        data.append('featuredImageUrl', previewImages.featuredImage);
      }

      await onSubmit(data);
      setIsDirty(false);

      if (isNewPost) {
        setFormData({
          title: '',
          content: '',
          metaDescription: '',
          keywords: '',
          featuredImage: null,
          categories: [],
          status: 'published',
          author: '',
          publishedAt: new Date().toISOString().slice(0, 16),
          slug: '',
        });
        setPreviewImages({ featuredImage: null });
        editor.commands.clearContent();
        setEditorContent('');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setError(error.response?.data?.message || 'Failed to save blog post');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!editor) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  const tabs = [
    { id: 'content', name: 'Content', icon: '📝' },
    { id: 'settings', name: 'Settings', icon: '⚙️' },
    { id: 'seo', name: 'SEO', icon: '🔍' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {isNewPost ? 'Create New Blog Post' : 'Edit Blog Post'}
            </h2>
            <p className="text-gray-600 mt-1">
              {isNewPost ? 'Write and publish a new blog post' : 'Update your existing blog post'}
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
            <button
              type="button"
              onClick={onCancel}
              className="px-2 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 border-b border-gray-200">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === tab.id
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      <form onSubmit={handleSubmit} className="p-6">
        {error && (
          <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-lg">
            {error}
          </div>
        )}

        {activeTab === 'content' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Post Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter an engaging title for your blog post..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Featured Image {formData.status === 'published' && <span className="text-red-500">*</span>}
              </label>
              {previewImages.featuredImage ? (
                <div className="relative mb-4">
                  <img
                    src={previewImages.featuredImage}
                    alt="Featured preview"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage('featuredImage')}
                    className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ) : (
                <div className="flex justify-center">
                  <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">PNG, JPG, JPEG (Max 5MB)</p>
                    </div>
                    <input
                      ref={featuredImageRef}
                      type="file"
                      name="featuredImage"
                      onChange={handleFileChange}
                      className="hidden"
                      accept="image/png, image/jpeg, image/jpg"
                    />
                  </label>
                </div>
              )}
              {formData.status === 'published' && !previewImages.featuredImage && (
                <p className="text-sm text-red-500 mt-2">Featured image is required for published posts</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Content</label>
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <div className="border-b border-gray-300 p-3 bg-gray-50 flex flex-wrap gap-2">
                  <div className="flex items-center space-x-1 border-r border-gray-300 pr-2">
                    <button
                      onClick={() => editor.chain().focus().toggleBold().run()}
                      className={`p-2 rounded transition-colors ${editor.isActive('bold')
                        ? 'bg-purple-500 text-white'
                        : 'text-gray-700 hover:bg-gray-200'
                        }`}
                      type="button"
                      title="Bold"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => editor.chain().focus().toggleItalic().run()}
                      className={`p-2 rounded transition-colors ${editor.isActive('italic')
                        ? 'bg-purple-500 text-white'
                        : 'text-gray-700 hover:bg-gray-200'
                        }`}
                      type="button"
                      title="Italic"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4h-8z" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center space-x-1 border-r border-gray-300 pr-2">
                    <button
                      onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                      disabled={!editor.can().chain().focus().toggleHeading({ level: 1 }).run()}
                      className={`px-2 py-1 rounded text-sm font-medium transition-colors ${editor.isActive('heading', { level: 1 })
                        ? 'bg-purple-500 text-white'
                        : 'text-gray-700 hover:bg-gray-200'}${!editor.can().chain().focus().toggleHeading({ level: 1 }).run() ? ' opacity-50 cursor-not-allowed' : ''}`}
                      type="button"
                      title="Heading 1"
                    >
                      H1
                    </button>
                    <button
                      onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                      disabled={!editor.can().chain().focus().toggleHeading({ level: 2 }).run()}
                      className={`px-2 py-1 rounded text-sm font-medium transition-colors ${editor.isActive('heading', { level: 2 })
                        ? 'bg-purple-500 text-white'
                        : 'text-gray-700 hover:bg-gray-200'}${!editor.can().chain().focus().toggleHeading({ level: 2 }).run() ? ' opacity-50 cursor-not-allowed' : ''}`}
                      type="button"
                      title="Heading 2"
                    >
                      H2
                    </button>
                    <button
                      onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                      disabled={!editor.can().chain().focus().toggleHeading({ level: 3 }).run()}
                      className={`px-2 py-1 rounded text-sm font-medium transition-colors ${editor.isActive('heading', { level: 3 })
                        ? 'bg-purple-500 text-white'
                        : 'text-gray-700 hover:bg-gray-200'}${!editor.can().chain().focus().toggleHeading({ level: 3 }).run() ? ' opacity-50 cursor-not-allowed' : ''}`}
                      type="button"
                      title="Heading 3"
                    >
                      H3
                    </button>
                  </div>

                  <div className="flex items-center space-x-1 border-r border-gray-300 pr-2">
                    <button
                      onClick={() => editor.chain().focus().setTextAlign('left').run()}
                      className={`p-2 rounded transition-colors ${editor.isActive({ textAlign: 'left' })
                        ? 'bg-purple-500 text-white'
                        : 'text-gray-700 hover:bg-gray-200'
                        }`}
                      type="button"
                      title="Align Left"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5h16M4 11h10M4 17h16" />
                      </svg>
                    </button>
                    <button
                      onClick={() => editor.chain().focus().setTextAlign('center').run()}
                      className={`p-2 rounded transition-colors ${editor.isActive({ textAlign: 'center' })
                        ? 'bg-purple-500 text-white'
                        : 'text-gray-700 hover:bg-gray-200'
                        }`}
                      type="button"
                      title="Align Center"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5h16M7 11h10M4 17h16" />
                      </svg>
                    </button>
                    <button
                      onClick={() => editor.chain().focus().setTextAlign('right').run()}
                      className={`p-2 rounded transition-colors ${editor.isActive({ textAlign: 'right' })
                        ? 'bg-purple-500 text-white'
                        : 'text-gray-700 hover:bg-gray-200'
                        }`}
                      type="button"
                      title="Align Right"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5h16M10 11h10M4 17h16" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center space-x-1 border-r border-gray-300 pr-2">
                    <button
                      onClick={() => editor.chain().focus().toggleBulletList().run()}
                      className={`p-2 rounded transition-colors ${editor.isActive('bulletList')
                        ? 'bg-purple-500 text-white'
                        : 'text-gray-700 hover:bg-gray-200'
                        }`}
                      type="button"
                      title="Bullet List"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                    <button
                      onClick={() => editor.chain().focus().toggleOrderedList().run()}
                      className={`p-2 rounded transition-colors ${editor.isActive('orderedList')
                        ? 'bg-purple-500 text-white'
                        : 'text-gray-700 hover:bg-gray-200'
                        }`}
                      type="button"
                      title="Ordered List"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m9-9h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-9-9v9m9-9v9"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center space-x-1">
                    <button
                      onClick={setLink}
                      className={`p-2 rounded transition-colors ${editor.isActive('link')
                        ? 'bg-purple-500 text-white'
                        : 'text-gray-700 hover:bg-gray-200'
                        }`}
                      type="button"
                      title="Link"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => {
                        const input = document.createElement('input');
                        input.type = 'file';
                        input.accept = 'image/png, image/jpeg, image/jpg';
                        input.onchange = (e) => {
                          const file = e.target.files[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onload = (e) => {
                              editor.chain().focus().setImage({ src: e.target.result }).run();
                            };
                            reader.readAsDataURL(file);
                          }
                        };
                        input.click();
                      }}
                      className="p-2 rounded text-gray-700 hover:bg-gray-200 transition-colors"
                      type="button"
                      title="Insert Image"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={addTable}
                      className="p-2 rounded text-gray-700 hover:bg-gray-200 transition-colors"
                      type="button"
                      title="Insert Table"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10h18M3 14h18m-12-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="bg-white">
                  <EditorContent editor={editor} />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block text-sm font-semibold text-gray-700">Categories</label>
                <button
                  type="button"
                  onClick={() => setShowAddCategory(true)}
                  className="text-sm text-purple-600 hover:text-purple-700 font-medium"
                >
                  + Add New Category
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-48 overflow-y-auto border border-gray-200 rounded-lg p-4">
                {categories.map(category => (
                  <label key={category._id} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.categories.some(id =>
                        id.toString() === category._id.toString()
                      )}
                      onChange={() => handleCategoryChange(category._id)}
                      className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <span className="text-sm text-gray-700">{category.name}</span>
                  </label>
                ))}
              </div>
              {error && error.includes('category') && (
                <p className="text-sm text-red-500 mt-2">Please select at least one category.</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Publication Date & Time</label>
              <input
                type="datetime-local"
                name="publishedAt"
                value={formData.publishedAt}
                onChange={(e) => {
                  setFormData({ ...formData, publishedAt: e.target.value });
                  setIsDirty(true);
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Author</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Author name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        )}

        {activeTab === 'seo' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Meta Description</label>
              <textarea
                name="metaDescription"
                value={formData.metaDescription}
                onChange={handleChange}
                rows={4}
                placeholder="Write a compelling description for search engines..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                {formData.metaDescription.length}/160 characters
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Keywords</label>
              <input
                type="text"
                name="keywords"
                value={formData.keywords}
                onChange={handleChange}
                placeholder="keyword1, keyword2, keyword3..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <p className="text-sm text-gray-500 mt-1">Separate keywords with commas</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">URL Slug</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                  /blogs/
                </span>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  placeholder="url-slug"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <p className="text-sm text-gray-500 mt-1">Leave blank to auto-generate from title</p>
            </div>
          </div>
        )}

        {showAddCategory && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-xl max-w-md w-full mx-4">
              <h3 className="text-lg font-semibold mb-4">Add New Category</h3>
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="Enter category name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
              />
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddCategory(false);
                    setNewCategory('');
                  }}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleAddCategory}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Add Category
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-6 border-t border-gray-200 mt-8">
          <div className="flex items-center space-x-4">
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
            >
              Cancel
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setFormData(prev => ({ ...prev, status: 'draft' }));
                handleSubmit(e);
              }}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
            >
              Save as Draft
            </button>
            <button
              type="submit"
              className={`px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center min-w-[140px] ${isDirty
                ? 'bg-purple-600 text-white hover:bg-purple-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              disabled={!isDirty || isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {isNewPost ? 'Creating...' : 'Updating...'}
                </>
              ) : (
                <>{isNewPost ? 'Create Post' : 'Update Post'}</>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BlogForm;