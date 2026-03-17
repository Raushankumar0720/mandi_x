import { useState, useEffect } from 'react'
import { Search, Filter, X, Loader2 } from 'lucide-react'
import ClusterCard from '../components/marketplace/ClusterCard'
import Navbar from '../components/layout/Navbar'
import axios from 'axios'

const Marketplace = () => {
    const [clusters, setClusters] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchQuery, setSearchQuery] = useState('')
    const [filters, setFilters] = useState({
        cropName: '',
        district: '',
        state: '',
        minQty: '',
        maxPrice: '',
        sortBy: 'date',
    })
    const [showFilters, setShowFilters] = useState(false)

    // Mock data for demo
    const mockClusters = [
        {
            _id: '1',
            cropName: 'Tomato',
            totalQuantityKg: 2500,
            averagePricePerKg: 25,
            district: 'Rajkot',
            state: 'Gujarat',
            farmerCount: 5,
            harvestWindowStart: '2024-03-15',
            harvestWindowEnd: '2024-03-25',
            qualityGrade: 'A',
            status: 'open',
        },
        {
            _id: '2',
            cropName: 'Onion',
            totalQuantityKg: 4000,
            averagePricePerKg: 18,
            district: 'Ahmedabad',
            state: 'Gujarat',
            farmerCount: 8,
            harvestWindowStart: '2024-03-10',
            harvestWindowEnd: '2024-03-20',
            qualityGrade: 'A',
            status: 'open',
        },
        {
            _id: '3',
            cropName: 'Potato',
            totalQuantityKg: 6000,
            averagePricePerKg: 15,
            district: 'Bhavnagar',
            state: 'Gujarat',
            farmerCount: 10,
            harvestWindowStart: '2024-03-01',
            harvestWindowEnd: '2024-03-15',
            qualityGrade: 'B',
            status: 'open',
        },
        {
            _id: '4',
            cropName: 'Wheat',
            totalQuantityKg: 10000,
            averagePricePerKg: 22,
            district: 'Surat',
            state: 'Gujarat',
            farmerCount: 12,
            harvestWindowStart: '2024-04-01',
            harvestWindowEnd: '2024-04-15',
            qualityGrade: 'A',
            status: 'open',
        },
        {
            _id: '5',
            cropName: 'Cotton',
            totalQuantityKg: 3000,
            averagePricePerKg: 65,
            district: 'Mehsana',
            state: 'Gujarat',
            farmerCount: 6,
            harvestWindowStart: '2024-10-01',
            harvestWindowEnd: '2024-10-30',
            qualityGrade: 'A',
            status: 'open',
        },
        {
            _id: '6',
            cropName: 'Maize',
            totalQuantityKg: 5000,
            averagePricePerKg: 19,
            district: 'Patan',
            state: 'Gujarat',
            farmerCount: 7,
            harvestWindowStart: '2024-09-15',
            harvestWindowEnd: '2024-10-05',
            qualityGrade: 'B',
            status: 'open',
        },
    ]

    useEffect(() => {
        fetchClusters()
    }, [filters])

    const fetchClusters = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/marketplace`, {
                params: filters,
            })
            setClusters(response.data.data || [])
        } catch (error) {
            // Use mock data for demo
            let filtered = [...mockClusters]

            if (filters.cropName) {
                filtered = filtered.filter(c =>
                    c.cropName.toLowerCase().includes(filters.cropName.toLowerCase())
                )
            }
            if (filters.district) {
                filtered = filtered.filter(c =>
                    c.district.toLowerCase().includes(filters.district.toLowerCase())
                )
            }
            if (filters.state) {
                filtered = filtered.filter(c =>
                    c.state.toLowerCase().includes(filters.state.toLowerCase())
                )
            }
            if (filters.minQty) {
                filtered = filtered.filter(c => c.totalQuantityKg >= parseInt(filters.minQty))
            }
            if (filters.maxPrice) {
                filtered = filtered.filter(c => c.averagePricePerKg <= parseInt(filters.maxPrice))
            }

            // Sort
            if (filters.sortBy === 'price_asc') {
                filtered.sort((a, b) => a.averagePricePerKg - b.averagePricePerKg)
            } else if (filters.sortBy === 'price_desc') {
                filtered.sort((a, b) => b.averagePricePerKg - a.averagePricePerKg)
            } else if (filters.sortBy === 'quantity') {
                filtered.sort((a, b) => b.totalQuantityKg - a.totalQuantityKg)
            }

            setClusters(filtered)
        } finally {
            setLoading(false)
        }
    }

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }))
    }

    const clearFilters = () => {
        setFilters({
            cropName: '',
            district: '',
            state: '',
            minQty: '',
            maxPrice: '',
            sortBy: 'date',
        })
        setSearchQuery('')
    }

    const handleSearch = (e) => {
        setSearchQuery(e.target.value)
        setFilters(prev => ({ ...prev, cropName: e.target.value }))
    }

    const cropOptions = ['Tomato', 'Onion', 'Potato', 'Wheat', 'Rice', 'Cotton', 'Soybean', 'Maize', 'Groundnut', 'Chilli']
    const stateOptions = ['Gujarat', 'Maharashtra', 'Rajasthan', 'Madhya Pradesh', 'Uttar Pradesh', 'Punjab']

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Header */}
            <div className="bg-agri-dark text-white py-16 mt-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">AgriLink Marketplace</h1>
                    <p className="text-green-200 text-lg">Find fresh produce directly from farmers</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <div className={`lg:w-72 ${showFilters ? 'block' : 'hidden'} lg:block`}>
                        <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-semibold">Filters</h2>
                                <button
                                    onClick={clearFilters}
                                    className="text-sm text-agri-primary hover:underline"
                                >
                                    Clear All
                                </button>
                            </div>

                            <div className="space-y-4">
                                {/* Crop Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Crop Name</label>
                                    <select
                                        value={filters.cropName}
                                        onChange={(e) => handleFilterChange('cropName', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agri-primary"
                                    >
                                        <option value="">All Crops</option>
                                        {cropOptions.map(crop => (
                                            <option key={crop} value={crop}>{crop}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* District */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">District</label>
                                    <input
                                        type="text"
                                        value={filters.district}
                                        onChange={(e) => handleFilterChange('district', e.target.value)}
                                        placeholder="Enter district"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agri-primary"
                                    />
                                </div>

                                {/* State */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                                    <select
                                        value={filters.state}
                                        onChange={(e) => handleFilterChange('state', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agri-primary"
                                    >
                                        <option value="">All States</option>
                                        {stateOptions.map(state => (
                                            <option key={state} value={state}>{state}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Quantity Range */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Min Quantity (kg)</label>
                                    <input
                                        type="number"
                                        value={filters.minQty}
                                        onChange={(e) => handleFilterChange('minQty', e.target.value)}
                                        placeholder="e.g. 1000"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agri-primary"
                                    />
                                </div>

                                {/* Price Range */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Max Price (₹/kg)</label>
                                    <input
                                        type="number"
                                        value={filters.maxPrice}
                                        onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                                        placeholder="e.g. 30"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agri-primary"
                                    />
                                </div>

                                {/* Sort By */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
                                    <select
                                        value={filters.sortBy}
                                        onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agri-primary"
                                    >
                                        <option value="date">Newest First</option>
                                        <option value="price_asc">Price: Low to High</option>
                                        <option value="price_desc">Price: High to Low</option>
                                        <option value="quantity">Quantity: High to Low</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Search Bar */}
                        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
                            <div className="flex gap-4">
                                <div className="flex-1 relative">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={handleSearch}
                                        placeholder="Search crops..."
                                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agri-primary"
                                    />
                                </div>
                                <button
                                    onClick={() => setShowFilters(!showFilters)}
                                    className="lg:hidden px-4 py-3 border border-gray-300 rounded-lg flex items-center gap-2"
                                >
                                    <Filter className="w-5 h-5" />
                                    Filters
                                </button>
                            </div>
                        </div>

                        {/* Results Count */}
                        <div className="mb-4">
                            <p className="text-gray-600">
                                Showing <span className="font-semibold">{clusters.length}</span> clusters
                            </p>
                        </div>

                        {/* Loading State */}
                        {loading && (
                            <div className="flex items-center justify-center py-16">
                                <Loader2 className="w-10 h-10 text-agri-primary animate-spin" />
                            </div>
                        )}

                        {/* Empty State */}
                        {!loading && clusters.length === 0 && (
                            <div className="bg-white rounded-xl shadow-md p-16 text-center">
                                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Search className="w-10 h-10 text-gray-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">No clusters found</h3>
                                <p className="text-gray-500 mb-4">Try adjusting your filters or search query</p>
                                <button
                                    onClick={clearFilters}
                                    className="px-6 py-2 bg-agri-primary text-white rounded-lg hover:bg-agri-dark"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}

                        {/* Cluster Grid */}
                        {!loading && clusters.length > 0 && (
                            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {clusters.map(cluster => (
                                    <ClusterCard key={cluster._id} cluster={cluster} />
                                ))}
                            </div>
                        )}

                        {/* Pagination Placeholder */}
                        {!loading && clusters.length > 0 && (
                            <div className="mt-8 flex justify-center">
                                <div className="flex gap-2">
                                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50">
                                        Previous
                                    </button>
                                    <button className="px-4 py-2 bg-agri-primary text-white rounded-lg">
                                        1
                                    </button>
                                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50">
                                        Next
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Marketplace
