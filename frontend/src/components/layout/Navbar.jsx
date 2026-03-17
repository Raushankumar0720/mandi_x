import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Menu, X, Leaf } from 'lucide-react'
import { useAuthStore } from '../../store/authStore'
import AuthModal from '../auth/AuthModal'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)
    const { user, isAuthenticated, logout } = useAuthStore()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false)
    }, [location.pathname])

    // Handle custom events for modals
    useEffect(() => {
        const handleOpenRegister = () => {
            setShowRegister(true)
            setShowLogin(false)
        }
        const handleOpenLogin = () => {
            setShowLogin(true)
            setShowRegister(false)
        }

        window.addEventListener('openRegister', handleOpenRegister)
        window.addEventListener('openLogin', handleOpenLogin)

        return () => {
            window.removeEventListener('openRegister', handleOpenRegister)
            window.removeEventListener('openLogin', handleOpenLogin)
        }
    }, [])

    const handleLogout = () => {
        logout()
        navigate('/')
        window.location.reload()
    }

    // Handle section scroll - only on landing page
    const scrollToSection = (sectionId) => {
        // Close mobile menu first
        setIsOpen(false)

        if (location.pathname !== '/') {
            navigate('/')
            setTimeout(() => {
                window.scrollTo(0, 0)
                const element = document.getElementById(sectionId)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                }
            }, 100)
        } else {
            window.scrollTo(0, 0)
            const element = document.getElementById(sectionId)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'
                }`}>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link
                            to="/"
                            onClick={() => window.scrollTo(0, 0)}
                            className="flex items-center space-x-2"
                        >
                            <div className="w-10 h-10 bg-agri-primary rounded-full flex items-center justify-center">
                                <Leaf className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-agri-dark">
                                AgriLink
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link
                                to="/"
                                onClick={() => window.scrollTo(0, 0)}
                                className="text-gray-700 hover:text-agri-primary font-medium transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                to="/marketplace"
                                onClick={() => window.scrollTo(0, 0)}
                                className="text-gray-700 hover:text-agri-primary font-medium transition-colors"
                            >
                                Marketplace
                            </Link>
                            <button
                                onClick={() => scrollToSection('how-it-works')}
                                className="text-gray-700 hover:text-agri-primary font-medium transition-colors bg-transparent border-none cursor-pointer"
                            >
                                How It Works
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className="text-gray-700 hover:text-agri-primary font-medium transition-colors bg-transparent border-none cursor-pointer"
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="text-gray-700 hover:text-agri-primary font-medium transition-colors bg-transparent border-none cursor-pointer"
                            >
                                Contact
                            </button>
                        </div>

                        {/* Auth Buttons */}
                        <div className="hidden md:flex items-center space-x-4">
                            {isAuthenticated ? (
                                <div className="flex items-center space-x-4">
                                    <Link
                                        to={`/dashboard/${user?.role}`}
                                        className="text-gray-700 hover:text-agri-primary font-medium"
                                    >
                                        Dashboard
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="px-4 py-2 text-agri-primary border border-agri-primary rounded-lg hover:bg-agri-primary hover:text-white transition-colors"
                                    >
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <button
                                        onClick={() => setShowLogin(true)}
                                        className="px-4 py-2 text-gray-700 hover:text-agri-primary font-medium"
                                    >
                                        Login
                                    </button>
                                    <button
                                        onClick={() => setShowRegister(true)}
                                        className="px-4 py-2 bg-agri-primary text-white rounded-lg hover:bg-agri-dark transition-colors"
                                    >
                                        Sign Up
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? (
                                <X className="w-6 h-6 text-gray-700" />
                            ) : (
                                <Menu className="w-6 h-6 text-gray-700" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="md:hidden mt-4 pb-4">
                            <div className="flex flex-col space-y-4">
                                <Link
                                    to="/"
                                    onClick={() => { window.scrollTo(0, 0); setIsOpen(false); }}
                                    className="text-gray-700 hover:text-agri-primary font-medium py-2"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/marketplace"
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-700 hover:text-agri-primary font-medium py-2"
                                >
                                    Marketplace
                                </Link>
                                <button
                                    onClick={() => scrollToSection('how-it-works')}
                                    className="text-left text-gray-700 hover:text-agri-primary font-medium py-2 bg-transparent border-none cursor-pointer"
                                >
                                    How It Works
                                </button>
                                <button
                                    onClick={() => scrollToSection('about')}
                                    className="text-left text-gray-700 hover:text-agri-primary font-medium py-2 bg-transparent border-none cursor-pointer"
                                >
                                    About
                                </button>
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="text-left text-gray-700 hover:text-agri-primary font-medium py-2 bg-transparent border-none cursor-pointer"
                                >
                                    Contact
                                </button>
                                <div className="flex flex-col space-y-2 pt-4 border-t">
                                    {isAuthenticated ? (
                                        <>
                                            <Link
                                                to={`/dashboard/${user?.role}`}
                                                className="px-4 py-2 text-center text-gray-700 hover:text-agri-primary font-medium"
                                            >
                                                Dashboard
                                            </Link>
                                            <button
                                                onClick={handleLogout}
                                                className="px-4 py-2 text-center text-agri-primary border border-agri-primary rounded-lg"
                                            >
                                                Logout
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                onClick={() => setShowLogin(true)}
                                                className="px-4 py-2 text-center text-gray-700 hover:text-agri-primary font-medium"
                                            >
                                                Login
                                            </button>
                                            <button
                                                onClick={() => setShowRegister(true)}
                                                className="px-4 py-2 text-center bg-agri-primary text-white rounded-lg"
                                            >
                                                Sign Up
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Modal */}
            <AuthModal
                isOpen={showLogin || showRegister}
                onClose={() => { setShowLogin(false); setShowRegister(false); }}
                initialMode={showRegister ? 'register' : 'login'}
            />
        </>
    )
}

export default Navbar
