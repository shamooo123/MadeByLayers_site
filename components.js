const { useState, useEffect } = React;

// --- ICONS (No changes here) ---
const Icon = ({ path, size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        {path}
    </svg>
);

const Icons = {
    Menu: (props) => <Icon path={<><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></>} {...props} />,
    X: (props) => <Icon path={<><path d="M18 6 6 18"/><path d="m6 6 12 12"/></>} {...props} />,
    ArrowRight: (props) => <Icon path={<><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>} {...props} />,
    ShoppingBag: (props) => <Icon path={<><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></>} {...props} />,
    Rocket: (props) => <Icon path={<><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-9.56 1.5 1.5 0 0 1 1.53 0 22 22 0 0 1 2.5 12.56l-3-3"/><path d="M9 13l-4.7 4.7"/><path d="M11.2 15.2l3.5-3.5"/></>} {...props} />,
    Star: (props) => <Icon path={<><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></>} {...props} />,
    Layers: (props) => <Icon path={<><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></>} {...props} />,
    Instagram: (props) => <Icon path={<><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></>} {...props} />,
    Check: (props) => <Icon path={<><polyline points="20 6 9 17 4 12"/></>} {...props} />,
    Lock: (props) => <Icon path={<><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>} {...props} />,
    Mail: (props) => <Icon path={<><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></>} {...props} />,
};

// --- SHARED NAVBAR ---
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg border-b border-zinc-800' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <a href="index.html" className="w-10 h-10 bg-yellow-400 rounded-lg overflow-hidden flex items-center justify-center border-2 border-yellow-500 p-0.5">
                         {/* UPDATED LOGO PATH */}
                         <img src="./images/madebylayers_transparent.png" alt="Logo" className="w-full h-full object-contain" onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='block'}} />
                         <div className="hidden"><Icons.Layers className="text-black w-6 h-6" /></div>
                    </a>
                    <a href="index.html" className="text-2xl font-bold tracking-tighter text-white">
                        MadeBy<span className="text-yellow-400">Layers</span>
                    </a>
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="index.html#products" className="text-gray-300 hover:text-yellow-400 transition-colors text-sm font-medium tracking-wide">PRODUCTS</a>
                    <a href="kickstarter.html" className="text-yellow-400 font-bold hover:text-white transition-colors text-sm tracking-wide flex items-center gap-1">
                        <Icons.Rocket size={16} /> KICKSTARTER
                    </a>
                </div>

                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none">
                    {isOpen ? <Icons.X /> : <Icons.Menu />}
                </button>
            </div>
             {/* Mobile Menu */}
             {isOpen && (
                <div className="md:hidden bg-zinc-900 absolute top-full left-0 w-full border-b border-zinc-800 shadow-2xl animate-fade-in">
                    <div className="flex flex-col p-6 space-y-4">
                        <a href="index.html#products" className="text-white font-medium">Shop Products</a>
                        <a href="kickstarter.html" className="text-yellow-400 font-bold">Kickstarter</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

// --- SHARED FOOTER ---
const Footer = () => {
    return (
        <footer className="bg-zinc-950 pt-20 pb-10 border-t border-zinc-900">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12 mb-16">
                    <div className="col-span-1">
                        <h3 className="text-2xl font-bold text-white mb-4">MadeBy<span className="text-yellow-400">Layers</span></h3>
                        <p className="text-gray-400 mb-6 max-w-sm">
                            Bridging the gap between digital design and physical reality. Trusted by over 1,000 customers on eBay.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="https://www.ebay.co.uk/usr/madebylayers" target="_blank" className="p-2 bg-zinc-900 rounded-full hover:bg-yellow-400 hover:text-black transition-colors flex items-center gap-2 px-4 font-bold">
                                <Icons.ShoppingBag size={20} /> Visit eBay Store
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="text-white font-bold mb-6">Links</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><a href="index.html#products" className="hover:text-yellow-400 transition-colors">Shop</a></li>
                            <li><a href="kickstarter.html" className="text-yellow-400 font-bold">Kickstarter <span className="text-xs bg-yellow-400/20 px-1 rounded ml-1">NEW</span></a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
                    <p>&copy; 2026 MadeByLayers. All rights reserved.</p>
                    <p>Designed in the UK.</p>
                </div>
            </div>
        </footer>
    );
};

// Make components available globally
window.MBL = { Navbar, Footer, Icons, Icon };
