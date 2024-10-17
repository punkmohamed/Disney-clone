import headerLogo from '../assets/images/logo.svg'
const Footer = () => {
    // Custom colors matching Disney+ brand
    const colors = {
        black2: '#040714',
        nav: '#090b13',
        dark: '#121212'
    };



    return (
        <div className="mt-10 text-white" style={{ backgroundColor: colors.black2 }}>
            <footer style={{ backgroundColor: colors.nav }} className="py-16 pt-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        <div>
                            <h4 className="font-semibold mb-4">Company</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Careers</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">View</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Movies</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Series</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Originals</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Help</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Account</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Support Center</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Devices</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Legal</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Use</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Legal Notices</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8" style={{ borderColor: colors.black2 }}>
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="mb-4 md:mb-0">
                                <img src={headerLogo} alt="Disney+ Logo" className="h-8" />
                            </div>
                            <p className="text-gray-400 text-sm">
                                © 2024 Disney and its related entities. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;