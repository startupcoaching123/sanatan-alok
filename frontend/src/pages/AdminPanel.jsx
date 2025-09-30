"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import BlogForm from "../components/Blogs/BlogForm"
import BlogList from "../components/Blogs/BlogList"
import { validateSession } from "../utils/auth.js"

const BACKENDURL = import.meta.env.VITE_BACKEND_URL

function AdminPanel() {
  const [blogs, setBlogs] = useState([])
  const [filteredBlogs, setFilteredBlogs] = useState([])
  const [selectedBlog, setSelectedBlog] = useState(null)
  const [activeSection, setActiveSection] = useState("dashboard")
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [stats, setStats] = useState({
    totalBlogs: 0,
    publishedBlogs: 0,
    draftBlogs: 0,
    totalViews: 0,
  })
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [categories, setCategories] = useState([])
  const [contacts, setContacts] = useState([])
  const [newsletters, setNewsletters] = useState([])
  const [programApplications, setProgramApplications] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    const checkAuthAndFetchData = async () => {
      try {
        const token = localStorage.getItem("token")

        // First validate the session
        const isValid = await validateSession()
        if (!isValid) {
          localStorage.removeItem("token")
          navigate("/admin/login")
          return
        }

        // Fetch data based on active section
        if (activeSection === "dashboard" || activeSection === "blogs") {
          await fetchBlogs()
          await fetchCategories()
        }
        if (activeSection === "contacts") await fetchContacts()
        if (activeSection === "newsletters") await fetchNewsletters()
        if (activeSection === "program-applications") await fetchProgramApplications()
      } catch (error) {
        console.error("Error in initial data fetching:", error)
        if (error.response?.status === 401) {
          localStorage.removeItem("token")
          navigate("/admin/login")
        }
      }
    }

    checkAuthAndFetchData()
  }, [activeSection, navigate])

  const handleTokenExpiration = async (error, navigate) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token")
      const Swal = (await import("sweetalert2")).default
      await Swal.fire({
        title: "Session Expired",
        text: "Your session has expired. Please login again.",
        icon: "warning",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      })
      navigate("/admin/login")
      return true // Indicates token was expired
    }
    return false // Token was not expired
  }

  const fetchBlogs = async () => {
    setLoading(true)
    try {
      const token = localStorage.getItem("token")
      const response = await axios.get(`${BACKENDURL}/api/blogs`, {
        headers: { Authorization: `Bearer ${token}` },
      })

      setBlogs(response.data)
      setFilteredBlogs(response.data)
      setStats({
        totalBlogs: response.data.length,
        publishedBlogs: response.data.filter((blog) => blog.status === "published").length,
        draftBlogs: response.data.filter((blog) => blog.status === "draft").length,
        totalViews: response.data.reduce((sum, blog) => sum + (blog.views || 0), 0),
      })
    } catch (err) {
      console.error("Blog fetch error:", err)
      if (err.response?.status === 401) {
        localStorage.removeItem("token")
        navigate("/admin/login")
      } else {
        toast.error("Failed to fetch blogs. Please try again.")
      }
    } finally {
      setLoading(false)
    }
  }

  const fetchCategories = async () => {
    setLoading(true)
    try {
      const token = localStorage.getItem("token")
      const response = await axios.get(`${BACKENDURL}/api/categories`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      setCategories(response.data)
    } catch (err) {
      console.error("Category fetch error:", err)
      const isTokenExpired = await handleTokenExpiration(err, navigate)
      if (!isTokenExpired) {
        toast.error("Failed to fetch categories.")
      }
    } finally {
      setLoading(false)
    }
  }

  const fetchContacts = async () => {
    setLoading(true)
    try {
      const token = localStorage.getItem("token")
      const response = await axios.get(`${BACKENDURL}/api/contacts`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      setContacts(response.data)
    } catch (err) {
      console.error("Contact fetch error:", err)
      const isTokenExpired = await handleTokenExpiration(err, navigate)
      if (!isTokenExpired) {
        toast.error("Failed to fetch contacts.")
      }
    } finally {
      setLoading(false)
    }
  }

  const fetchNewsletters = async () => {
    setLoading(true)
    try {
      const token = localStorage.getItem("token")
      const response = await axios.get(`${BACKENDURL}/api/newsletter`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      setNewsletters(response.data)
    } catch (err) {
      console.error("Newsletter fetch error:", err)
      const isTokenExpired = await handleTokenExpiration(err, navigate)
      if (!isTokenExpired) {
        toast.error("Failed to fetch newsletters.")
      }
    } finally {
      setLoading(false)
    }
  }

  const fetchProgramApplications = async () => {
    setLoading(true)
    try {
      const token = localStorage.getItem("token")
      const response = await axios.get(`${BACKENDURL}/api/program-applications`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      setProgramApplications(response.data)
    } catch (err) {
      console.error("Program application fetch error:", err)
      const isTokenExpired = await handleTokenExpiration(err, navigate)
      if (!isTokenExpired) {
        toast.error("Failed to fetch program applications.")
      }
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (query) => {
    setSearchQuery(query)
    if (!query && !selectedCategory) {
      setFilteredBlogs(blogs)
      return
    }
    const filtered = blogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(query.toLowerCase()) ||
        blog.content.toLowerCase().includes(query.toLowerCase())
      const matchesCategory =
        !selectedCategory ||
        (blog.categories && blog.categories.some((cat) => cat.name === selectedCategory))
      return matchesSearch && matchesCategory
    })
    setFilteredBlogs(filtered)
  }

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category)
    if (!category && !searchQuery) {
      setFilteredBlogs(blogs)
      return
    }
    handleSearch(searchQuery)
  }

  const handleCreate = async (formData) => {
    try {
      const token = localStorage.getItem("token")
      await axios.post(`${BACKENDURL}/api/blogs`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      toast.success("Blog created successfully!")
      fetchBlogs()
      fetchCategories()
      setSelectedBlog(null)
    } catch (err) {
      console.error("Blog creation error:", err)
      const isTokenExpired = await handleTokenExpiration(err, navigate)
      if (!isTokenExpired) {
        toast.error(err.response?.data?.error || "Failed to create blog")
      }
    }
  }

  const handleUpdate = async (id, formData) => {
    try {
      const token = localStorage.getItem("token")
      await axios.put(`${BACKENDURL}/api/blogs/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      toast.success("Blog updated successfully!")
      fetchBlogs()
      fetchCategories()
      setSelectedBlog(null)
    } catch (err) {
      console.error("Blog update error:", err)
      const isTokenExpired = await handleTokenExpiration(err, navigate)
      if (!isTokenExpired) {
        toast.error(err.response?.data?.error || "Failed to update blog")
      }
    }
  }

  const handleDelete = async (id) => {
    const Swal = (await import("sweetalert2")).default
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    })
    if (result.isConfirmed) {
      try {
        const token = localStorage.getItem("token")
        await axios.delete(`${BACKENDURL}/api/blogs/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        toast.success("Blog deleted successfully!")
        fetchBlogs()
        Swal.fire("Deleted!", "Your blog has been deleted.", "success")
      } catch (err) {
        console.error("Blog deletion error:", err)
        const isTokenExpired = await handleTokenExpiration(err, navigate)
        if (!isTokenExpired) {
          toast.error(err.response?.data?.error || "Failed to delete blog")
        }
      }
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/admin/login")
  }

  const downloadCSV = (data, filename, type) => {
    let csv = ''
    switch (type) {
      case 'contacts':
        csv = 'Name,Email,Phone,Subject,Message,Submitted At\n'
        csv += data
          .map(
            (item) =>
              `"${item.name || ''}","${item.email || ''}","${item.phone || ''}","${item.subject || ''}","${
                item.message ? item.message.replace(/"/g, '""') : ''
              }","${new Date(item.submittedAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}"`
          )
          .join('\n')
        break
      case 'newsletters':
        csv = 'Email,Subscribed At\n'
        csv += data
          .map(
            (item) =>
              `"${item.email || ''}","${new Date(item.subscribedAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}"`
          )
          .join('\n')
        break
      case 'program-applications':
        csv = 'Name,Email,Phone,Program,Submitted At\n'
        csv += data
          .map(
            (item) =>
              `"${item.name || ''}","${item.email || ''}","${item.phone || ''}","${item.program || ''}","${new Date(
                item.submittedAt
              ).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}"`
          )
          .join('\n')
        break
    }
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.setAttribute('href', url)
    a.setAttribute('download', `${filename}.csv`)
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const menuItems = [
    {
      id: "dashboard",
      name: "Dashboard",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"
          />
        </svg>
      ),
    },
    {
      id: "blogs",
      name: "Blog Posts",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      id: "contacts",
      name: "Contacts",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: "newsletters",
      name: "Newsletters",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
      ),
    },
    {
      id: "program-applications",
      name: "Program Applications",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-center h-16 px-4 bg-gradient-to-r from-purple-600 to-purple-700">
          <h1 className="text-xl font-bold text-white">Admin Panel</h1>
        </div>
        <nav className="mt-8">
          <div className="px-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id)
                  setSidebarOpen(false)
                }}
                className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                  activeSection === item.id
                    ? "bg-purple-100 text-purple-700 border-r-4 border-purple-600"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                {item.icon}
                <span className="ml-3 font-medium">{item.name}</span>
              </button>
            ))}
          </div>
        </nav>
        <div className="absolute bottom-0 w-full p-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span className="ml-3 font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h2 className="ml-4 text-2xl font-bold text-gray-900 capitalize">
                {activeSection === "dashboard" ? "Dashboard Overview" : activeSection.replace("-", " ")}
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">A</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
          <div className="container mx-auto px-6 py-8">
            {activeSection === "dashboard" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="flex items-center">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Total Posts</p>
                        <p className="text-2xl font-bold text-gray-900">{stats.totalBlogs}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="flex items-center">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Published</p>
                        <p className="text-2xl font-bold text-gray-900">{stats.publishedBlogs}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="flex items-center">
                      <div className="p-2 bg-yellow-100 rounded-lg">
                        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Drafts</p>
                        <p className="text-2xl font-bold text-gray-900">{stats.draftBlogs}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                    <div className="flex items-center">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-600">Total Views</p>
                        <p className="text-2xl font-bold text-gray-900">{stats.totalViews.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                      onClick={() => {
                        setActiveSection("blogs")
                        setSelectedBlog({})
                      }}
                      className="flex items-center p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors group"
                    >
                      <div className="p-2 bg-purple-600 rounded-lg group-hover:bg-purple-700 transition-colors">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-gray-900">Create New Post</p>
                        <p className="text-sm text-gray-600">Write a new blog post</p>
                      </div>
                    </button>
                    <button
                      onClick={() => setActiveSection("blogs")}
                      className="flex items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group"
                    >
                      <div className="p-2 bg-blue-600 rounded-lg group-hover:bg-blue-700 transition-colors">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-gray-900">Manage Posts</p>
                        <p className="text-sm text-gray-600">Edit existing posts</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "blogs" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Blog Management</h3>
                    <p className="text-gray-600">Create, edit, and manage your blog posts</p>
                  </div>
                  {selectedBlog === null && (
                    <button
                      onClick={() => {
                        setSelectedBlog({ status: "published" })
                      }}
                      className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      <span>Create New Blog</span>
                    </button>
                  )}
                </div>
                {selectedBlog === null && (
                  <>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="relative flex-1">
                        <input
                          type="text"
                          placeholder="Search by title or content..."
                          value={searchQuery}
                          onChange={(e) => handleSearch(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                        <svg
                          className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
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
                      </div>
                      <select
                        value={selectedCategory}
                        onChange={(e) => handleCategoryFilter(e.target.value)}
                        className="pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                      >
                        <option value="">All Categories</option>
                        {categories.map((category) => (
                          <option key={category._id || category.id} value={category.name}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <BlogList blogs={filteredBlogs} onEdit={setSelectedBlog} onDelete={handleDelete} />
                  </>
                )}
                {selectedBlog !== null && (
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="p-6">
                      <BlogForm
                        onSubmit={selectedBlog._id ? (data) => handleUpdate(selectedBlog._id, data) : handleCreate}
                        initialData={selectedBlog}
                        onCancel={() => setSelectedBlog(null)}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeSection === "contacts" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Contact Form Submissions</h3>
                    <p className="text-gray-600">View all contact form submissions</p>
                  </div>
                  <button
                    onClick={() => downloadCSV(contacts, "contacts", "contacts")}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    <span>Download CSV</span>
                  </button>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  {loading ? (
                    <p>Loading...</p>
                  ) : contacts.length === 0 ? (
                    <p>No contact submissions found.</p>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Email
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Subject
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Submitted At
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {contacts.map((contact) => (
                            <tr
                              key={contact._id}
                              onClick={() => setSelectedItem({ type: "contact", data: contact })}
                              className="cursor-pointer hover:bg-gray-50"
                            >
                              <td className="px-6 py-4 whitespace-nowrap">{contact.name}</td>
                              <td className="px-6 py-4 whitespace-nowrap">{contact.email}</td>
                              <td className="px-6 py-4 whitespace-nowrap">{contact.subject}</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {new Date(contact.submittedAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeSection === "newsletters" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Newsletter Subscriptions</h3>
                    <p className="text-gray-600">View all newsletter subscriptions</p>
                  </div>
                  <button
                    onClick={() => downloadCSV(newsletters, "newsletters", "newsletters")}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    <span>Download CSV</span>
                  </button>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  {loading ? (
                    <p>Loading...</p>
                  ) : newsletters.length === 0 ? (
                    <p>No newsletter subscriptions found.</p>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Email
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Subscribed At
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {newsletters.map((newsletter) => (
                            <tr
                              key={newsletter._id}
                              onClick={() => setSelectedItem({ type: "newsletter", data: newsletter })}
                              className="cursor-pointer hover:bg-gray-50"
                            >
                              <td className="px-6 py-4 whitespace-nowrap">{newsletter.email}</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {new Date(newsletter.subscribedAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeSection === "program-applications" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Program Applications</h3>
                    <p className="text-gray-600">View all program application submissions</p>
                  </div>
                  <button
                    onClick={() => downloadCSV(programApplications, "program-applications", "program-applications")}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    <span>Download CSV</span>
                  </button>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  {loading ? (
                    <p>Loading...</p>
                  ) : programApplications.length === 0 ? (
                    <p>No program applications found.</p>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Email
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Program
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Submitted At
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {programApplications.map((application) => (
                            <tr
                              key={application._id}
                              onClick={() => setSelectedItem({ type: "program-application", data: application })}
                              className="cursor-pointer hover:bg-gray-50"
                            >
                              <td className="px-6 py-4 whitespace-nowrap">{application.name}</td>
                              <td className="px-6 py-4 whitespace-nowrap">{application.email}</td>
                              <td className="px-6 py-4 whitespace-nowrap">{application.program}</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {new Date(application.submittedAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Modal for Detailed View */}
            {selectedItem && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                <div className="bg-white rounded-lg p-6 max-w-lg w-full mx-4 max-h-[80vh] overflow-y-auto">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {selectedItem.type === "contact" && "Contact Details"}
                    {selectedItem.type === "newsletter" && "Newsletter Subscription Details"}
                    {selectedItem.type === "program-application" && "Program Application Details"}
                  </h3>
                  <div className="space-y-4">
                    {selectedItem.type === "contact" && (
                      <>
                        <p>
                          <strong>Name:</strong> {selectedItem.data.name}
                        </p>
                        <p>
                          <strong>Email:</strong> {selectedItem.data.email}
                        </p>
                        <p>
                          <strong>Phone:</strong> {selectedItem.data.phone || "N/A"}
                        </p>
                        <p>
                          <strong>Subject:</strong> {selectedItem.data.subject}
                        </p>
                        <p>
                          <strong>Message:</strong>
                        </p>
                        <div className="whitespace-pre-line bg-gray-50 p-3 rounded-lg">
                          {selectedItem.data.message || "N/A"}
                        </div>
                        <p>
                          <strong>Submitted At:</strong>{" "}
                          {new Date(selectedItem.data.submittedAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
                        </p>
                      </>
                    )}
                    {selectedItem.type === "newsletter" && (
                      <>
                        <p>
                          <strong>Email:</strong> {selectedItem.data.email}
                        </p>
                        <p>
                          <strong>Subscribed At:</strong>{" "}
                          {new Date(selectedItem.data.submittedAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
                        </p>
                      </>
                    )}
                    {selectedItem.type === "program-application" && (
                      <>
                        <p>
                          <strong>Name:</strong> {selectedItem.data.name}
                        </p>
                        <p>
                          <strong>Email:</strong> {selectedItem.data.email}
                        </p>
                        <p>
                          <strong>Phone:</strong> {selectedItem.data.phone}
                        </p>
                        <p>
                          <strong>Program:</strong> {selectedItem.data.program}
                        </p>
                        <p>
                          <strong>Submitted At:</strong>{" "}
                          {new Date(selectedItem.data.submittedAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
                        </p>
                      </>
                    )}
                  </div>
                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  )
}

export default AdminPanel