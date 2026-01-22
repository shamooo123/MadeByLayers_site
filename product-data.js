// product-data.js
// This is your "Database". The Store Page reads this to show items.

window.MBL_PRODUCTS = [
    {
        id: "valentines-set",
        title: "Valentines Cookie Cutter Set (3pc)",
        price: "£12.99",
        category: "Cookie Cutters",
        image: "./images/valentines-set-main.jpg",
        
        // --- THIS IS WHERE YOUR EBAY LINK GOES ---
        link: "https://www.ebay.co.uk/itm/206015245594", 
        // ----------------------------------------
        
        badge: "SEASONAL"
    },
    {
        id: "vehicle-set",
        title: "Vehicle Cookie Cutter Set (6pc)",
        price: "£12.99",
        category: "Cookie Cutters",
        image: "./images/vehicle-set-main.jpg",
        link: "product.html", // You can link to your own detail page OR eBay
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
];
