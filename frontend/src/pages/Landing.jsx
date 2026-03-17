import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, TrendingUp, Users, Award, MapPin, Calendar, Truck, ShoppingCart, Leaf, CheckCircle, Star } from 'lucide-react'

const Landing = () => {
    const [prices, setPrices] = useState([])
    const [stats, setStats] = useState([
        { icon: Users, value: '12,000+', label: 'Farmers' },
        { icon: TrendingUp, value: '₹2.4Cr', label: 'Transactions' },
        { icon: Award, value: '340+', label: 'Clusters Formed' },
    ])

    const [testimonials] = useState([
        {
            name: 'Rameshbhai Patel',
            village: 'Vijapur, Gujarat',
            quote: 'AgriLink helped me sell my tomato harvest directly to buyers at better prices. No more middlemen!',
            rating: 5,
        },
        {
            name: 'Kamleshbhai Sharma',
            village: 'Rajkot, Gujarat',
            quote: 'As an agent, I can now manage 50+ farmers efficiently and ensure they get fair prices for their crops.',
            rating: 5,
        },
        {
            name: 'Bharat Supermart',
            village: 'Ahmedabad',
            quote: 'Fresh produce directly from farms. Our customers love the quality and we save on costs.',
            rating: 5,
        },
    ])

    const howItWorks = [
        {
            step: 1,
            icon: Leaf,
            title: 'Farmer Lists Crop',
            description: 'Farmers list their harvest with quantity, quality, and expected price on the platform.',
        },
        {
            step: 2,
            icon: Users,
            title: 'System Clusters',
            description: 'Our AI groups nearby farmers with similar crops to create bulk clusters for better deals.',
        },
        {
            step: 3,
            icon: ShoppingCart,
            title: 'Buyer Purchases',
            description: 'Buyers browse clusters and purchase directly from farmers at transparent prices.',
        },
        {
            step: 4,
            icon: Truck,
            title: 'Transport Delivers',
            description: 'Verified transporters pick up and deliver fresh produce to buyers.',
        },
    ]

    // Mock mandi prices for ticker
    useEffect(() => {
        setPrices([
            { crop: 'Tomato', price: '₹25/kg', change: '+5%' },
            { crop: 'Onion', price: '₹18/kg', change: '-2%' },
            { crop: 'Potato', price: '₹15/kg', change: '+1%' },
            { crop: 'Wheat', price: '₹2,200/q', change: '+3%' },
            { crop: 'Rice', price: '₹2,800/q', change: '+2%' },
            { crop: 'Cotton', price: '₹6,500/q', change: '+8%' },
            { crop: 'Soybean', price: '₹4,800/q', change: '-1%' },
            { crop: 'Maize', price: '₹1,900/q', change: '+4%' },
        ])
    }, [])

    return (
        <div className="min-h-screen bg-white pt-16">

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                    <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-16 relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                                Trusted by 12,000+ Farmers
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                                Connecting Farmers
                                <span className="text-agri-primary block">Directly With Buyers</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                                Eliminate middlemen, get better prices, and ensure fair trade.
                                AgriLink brings farmers and buyers together on one transparent platform.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link
                                    to="/marketplace"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-agri-primary text-white font-semibold rounded-lg hover:bg-agri-dark transition-colors"
                                >
                                    Explore Marketplace
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                                <Link
                                    to="/register"
                                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-agri-primary text-agri-primary font-semibold rounded-lg hover:bg-agri-primary hover:text-white transition-colors"
                                >
                                    Register as Farmer
                                </Link>
                            </div>
                        </div>

                        {/* Right Content - Illustration */}
                        <div className="hidden lg:block relative">
                            <div className="relative">
                                {/* Farm to Table Illustration */}
                                <div className="flex items-center justify-center">
                                    <div className="flex items-center space-x-8">
                                        {/* Farmer */}
                                        <div className="w-32 h-32 bg-green-100 rounded-2xl flex flex-col items-center justify-center border-2 border-green-200">
                                            <Leaf className="w-12 h-12 text-green-600 mb-2" />
                                            <span className="text-sm font-semibold text-green-800">Farmer</span>
                                        </div>
                                        {/* Arrow */}
                                        <ArrowRight className="w-8 h-8 text-gray-400" />
                                        {/* Platform */}
                                        <div className="w-40 h-40 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex flex-col items-center justify-center shadow-xl">
                                            <span className="text-white font-bold text-xl">AgriLink</span>
                                            <span className="text-green-100 text-xs">Platform</span>
                                        </div>
                                        {/* Arrow */}
                                        <ArrowRight className="w-8 h-8 text-gray-400" />
                                        {/* Buyer */}
                                        <div className="w-32 h-32 bg-orange-100 rounded-2xl flex flex-col items-center justify-center border-2 border-orange-200">
                                            <ShoppingCart className="w-12 h-12 text-orange-600 mb-2" />
                                            <span className="text-sm font-semibold text-orange-800">Buyer</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Cards */}
                                <div className="absolute top-0 -left-8 bg-white p-4 rounded-xl shadow-lg animate-bounce" style={{ animationDuration: '2s' }}>
                                    <div className="flex items-center space-x-2">
                                        <TrendingUp className="w-5 h-5 text-green-500" />
                                        <span className="font-semibold">+30% Profit</span>
                                    </div>
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg animate-bounce" style={{ animationDuration: '2s' }}>
                                    <div className="flex items-center space-x-2">
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                        <span className="font-semibold">Direct Sale</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-agri-dark py-8">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="flex items-center justify-center mb-2">
                                    <stat.icon className="w-8 h-8 text-green-400" />
                                </div>
                                <p className="text-3xl font-bold text-white">{stat.value}</p>
                                <p className="text-green-200">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mandi Price Ticker */}
            <section className="bg-gray-100 py-4 overflow-hidden">
                <div className="flex animate-marquee">
                    {[...prices, ...prices, ...prices, ...prices].map((item, index) => (
                        <div key={index} className="flex items-center space-x-2 px-6 whitespace-nowrap">
                            <span className="font-semibold text-gray-800">{item.crop}</span>
                            <span className="text-gray-600">{item.price}</span>
                            <span className={`text-sm ${item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                                {item.change}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our platform connects farmers directly with buyers through a streamlined four-step process
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {howItWorks.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-agri-primary transition-colors group">
                                    <div className="w-14 h-14 bg-agri-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 group-hover:scale-110 transition-transform">
                                        {step.step}
                                    </div>
                                    <step.icon className="w-10 h-10 text-agri-primary mb-4" />
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-gray-600 text-sm">{step.description}</p>
                                </div>
                                {index < howItWorks.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                                        <ArrowRight className="w-6 h-6 text-gray-300" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Join thousands of satisfied farmers and buyers across India
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-md">
                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                        <span className="text-green-600 font-bold">{testimonial.name[0]}</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                        <p className="text-sm text-gray-500 flex items-center">
                                            <MapPin className="w-3 h-3 mr-1" />
                                            {testimonial.village}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-20 bg-gradient-to-r from-agri-primary to-green-600">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Grow Smarter?
                    </h2>
                    <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
                        Join AgriLink today and start getting fair prices for your crops.
                        No middlemen, just direct connections with buyers.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/register"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-agri-primary font-bold rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            Get Started Free
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                        <Link
                            to="/marketplace"
                            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-agri-primary transition-colors"
                        >
                            Browse Marketplace
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                About AgriLink
                            </h2>
                            <p className="text-gray-600 mb-6">
                                AgriLink is a digital platform designed to empower farmers by eliminating
                                middlemen and connecting them directly with buyers. Our mission is to ensure
                                fair prices for farmers and fresh produce for buyers.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-agri-primary mr-3" />
                                    <span>Direct farmer-buyer connections</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-agri-primary mr-3" />
                                    <span>Real-time mandi prices</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-agri-primary mr-3" />
                                    <span>Verified transporters</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle className="w-5 h-5 text-agri-primary mr-3" />
                                    <span>Weather alerts for farmers</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-green-50 rounded-2xl p-6 text-center">
                                <Calendar className="w-10 h-10 text-agri-primary mx-auto mb-3" />
                                <p className="text-2xl font-bold text-gray-900">2023</p>
                                <p className="text-gray-600">Founded</p>
                            </div>
                            <div className="bg-orange-50 rounded-2xl p-6 text-center">
                                <Users className="w-10 h-10 text-orange-500 mx-auto mb-3" />
                                <p className="text-2xl font-bold text-gray-900">50+</p>
                                <p className="text-gray-600">Team Members</p>
                            </div>
                            <div className="bg-blue-50 rounded-2xl p-6 text-center">
                                <MapPin className="w-10 h-10 text-blue-500 mx-auto mb-3" />
                                <p className="text-2xl font-bold text-gray-900">15</p>
                                <p className="text-gray-600">States</p>
                            </div>
                            <div className="bg-purple-50 rounded-2xl p-6 text-center">
                                <Award className="w-10 h-10 text-purple-500 mx-auto mb-3" />
                                <p className="text-2xl font-bold text-gray-900">4.8</p>
                                <p className="text-gray-600">Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                        <p className="text-gray-600">Have questions? We'd love to hear from you.</p>
                    </div>

                    <form className="bg-white rounded-2xl p-8 shadow-md">
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agri-primary"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agri-primary"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea
                                rows="4"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agri-primary"
                                placeholder="How can we help?"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-agri-primary text-white font-semibold rounded-lg hover:bg-agri-dark transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )

}

export default Landing
