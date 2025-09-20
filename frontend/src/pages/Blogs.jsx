import { useState, useEffect, useCallback, useMemo } from "react"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import axios from "axios"

const BACKENDURL = import.meta.env.VITE_BACKEND_URL

function BlogPage() {
  const [blogs, setBlogs] = useState([])
  const [filteredBlogs, setFilteredBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchLoading, setSearchLoading] = useState(false)
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const blogsPerPage = 9

  // Debounced search function
  const debounce = (func, wait) => {
    let timeout
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }

  const performSearch = useCallback(async (query, category = "", page = 1) => {
    if (!query && !category) {
      setFilteredBlogs(blogs)
      return
    }

    setSearchLoading(true)
    try {
      const response = await axios.get(`${BACKENDURL}/api/blogs/search`, {
        params: {
          q: query,
          category: category,
          page: page,
          limit: blogsPerPage,
          status: "published"
        }
      })

      setFilteredBlogs(response.data.blogs || response.data)
      setTotalPages(response.data.totalPages || Math.ceil((response.data.total || response.data.length) / blogsPerPage))
    } catch (err) {
      console.error("Search error:", err)
      setFilteredBlogs([])
    } finally {
      setSearchLoading(false)
    }
  }, [blogs, blogsPerPage])

  const debouncedSearch = useMemo(
    () => debounce(performSearch, 300),
    [performSearch]
  )

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [blogsResponse, categoriesResponse] = await Promise.all([
          axios.get(`${BACKENDURL}/api/blogs?status=published&limit=${blogsPerPage}&page=${currentPage}`),
          axios.get(`${BACKENDURL}/api/categories`)
        ])

        setBlogs(blogsResponse.data.blogs || blogsResponse.data)
        setFilteredBlogs(blogsResponse.data.blogs || blogsResponse.data)
        setTotalPages(blogsResponse.data.totalPages || Math.ceil((blogsResponse.data.total || blogsResponse.data.length) / blogsPerPage))
        setCategories(categoriesResponse.data || [])
        setLoading(false)
      } catch (err) {
        console.error("Error fetching data:", err)
        setError("Failed to load blogs. Please try again later.")
        setLoading(false)
      }
    }
    fetchData()
  }, [currentPage, blogsPerPage])

  useEffect(() => {
    debouncedSearch(searchQuery, selectedCategory, currentPage)
  }, [searchQuery, selectedCategory, currentPage, debouncedSearch])

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1)
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("")
    setCurrentPage(1)
    setFilteredBlogs(blogs)
  }

  const calculateReadTime = (content) => {
    if (!content) return 5
    const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length
    return Math.ceil(wordCount / 200)
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    })
  }

  const generateStructuredData = () => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Startup Coach Blog",
      "description": "Expert insights, tips, and strategies for entrepreneurs and startup founders",
      "url": window.location.href,
      "publisher": {
        "@type": "Organization",
        "name": "Startup Coach",
        "logo": {
          "@type": "ImageObject",
          "url": `${window.location.origin}/logo.png`
        }
      },
      "blogPost": filteredBlogs.map(blog => ({
        "@type": "BlogPosting",
        "headline": blog.title,
        "description": blog.metaDescription,
        "image": blog.featuredImage,
        "author": {
          "@type": "Person",
          "name": blog.author || "Startup Coach Team"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Startup Coach"
        },
        "datePublished": blog.publishedAt || blog.createdAt,
        "dateModified": blog.updatedAt || blog.createdAt,
        "url": `${window.location.origin}/blogs/${blog.slug}`,
        "keywords": blog.keywords?.join(", ") || "",
        "articleSection": blog.categories?.map(cat => cat.name).join(", ") || ""
      }))
    }
    return JSON.stringify(structuredData)
  }

  // Dynamic title generation
  const generateDynamicTitle = () => {
    if (loading) return "Exploring Business Insights | Startup Coach";
    if (error) return "Error Loading Business Insights | Startup Coach";
    if (searchQuery && !selectedCategory) return `${searchQuery} - Business Insights | Startup Coach`;
    if (selectedCategory) return `${selectedCategory} Insights for Entrepreneurs | Startup Coach`;
    return "Startup Coach Blog - Expert Business Insights & Entrepreneurship Tips";
  };

  if (loading) {
    return (
      <>
        <Helmet>
          <title>{generateDynamicTitle()}</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">Loading amazing content...</p>
          </div>
        </div>
      </>
    )
  }

  if (error) {
    return (
      <>
        <Helmet>
          <title>{generateDynamicTitle()}</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto p-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Oops! Something went wrong</h3>
            <p className="text-gray-600 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Helmet>
        <title>{generateDynamicTitle()}</title>
        <meta
          name="description"
          content="Discover expert insights, practical tips, and proven strategies for entrepreneurs and startup founders. Learn from industry experts and grow your business with our comprehensive guides."
        />
        <meta
          name="keywords"
          content="startup advice, entrepreneurship, business tips, startup guide, business strategy, startup coaching, entrepreneur tips, business growth, startup success"
        />

        {/* Open Graph Tags */}
        <meta property="og:title" content={generateDynamicTitle()} />
        <meta property="og:description" content="Discover expert insights, practical tips, and proven strategies for entrepreneurs and startup founders." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content={`${window.location.origin}/blog-og-image.jpg`} />
        <meta property="og:site_name" content="Startup Coach" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={generateDynamicTitle()} />
        <meta name="twitter:description" content="Discover expert insights, practical tips, and proven strategies for entrepreneurs and startup founders." />
        <meta name="twitter:image" content={`${window.location.origin}/blog-og-image.jpg`} />

        {/* Additional SEO Tags */}
        <link rel="canonical" href={window.location.href} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Startup Coach Team" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {generateStructuredData()}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Startup Coach Blog</h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Expert insights, practical tips, and proven strategies for entrepreneurs and startup founders
            </p>

            {/* Search Bar */}
            {/* <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles, topics, or keywords..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full px-6 py-4 pl-12 text-gray-900 bg-white rounded-full focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg text-lg"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                {searchLoading && (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600"></div>
                  </div>
                )}
              </div>
            </div> */}
          </div>
        </div>

        {/* Filters Section */}
        {/* <div className="bg-white border-b border-gray-200 py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-sm font-medium text-gray-700">Filter by category:</span>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleCategoryChange("")}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === ""
                        ? "bg-purple-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category._id}
                      onClick={() => handleCategoryChange(category.name)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === category.name
                          ? "bg-purple-600 text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              
              {(searchQuery || selectedCategory) && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-purple-600 hover:text-purple-700 font-medium"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        </div> */}

        {/* Blog Content */}
        <div className="container mx-auto px-4 py-12">
          {/* Results Info */}
          <div className="mb-8">
            <p className="text-gray-600">
              {searchQuery || selectedCategory ? (
                <>
                  Found {filteredBlogs.length} article{filteredBlogs.length !== 1 ? 's' : ''}
                  {searchQuery && ` for "${searchQuery}"`}
                  {selectedCategory && ` in "${selectedCategory}"`}
                </>
              ) : (
                `Showing ${filteredBlogs.length} article${filteredBlogs.length !== 1 ? 's' : ''}`
              )}
            </p>
          </div>

          {filteredBlogs.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No Articles Found</h3>
              <p className="text-gray-600 text-lg mb-6">
                {searchQuery || selectedCategory
                  ? "Try adjusting your search terms or filters"
                  : "Check back soon for amazing content!"
                }
              </p>
              {(searchQuery || selectedCategory) && (
                <button
                  onClick={clearFilters}
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  View All Articles
                </button>
              )}
            </div>
          ) : (
            <>
              {/* Blog Grid - Equal Height Cards */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredBlogs.map((blog) => (
                  <Link key={blog._id} to={`/blogs/${blog.slug}`} className="group block h-full">
                    <article className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group-hover:border-purple-200 group-hover:-translate-y-1 h-full flex flex-col">
                      {/* Image Container - Fixed Height */}
                      <div className="relative overflow-hidden h-48">
                        {blog.featuredImage ? (
                          <img
                            src={blog.featuredImage || "/placeholder.svg"}
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                            <svg
                              className="w-16 h-16 text-purple-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                          </div>
                        )}
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Content - Flexible Height */}
                      <div className="p-6 flex flex-col flex-grow">
                        {/* Categories */}
                        {blog.categories && blog.categories.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {blog.categories.slice(0, 2).map((category, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full"
                              >
                                {typeof category === 'object' ? category.name : category}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Title */}
                        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-200 line-clamp-3 flex-grow">
                          {blog.title}
                        </h2>

                        {/* Meta Description */}
                        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed flex-grow">
                          {blog.metaDescription}
                        </p>

                        {/* Meta Info */}
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center space-x-4">
                            <span>{formatDate(blog.publishedAt || blog.createdAt)}</span>
                            <span>•</span>
                            <span>{calculateReadTime(blog.content)} min read</span>
                          </div>
                          {blog.author && (
                            <span className="text-purple-600 font-medium">{blog.author}</span>
                          )}
                        </div>

                        {/* Read More Button */}
                        <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors mt-auto">
                          <span>Read More</span>
                          <svg
                            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>

                      {/* Bottom accent */}
                      <div className="h-1 bg-gradient-to-r from-purple-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </article>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2 mt-12">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>

                  {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 text-sm font-medium rounded-lg ${currentPage === page
                            ? "bg-purple-600 text-white"
                            : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-50"
                          }`}
                      >
                        {page}
                      </button>
                    )
                  })}

                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default BlogPage