  // All original JavaScript code remains exactly the same
        // Loading Bar Functionality
        const loadingBar = document.getElementById('loadingBar');
        
        // Function to show loading bar
        function showLoadingBar() {
            loadingBar.classList.add('active');
            
            // Hide the loading bar after animation completes
            setTimeout(() => {
                loadingBar.classList.remove('active');
            }, 1500);
        }
        
        // Add click event listener to the entire document
        document.addEventListener('click', function(e) {
            // Don't trigger for the loading bar itself
            if (e.target !== loadingBar) {
                showLoadingBar();
            }
        });

        // Enhanced Loading Animation
        window.addEventListener('load', function() {
            const loadingScreen = document.getElementById('loadingScreen');
            const loadingText = document.getElementById('loadingText');
            const text = loadingText.textContent;
            
            // Split text into letters for animation
            loadingText.innerHTML = '';
            for (let i = 0; i < text.length; i++) {
                const span = document.createElement('span');
                span.textContent = text[i];
                span.className = 'letter';
                span.style.animationDelay = `${i * 0.1}s`;
                loadingText.appendChild(span);
            }
            
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 1000);
            }, 3000);
            
            // NEW: Initialize benefits animation
            initBenefitsAnimation();
            
            // NEW: Initialize testimonials slider
            initTestimonialsSlider();
            
            // NEW: Initialize explore dropdown toggle
            initExploreDropdown();
        });

        // NEW: Explore Dropdown Toggle Functionality
        function initExploreDropdown() {
            const exploreDropdown = document.getElementById('exploreDropdown');
            const exploreBtn = document.getElementById('exploreBtn');
            const exploreIcon = document.getElementById('exploreIcon');
            
            exploreBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                exploreDropdown.classList.toggle('active');
                
                // Toggle icon between down and up
                if (exploreDropdown.classList.contains('active')) {
                    exploreIcon.classList.remove('fa-chevron-down');
                    exploreIcon.classList.add('fa-chevron-up');
                } else {
                    exploreIcon.classList.remove('fa-chevron-up');
                    exploreIcon.classList.add('fa-chevron-down');
                }
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', function() {
                exploreDropdown.classList.remove('active');
                exploreIcon.classList.remove('fa-chevron-up');
                exploreIcon.classList.add('fa-chevron-down');
            });
            
            // Prevent dropdown from closing when clicking inside
            exploreDropdown.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }

        // Dark/Light Mode Toggle
        const modeToggle = document.getElementById('modeToggle');
        const modeIcon = modeToggle.querySelector('i');
        
        modeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                modeIcon.classList.remove('fa-moon');
                modeIcon.classList.add('fa-sun');
            } else {
                modeIcon.classList.remove('fa-sun');
                modeIcon.classList.add('fa-moon');
            }
            
            // Add crazy animation
            this.classList.add('spin-animation');
            setTimeout(() => {
                this.classList.remove('spin-animation');
            }, 500);
        });

        // Mobile Menu Toggle
        const menuToggle = document.getElementById('menuToggle');
        const mobileNav = document.getElementById('mobileNav');
        const closeMenu = document.getElementById('closeMenu');
        
        menuToggle.addEventListener('click', function() {
            mobileNav.classList.add('active');
            this.classList.add('pulse-animation');
            setTimeout(() => {
                this.classList.remove('pulse-animation');
            }, 500);
        });
        
        closeMenu.addEventListener('click', function() {
            mobileNav.classList.remove('active');
        });

        // Filter Buttons
        const filterBrandBtn = document.getElementById('filterBrandBtn');
        const filterBodyBtn = document.getElementById('filterBodyBtn');
        const searchBtn = document.getElementById('searchBtn');
        const searchInput = document.getElementById('searchInput');
        
        const brandFilter = document.getElementById('brandFilter');
        const bodyFilter = document.getElementById('bodyFilter');
        
        const backFromBrands = document.getElementById('backFromBrands');
        const backFromBody = document.getElementById('backFromBody');
        
        // Show brand filter
        filterBrandBtn.addEventListener('click', function() {
            brandFilter.classList.add('active');
            this.classList.add('pulse-animation');
            setTimeout(() => {
                this.classList.remove('pulse-animation');
            }, 500);
        });
        
        // Show body filter
        filterBodyBtn.addEventListener('click', function() {
            bodyFilter.classList.add('active');
            this.classList.add('pulse-animation');
            setTimeout(() => {
                this.classList.remove('pulse-animation');
            }, 500);
        });
        
        // Search by name
        searchBtn.addEventListener('click', function() {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                // Open car listings and filter by search term
                carListingWindow.classList.add('active');
                floatingBack.classList.add('active');
                
                // Filter cars by search term
                const filteredCars = cars.filter(car => 
                    car.name.toLowerCase().includes(searchTerm.toLowerCase())
                );
                displayFilteredCars(filteredCars, `Search: ${searchTerm}`);
                
                // Clear search input
                searchInput.value = '';
            } else {
                alert('Please enter a car name to search');
            }
            this.classList.add('pulse-animation');
            setTimeout(() => {
                this.classList.remove('pulse-animation');
            }, 500);
        });
        
        // Search on Enter key
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });
        
        // Back buttons
        backFromBrands.addEventListener('click', function() {
            brandFilter.classList.remove('active');
            this.classList.add('pulse-animation');
            setTimeout(() => {
                this.classList.remove('pulse-animation');
            }, 500);
        });
        
        backFromBody.addEventListener('click', function() {
            bodyFilter.classList.remove('active');
            this.classList.add('pulse-animation');
            setTimeout(() => {
                this.classList.remove('pulse-animation');
            }, 500);
        });

        // Brand and Body Items Animation
        const brandItems = document.querySelectorAll('.brand-item');
        const bodyItems = document.querySelectorAll('.body-item');
        
        brandItems.forEach(item => {
            item.addEventListener('click', function() {
                const brandName = this.getAttribute('data-brand');
                // Open car listings and filter by brand
                carListingWindow.classList.add('active');
                floatingBack.classList.add('active');
                
                // Filter cars by brand
                const filteredCars = cars.filter(car => car.name.includes(brandName));
                displayFilteredCars(filteredCars, `Brand: ${brandName}`);
                
                // Close brand filter
                brandFilter.classList.remove('active');
            });
        });
        
        bodyItems.forEach(item => {
            item.addEventListener('click', function() {
                const bodyType = this.getAttribute('data-body');
                // Open car listings and filter by body type
                carListingWindow.classList.add('active');
                floatingBack.classList.add('active');
                
                // Filter cars by body type
                const filteredCars = cars.filter(car => car.bodyType === bodyType);
                displayFilteredCars(filteredCars, `Body Type: ${bodyType}`);
                
                // Close body filter
                bodyFilter.classList.remove('active');
            });
        });

        // Newsletter Form Submission
        const newsletterForm = document.querySelector('.newsletter-form');
        
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('.newsletter-input');
            
            if (emailInput.value) {
                alert('Thank you for subscribing! You will now receive promotional emails from Celimax Motors.');
                emailInput.value = '';
                
                // Add animation to button
                const submitBtn = this.querySelector('.subscribe-btn');
                submitBtn.classList.add('pulse-animation');
                setTimeout(() => {
                    submitBtn.classList.remove('pulse-animation');
                }, 500);
            }
        });

        // Page Load Animation
        window.addEventListener('load', function() {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 1s ease';
            
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
            
            // Animate sections on scroll
            const sections = document.querySelectorAll('.dream-car, .newsletter, .visit-us, .why-choose, .testimonials');
            
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = 'fadeUp 1s ease-out forwards';
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            
            sections.forEach(section => {
                section.style.opacity = '0';
                observer.observe(section);
            });
        });

        // Add click animations to various elements
        document.addEventListener('click', function(e) {
            // Add animation to clicked elements with specific classes
            if (e.target.classList.contains('filter-group') || 
                e.target.classList.contains('explore-btn') || 
                e.target.classList.contains('social-link')) {
                
                e.target.classList.add('pulse-animation');
                setTimeout(() => {
                    e.target.classList.remove('pulse-animation');
                }, 500);
            }
        });

        // NEW: Benefits Animation
        function initBenefitsAnimation() {
            const benefitItems = document.querySelectorAll('.benefit-item');
            
            // Show benefits with delay
            benefitItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('active');
                }, 500 + (index * 300));
            });
        }

        // NEW: Testimonials Slider
        function initTestimonialsSlider() {
            const testimonialTrack = document.getElementById('testimonialTrack');
            const testimonialNav = document.getElementById('testimonialNav');
            
            // Testimonial data
            const testimonials = [
                {
                    name: "James Mwangi",
                    text: "Celimax Motors made my dream of owning a Toyota Harrier come true. The flexible payment plan was perfect for my budget!"
                },
                {
                    name: "Sarah Akinyi",
                    text: "I was nervous about buying a used car, but the thorough inspection and warranty gave me complete peace of mind. Highly recommended!"
                },
                {
                    name: "David Ochieng",
                    text: "The team at Celimax helped me find the perfect family car. Their knowledge and customer service are exceptional."
                },
                {
                    name: "Grace Wambui",
                    text: "I imported my Mercedes-Benz through Celimax and the process was seamless. They handled everything from paperwork to delivery."
                },
                {
                    name: "Michael Kamau",
                    text: "As a first-time car buyer, I appreciated the guidance I received. Celimax made the entire process stress-free and enjoyable."
                },
                {
                    name: "Lucy Njeri",
                    text: "The after-sales support at Celimax is outstanding. They've been there for me even months after my purchase."
                },
                {
                    name: "Robert Odhiambo",
                    text: "I've bought two cars from Celimax now, and both experiences were excellent. They truly value their customers."
                },
                {
                    name: "Esther Auma",
                    text: "The variety of vehicles at Celimax is impressive. I found exactly what I was looking for at a great price."
                },
                {
                    name: "Peter Njoroge",
                    text: "Celimax's financing options made it possible for me to upgrade to a better car than I thought I could afford."
                },
                {
                    name: "Mary Atieno",
                    text: "The transparency in pricing and vehicle history at Celimax sets them apart from other dealerships. Trustworthy and reliable!"
                }
            ];
            
            // Create testimonial slides
            testimonials.forEach((testimonial, index) => {
                const slide = document.createElement('div');
                slide.className = 'testimonial-slide';
                slide.innerHTML = `
                    <div class="customer-name" id="customerName${index}">${testimonial.name}</div>
                    <div class="customer-text">"${testimonial.text}"</div>
                `;
                testimonialTrack.appendChild(slide);
                
                // Create navigation dot
                const dot = document.createElement('div');
                dot.className = `testimonial-dot ${index === 0 ? 'active' : ''}`;
                dot.setAttribute('data-index', index);
                testimonialNav.appendChild(dot);
            });
            
            // Animate customer names
            function animateCustomerName(index) {
                const nameElement = document.getElementById(`customerName${index}`);
                const name = testimonials[index].name;
                nameElement.innerHTML = '';
                
                for (let i = 0; i < name.length; i++) {
                    const span = document.createElement('span');
                    span.textContent = name[i];
                    span.className = 'letter';
                    span.style.animationDelay = `${i * 0.1}s`;
                    nameElement.appendChild(span);
                }
            }
            
            // Initialize first name animation
            animateCustomerName(0);
            
            // Set up slider functionality
            let currentSlide = 0;
            const totalSlides = testimonials.length;
            const slideWidth = 100; // Percentage
            
            function goToSlide(index) {
                if (index < 0) index = totalSlides - 1;
                if (index >= totalSlides) index = 0;
                
                testimonialTrack.style.transform = `translateX(-${index * slideWidth}%)`;
                
                // Update active dot
                document.querySelectorAll('.testimonial-dot').forEach((dot, i) => {
                    dot.classList.toggle('active', i === index);
                });
                
                // Animate customer name
                animateCustomerName(index);
                
                currentSlide = index;
            }
            
            // Add click events to dots
            document.querySelectorAll('.testimonial-dot').forEach(dot => {
                dot.addEventListener('click', function() {
                    const index = parseInt(this.getAttribute('data-index'));
                    goToSlide(index);
                });
            });
            
            // Auto-advance slides
            setInterval(() => {
                goToSlide(currentSlide + 1);
            }, 5000);
        }

        // Car Data - UPDATED WITH MULTIPLE IMAGES
        const cars = [
              {
                id: 1,
                name: "SUBARU FORESTER",
                bodyType: "SUV",
                image: "images/forester_black.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "images/forester_rightback.jpg",
                    "images/forester_leftback.jpg",
                    "..",
                    ".."
                ],
                condition: 5,
                price: "KES 3,900,000",
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "FWD",
                    mileage: "81,000 km",
                    engine: "1.5L",
                    fuel: "Petrol/Hybrid",
                    horsepower: "131 hp",
                    transmission: "CVT",
                    torque: "136 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 6.2 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "14 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
            {
                id: 2,
                name: "LEXUS LX-570",
                bodyType: "SUV",
                image: "images/lexus.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "images/lexus back.jpg",
                    "..",
                    "..",
                    ".."
                ],
                condition: 5,
                price: "KES 14,900,000",
                specs: {
                    year: "2015",
                    location: "Celimax Motors",
                    drive: "FWD",
                    registration: "KDV",
                    mileage: "57,000 km",
                    engine: "1.5L",
                    fuel: "Petrol/Hybrid",
                    horsepower: "131 hp",
                    transmission: "CVT",
                    torque: "136 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 6.2 secs"
                },
                package: [
                    "Leather Seats",
                    "Sunroof",
                    "14 seats",
                    "360° Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
                 {
                id: 3,
                name: "Mazda CX-5",
                bodyType: "SUV",
                image: "images/black_cx5.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "images/black_cx53.jpg",
                    "images/black_cx52.jpg",
                    "images/black_cx53.jpg",
                    "images/black_cx54.jpg",
                    "images/blackcx55.jpg"
                ],
                condition: 3,
                price: "KES 3,800,000",
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "FWD",
                    mileage: "81,000 km",
                    engine: "1.5L",
                    fuel: "Petrol/Hybrid",
                    horsepower: "131 hp",
                    transmission: "CVT",
                    torque: "136 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 10.2 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "14 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
              {
                id: 3,
                name: "Nissan Wingroad",
                bodyType: "Station Wagon",
                image: "images/wingroad.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "",
                    "....",
                    ".....",
                    ".....",
                    "....."
                ],
                condition: 3,
                price: "KES 1,900,000",
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "FWD",
                    mileage: "81,000 km",
                    engine: "1.5L",
                    fuel: "Petrol/Hybrid",
                    horsepower: "131 hp",
                    transmission: "CVT",
                    torque: "136 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 10.2 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "14 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
            {
                id: 4,
                name: "Toyota Axio",
                bodyType: "Sedan",
                image: "images/axio_back.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "images/axio_right.jpg",
                    "images/axio_left_back.jpg",
                    "images/axio_wing.jpg",
                    "images/axio_front_interior.jpg",
                    "images/axio_interior.jpg"
                ],
                condition: 5,
                price: "KES 1,800,000",
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "FWD",
                    mileage: "81,000 km",
                    engine: "1.5L",
                    fuel: "Petrol/Hybrid",
                    horsepower: "131 hp",
                    transmission: "CVT",
                    torque: "136 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 10.2 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "14 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
            {
                id: 5,
                name: "Toyota Crown",
                bodyType: "Sedan",
                image: "images/crown_1.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "images/crown.jpg",
                    "images/crown_2.jpg",
                    "images/crown.jpg",
                    "images/crown_3.jpg",
                    "images/crown_4.jpg"
                ],
                condition: 5,
                price: "KES 2,500,000",
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "FWD",
                    mileage: "81,000 km",
                    engine: "2.5L",
                    fuel: "Petrol/Hybrid",
                    horsepower: "131 hp",
                    transmission: "CVT",
                    torque: "221 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 8.0 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "14 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
            {
                id: 6,
                name: "Nissan NV200",
                bodyType: "VAN",
                image: "images/nissan_nv200.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "images/nissan_nv200.jpg",
                    "https://via.placeholder.com/800x600/FF6600/FFFFFF?text=Nissan+NV200+Front",
                    "https://via.placeholder.com/800x600/3366CC/FFFFFF?text=Nissan+NV200+Side",
                    "https://via.placeholder.com/800x600/33CC66/FFFFFF?text=Nissan+NV200+Rear",
                    "https://via.placeholder.com/800x600/CC33FF/FFFFFF?text=Nissan+NV200+Interior"
                ],
                condition: 5,
                price: "KES 1,800,000",
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "FWD",
                    mileage: "81,000 km",
                    engine: "2.8L",
                    fuel: "Petrol",
                    horsepower: "131 hp",
                    transmission: "CVT",
                    torque: "200 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 8.9 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "14 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
            {
                id: 7,
                name: "Toyota Hiace",
                bodyType: "VAN",
                image: "images/WhatsApp Image 2025-10-11 at 15.57.45_0a6113b2.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "images/WhatsApp Image 2025-10-11 at 15.57.45_648d42b8.jpg",
                    "images/WhatsApp Image 2025-10-11 at 15.57.45_d8aabf45.jpg",
                    "images/WhatsApp Image 2025-10-11 at 15.57.46_da7b590b.jpg",
                    "images/WhatsApp Image 2025-10-11 at 15.57.45_d8aabf45.jpg",
                    "images/WhatsApp Image 2025-10-11 at 15.57.46_ac0d341b.jpg"
                ],
                condition: 5,
                price: "KES 3,500,000",
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "RWD",
                    mileage: "81,000 km",
                    engine: "2.8L",
                    fuel: "Petrol",
                    horsepower: "163 hp",
                    transmission: "CVT",
                    torque: "420 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 8.9 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "14 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
            {
                id: 8,
                name: "Toyota Hiace",
                bodyType: "VAN",
                image: "images/hiace_black.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "https://scontent.fnuu1-1.fna.fbcdn.net/v/t39.30808-6/561680724_122104524801048875_1218894707100259618_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEF3wl68h8SvfYnDXQrO8aGXGROgBgSKWBcZE6AGBIpYLNLmDZzyEHI1DO6OK8JjRQlOrPldPmwoUK0y3RKPKn9&_nc_ohc=o1kYjBKaom8Q7kNvwGyP_bW&_nc_oc=AdnJTQ1gpIGhurmN2ZFpWeLgindjeUEYEEoWkiAy4Zh50utHsUIlsvb-Vecyz8ERr_Y&_nc_zt=23&_nc_ht=scontent.fnuu1-1.fna&_nc_gid=Rf412H0Sqzm_0KZhFdJXUQ&oh=00_AfeKbBaPbgmDX9E-Q4co_pXTXmS6WDBGT4LgiI0-l6Ae9g&oe=68F1545E",
                    "https://via.placeholder.com/800x600/FF6600/FFFFFF?text=Toyota+Hiace+Front",
                    "https://via.placeholder.com/800x600/3366CC/FFFFFF?text=Toyota+Hiace+Side",
                    "https://via.placeholder.com/800x600/33CC66/FFFFFF?text=Toyota+Hiace+Rear",
                    "https://via.placeholder.com/800x600/CC33FF/FFFFFF?text=Toyota+Hiace+Interior"
                ],
                condition: 5,
                price: "KES 3,500,000",
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "RWD",
                    mileage: "81,000 km",
                    engine: "2.8L",
                    fuel: "Petrol",
                    horsepower: "163 hp",
                    transmission: "CVT",
                    torque: "420 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 8.9 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "14 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
            {
                id: 9,
                name: "Nissan X-TRAIL",
                bodyType: "Small SUV",
                image: "images/xtrail1.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "images/xtrail1.jpg",
                    "images/xtrail2.jpg",
                    "images/xtrail3.jpg",
                    "images/xtrail4.jpg",
                    "images/xtrail5.jpg"
                ],
                condition: 5,
                price: "KES 2,500,000",
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "FWD",
                    mileage: "81,000 km",
                    engine: "2000cc",
                    fuel: "Petrol",
                    horsepower: "105 hp",
                    transmission: "CVT",
                    torque: "155 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 8.9 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "5 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
            {
                id: 10,
                name: "Toyota Fielder",
                bodyType: "Station Wagon",
                image: "images/fielder_silver1.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "images/fielder_silver1.jpg",
                    "images/fielder_silver2.jpg",
                    "images/fielder_silver3.jpg",
                    "images/fielder_silver5.jpg",
                    "images/filder_silver4.jpg"
                ],
                condition: 5,
                price: "KES 1,600,000",
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "FWD",
                    mileage: "81,000 km",
                    engine: "1500cc",
                    fuel: "Petrol",
                    horsepower: "105 hp",
                    transmission: "Automatic",
                    torque: "136 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 11 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "5 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
            {
                id: 11,
                name: "Mazda Demio",
                bodyType: "Hatchback",
                image: "images/demio_silver.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "images/demio_silver_back.jpg",
                    "images/demio.jpg",
                    "images/demio_silver_back.jpg"
                ],
                condition: 5,
                price: "KES 1,400,000",
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "FWD",
                    mileage: "81,000 km",
                    engine: "1500cc",
                    fuel: "Petrol",
                    horsepower: "105 hp",
                    transmission: "Automatic",
                    torque: "148 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 12 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "5 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Premium Sound System"
                ]
            },
            {
                id: 12,
                name: "Toyota Sienta",
                bodyType: "MPV",
                image: "https://scontent.fnuu1-1.fna.fbcdn.net/v/t39.30808-6/559045352_122104524645048875_6237591055868565831_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFs6lfftEWZ8ebhZ96g7tP-Mky_hLQHcEEyTL-EtAdwQTYToPidp4uDkjFN205qnKNE9nW-azoJwQPIZpROHa7k&_nc_ohc=6Fep3GHxtH8Q7kNvwHlvnG8&_nc_oc=AdkBKTkkNVKtFiGiGsUXrxqcQzqdLaz88_XkYS2o6hW4r_OuPgQOsOiQzF9nPv9AGeY&_nc_zt=23&_nc_ht=scontent.fnuu1-1.fna&_nc_gid=0tpNgM4V1c6dUEViH0u9Cw&oh=00_AfcFjLQpRCo79TTq_VLNzaHA9iQjCm2u5hcFcXyV6RWUew&oe=68F16261",
                // NEW: Multiple images for carousel
                images: [
                    "https://scontent.fnuu1-1.fna.fbcdn.net/v/t39.30808-6/559045352_122104524645048875_6237591055868565831_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFs6lfftEWZ8ebhZ96g7tP-Mky_hLQHcEEyTL-EtAdwQTYToPidp4uDkjFN205qnKNE9nW-azoJwQPIZpROHa7k&_nc_ohc=6Fep3GHxtH8Q7kNvwHlvnG8&_nc_oc=AdkBKTkkNVKtFiGiGsUXrxqcQzqdLaz88_XkYS2o6hW4r_OuPgQOsOiQzF9nPv9AGeY&_nc_zt=23&_nc_ht=scontent.fnuu1-1.fna&_nc_gid=0tpNgM4V1c6dUEViH0u9Cw&oh=00_AfcFjLQpRCo79TTq_VLNzaHA9iQjCm2u5hcFcXyV6RWUew&oe=68F16261",
                    "https://via.placeholder.com/800x600/FF6600/FFFFFF?text=Toyota+Sienta+Front",
                    "https://via.placeholder.com/800x600/3366CC/FFFFFF?text=Toyota+Sienta+Side",
                    "https://via.placeholder.com/800x600/33CC66/FFFFFF?text=Toyota+Sienta+Rear",
                    "https://via.placeholder.com/800x600/CC33FF/FFFFFF?text=Toyota+Sienta+Interior"
                ],
                condition: 5,
                price: "KES 1,500,000",
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "FWD",
                    mileage: "81,000 km",
                    engine: "1500cc",
                    fuel: "Petrol",
                    horsepower: "155 hp",
                    transmission: "Automatic",
                    torque: "136 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 12 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "7 seats",
                    "Reverse Camera",
                    "Fog Lights",
                    "Keyless Start",
                    "power slide door",
                    "Premium Sound System"
                ]
            },
            {
                id: 13,
                name: "Toyota Harrier",
                bodyType: "SUV",
                image: "images/harrier3.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "images/harrier4.jpg",
                    "images/harrier2.jpg",
                    "images/harrier1.jpg",
                    "images/harrier4.jpg"
                ],
                condition: 5,
                price: "KES 3,400,000",
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "AWD",
                    mileage: "81,000 km",
                    engine: "1986cc 2.0L",
                    fuel: "Petrol",
                    horsepower: "155 hp",
                    transmission: "Automatic",
                    torque: "185 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 9 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "DVD Player",
                    "Reverse Camera",
                    "Fog Lights",
                    "Keyless Start",
                    "Auto Boot Door",
                    "Premium Sound System"
                ]
            },
            {
                id: 14,
                name: "Honda Fit",
                bodyType: "Hatchback",
                image: "images/honda.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "images/honda1.jpg",
                    "images/honda2.jpg",
                    "images/honda3.jpg",
                    "images/honda_red5.jpg"
                ],
                condition: 5,
                price: "KES 2,100,000",
                specs: {
                    year: "2020",
                    location: "Celimax Motors",
                    drive: "FWD",
                    mileage: "46,000 km",
                    engine: "2.5L",
                    fuel: "Petrol",
                    horsepower: "130 hp",
                    transmission: "CVT",
                    torque: "114 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100) 8.9 sec"
                },
                package: [
                    "5 seater",
                    "Multiple trim levels",
                    "5 inch Infotainment",
                    "Reverse Camera",
                    "Fog lights" ,
                    "Keyless Start",
                    "Premium Sound System",
                    
                ]
            },
            {
                id: 15,
                name: "Mazda CX-5",
                bodyType: "SUV",
                image: "images/cx5_red.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "images/cx5_red1.jpg",
                    "images/cx5_red3.jpg",
                    "images/cx5_red4.jpg",
                    "images/cx5_red5.jpg",
                    "images/cx5_red2.jpg"
                ],
                condition: 4,
                price: "KES 4,500,000",
                specs: {
                    year: "2017",
                    location: "Celimax Motors",
                    drive: "4WD",
                    mileage: "68,000 km",
                    engine: "4.5L V8",
                    fuel: "Diesel",
                    horsepower: "232 hp",
                    transmission: "Automatic",
                    torque: "187 Nm",
                    aspiration: "Turbocharged",
                    acceleration: "(0-100) 9sec"
                },
                package: [
                    "Premium Leather Seats",
                    "20-inch Alloy Wheels",
                    "Advanced Infotainment",
                    "360° Camera System",
                    "LED Fog Lights",
                    "Smart Key System",
                    "Power Tailgate",
                    "Premium Sound System",
                    "Sunroof",
                    "Heated Seats"
                ]
            },
            {
                id: 16,
                name: "Toyota Hilux",
                bodyType: "Pickup",
                image: "images/hilux_back.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "..",
                    "..",
                    "..",
                    "..",
                    ".."
                ],
                condition: 5,
                price: "KES 5,500,000",
                specs: {
                    year: "2018",
                    location: "Celimax Motors",
                    drive: "RWD",
                    mileage: "28,000 km",
                    engine: "2.8L",
                    fuel: "Diesel",
                    horsepower: "150 hp",
                    transmission: "6-Speed Manual",
                    torque: "4000 Nm",
                    aspiration: "Naturally aspirated",
                    acceleration: "6.0 sec"
                },
                package: [
                    "Upto 7 Airbags",
                    "Brake Assist",
                    "LED Head lamps",
                    "Reverse Camera",
                    "LED Lighting Package",
                    "Keyless-Go",
                    "SR Trim Sound",
                ]
            },
            {
                id: 17,
                name: "Subaru Outback",
                bodyType: "SUV",
                image: "images/subaru.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "images/outback4.jpg",
                    "images/outback1.jpg",
                    "images/outback3.jpg",
                    "images/outback2.jpg",
                    "images/outback5.jpg"
                ],
                condition: 4,
                price: "KES 4,250,000",
                specs: {
                    year: "2016",
                    location: "Celimax Motors",
                    drive: "AWD",
                    mileage: "72,000 km",
                    engine: "2.5L",
                    fuel: "Petrol",
                    horsepower: "170 hp",
                    transmission: "CVT",
                    torque: "237 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 9.4 sec"
                },
                package: [
                    "Fabric Seats",
                    "17-inch Alloy Wheels",
                    "Touchscreen Display",
                    "Reverse Camera",
                    "Fog Lights",
                    "Keyless Entry",
                    "Manual Boot Door",
                    "Standard Sound System"
                ]
            },
            {
                id: 18,
                name: "Mazda Demio",
                bodyType: "Hatchback",
                image: "https://scontent.fnuu1-1.fna.fbcdn.net/v/t39.30808-6/560056537_122104288161048875_773556082653655033_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHsOj8-PgHpxcNdNdMcU3MbkKrDvu6jsWGQqsO-7qOxYfkEJ8xUI1yRTSmUkl-li4nGpGDaq08DhIR4uMKCl5_m&_nc_ohc=dtXA6kCDRxEQ7kNvwFwjdI-&_nc_oc=AdkDytRpXfQS9YgSnyrk0qvwXh8m0_1XcIQ1oBOTKI4hPxZ4XKoX-le1gnguAbnvbbE&_nc_zt=23&_nc_ht=scontent.fnuu1-1.fna&_nc_gid=qQcVlBenPw43zvJG9raitQ&oh=00_Afc7FgFUPryxklwzcXfaJ_o8kt7ZFwvj1Jxvv_kxBPevVQ&oe=68EFF343",
                // NEW: Multiple images for carousel
                images: [
                    "https://scontent.fnuu1-1.fna.fbcdn.net/v/t39.30808-6/560056537_122104288161048875_773556082653655033_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHsOj8-PgHpxcNdNdMcU3MbkKrDvu6jsWGQqsO-7qOxYfkEJ8xUI1yRTSmUkl-li4nGpGDaq08DhIR4uMKCl5_m&_nc_ohc=dtXA6kCDRxEQ7kNvwFwjdI-&_nc_oc=AdkDytRpXfQS9YgSnyrk0qvwXh8m0_1XcIQ1oBOTKI4hPxZ4XKoX-le1gnguAbnvbbE&_nc_zt=23&_nc_ht=scontent.fnuu1-1.fna&_nc_gid=qQcVlBenPw43zvJG9raitQ&oh=00_Afc7FgFUPryxklwzcXfaJ_o8kt7ZFwvj1Jxvv_kxBPevVQ&oe=68EFF343",
                    "https://via.placeholder.com/800x600/FF6600/FFFFFF?text=Mazda+Demio+Front",
                    "https://via.placeholder.com/800x600/3366CC/FFFFFF?text=Mazda+Demio+Side",
                    "https://via.placeholder.com/800x600/33CC66/FFFFFF?text=Mazda+Demio+Rear",
                    "https://via.placeholder.com/800x600/CC33FF/FFFFFF?text=Mazda+Demio+Interior"
                ],
                condition: 4,
                price: "KES 1,400,000",
                specs: {
                    year: "2018",
                    location: "Celimax Motors",
                    drive: "FWD",
                    mileage: "52,000 km",
                    engine: "1300cc",
                    fuel: "Petrol",
                    horsepower: "190 hp",
                    transmission: "Automatic",
                    torque: "121 Nm",
                    aspiration: "Turbocharged",
                    acceleration: "8.8 sec"
                },
                package: [
                    "Fabric Seats",
                    "15-inch Alloy Wheels",
                    "Honda Infotainment",
                    "Multi-Angle Camera",
                    "LED Fog Lights",
                    "Smart Entry",
                    "Power Side mirrors",
                    "Premium Audio System",
                    "Steering Audio Controls"
                ]
            },
            {
                id: 19,
                name: "Mazda Axela",
                bodyType: "Sedan",
                image: "https://scontent.fnuu1-1.fna.fbcdn.net/v/t39.30808-6/560572514_122104288329048875_9162437697382251999_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH8U-EBtlBwmqY8mtBObXU-jUtNwznCOCaNS03DOcI4Jkc9DuZEqCtxtpieGDfKvL1iAY37IqaLPf7hpT6_3K3-&_nc_ohc=4-O8-nyKU7IQ7kNvwFhPGvB&_nc_oc=AdkJspdGqckxTMI7qzpK5__QAscxIiczX4USfoxNIxiCHNM4MBeeWRWLwfAeuLvDbIQ&_nc_zt=23&_nc_ht=scontent.fnuu1-1.fna&_nc_gid=3j5Uv5IOAexVRhRTtUiF3g&oh=00_Afeie7d9R4TYNguhm8sDEjjIQgT3kL2jCYDeU5zsP0VUjw&oe=68EFEFAE",
                // NEW: Multiple images for carousel
                images: [
                    "https://scontent.fnuu1-1.fna.fbcdn.net/v/t39.30808-6/560572514_122104288329048875_9162437697382251999_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH8U-EBtlBwmqY8mtBObXU-jUtNwznCOCaNS03DOcI4Jkc9DuZEqCtxtpieGDfKvL1iAY37IqaLPf7hpT6_3K3-&_nc_ohc=4-O8-nyKU7IQ7kNvwFhPGvB&_nc_oc=AdkJspdGqckxTMI7qzpK5__QAscxIiczX4USfoxNIxiCHNM4MBeeWRWLwfAeuLvDbIQ&_nc_zt=23&_nc_ht=scontent.fnuu1-1.fna&_nc_gid=3j5Uv5IOAexVRhRTtUiF3g&oh=00_Afeie7d9R4TYNguhm8sDEjjIQgT3kL2jCYDeU5zsP0VUjw&oe=68EFEFAE",
                    "https://scontent.fnuu1-1.fna.fbcdn.net/v/t39.30808-6/559589706_122104634295048875_3178264038624409637_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFYodYOp42r_OO-b_BK4P3lG5yj_KQLeQYbnKP8pAt5BpVArkdKeH3gMo9pn1YdbozCf_ab5KEr-swYSpW6cEA4&_nc_ohc=pnVee1JIusAQ7kNvwE7jdHX&_nc_oc=Adn0ughIDujH8kQqMPeeuEyjn9W8OuRFjGDRor_iwyz2UmYdg8VGJZfoo6OWiRRRHpk&_nc_zt=23&_nc_ht=scontent.fnuu1-1.fna&_nc_gid=3taLBCEyYjvcRIsl1yXYdw&oh=00_AfcIgeZwU3we86ijtUjItnGfAZf1oaEFwwcubuy5JyyYcg&oe=68F1EB2F",
                    "https://scontent.fnuu1-1.fna.fbcdn.net/v/t39.30808-6/560059227_122104634289048875_9222806528131245098_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEe8bQ-Q1nAz6bpbfIjJ5ClVTpZG4Xq9u5VOlkbher27n8AOAYK1vfAVT6dgCNn4nTqUfeMnjZ8o4Bgvewcpr1V&_nc_ohc=SODAXqAEu9gQ7kNvwGzI1DQ&_nc_oc=AdlJ6J1HnhN0tj7sUFztsAPx66QcAegH6ItAjCCbyOZjU4rJZTcpqtwDpJyKuEsMHbQ&_nc_zt=23&_nc_ht=scontent.fnuu1-1.fna&_nc_gid=3vWsfRw5XoXAxnOZV_xUkw&oh=00_AffRSo9Juf_IV68nqTCEJo_spY86Mn6xVs9Gl5wGo4p8vQ&oe=68F1DC90",
                    "https://scontent.fnuu1-1.fna.fbcdn.net/v/t39.30808-6/561929762_122104634313048875_81882520261597970_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFUE_Wj5gM21Y6M9yNoaC8Re5HccbvfOK17kdxxu984raSP2kLy4VyjqvpM_H4vTxaJi3NR4qPMhFh0963lv7Ev&_nc_ohc=iYCdS7irfLwQ7kNvwHWoSvX&_nc_oc=AdnCUtFsyiaPp9yEJhvbFhbd67VL1IU45BhE3iRSRy_CfR_M79Z3e17AeOSl62dVq4s&_nc_zt=23&_nc_ht=scontent.fnuu1-1.fna&_nc_gid=fvTc_3tFDzA-lvg_BdE6Gw&oh=00_AfcfgJ8U8dJNJN9ZhKggiMnMvy8yLhNwsFWWRz7lo_mj_w&oe=68F1D43B",
                    "https://scontent.fnuu1-1.fna.fbcdn.net/v/t39.30808-6/559589706_122104634295048875_3178264038624409637_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFYodYOp42r_OO-b_BK4P3lG5yj_KQLeQYbnKP8pAt5BpVArkdKeH3gMo9pn1YdbozCf_ab5KEr-swYSpW6cEA4&_nc_ohc=pnVee1JIusAQ7kNvwE7jdHX&_nc_oc=Adn0ughIDujH8kQqMPeeuEyjn9W8OuRFjGDRor_iwyz2UmYdg8VGJZfoo6OWiRRRHpk&_nc_zt=23&_nc_ht=scontent.fnuu1-1.fna&_nc_gid=3taLBCEyYjvcRIsl1yXYdw&oh=00_AfcIgeZwU3we86ijtUjItnGfAZf1oaEFwwcubuy5JyyYcg&oe=68F1EB2F"
                ],
                condition: 5,
                price: "KES 2,300,000",
                specs: {
                    year: "2021",
                    location: "Celimax Motors",
                    drive: "FWD",
                    mileage: "18,000 km",
                    engine: "1.5L",
                    fuel: "Petrol",
                    horsepower: "111 hp",
                    transmission: "6-Speed Automatic",
                    torque: "144 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 10.5 sec"
                },
                package: [
                    "Fabric seats Seats",
                    "16-inch Alloy Wheels",
                    "Mazda connect infotainment",
                    "Reverse camera",
                    "LED Headlights",
                    "Fog lights",
                    "Power Boot Lid",
                    "Standard 6-speaker Sound System",
                    "Air conditioning",
                    "Push to start"
                ]
            },
            {
                id: 20,
                name: "Mercedes GLC",
                bodyType: "SUV",
                image: "https://scontent.fnuu1-1.fna.fbcdn.net/v/t39.30808-6/559544914_122104288947048875_4141183350667398745_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGsETpVrmNp5P6UQkmxgMEJizeecZVM1-CLN55xlUzX4Mxx8D87EXmkehHpyPzVr0oNg00GJee_Y8L55xf8d6UL&_nc_ohc=mE4A48O9XF4Q7kNvwF62Mwe&_nc_oc=AdmmGAXar6HM3JY6ZT1vjSYyZhG1hGc4fUh2K0ngIHefx6jyp2VQ3qzBWHIB8PP7D54&_nc_zt=23&_nc_ht=scontent.fnuu1-1.fna&_nc_gid=Z7SqmO2sMk3qANyVEVE3lw&oh=00_Afc59glWUEKuT4mRwdMnwnow_dCQOsi2ap5QRWm5W3CnUg&oe=68EFF1AC",
                // NEW: Multiple images for carousel
                images: [
                    "https://scontent.fnuu1-1.fna.fbcdn.net/v/t39.30808-6/559544914_122104288947048875_4141183350667398745_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGsETpVrmNp5P6UQkmxgMEJizeecZVM1-CLN55xlUzX4Mxx8D87EXmkehHpyPzVr0oNg00GJee_Y8L55xf8d6UL&_nc_ohc=mE4A48O9XF4Q7kNvwF62Mwe&_nc_oc=AdmmGAXar6HM3JY6ZT1vjSYyZhG1hGc4fUh2K0ngIHefx6jyp2VQ3qzBWHIB8PP7D54&_nc_zt=23&_nc_ht=scontent.fnuu1-1.fna&_nc_gid=Z7SqmO2sMk3qANyVEVE3lw&oh=00_Afc59glWUEKuT4mRwdMnwnow_dCQOsi2ap5QRWm5W3CnUg&oe=68EFF1AC",
                    "https://scontent.fnuu1-1.fna.fbcdn.net/v/t39.30808-6/560559927_122104632471048875_1775357419720063072_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEmlpCo31zupNpld4QbkWXoQYCgiEMOQuJBgKCIQw5C4q7OhRCDO3Tff4plpyeFzEzz2zS-e0gUMO8L80OyA4Ah&_nc_ohc=jvMk-aDld1AQ7kNvwGxYMu4&_nc_oc=AdmE3bTb4E3AuJmKD2DmUYzF5PrUBJPth9MQkYS6V7c8_K85unH0ak0JCpWNFgGptVo&_nc_zt=23&_nc_ht=scontent.fnuu1-1.fna&_nc_gid=RuuCBCHymN5Drlq1UftnCw&oh=00_AfelCPgMvPhCWwgS5ckkfWkxv0w2ZWx1em5EoQGUOchlSw&oe=68F1E279",
                    "https://via.placeholder.com/800x600/3366CC/FFFFFF?text=Mercedes+GLC+Side",
                    "https://via.placeholder.com/800x600/33CC66/FFFFFF?text=Mercedes+GLC+Rear",
                    "https://via.placeholder.com/800x600/CC33FF/FFFFFF?text=Mercedes+GLC+Interior"
                ],
                condition: 5,
                price: "KES 5,500,000",
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "AWD",
                    mileage: "55,000 km",
                    engine: "2.0L Turbocharged",
                    fuel: "Petrol",
                    horsepower: "241 hp",
                    transmission: "9-Speed Automatic",
                    torque: "370 Nm",
                    aspiration: "Turbocharged",
                    acceleration: "(0-100) 6.9 sec"
                },
                package: [
                    "Leather seats",
                    "18-inch Alloy Wheels",
                    "MBUX infotainment",
                    "360° Reverse Camera",
                    "Parking sensors",
                    "Keyless Entry",
                    "LED intelligent light sys",
                    "Harman Kardon Sound System",
                    "Premium"
                ]
            },
            {
                id: 21,
                name: "Honda Vezel",
                bodyType: "SUV",
                image: "https://scontent.fnuu1-1.fna.fbcdn.net/v/t39.30808-6/559833320_122104289079048875_7944234364831487880_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG6clr1t9jlZIark6Hz_iJ1Ng4XmB3ROwY2DheYHdE7Bqjv9KArv_1hqqx-WGRy8QggS1MdnVEO4rfDu-Enh0Ee&_nc_ohc=hb9b47z_A0wQ7kNvwHkAinG&_nc_oc=AdlLaDtw2xEHv-s7-jpTGgNq-wiPUqpc2j5Jw5HxNSqaTqnhMUIoOK_ASIgMJa2dDJk&_nc_zt=23&_nc_ht=scontent.fnuu1-1.fna&_nc_gid=yDM0tt5Y5tXTF7m6FFz-1Q&oh=00_AfcS7ffdbjNvLEa6L3Oi5OS0wqVel7W16rlMHUSyWW7miw&oe=68F00050",
                // NEW: Multiple images for carousel
                images: [
                    "https://scontent.fnuu1-1.fna.fbcdn.net/v/t39.30808-6/559833320_122104289079048875_7944234364831487880_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG6clr1t9jlZIark6Hz_iJ1Ng4XmB3ROwY2DheYHdE7Bqjv9KArv_1hqqx-WGRy8QggS1MdnVEO4rfDu-Enh0Ee&_nc_ohc=hb9b47z_A0wQ7kNvwHkAinG&_nc_oc=AdlLaDtw2xEHv-s7-jpTGgNq-wiPUqpc2j5Jw5HxNSqaTqnhMUIoOK_ASIgMJa2dDJk&_nc_zt=23&_nc_ht=scontent.fnuu1-1.fna&_nc_gid=yDM0tt5Y5tXTF7m6FFz-1Q&oh=00_AfcS7ffdbjNvLEa6L3Oi5OS0wqVel7W16rlMHUSyWW7miw&oe=68F00050",
                    "https://scontent.fnuu1-1.fna.fbcdn.net/v/t39.30808-6/560243105_122104634913048875_1372631181836730887_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGc9eHvy04y7QDwYh0DwI4oNcUiwzosU1A1xSLDOixTUG6mQLq7SrtbdnjFipNgj6-BAWab33L_pHMU7Izzc67W&_nc_ohc=66A5Rh-EQDkQ7kNvwF1w_xG&_nc_oc=AdnqbTBYp5AJJICbV1dSKYI6IxzXH9B5rmRMdtK98_LDJmJyQcxrrIVjKGDcU8XwzmY&_nc_zt=23&_nc_ht=scontent.fnuu1-1.fna&_nc_gid=7i7guBoR7YwVCOqu0HnyZg&oh=00_AfcQRgt5Ppwbgsrx2EoFvcV5wNCRzddvaKI2PAAbLbppEA&oe=68F1D9A5",
                    "https://via.placeholder.com/800x600/3366CC/FFFFFF?text=Honda+Vezel+Side",
                    "https://via.placeholder.com/800x600/33CC66/FFFFFF?text=Honda+Vezel+Rear",
                    "https://via.placeholder.com/800x600/CC33FF/FFFFFF?text=Honda+Vezel+Interior"
                ],
                condition: 4,
                price: "KES 2,400,000",
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "2WD",
                    mileage: "35,000 km",
                    engine: "1.5L Hybrid",
                    fuel: "Petrol/Electric",
                    horsepower: "285 hp",
                    transmission: "CVT",
                    torque: "155 Nm",
                    aspiration: "Naturally Aspirated + Electric Assist",
                    acceleration: "(0-100kph) 10.5 sec"
                },
                package: [
                    "Fabric & leather seats",
                    "Alloy Wheels",
                    "Push to start",
                    "Rear Camera",
                    "Automatic headlights",
                    "Keyless Entry",
                    "Multifunctional Steer whell",
                    "Hybrid fuel efficiency",
                    "Off-Road Package",
                    "Removable Top"
                ]
            },
            {
                id: 22,
                name: "Toyota Vitz",
                bodyType: "Hatchback",
                image: "https://scontent.fnuu1-1.fna.fbcdn.net/v/t39.30808-6/558544719_122104289361048875_7659859759221476782_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG-8BmCS7mN17SdlvkXEml3Cm3iIP4w8o8KbeIg_jDyj8RTS6Lgop3fyKkVCSpEG-Xj6y9ovl-enpxvekGuIMRn&_nc_ohc=skyBMtQmkAsQ7kNvwEUcE5g&_nc_oc=AdkRW3ceSDgjdtLf9i-DMvwZu90XdhGqTo8z3IrqYBJPAO4vc-PBx7PpyGzVgl76ycc&_nc_zt=23&_nc_ht=scontent.fnuu1-1.fna&_nc_gid=mJlx5c1gUbQS9el1MOuBcw&oh=00_AfcavGky5y5ZgBnxKPs4jtV6PXotwRkwzZ5HPpg510uqvw&oe=68EFFBCC",
                // NEW: Multiple images for carousel
                images: [
                    "https://scontent.fnuu1-1.fna.fbcdn.net/v/t39.30808-6/558544719_122104289361048875_7659859759221476782_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG-8BmCS7mN17SdlvkXEml3Cm3iIP4w8o8KbeIg_jDyj8RTS6Lgop3fyKkVCSpEG-Xj6y9ovl-enpxvekGuIMRn&_nc_ohc=skyBMtQmkAsQ7kNvwEUcE5g&_nc_oc=AdkRW3ceSDgjdtLf9i-DMvwZu90XdhGqTo8z3IrqYBJPAO4vc-PBx7PpyGzVgl76ycc&_nc_zt=23&_nc_ht=scontent.fnuu1-1.fna&_nc_gid=mJlx5c1gUbQS9el1MOuBcw&oh=00_AfcavGky5y5ZgBnxKPs4jtV6PXotwRkwzZ5HPpg510uqvw&oe=68EFFBCC",
                    "https://via.placeholder.com/800x600/FF6600/FFFFFF?text=Toyota+Vitz+Front",
                    "https://via.placeholder.com/800x600/3366CC/FFFFFF?text=Toyota+Vitz+Side",
                    "https://via.placeholder.com/800x600/33CC66/FFFFFF?text=Toyota+Vitz+Rear",
                    "https://via.placeholder.com/800x600/CC33FF/FFFFFF?text=Toyota+Vitz+Interior"
                ],
                condition: 5,
                price: "KES 1,300,000",
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "FWD",
                    mileage: "12,000 km",
                    engine: "2.0L",
                    fuel: "Petrol",
                    horsepower: "181 hp",
                    transmission: "Automatic CVT",
                    torque: "119 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "6.5 sec"
                },
                package: [
                    "Fabric seats",
                    "14-inch Alloy Wheels",
                    "Manual air conditioning",
                    "Rear Camera",
                    "power windows",
                    "Power mirrors",
                    "ABS with EBD",
                    "ISOFIX child anchors",
                    "Rear Folding seats"
                ]
            },
            {
                id: 23,
                name: "Toyota Axio",
                bodyType: "Sedan",
                image: "https://scontent.fnuu1-1.fna.fbcdn.net/v/t39.30808-6/560307183_122104306863048875_1212677064051908038_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGfBrAgP8Wh6EM_VvVTCaZXLu43mwaME2Eu7jebBowTYeS2zcigaMQMJBVAwTG-I4rHNpDI5GY2Yg2JRUC80AfX&_nc_ohc=-ZWk5xJmr1UQ7kNvwERNXxa&_nc_oc=AdnoE9ODGRqKp0giDENE_Xge5-__HiS414tg9K3uAQzfYpW41Imisx0Ih7HvoS4J9Y4&_nc_zt=23&_nc_ht=scontent.fnuu1-1.fna&_nc_gid=cLiUvpXJVJVqN_tcrGXl_g&oh=00_Afcr7-16I0AALWfBKtT2nEjckN3dIe-G2FmyuiDVhYxdkA&oe=68F00246",
                // NEW: Multiple images for carousel
                images: [
                    "https://scontent.fnuu1-1.fna.fbcdn.net/v/t39.30808-6/560307183_122104306863048875_1212677064051908038_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGfBrAgP8Wh6EM_VvVTCaZXLu43mwaME2Eu7jebBowTYeS2zcigaMQMJBVAwTG-I4rHNpDI5GY2Yg2JRUC80AfX&_nc_ohc=-ZWk5xJmr1UQ7kNvwERNXxa&_nc_oc=AdnoE9ODGRqKp0giDENE_Xge5-__HiS414tg9K3uAQzfYpW41Imisx0Ih7HvoS4J9Y4&_nc_zt=23&_nc_ht=scontent.fnuu1-1.fna&_nc_gid=cLiUvpXJVJVqN_tcrGXl_g&oh=00_Afcr7-16I0AALWfBKtT2nEjckN3dIe-G2FmyuiDVhYxdkA&oe=68F00246",
                    "https://via.placeholder.com/800x600/FF6600/FFFFFF?text=Toyota+Axio+Front",
                    "https://via.placeholder.com/800x600/3366CC/FFFFFF?text=Toyota+Axio+Side",
                    "https://via.placeholder.com/800x600/33CC66/FFFFFF?text=Toyota+Axio+Rear",
                    "https://via.placeholder.com/800x600/CC33FF/FFFFFF?text=Toyota+Axio+Interior"
                ],
                condition: 3,
                price: "KES 1,600,000",
                specs: {
                    year: "2018",
                    location: "Celimax Motors",
                    drive: "2WD",
                    mileage: "60,000 km",
                    engine: "0.8L",
                    fuel: "Petrol + Hybrid",
                    horsepower: "110 hp",
                    transmission: "Automatic",
                    torque: "141 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "10.5 sec"
                },
                package: [
                    "Fabric Seats",
                    "Aloy  Wheels",
                    "Radio with USB",
                    "Manual Boot Door",
                    "ISOFIX child seats anchors"
                ]
            },
             {
                id: 24,
                name: "Toyota Noah",
                bodyType: "MPV",
                image: "images/noah1.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "images/noah1.jpg",
                    "images/noah2.jpg",
                    "images/noah3.jpg",
                    "images/noah4.jpg"
                ],
                condition: 5,
                price: "KES 3,900,000",
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "FWD",
                    mileage: "81,000 km",
                    engine: "1.5L",
                    fuel: "Petrol/Hybrid",
                    horsepower: "131 hp",
                    transmission: "CVT",
                    torque: "136 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 6.2 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "14 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
             {
                id: 25,
                name: "Toyota Probox",
                bodyType: "VAN",
                image: "images/probox_front.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "images/probox _back.jpg",
                    "images/probox_left.jpg",
                    "..",
                    ".."
                ],
                condition: 5,
                price: "KES 1,900,000",
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "FWD",
                    mileage: "81,000 km",
                    engine: "1.5L",
                    fuel: "Petrol/Hybrid",
                    horsepower: "131 hp",
                    transmission: "CVT",
                    torque: "136 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 6.2 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "14 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
             {
                id: 26,
                name: "Toyota Prado TX",
                bodyType: "SUV",
                image: "images/prado_front.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "images/prado_back.jpg",
                    "..",
                    "..",
                    ".."
                ],
                condition: 5,
                price: "KES 7,300,000",
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "FWD",
                    mileage: "81,000 km",
                    engine: "1.5L",
                    fuel: "Petrol/Hybrid",
                    horsepower: "131 hp",
                    transmission: "CVT",
                    torque: "136 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 6.2 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "14 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
            {
                id: 27,
                name: "Toyota Noah",
                bodyType: "MPV",
                image: "images/noah_front.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "images/noah_side.jpg",
                    "images/noah_wing.jpg",
                    "images/noah_side.jpg",
                    "images/noah_wing.jpg"
                ],
                condition: 5,
                price: "KES 2,600,000",
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "FWD",
                    mileage: "81,000 km",
                    engine: "1.5L",
                    fuel: "Petrol/Hybrid",
                    horsepower: "131 hp",
                    transmission: "CVT",
                    torque: "136 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 6.2 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "14 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
              {
                id: 29,
                name: "Honda Fit",
                bodyType: "Hatchback",
                image: "images/honda_red3.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "images/honda_red4.jpg",
                    "images/nissan_note1.jpg",
                    "images/honda_red2.jpg",
                    "images/honda_red1.jpg"
                ],
                condition: 5,
                price: "KES 1,400,000",
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "FWD",
                    mileage: "81,000 km",
                    engine: "1.5L",
                    fuel: "Petrol/Hybrid",
                    horsepower: "131 hp",
                    transmission: "CVT",
                    torque: "136 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 6.2 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "14 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
            {
                id: 30,
                name: "Toyota Voxy",
                bodyType: "Hatchback",
                image: "images/voxy1.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "images/voxy2.jpg",
                    "images/voxy3.jpg",
                    "images/voxy3.jpg",
                    "images/voxy4.jpg"
                ],
                condition: 5,
                price: "KES 2,700,000",
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "FWD",
                    mileage: "81,000 km",
                    engine: "1.5L",
                    fuel: "Petrol/Hybrid",
                    horsepower: "131 hp",
                    transmission: "CVT",
                    torque: "136 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 6.2 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "14 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
            {
                id: 31,
                name: "Subaru Forester",
                bodyType: "Hatchback",
                image: "images/forester_rightback.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "images/forester_black.jpg",
                    "images/forester_leftback.jpg",
                    "images/forester_interior.jpg",
                    "images/forester_black.jpg"
                ],
                condition: 5,
                price: "KES 2,700,000",
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "FWD",
                    mileage: "81,000 km",
                    engine: "1.5L",
                    fuel: "Petrol/Hybrid",
                    horsepower: "131 hp",
                    transmission: "CVT",
                    torque: "136 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 6.2 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "14 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
             {
                id: 32,
                name: "Toyota Fielder",
                bodyType: "Station Wagon",
                image: "images/fielder_silver1.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "images/fielder_silver2.jpg",
                    "images/fielder_silver3.jpg",
                    "images/filder_silver4.jpg",
                    "images/fielder_silver5.jpg"
                ],
                condition: 5,
                price: "KES 2,300,000",
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "FWD",
                    mileage: "81,000 km",
                    engine: "1.5L",
                    fuel: "Petrol/Hybrid",
                    horsepower: "131 hp",
                    transmission: "CVT",
                    torque: "136 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 6.2 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "14 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
             {
                id: 33,
                name: "Toyota Vitz",
                bodyType: "Hatchback",
                image: "images/vitz_front.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "images/vitz_left_back.jpg",
                    "..",
                    "images/vitz_back.jpg",
                    ".."
                ],
                condition: 5,
                price: "KES 1,300,000",
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "FWD",
                    mileage: "81,000 km",
                    engine: "1.5L",
                    fuel: "Petrol/Hybrid",
                    horsepower: "131 hp",
                    transmission: "CVT",
                    torque: "136 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 6.2 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "14 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
                {
                id: 34,
                name: "Honda Vezel",
                bodyType: "Crossover",
                image: "images/honda vez.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "images/hondavez1.jpg",
                    "images/hondavez2.jpg",
                    "images/hondavez5.jpg",
                    "images/hondavez4.jpg"
                ],
                condition: 5,
                price: "KES 2,500,000",
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "FWD",
                    mileage: "81,000 km",
                    engine: "1.5L",
                    fuel: "Petrol/Hybrid",
                    horsepower: "131 hp",
                    transmission: "CVT",
                    torque: "136 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 6.2 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "14 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
                {
                id: 36,
                name: "Subaru Forester",
                bodyType: "Crossover",
                image: "images/forester1.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "images/forester2.jpg",
                    "images/forester3.jpg",
                    "images/forester4.jpg",
                    "images/forester5.jpg"
                ],
                condition: 5,
                price: "KES 4,200,000",
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "FWD",
                    mileage: "81,000 km",
                    engine: "1.5L",
                    fuel: "Petrol/Hybrid",
                    horsepower: "131 hp",
                    transmission: "CVT",
                    torque: "136 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 6.2 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "14 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
              {
                id: 37,
                name: "Toyota RAV 4",
                bodyType: "Crossover",
                image: "images/rav4.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "..",
                    "..",
                    "..",
                    ".."
                ],
                condition: 5,
                price: "KES 3,500,000",
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "FWD",
                    mileage: "81,000 km",
                    engine: "1.5L",
                    fuel: "Petrol/Hybrid",
                    horsepower: "131 hp",
                    transmission: "CVT",
                    torque: "136 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 6.2 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "14 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
            {
                id: 38,
                name: "Toyota Premio 260",
                bodyType: "Sedan",
                image: "images/premio.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "..",
                    "..",
                    "..",
                    ".."
                ],
                condition: 3,
                price: "KES 1,500,000",
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "FWD",
                    mileage: "81,000 km",
                    engine: "1.5L",
                    fuel: "Petrol/Hybrid",
                    horsepower: "131 hp",
                    transmission: "CVT",
                    torque: "136 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 6.2 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "14 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
             {
                id: 39,
                name: "Toyota Hilux",
                bodyType: "Pickup",
                image: "images/hn1.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "images/hn2.jpg",
                    "images/hn3.jpg",
                    "images/hn4.jpg",
                    ".."
                ],
                condition: 3,
                price: "KES 1,500,000",
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "FWD",
                    mileage: "81,000 km",
                    engine: "1.5L",
                    fuel: "Petrol/Hybrid",
                    horsepower: "131 hp",
                    transmission: "CVT",
                    torque: "136 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 6.2 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "14 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
            {
                id: 40,
                name: "Toyota Landcruiser LC-300",
                bodyType: "SUV",
                image: "images/lc300.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "..",
                    "..",
                    "..",
                    ".."
                ],
                condition: 5,
                price: "KES 2,200,000",
                specs: {
                    year: "2023",
                    location: "Celimax Motors",
                    drive: "FWD",
                    mileage: "1,600 km",
                    engine: "3500cc",
                    fuel: "Petrol/Hybrid",
                    horsepower: "131 hp",
                    transmission: "CVT",
                    torque: "136 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 6.2 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "14 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
               {
                id: 41,
                name: "Toyota Prado 120SERIES",
                bodyType: "SUV",
                image: "images/prado2008.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "..",
                    "..",
                    "..",
                    ".."
                ],
                condition: 3,
                price: "KES 2,220,000",
                specs: {
                    year: "2023",
                    location: "Celimax Motors",
                    drive: "FWD",
                    mileage: "1,600 km",
                    engine: "3500cc",
                    fuel: "Petrol/Hybrid",
                    horsepower: "131 hp",
                    transmission: "CVT",
                    torque: "136 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 6.2 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "14 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
                 {
                id: 42,
                name: "Toyota Harrier Premium",
                bodyType: "SUV",
                image: "images/harrier w.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "..",
                    "..",
                    "..",
                    ".."
                ],
                condition: 4,
                price: "KES 2,650,000",
                specs: {
                    year: "2014",
                    location: "Celimax Motors",
                    drive: "FWD",
                    mileage: "1,600 km",
                    engine: "3500cc",
                    fuel: "Petrol/Hybrid",
                    horsepower: "131 hp",
                    transmission: "CVT",
                    torque: "136 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 6.2 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "14 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
                {
                id: 43,
                name: "Toyota Probox",
                bodyType: "VAN",
                image: "images/proboxy.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "..",
                    "..",
                    "..",
                    ".."
                ],
                condition: 3,
                price: "KES 1,380,000",
                specs: {
                    year: "2018",
                    location: "Celimax Motors",
                    drive: "FWD",
                    mileage: "1,600 km",
                    engine: "1500cc",
                    fuel: "Petrol/Hybrid",
                    horsepower: "131 hp",
                    transmission: "CVT",
                    torque: "136 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 6.2 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "14 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
              {
                id: 44,
                name: "Toyota Premio 260",
                bodyType: "SUV",
                image: "images/premiooo.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "..",
                    "..",
                    "..",
                    ".."
                ],
                condition: 3,
                price: "KES 1,590,000",
                specs: {
                    year: "2018",
                    location: "Nairobi",
                    drive: "FWD",
                    mileage: "1,600 km",
                    engine: "1500cc",
                    fuel: "Petrol/Hybrid",
                    horsepower: "131 hp",
                    transmission: "CVT",
                    torque: "136 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 6.2 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "14 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
                 {
                id: 45,
                name: "Suzuki Jimny",
                bodyType: "SUV",
                image: "images/suzuki1.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "images/suzuki2.jpg",
                    "images/suzuki5.jpg",
                    "images/suzuki3.jpg",
                    "images/suzuki1.jpg"
                ],
                condition: 5,
                price: "KES 1,050,000",
                specs: {
                    year: "2019",
                    location: "Nairobi",
                    drive: "FWD",
                    mileage: "1,600 km",
                    engine: "650cc",
                    fuel: "Petrol/Hybrid",
                    horsepower: "131 hp",
                    transmission: "CVT",
                    torque: "136 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 6.2 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "14 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
               {
                id: 46,
                name: "Nissan Juke",
                bodyType: "SUV",
                image: "images/juke1.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "images/juke2.jpg",
                    "..",
                    "..",
                    ".."
                ],
                condition: 5,
                price: "KES 1,550,000",
                specs: {
                    year: "2019",
                    location: "Nairobi",
                    drive: "FWD",
                    mileage: "1,600 km",
                    engine: "650cc",
                    fuel: "Petrol/Hybrid",
                    horsepower: "131 hp",
                    transmission: "CVT",
                    torque: "136 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 6.2 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "14 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
             {
                id: 47,
                name: "Subaru Impreza",
                bodyType: "Sedan",
                image: "images/impreza3.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "images/impreza1.jpg",
                    "images/impreza2.jpg",
                    "images/impreza.jpg",
                    ".."
                ],
                condition: 5,
                price: "KES 1,550,000",
                specs: {
                    year: "2019",
                    location: "Nairobi",
                    drive: "FWD",
                    mileage: "1,600 km",
                    engine: "650cc",
                    fuel: "Petrol/Hybrid",
                    horsepower: "131 hp",
                    transmission: "CVT",
                    torque: "136 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 6.2 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "14 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
                 {
                id: 48,
                name: "Dayz Roox",
                bodyType: "Sedan",
                image: "images/dayz1.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "images/dayz2.jpg",
                    "..",
                    "..",
                    ".."
                ],
                condition: 5,
                price: "KES 1,550,000",
                specs: {
                    year: "2019",
                    location: "Nairobi",
                    drive: "FWD",
                    mileage: "1,600 km",
                    engine: "650cc",
                    fuel: "Petrol/Hybrid",
                    horsepower: "131 hp",
                    transmission: "CVT",
                    torque: "136 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 6.2 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "14 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
            {
                id: 49,
                name: "Mazda CX-3",
                bodyType: "Hatchback",
                image: "images/demiod.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "images/IMG-20251015-WA0199.jpg",
                    "..",
                    "..",
                    ".."
                ],
                condition: 5,
                price: "KES 1,550,000",
                specs: {
                    year: "2019",
                    location: "Nairobi",
                    drive: "FWD",
                    mileage: "1,600 km",
                    engine: "650cc",
                    fuel: "Petrol/Hybrid",
                    horsepower: "131 hp",
                    transmission: "CVT",
                    torque: "136 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 6.2 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "14 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            },
             {
                id: 49,
                name: "Mazda Demio",
                bodyType: "Hatchback",
                image: "images/demiogrey.jpg",
                // NEW: Multiple images for carousel
                images: [
                    "images/demiog3.jpg",
                    "images/demiog2.jpg",
                    "images/demiog1.jpg",
                    ".."
                ],
                condition: 5,
                price: "KES 1,550,000",
                specs: {
                    year: "2019",
                    location: "Nairobi",
                    drive: "FWD",
                    mileage: "1,600 km",
                    engine: "650cc",
                    fuel: "Petrol/Hybrid",
                    horsepower: "131 hp",
                    transmission: "CVT",
                    torque: "136 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 6.2 secs"
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "14 seats",
                    "Reverse Camera",
                    "Power windows",
                    "Keyless Start",
                    "Modern infotainmnet",
                    "Traction control"
                ]
            }
            
            
            
            

            

            
            
            
            
        ];

        // DOM Elements for Car Listings
        const carListingWindow = document.getElementById('carListingWindow');
        const backToHome = document.getElementById('backToHome');
        const floatingBack = document.getElementById('floatingBack');
        const bodyTypeFilter = document.getElementById('bodyTypeFilter');
        const carsGrid = document.getElementById('carsGrid');
        const carDetailsModal = document.getElementById('carDetailsModal');
        const closeDetailsModal = document.getElementById('closeDetailsModal');
        const carSpecs = document.getElementById('carSpecs');
        const modalPrice = document.getElementById('modalPrice');
        const modalQuoteBtn = document.getElementById('modalQuoteBtn');
        const carPackageModal = document.getElementById('carPackageModal');
        const closePackageModal = document.getElementById('closePackageModal');
        const packageList = document.getElementById('packageList');
        const packagePrice = document.getElementById('packagePrice');
        const packageQuoteBtn = document.getElementById('packageQuoteBtn');

        // Function to render star rating
        function renderStars(rating) {
            let starsHtml = '';
            for (let i = 1; i <= 5; i++) {
                if (i <= rating) {
                    starsHtml += '<i class="fas fa-star star filled"></i>';
                } else {
                    starsHtml += '<i class="fas fa-star star"></i>';
                }
            }
            return starsHtml;
        }

        // Function to get condition text based on rating
        function getConditionText(rating) {
            if (rating >= 4.5) return 'Excellent';
            if (rating >= 4) return 'Very Good';
            if (rating >= 3) return 'Good';
            if (rating >= 2) return 'Average';
            return 'Fair';
        }

        // Function to display cars in the grid with filtering
        function displayCars(bodyType = 'all') {
            carsGrid.innerHTML = '';
            
            const filteredCars = bodyType === 'all' 
                ? cars 
                : cars.filter(car => car.bodyType === bodyType);
            
            if (filteredCars.length === 0) {
                carsGrid.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--dark-gray);">
                        <i class="fas fa-car" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                        <h3>No cars found for this body type</h3>
                        <p>Try selecting a different body type or check back later for new arrivals.</p>
                    </div>
                `;
                return;
            }
            
            filteredCars.forEach(car => {
                const carCard = document.createElement('div');
                carCard.className = 'car-card';
                carCard.innerHTML = `
                    <img src="${car.image}" alt="${car.name}" class="car-image">
                    <div class="car-details">
                        <h3 class="car-name">${car.name}</h3>
                        <div class="car-body-type">${car.bodyType}</div>
                        <div class="car-condition">
                            <div class="condition-stars">
                                ${renderStars(car.condition)}
                            </div>
                            <span class="condition-text">${getConditionText(car.condition)}</span>
                        </div>
                        <div class="car-price">${car.price}</div>
                        <div class="car-actions">
                            <button class="details-btn" data-id="${car.id}">See Full Details</button>
                            <button class="package-btn" data-id="${car.id}">Car Package</button>
                            <button class="quote-btn" data-id="${car.id}">
                                <i class="fab fa-whatsapp"></i> Get Quote
                            </button>
                        </div>
                    </div>
                `;
                carsGrid.appendChild(carCard);
            });

            // Add event listeners to the buttons
            document.querySelectorAll('.details-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const carId = parseInt(this.getAttribute('data-id'));
                    showCarDetails(carId);
                });
            });

            document.querySelectorAll('.package-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const carId = parseInt(this.getAttribute('data-id'));
                    showCarPackage(carId);
                });
            });

            document.querySelectorAll('.quote-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const carId = parseInt(this.getAttribute('data-id'));
                    redirectToWhatsApp(carId);
                });
            });
        }

        // NEW: Updated function to show car details with carousel
        function showCarDetails(carId) {
            const car = cars.find(c => c.id === carId);
            if (!car) return;

            // Update modal title
            document.getElementById('carDetailsTitle').textContent = `${car.name} - Full Details`;

            // Set main image
            const mainCarImage = document.getElementById('mainCarImage');
            mainCarImage.src = car.images[0];

            // Clear and populate thumbnails
            const carouselThumbnails = document.getElementById('carouselThumbnails');
            carouselThumbnails.innerHTML = '';

            car.images.forEach((image, index) => {
                const thumbnail = document.createElement('img');
                thumbnail.src = image;
                thumbnail.alt = `Thumbnail ${index + 1}`;
                thumbnail.classList.add('carousel-thumbnail');
                if (index === 0) {
                    thumbnail.classList.add('active');
                }
                thumbnail.addEventListener('click', () => {
                    // Set the main image to this thumbnail's image
                    mainCarImage.src = image;
                    // Update active thumbnail
                    document.querySelectorAll('.carousel-thumbnail').forEach(thumb => {
                        thumb.classList.remove('active');
                    });
                    thumbnail.classList.add('active');
                    
                    // Update current image index
                    currentImageIndex = index;
                });
                carouselThumbnails.appendChild(thumbnail);
            });

            // Set up arrow buttons
            let currentImageIndex = 0;
            const totalImages = car.images.length;

            document.querySelector('.carousel-prev').addEventListener('click', () => {
                currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
                updateMainImage();
            });

            document.querySelector('.carousel-next').addEventListener('click', () => {
                currentImageIndex = (currentImageIndex + 1) % totalImages;
                updateMainImage();
            });

            function updateMainImage() {
                mainCarImage.src = car.images[currentImageIndex];
                // Update active thumbnail
                document.querySelectorAll('.carousel-thumbnail').forEach((thumb, index) => {
                    thumb.classList.toggle('active', index === currentImageIndex);
                });
            }

            // Clear previous specs
            carSpecs.innerHTML = '';

            // Add specs to modal
            for (const [key, value] of Object.entries(car.specs)) {
                const specItem = document.createElement('div');
                specItem.className = 'spec-item';
                specItem.innerHTML = `
                    <span class="spec-label">${formatSpecLabel(key)}</span>
                    <span class="spec-value">${value}</span>
                `;
                carSpecs.appendChild(specItem);
            }

            // Update price
            modalPrice.textContent = car.price;

            // Set WhatsApp redirect for this car
            modalQuoteBtn.setAttribute('data-id', car.id);

            // Show modal
            carDetailsModal.classList.add('active');
        }

        // Function to show car package
        function showCarPackage(carId) {
            const car = cars.find(c => c.id === carId);
            if (!car) return;

            // Update modal title
            document.getElementById('packageTitle').textContent = `${car.name} - Package`;

            // Clear previous package items
            packageList.innerHTML = '';

            // Add package items to modal
            car.package.forEach(item => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<i class="fas fa-check"></i> ${item}`;
                packageList.appendChild(listItem);
            });

            // Update price
            packagePrice.textContent = car.price;

            // Set WhatsApp redirect for this car
            packageQuoteBtn.setAttribute('data-id', car.id);

            // Show modal
            carPackageModal.classList.add('active');
        }

        // Function to redirect to WhatsApp
        function redirectToWhatsApp(carId) {
            const car = cars.find(c => c.id === carId);
            if (!car) return;

            const message = `Hello! I'm interested in the ${car.name} (${car.bodyType}) priced at ${car.price}. Can you provide more details?`;
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/254703913841?text=${encodedMessage}`;
            
            window.open(whatsappUrl, '_blank');
        }

        // Helper function to format spec labels
        function formatSpecLabel(label) {
            return label
                .split(/(?=[A-Z])/)
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        }

        // Event Listeners for Available in the Yard links
        document.querySelectorAll('.yard-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                carListingWindow.classList.add('active');
                floatingBack.classList.add('active');
                displayCars();
                
                // Close mobile nav if open
                mobileNav.classList.remove('active');
            });
        });

        // Back to Home button
        backToHome.addEventListener('click', function() {
            carListingWindow.classList.remove('active');
            floatingBack.classList.remove('active');
        });

        // Floating back button
        floatingBack.addEventListener('click', function() {
            carListingWindow.classList.remove('active');
            floatingBack.classList.remove('active');
        });

        // Body type filter buttons
        document.querySelectorAll('.body-type-btn').forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                document.querySelectorAll('.body-type-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get body type and filter cars
                const bodyType = this.getAttribute('data-body-type');
                displayCars(bodyType);
            });
        });

        // Close modals
        closeDetailsModal.addEventListener('click', function() {
            carDetailsModal.classList.remove('active');
        });

        closePackageModal.addEventListener('click', function() {
            carPackageModal.classList.remove('active');
        });

        // WhatsApp buttons in modals
        modalQuoteBtn.addEventListener('click', function() {
            const carId = parseInt(this.getAttribute('data-id'));
            redirectToWhatsApp(carId);
        });

        packageQuoteBtn.addEventListener('click', function() {
            const carId = parseInt(this.getAttribute('data-id'));
            redirectToWhatsApp(carId);
        });

        // Close modals when clicking outside
        window.addEventListener('click', function(e) {
            if (e.target === carDetailsModal) {
                carDetailsModal.classList.remove('active');
            }
            if (e.target === carPackageModal) {
                carPackageModal.classList.remove('active');
            }
        });

        // NEW FUNCTIONALITY FOR ADDITIONAL WINDOWS
        
        // DOM Elements for new windows
        const aboutWindow = document.getElementById('aboutWindow');
        const blogsWindow = document.getElementById('blogsWindow');
        const faqWindow = document.getElementById('faqWindow');
        const blogGrid = document.getElementById('blogGrid');
        const faqList = document.getElementById('faqList');
        const quizQuestion = document.getElementById('quizQuestion');
        const quizOptions = document.getElementById('quizOptions');
        const quizSubmit = document.getElementById('quizSubmit');
        const quizResult = document.getElementById('quizResult');
        
        const homeLink = document.getElementById('homeLink');
        const aboutLink = document.getElementById('aboutLink');
        const blogsLink = document.getElementById('blogsLink');
        const contactLink = document.getElementById('contactLink');
        const faqLink = document.getElementById('faqLink');
        const mobileHomeLink = document.getElementById('mobileHomeLink');
        const mobileAboutLink = document.getElementById('mobileAboutLink');
        const mobileBlogsLink = document.getElementById('mobileBlogsLink');
        const mobileContactLink = document.getElementById('mobileContactLink');
        const mobileFaqLink = document.getElementById('mobileFaqLink');
        const backFromAbout = document.getElementById('backFromAbout');
        const backFromBlogs = document.getElementById('backFromBlogs');
        const backFromFaq = document.getElementById('backFromFaq');
        
        // Blog data
        const blogs = [
            {
                id: 1,
                title: "Toyota's Acquisition of Subaru: A Strategic Move",
                excerpt: "How Toyota's investment in Subaru has reshaped the automotive industry and what it means for consumers.",
                image: "https://cdn.pixabay.com/photo/2021/05/24/07/17/car-6278062_1280.jpg",
                fullContent: `
                    <h2>Toyota's Acquisition of Subaru: A Strategic Move</h2>
                    <img src="https://cdn.pixabay.com/photo/2017/10/28/15/18/toyota-2897313_1280.jpg" alt="Toyota and Subaru collaboration">
                    <p>In recent years, Toyota has made strategic investments in Subaru, acquiring a significant stake in the company. This move has allowed both manufacturers to leverage each other's strengths in technology and manufacturing.</p>
                    <p>Toyota brings its expertise in hybrid technology and global supply chains, while Subaru contributes its renowned all-wheel-drive systems and boxer engine technology. The collaboration has already produced successful models like the Toyota 86 and Subaru BRZ sports cars.</p>
                    <h2>Benefits for Kenyan Consumers</h2>
                    <p>For Kenyan car buyers, this partnership means access to more reliable vehicles with advanced safety features. Subaru's famous Symmetrical All-Wheel Drive combined with Toyota's reliability creates vehicles well-suited for Kenya's diverse road conditions.</p>
                    <p>The shared technology also helps in reducing maintenance costs and improving parts availability, making these vehicles more practical for the Kenyan market.</p>
                `
            },
            {
                id: 2,
                title: "Audi's Challenge with Kenya's Flood Conditions",
                excerpt: "Why German luxury cars like Audi face unique challenges during Kenya's rainy seasons and flooding.",
                image: "https://cdn.pixabay.com/photo/2021/01/12/14/46/audi-5911624_1280.jpg",
                fullContent: `
                    <h2>Audi's Challenge with Kenya's Flood Conditions</h2>
                    <img src="https://cdn.pixabay.com/photo/2023/08/23/12/50/fog-8208493_1280.jpg" alt="Audi car in challenging conditions">
                    <p>German luxury vehicles like Audi are engineered for precision performance on well-maintained roads, which presents challenges in regions experiencing frequent flooding like parts of Kenya during rainy seasons.</p>
                    <p>Audi's low ground clearance, sophisticated electronics, and complex air intake systems can be vulnerable in flooded conditions. Water ingress can damage critical components, leading to expensive repairs.</p>
                    <h2>Adaptation Strategies</h2>
                    <p>Despite these challenges, Audi has been working on adaptations for markets with difficult road conditions. Newer models feature improved water sealing and raised air intakes in some SUV variants.</p>
                    <p>For Kenyan Audi owners, preventive measures like avoiding flooded areas, regular undercarriage cleaning, and comprehensive insurance are essential for protecting these premium vehicles.</p>
                `
            },
            {
                id: 3,
                title: "Mercedes-Benz: The Evolution of Luxury in Kenya",
                excerpt: "How Mercedes-Benz has maintained its luxury status while adapting to the Kenyan market's unique demands.",
                image: "https://cdn.pixabay.com/photo/2018/07/10/10/40/mercedes-3528323_1280.jpg",
                fullContent: `
                    <h2>Mercedes-Benz: The Evolution of Luxury in Kenya</h2>
                    <img src="https://cdn.pixabay.com/photo/2016/06/16/15/30/mercedes-benz-1461510_1280.jpg" alt="Mercedes-Benz luxury vehicle">
                    <p>Mercedes-Benz has long been synonymous with luxury and engineering excellence worldwide, including in Kenya. However, the brand has had to adapt its offerings to suit local conditions while maintaining its premium positioning.</p>
                    <p>The introduction of more robust SUV models like the G-Class and GLE has helped Mercedes maintain relevance in regions with challenging road infrastructure. These vehicles combine luxury with improved ground clearance and durability.</p>
                    <h2>Service and Maintenance in Kenya</h2>
                    <p>Mercedes-Benz has established authorized service centers in major Kenyan cities, ensuring that owners have access to genuine parts and trained technicians. This network is crucial for maintaining the vehicles' performance and value.</p>
                    <p>For prospective buyers, certified pre-owned Mercedes-Benz vehicles offer a more accessible entry point into ownership while still providing the brand's signature luxury and performance.</p>
                `
            }
        ];
        
        // FAQ data
        const faqs = [
            {
                question: "What documents do I need to purchase a car in Celimax Motors?",
                answer: "You need a valid Kenyan ID or passport, a KRA PIN certificate, and proof of income if applying for financing. For used cars, ensure the logbook is genuine and the seller has proper ownership documents."
            },
            {
                question: "How can I verify if a used car is not stolen?",
                answer: "Check the vehicle's details with the National Transport and Safety Authority (NTSA) using the registration number. You can do this online through the NTSA portal or visit their offices for verification."
            },
            {
                question: "What is the average cost of car insurance in Kenya?",
                answer: "Insurance costs vary based on the car's value, type of coverage, and driver's history. Third-party insurance starts from around KES 5,000 annually, while comprehensive coverage typically ranges from 2-5% of the car's value."
            },
            {
                question: "Should I import a car or buy locally?",
                answer: "Buying locally from reputable dealers like Celimax Motors offers advantages like immediate availability, local warranty, and easier after-sales support. Importing can sometimes be cheaper but involves more paperwork, longer wait times, and potential hidden costs."
            },
            {
                question: "What maintenance should I perform regularly on my car?",
                answer: "Regular oil changes every 5,000-10,000 km, tire rotation and pressure checks, brake inspections, fluid top-ups, and filter replacements are essential. Follow the manufacturer's recommended service schedule for optimal performance."
            }
        ];
        
        // Quiz data
        const quiz = {
            question: "What is the most important factor to consider when buying a used car in Kenya?",
            options: [
                { text: "The color and appearance", correct: false },
                { text: "Vehicle service history and mechanical condition", correct: true },
                { text: "The sound system quality", correct: false },
                { text: "Number of previous owners", correct: false }
            ]
        };
        
        // Function to display blogs
        function displayBlogs() {
            blogGrid.innerHTML = '';
            
            blogs.forEach(blog => {
                const blogCard = document.createElement('div');
                blogCard.className = 'blog-card';
                blogCard.innerHTML = `
                    <img src="${blog.image}" alt="${blog.title}" class="blog-image">
                    <div class="blog-details">
                        <h3 class="blog-title">${blog.title}</h3>
                        <p class="blog-excerpt">${blog.excerpt}</p>
                        <button class="read-more-btn" data-id="${blog.id}">Read More</button>
                    </div>
                `;
                blogGrid.appendChild(blogCard);
            });
            
            // Add event listeners to read more buttons
            document.querySelectorAll('.read-more-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const blogId = parseInt(this.getAttribute('data-id'));
                    showFullBlog(blogId);
                });
            });
        }
        
        // Function to show full blog article
        function showFullBlog(blogId) {
            const blog = blogs.find(b => b.id === blogId);
            if (!blog) return;
            
            // Create a new window for the full blog
            const blogWindow = document.createElement('div');
            blogWindow.className = 'content-window active';
            blogWindow.innerHTML = `
                <div class="content-header">
                    <h2 class="content-title">${blog.title}</h2>
                    <button class="back-to-home" id="backFromFullBlog">
                        <i class="fas fa-arrow-left"></i> Back to Blogs
                    </button>
                </div>
                <div class="blog-content">
                    <div class="blog-article">
                        ${blog.fullContent}
                    </div>
                </div>
            `;
            
            document.body.appendChild(blogWindow);
            
            // Add event listener to back button
            document.getElementById('backFromFullBlog').addEventListener('click', function() {
                blogWindow.remove();
            });
        }
        
        // Function to display FAQs
        function displayFAQs() {
            faqList.innerHTML = '';
            
            faqs.forEach((faq, index) => {
                const faqItem = document.createElement('div');
                faqItem.className = 'faq-item';
                faqItem.innerHTML = `
                    <div class="faq-question" data-index="${index}">
                        <span>${faq.question}</span>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="faq-answer">
                        <p>${faq.answer}</p>
                    </div>
                `;
                faqList.appendChild(faqItem);
            });
            
            // Add event listeners to FAQ questions
            document.querySelectorAll('.faq-question').forEach(question => {
                question.addEventListener('click', function() {
                    const index = this.getAttribute('data-index');
                    const answer = this.nextElementSibling;
                    
                    // Toggle active class
                    answer.classList.toggle('active');
                    
                    // Rotate chevron icon
                    const icon = this.querySelector('i');
                    icon.classList.toggle('fa-chevron-down');
                    icon.classList.toggle('fa-chevron-up');
                });
            });
        }
        
        // Function to setup quiz
        function setupQuiz() {
            quizQuestion.textContent = quiz.question;
            quizOptions.innerHTML = '';
            
            quiz.options.forEach((option, index) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'quiz-option';
                optionElement.innerHTML = `
                    <input type="radio" id="option${index}" name="quiz" value="${index}">
                    <label for="option${index}">${option.text}</label>
                `;
                quizOptions.appendChild(optionElement);
            });
            
            // Add event listener to quiz submit button
            quizSubmit.addEventListener('click', function() {
                const selectedOption = document.querySelector('input[name="quiz"]:checked');
                
                if (!selectedOption) {
                    alert('Please select an answer');
                    return;
                }
                
                const optionIndex = parseInt(selectedOption.value);
                const isCorrect = quiz.options[optionIndex].correct;
                
                if (isCorrect) {
                    quizResult.textContent = 'Correct! Vehicle service history and mechanical condition are crucial for a reliable used car.';
                    quizResult.className = 'quiz-result correct';
                } else {
                    quizResult.textContent = 'Incorrect. The most important factor is the vehicle service history and mechanical condition.';
                    quizResult.className = 'quiz-result incorrect';
                }
            });
        }
        
        // Event listeners for navigation
        homeLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Scroll to top of page
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        mobileHomeLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Scroll to top of page
            window.scrollTo({ top: 0, behavior: 'smooth' });
            // Close mobile nav if open
            mobileNav.classList.remove('active');
        });
        
        aboutLink.addEventListener('click', function(e) {
            e.preventDefault();
            aboutWindow.classList.add('active');
            floatingBack.classList.add('active');
            
            // Close mobile nav if open
            mobileNav.classList.remove('active');
        });
        
        mobileAboutLink.addEventListener('click', function(e) {
            e.preventDefault();
            aboutWindow.classList.add('active');
            floatingBack.classList.add('active');
            
            // Close mobile nav if open
            mobileNav.classList.remove('active');
        });
        
        blogsLink.addEventListener('click', function(e) {
            e.preventDefault();
            blogsWindow.classList.add('active');
            floatingBack.classList.add('active');
            displayBlogs();
            
            // Close mobile nav if open
            mobileNav.classList.remove('active');
        });
        
        mobileBlogsLink.addEventListener('click', function(e) {
            e.preventDefault();
            blogsWindow.classList.add('active');
            floatingBack.classList.add('active');
            displayBlogs();
            
            // Close mobile nav if open
            mobileNav.classList.remove('active');
        });
        
        contactLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Scroll to contact section
            document.getElementById('contactSection').scrollIntoView({ behavior: 'smooth' });
        });
        
        mobileContactLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Scroll to contact section
            document.getElementById('contactSection').scrollIntoView({ behavior: 'smooth' });
            
            // Close mobile nav if open
            mobileNav.classList.remove('active');
        });
        
        faqLink.addEventListener('click', function(e) {
            e.preventDefault();
            faqWindow.classList.add('active');
            floatingBack.classList.add('active');
            displayFAQs();
            setupQuiz();
            
            // Close mobile nav if open
            mobileNav.classList.remove('active');
        });
        
        mobileFaqLink.addEventListener('click', function(e) {
            e.preventDefault();
            faqWindow.classList.add('active');
            floatingBack.classList.add('active');
            displayFAQs();
            setupQuiz();
            
            // Close mobile nav if open
            mobileNav.classList.remove('active');
        });
        
        // Back buttons for new windows
        backFromAbout.addEventListener('click', function() {
            aboutWindow.classList.remove('active');
            floatingBack.classList.remove('active');
        });
        
        backFromBlogs.addEventListener('click', function() {
            blogsWindow.classList.remove('active');
            floatingBack.classList.remove('active');
        });
        
        backFromFaq.addEventListener('click', function() {
            faqWindow.classList.remove('active');
            floatingBack.classList.remove('active');
        });
        
        // Function to display filtered cars
        function displayFilteredCars(filteredCars, filterTitle) {
            // Update title to reflect filter
            document.querySelector('.car-listing-title').textContent = `Available in the Yard - ${filterTitle}`;
            
            // Reset body type filter buttons
            document.querySelectorAll('.body-type-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector('.body-type-btn[data-body-type="all"]').classList.add('active');
            
            // Display filtered cars
            carsGrid.innerHTML = '';
            
            if (filteredCars.length === 0) {
                carsGrid.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--dark-gray);">
                        <i class="fas fa-car" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                        <h3>No cars found for this filter</h3>
                        <p>Try selecting a different filter or check back later for new arrivals.</p>
                    </div>
                `;
                return;
            }
            
            filteredCars.forEach(car => {
                const carCard = document.createElement('div');
                carCard.className = 'car-card';
                carCard.innerHTML = `
                    <img src="${car.image}" alt="${car.name}" class="car-image">
                    <div class="car-details">
                        <h3 class="car-name">${car.name}</h3>
                        <div class="car-body-type">${car.bodyType}</div>
                        <div class="car-condition">
                            <div class="condition-stars">
                                ${renderStars(car.condition)}
                            </div>
                            <span class="condition-text">${getConditionText(car.condition)}</span>
                        </div>
                        <div class="car-price">${car.price}</div>
                        <div class="car-actions">
                            <button class="details-btn" data-id="${car.id}">See Full Details</button>
                            <button class="package-btn" data-id="${car.id}">Car Package</button>
                            <button class="quote-btn" data-id="${car.id}">
                                <i class="fab fa-whatsapp"></i> Get Quote
                            </button>
                        </div>
                    </div>
                `;
                carsGrid.appendChild(carCard);
            });

            // Add event listeners to the buttons
            document.querySelectorAll('.details-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const carId = parseInt(this.getAttribute('data-id'));
                    showCarDetails(carId);
                });
            });

            document.querySelectorAll('.package-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const carId = parseInt(this.getAttribute('data-id'));
                    showCarPackage(carId);
                });
            });

            document.querySelectorAll('.quote-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const carId = parseInt(this.getAttribute('data-id'));
                    redirectToWhatsApp(carId);
                });
            });
        }