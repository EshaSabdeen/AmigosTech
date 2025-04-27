// Define products array at the top
const products = [
    {
        id: 1,
        name: "Dell XPS Desktop 8960",
        price: "RM 11,399.99",
        category: "Desktop",
        description: "Best Mainstream Desktop for Most Buyers",
        specs: "i7-12700/ 16GB DDR5/ 512GB SSD + 1TB/GeForce RTX3060Ti/ Windows 11",
        image: "image/pc1.jpg"
    },
    {
        id: 2,
        name: "Acer Aspire TC-1775-UR11",
        price: "RM 2,245.99",
        category: "Desktop",
        description: "Best Budget Desktop for Most Buyers",
        specs: "i5-14400/ 8GB SDRAM/ 512GB SSD/ Intel UHD Graphics 730/ Windows 11",
        image: "image/pc2.jpg"
    },
    {
        id: 3,
        name: "MSI Codex R2",
        price: "RM 5,495.99",
        category: "Desktop",
        description: "Best Budget Gaming Desktop",
        specs: "i5-14400F/ 16GB DDR5/ 1TB SSD/ GeForce RTX 4060/ Windows 11",
        image: "image/pc3.jpg"
    },
    {
        id: 4,
        name: "Lenovo Legion Tower 7i Gen 8",
        price: "RM 16,245.99",
        category: "Desktop",
        description: "Best Midrange Gaming Desktop",
        specs: "i9-13900KF/ 16GB DDR5/ 2x 2TB SSD/ GeForce RTX 4080/ Windows 11",
        image: "image/pc4.jpg"
    },
    {
        id: 5,
        name: "Corsair One i500",
        price: "RM 17,995.99",
        category: "Desktop",
        description: "Best High-End Gaming Desktop",
        specs: "i9-14900/ 64GB DDR5/ 4TB SSD M.2/ GeForce RTX 4090/ Windows 11",
        image: "image/pc5.jpg"
    },
    {
        id: 6,
        name: "Apple Mac mini M4 Pro",
        price: "RM 6,495.99",
        category: "Desktop",
        description: "Best Mac Desktop for Most Buyers",
        specs: "Apple M4 (12-core) 28GB Memory/ 512GB SSD/ Apple M4 (16-core)",
        image: "image/pc6.jpg"
    },
    {
        id: 7,
        name: "HP Envy Move",
        price: "RM 4,595.99",
        category: "Desktop",
        description: "Best All-in-One Windows Desktop for Most Buyers",
        specs: "i5-1335U/ 16GB DDR5/ 1TB SSD M.2/ Intel Iris Xe Graphics/ Windows 11",
        image: "image/pc7.jpg"
    },
    {
        id: 8,
        name: "Lenovo ThinkCentre M90a Gen 5",
        price: "RM 5,565.99",
        category: "Desktop",
        description: "Best All-in-One Business Desktop",
        specs: "i5-13400/ 8GB DDR5/ 256GB SSD M.2/ Intel UHD Graphics 770/ Windows 11",
        image: "image/pc8.jpg"
    },
    {
        id: 9,
        name: "M4 MacBook Air 15\"",
        price: "RM 5,995.99",
        category: "Laptop",
        description: "Best overall MacBook",
        specs: "Apple M4/ 16GB/ 512GB SSD/ Apple M4(10-core)",
        image: "image/pc9.jpg"
    },
    {
        id: 10,
        name: "M4 MacBook Air 13\"",
        price: "RM 4,995.99",
        category: "Laptop",
        description: "Best laptop for students",
        specs: "Apple M4/ 16GB/ 256GB SSD/ Apple M4(8-core)",
        image: "image/pc10.jpg"
    },
    {
        id: 11,
        name: "Microsoft Surface Laptop 7",
        price: "RM 8,660.99",
        category: "Laptop",
        description: "Best Windows laptop",
        specs: "Snapdragon® X Plus/ 16GB DDR5/ 256GB SSD/ Rualcomm® Adreno™ GPU/ Windows 11",
        image: "image/pc11.jpg"
    },
    {
        id: 12,
        name: "Acer Aspire 14\" AI",
        price: "RM 3,750.99",
        category: "Laptop",
        description: "Best budget laptop",
        specs: "Intel® Core™ Ultra 7 258V/ 32GB DDR5/ 1TB NVMe SSD/ Intel® Arc Graphics 140V/ Windows 11",
        image: "image/pc12.jpg"
    },
    {
        id: 13,
        name: "Lenovo Yoga 7 14\" Gen 9",
        price: "RM 4,500.99",
        category: "Laptop",
        description: "Best 2-in-1 laptop",
        specs: "AMD Ryzen 7 8840HS/ 16GB DDR5/ 1TB SSD/ AMD Radeon 780M/ Windows 11",
        image: "image/pc13.jpg"
    },
    {
        id: 14,
        name: "Microsoft Surface Pro 11",
        price: "RM 4,800.99",
        category: "Laptop",
        description: "Best detachable 2-in-1 laptop",
        specs: "Snapdragon® X Elite (12 Core)/ 16GB DDR5/ 512GB SSD/ RQualcomm® Adreno™ GPU/ Windows 11",
        image: "image/pc14.jpg"
    },
    {
        id: 15,
        name: "Asus ROG Zephyrus G16",
        price: "RM 13,500.99",
        category: "Laptop",
        description: "Best gaming laptop",
        specs: "Ultra 7 Processor 155H/ 2x 8GB DDR5/ 2TB NVMe M.2 SSD/ GeForce RTX4050/ Windows 11",
        image: "image/pc15.jpg"
    },
    {
        id: 16,
        name: "Acer Predator Helios Neo 16",
        price: "RM 5,975.99",
        category: "Laptop",
        description: "Best cheap gaming laptop",
        specs: "i7-14700HX/ 16GB DDR5/ 1TB SSD/ GeForce RTX 4050 6GB/ Windows 11",
        image: "image/pc16.jpg"
    },
    {
        id: 17,
        name: "Dell UltraSharp 27 USB-C Hub Monitor",
        price: "RM 2, 475.99",
        category: "Monitor",
        description: "Best Productivity Monitor",
        specs: "27 inch/ 4K 3840 x 2160 at 60 Hz/ Height, pivot (rotation), swivel, tilt",
        image: "image/pc17.jpg"
    },
    {
        id: 18,
        name: "HP 24mh FHD Computer Monitor with 23.8",
        price: "RM 420.99",
        category: "Monitor",
        description: "Best Budget Home Office Monitor",
        specs: "24 inch/ 1080p Resolution/ Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing",
        image: "image/pc18.jpg"
    },
    {
        id: 19,
        name: "Alienware 32 4K QD-OLED Gaming Monitor",
        price: "RM 5, 220.99",
        category: "Monitor",
        description: "Best Gaming Monitor",
        specs: "32 inch/ 4k Resolution/ Curved panel, Dolby Vision and 240Hz refresh rate",
        image: "image/pc19.jpg"
    },
    {
        id: 20,
        name: "ASUS TUF Gaming 27 1440P Monitor",
        price: "RM 864.99",
        category: "Monitor",
        description: "Best Budget Gaming Monitor",
        specs: "27 inch/ 1440p Resolution/ Fast IPS, Extreme Low Motion Blur SYNC, G-SYNC Compatible, Freesync Premium, 130% sRGB, DisplayHDR 400",
        image: "image/pc20.jpg"
    },
    {
        id: 21,
        name: "HP E45c G5 DQHD",
        price: "RM 3, 276.99",
        category: "Monitor",
        description: "Best Ultrawide Monitor",
        specs: "45 inch/ Dual Quad HD/ Curved Screen LED Monitor - 32:9 - Black, Silver",
        image: "image/pc21.jpg"
    },
    {
        id: 22,
        name: "Razer Pro Type Ultra",
        price: "RM 459.99",
        category: "Keyboard",
        description: "Best Keyboard for Most Users",
        specs: "Wireless Mechanical Keyboard/ Silent, Linear Switches/ Ergonomic Design/ HyperSpeed Technology/ Connect up to 4 Devices/ Fully Programmable Keys and Smart Controls",
        image: "image/pc22.jpg"
    },
    {
        id: 23,
        name: "Logitech MX Keys S",
        price: "RM 499.99",
        category: "Keyboard",
        description: "Best Wireless Keyboard for Productivity",
        specs: "Wireless Keyboard/ Perfect Stroke Keys/ Smart Backlighting/ Multi-Device Connectivity/ USB-C Rechargeable/ Up to 10 Days Battery Life",
        image: "image/pc23.jpg"
    },
    {
        id: 24,
        name: "Razer BlackWidow V4 75%",
        price: "RM 456.99",
        category: "Keyboard",
        description: "Best Wired Gaming Keyboard",
        specs: "Mechanical Gaming Keyboard/ Hot Swappable Design/ Compact and Durable/ Orange Tactile Switches/ Chroma RGB/ Roller and Media Keys/ Wrist Rest Snap Tap",
        image: "image/pc24.jpg"
    },
    {
        id: 25,
        name: "HyperX Cloud Alpha Wireless Gaming Headset",
        price: "RM 759.00",
        category: "Headset",
        description: "Exceptional Battery Life and Immersive Audio",
        specs: "Over 300 hours battery life / DTS Headphone:X Spatial Audio / Dual Chamber 50mm Drivers / Detachable Noise-Cancelling Mic / Aluminum Frame / 2.4GHz Wireless Connectivity",
        image: "image/pc25.jpg"
    },
    {
        id: 26,
        name: "Logitech G915 X LIGHTSPEED Wireless Mechanical Gaming Keyboard",
        price: "RM 1,099.00",
        category: "Keyboard",
        description: "Ultra-Thin Wireless Gaming Keyboard with Tri-Mode Connectivity",
        specs: "Low-profile GL mechanical switches / Tri-mode connectivity (2.4GHz LIGHTSPEED, Bluetooth, USB-C wired) / LIGHTSYNC RGB lighting / Double-shot PBT keycaps / Brushed aluminum top plate / 9 programmable G-keys / Up to 800 hours battery life (RGB off)",
        image: "image/pc26.jpg"
    },
    {
        id: 27,
        name: "Logitech G Pro X Superlight Wireless Gaming Mouse",
        price: "RM 599.00",
        category: "Mouse",
        description: "Ultra-Lightweight Wireless Gaming Mouse for Competitive Play",
        specs: "LIGHTSPEED wireless technology / HERO 25K sensor (100–25,600 DPI) / 5 programmable buttons / Ultra-lightweight design (&lt;63g) / Up to 70 hours battery life / PTFE feet for smooth glide / Powerplay compatible / Micro USB charging",
        image: "image/pc27.jpg"
    },
    {
        id: 28,
        name: "Logitech G502 X Plus Wireless RGB Gaming Mouse",
        price: "RM 733.00",
        category: "Mouse",
        description: "High-Performance Wireless Gaming Mouse with Customizable RGB",
        specs: "LIGHTFORCE hybrid optical-mechanical switches / HERO 25K sensor (25,600 DPI) / LIGHTSPEED wireless &amp; USB-C wired connectivity / 13 programmable controls / 8-zone LIGHTSYNC RGB lighting / Dual-mode scroll wheel / Adjustable DPI-shift button / Up to 130 hours battery life (RGB off), 37 hours (RGB on) / POWERPLAY compatible / 106g weight",
        image: "image/pc28.jpg"
    },
    {
        id: 29,
        name: "SteelSeries Arctis Nova 5 Wireless Gaming Headset",
        price: "RM 699.00",
        category: "Headset",
        description: "Versatile Wireless Gaming Headset with 60-Hour Battery Life",
        specs: "Dual wireless connectivity (2.4GHz &amp; Bluetooth 5.3) / 60-hour battery life / Quick-Switch button for seamless toggling / 40mm neodymium drivers / 100+ game-specific audio presets via companion app / Retractable ClearCast Gen 2.X microphone / USB-C multi-platform dongle / Compatible with PC, PS5, PS4, Nintendo Switch, and mobile devices",
        image: "image/pc29.jpg"
    },
    {
        id: 30,
        name: "SteelSeries Arctis Nova Pro Wireless Gaming Headset",
        price: "RM 1,899.00",
        category: "Headset",
        description: "Premium Wireless Gaming Headset with Dual Audio Streams and Active Noise Cancellation",
        specs: "Dual Wireless Connectivity (2.4GHz &amp; Bluetooth 5.0) / Active Noise Cancellation / Infinity Power System with Hot-Swappable Dual Batteries / 40mm Neodymium Drivers / 10Hz–22kHz Frequency Response / Retractable ClearCast Gen 2 Microphone / Dual USB-C Base Station with OLED Display / 360° Spatial Audio / Compatible with PC, PlayStation 5, PlayStation 4, Nintendo Switch, and Mobile Devices",
        image: "image/pc30.jpg"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    // Theme Switcher
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const navLinks = document.querySelectorAll('.nav-link');
    
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    if (savedTheme === 'dark') {
        enableDarkTheme();
    } else {
        enableLightTheme();
    }
    
    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('dark-theme')) {
            enableLightTheme();
        } else {
            enableDarkTheme();
        }
    });
    
    function enableDarkTheme() {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        localStorage.setItem('theme', 'dark');
    }
    
    function enableLightTheme() {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        localStorage.setItem('theme', 'light');
    }
    
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        const newColorScheme = e.matches ? 'dark' : 'light';
        if (newColorScheme === 'dark') {
            enableDarkTheme();
        } else {
            enableLightTheme();
        }
    });

    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Products and Cart
    const productsContainer = document.getElementById('productsContainer');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const resetButton = document.getElementById('resetButton');
    const categoryFilter = document.getElementById('categoryFilter');
    const productModalElement = document.getElementById('productModal');
    const productModal = productModalElement ? new bootstrap.Modal(productModalElement) : null;
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    let currentCategory = 'all';
    let currentSearchTerm = '';
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Initialize cart display based on current page
    if (window.location.pathname.includes('cart.html')) {
        displayCart();
    } else if (productsContainer) {
        displayProducts(products);
    }

    // Cart Display
    function displayCart() {
        if (!cartItems) {
            console.error('Cart items container not found');
            return;
        }
        
        // Get cart from localStorage
        cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<div class="text-center p-4"><p>Your cart is empty</p></div>';
            return;
        }

        let cartHTML = '';
        let subtotal = 0;

        cart.forEach((item, index) => {
            const price = parsePrice(item.price);
            const itemTotal = price * (item.quantity || 1);
            subtotal += itemTotal;

            cartHTML += `
                <div class="card mb-3">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <h5 class="card-title">${item.name}</h5>
                                <p class="card-text">${item.price}</p>
                            </div>
                            <div class="col-md-3">
                                <div class="input-group">
                                    <button class="btn btn-outline-secondary" onclick="updateQuantity(${item.id}, ${(item.quantity || 1) - 1})">-</button>
                                    <input type="text" class="form-control text-center" value="${item.quantity || 1}" readonly>
                                    <button class="btn btn-outline-secondary" onclick="updateQuantity(${item.id}, ${(item.quantity || 1) + 1})">+</button>
                                </div>
                            </div>
                            <div class="col-md-3 text-end">
                                <p class="card-text">RM ${itemTotal.toFixed(2)}</p>
                                <button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        cartItems.innerHTML = cartHTML;
        
        // Update summary
        const tax = subtotal * 0.06;
        const total = subtotal + tax;
        
        if (document.getElementById('cartSubtotal')) {
            document.getElementById('cartSubtotal').textContent = `RM ${subtotal.toFixed(2)}`;
        }
        if (document.getElementById('cartTax')) {
            document.getElementById('cartTax').textContent = `RM ${tax.toFixed(2)}`;
        }
        if (document.getElementById('cartTotal')) {
            document.getElementById('cartTotal').textContent = `RM ${total.toFixed(2)}`;
        }
    }

    // Make functions available globally
    window.updateQuantity = function(productId, newQuantity) {
        if (newQuantity < 1) {
            removeFromCart(productId);
            return;
        }
        
        const index = cart.findIndex(item => item.id === productId);
        if (index !== -1) {
            cart[index].quantity = newQuantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            displayCart();
        } else {
            console.error('Product not found in cart:', productId);
        }
    };

    window.removeFromCart = function(productId) {
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    };

    // Update cart icon
    function updateCartIcon() {
        const cartIcon = document.querySelector('.nav-link[href="cart.html"]');
        if (cartIcon) {
            const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
            if (totalItems > 0) {
                cartIcon.innerHTML = `<i class="fas fa-shopping-cart"></i> <span class="badge bg-danger">${totalItems}</span>`;
            } else {
                cartIcon.innerHTML = `<i class="fas fa-shopping-cart"></i>`;
            }
        }
    }

    // Initialize cart icon
    updateCartIcon();
    
    // Display products when page loads
    if (productsContainer) {
        displayProducts(products);
    }
    
    // Search Dropdown
    const searchDropdown = document.createElement('div');
    searchDropdown.className = 'search-dropdown';
    searchDropdown.style.display = 'none';
    searchDropdown.style.position = 'absolute';
    searchDropdown.style.width = '100%';
    searchDropdown.style.maxHeight = '200px';
    searchDropdown.style.overflowY = 'auto';
    searchDropdown.style.backgroundColor = 'white';
    searchDropdown.style.border = '1px solid #ddd';
    searchDropdown.style.borderRadius = '4px';
    searchDropdown.style.zIndex = '1000';
    searchDropdown.style.top = '100%';
    searchDropdown.style.marginTop = '5px';
    searchInput.parentElement.style.position = 'relative';
    searchInput.parentElement.appendChild(searchDropdown);

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.trim().toLowerCase();
        if (searchTerm.length > 0) {
            const filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm) || 
                product.description.toLowerCase().includes(searchTerm)
            );
            
            searchDropdown.innerHTML = '';
            if (filteredProducts.length > 0) {
                filteredProducts.forEach(product => {
                    const item = document.createElement('div');
                    item.className = 'search-item p-2';
                    item.style.cursor = 'pointer';
                    item.style.borderBottom = '1px solid #eee';
                    item.innerHTML = `
                        <div class="d-flex justify-content-between">
                            <span>${product.name}</span>
                            <span class="text-muted">${product.price}</span>
                        </div>
                    `;
                    item.addEventListener('click', () => {
                        searchInput.value = product.name;
                        searchDropdown.style.display = 'none';
                        currentSearchTerm = product.name.toLowerCase();
                        filterProducts();
                    });
                    searchDropdown.appendChild(item);
                });
                searchDropdown.style.display = 'block';
            } else {
                searchDropdown.innerHTML = '<div class="p-2 text-muted">No matching products found</div>';
                searchDropdown.style.display = 'block';
            }
        } else {
            searchDropdown.style.display = 'none';
        }
    });

    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
            searchDropdown.style.display = 'none';
        }
    });

    categoryFilter.addEventListener('change', function() {
        currentCategory = this.value;
        filterProducts();
    });

    searchButton.addEventListener('click', function() {
        currentSearchTerm = searchInput.value.trim().toLowerCase();
        filterProducts();
    });

    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            currentSearchTerm = searchInput.value.trim().toLowerCase();
            filterProducts();
        }
    });

    resetButton.addEventListener('click', function() {
        searchInput.value = '';
        currentSearchTerm = '';
        filterProducts();
        searchDropdown.style.display = 'none';
    });

    if (cartItems) {
        cartItems.addEventListener('click', function(e) {
            if (e.target.classList.contains('remove-from-cart')) {
                try {
                    const index = parseInt(e.target.dataset.index);
                    if (!isNaN(index) && index >= 0 && index < cart.length) {
                        cart.splice(index, 1);
                        localStorage.setItem('cart', JSON.stringify(cart));
                        updateCart();
                    }
                } catch (error) {
                    console.error('Error removing item from cart:', error);
                }
            }
        });
    }

    // Functions
    function parsePrice(priceStr) {
        try {
            return parseFloat(priceStr.replace('RM ', '').replace(',', ''));
        } catch (error) {
            console.error('Error parsing price:', error);
            return 0;
        }
    }

    function filterProducts() {
        let filteredProducts = products;

        if (currentCategory !== 'all') {
            filteredProducts = filteredProducts.filter(product => 
                product.category.toLowerCase() === currentCategory.toLowerCase()
            );
        }

        if (currentSearchTerm) {
            filteredProducts = filteredProducts.filter(product => 
                product.name.toLowerCase().includes(currentSearchTerm) || 
                product.description.toLowerCase().includes(currentSearchTerm)
            );
        }
        
        displayProducts(filteredProducts);
    }

    function displayProducts(productsToDisplay) {
        if (!productsContainer) {
            console.error('Products container not found!');
            return;
        }
        
        productsContainer.innerHTML = '';
        
        if (productsToDisplay.length === 0) {
            productsContainer.innerHTML = `
                <div class="col-12 text-center py-5">
                    <i class="fas fa-search fa-3x mb-3 text-muted"></i>
                    <h4>No products found</h4>
                    <p class="text-muted">Try adjusting your search or filter criteria</p>
                </div>
            `;
            return;
        }

        productsToDisplay.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'col-md-6 col-lg-4 mb-4';
            productCard.innerHTML = `
                <div class="card product-card h-100">
                    <span class="badge bg-primary category-badge">${product.category}</span>
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <div class="text-center">
                            <button class="btn btn-primary buy-button" data-product-id="${product.id}">
                                <i class="fas fa-shopping-cart me-2"></i>Buy
                            </button>
                        </div>
                    </div>
                </div>
            `;
            productsContainer.appendChild(productCard);
        });

        document.querySelectorAll('.buy-button').forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.dataset.productId;
                const product = products.find(p => p.id === parseInt(productId));
                if (product) {
                    showProductDetails(product);
                }
            });
        });
    }

    function showProductDetails(product) {
        if (!productModal) {
            console.error('Product modal not initialized');
            return;
        }

        const modalElements = {
            name: document.getElementById('modalProductName'),
            price: document.getElementById('modalProductPrice'),
            description: document.getElementById('modalProductDescription'),
            category: document.getElementById('modalProductCategory'),
            id: document.getElementById('modalProductId'),
            image: document.getElementById('modalProductImage')
        };

        // Check if all required elements exist
        for (const [key, element] of Object.entries(modalElements)) {
            if (!element) {
                console.error(`Modal element '${key}' not found`);
                return;
            }
        }

        // Update modal content
        modalElements.name.textContent = product.name;
        modalElements.price.textContent = product.price;
        modalElements.description.textContent = product.description;
        modalElements.category.textContent = product.category;
        modalElements.id.textContent = product.id;
        modalElements.image.src = product.image;
        modalElements.image.alt = product.name;
        
        const addToCartBtn = document.querySelector('#productModal .btn-primary');
        if (addToCartBtn) {
            addToCartBtn.onclick = function() {
                // Check if product already exists in cart
                const existingItem = cart.find(item => item.id === product.id);
                if (existingItem) {
                    existingItem.quantity = (existingItem.quantity || 1) + 1;
                } else {
                    cart.push({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        quantity: 1
                    });
                }
                localStorage.setItem('cart', JSON.stringify(cart));
                
                // Update cart displays
                displayCart();
                updateCartIcon();

                productModal.hide();
            };
        }
        
        const existingSpecs = document.querySelector('.modal-specs');
        if (existingSpecs) {
            existingSpecs.remove();
        }
        
        const specsElement = document.createElement('p');
        specsElement.className = 'mb-4 modal-specs';
        specsElement.innerHTML = `<strong>Specifications:</strong> ${product.specs}`;
        modalElements.description.after(specsElement);
        
        productModal.show();
    }
});