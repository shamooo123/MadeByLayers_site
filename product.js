// This file acts as your "Database". 
// To add a new product, just copy one of the blocks { ... } and paste it at the top.

window.MBL_PRODUCTS = [
    {
        id: "valentines-set",
        title: "Valentines Cookie Cutter Set (3pc)",
        price: "£12.99",
        category: "Cookie Cutters",
        image: "./images/valentines-set-main.jpg",
        link: "https://www.ebay.co.uk/itm/206015245594", // The direct eBay link
        badge: "SEASONAL"
    },
    {
        id: "vehicle-set",
        title: "Vehicle Cookie Cutter Set (6pc)",
        price: "£12.99",
        category: "Cookie Cutters",
        image: "./images/vehicle-set-main.jpg",
        link: "product.html", // Keep this one internal if you want to use the detailed product page we made
        badge: "BESTSELLER"
    },
    {
        id: "custom-design",
        title: "Custom Design Request",
        price: "Varies",
        category: "Services",
        image: "./images/custom-design-request.jpg",
        link: "https://www.ebay.co.uk/usr/madebylayers",
        badge: "POPULAR"
    },
    {
        id: "macro-pad",
        title: "Modular Macro Pad (Waitlist)",
        price: "Coming Soon",
        category: "Tech",
        image: "./images/kickstarter-prototype.jpg",
        link: "kickstarter.html",
        badge: "KICKSTARTER"
    }
    // Add more eBay items here...
];
