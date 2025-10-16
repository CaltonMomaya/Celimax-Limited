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
            
            // NEW: Initialize FAQ functionality
            initFAQ();
            
            // NEW: Initialize hero slider
            initHeroSlider();
            
            // NEW: Initialize blog posts
            initBlogPosts();
        });

        // NEW: Hero Slider Functionality - CENTERED
        function initHeroSlider() {
            const sliderTrack = document.getElementById('sliderTrack');
            const sliderNav = document.getElementById('sliderNav');
            const sliderPrev = document.getElementById('sliderPrev');
            const sliderNext = document.getElementById('sliderNext');
            const slides = document.querySelectorAll('.slider-slide');
            const dots = document.querySelectorAll('.slider-dot');
            
            let currentSlide = 0;
            const totalSlides = slides.length;
            const slideInterval = 3000; // 3 seconds
            
            // Function to update slider position
            function updateSlider() {
                sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
                
                // Update active dot
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentSlide);
                });
            }
            
            // Next slide function
            function nextSlide() {
                currentSlide = (currentSlide + 1) % totalSlides;
                updateSlider();
            }
            
            // Previous slide function
            function prevSlide() {
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                updateSlider();
            }
            
            // Auto-advance slides
            let slideTimer = setInterval(nextSlide, slideInterval);
            
            // Pause auto-advance on hover
            const heroSlider = document.getElementById('heroSlider');
            heroSlider.addEventListener('mouseenter', () => {
                clearInterval(slideTimer);
            });
            
            heroSlider.addEventListener('mouseleave', () => {
                slideTimer = setInterval(nextSlide, slideInterval);
            });
            
            // Arrow button events
            sliderNext.addEventListener('click', nextSlide);
            sliderPrev.addEventListener('click', prevSlide);
            
            // Dot navigation
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    currentSlide = index;
                    updateSlider();
                });
            });
            
            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') {
                    prevSlide();
                } else if (e.key === 'ArrowRight') {
                    nextSlide();
                }
            });
        }

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

        // NEW: FAQ Functionality
        function initFAQ() {
            const faqItems = document.querySelectorAll('.faq-item');
            
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                const answer = item.querySelector('.faq-answer');
                const toggle = item.querySelector('.faq-toggle');
                
                question.addEventListener('click', () => {
                    // Close all other FAQ items
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                            otherItem.querySelector('.faq-answer').classList.remove('active');
                        }
                    });
                    
                    // Toggle current item
                    item.classList.toggle('active');
                    answer.classList.toggle('active');
                });
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
            // Show floating back button
            floatingBack.classList.add('active');
            this.classList.add('pulse-animation');
            setTimeout(() => {
                this.classList.remove('pulse-animation');
            }, 500);
        });
        
        // Show body filter
        filterBodyBtn.addEventListener('click', function() {
            bodyFilter.classList.add('active');
            // Show floating back button
            floatingBack.classList.add('active');
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
            floatingBack.classList.remove('active');
            this.classList.add('pulse-animation');
            setTimeout(() => {
                this.classList.remove('pulse-animation');
            }, 500);
        });
        
        backFromBody.addEventListener('click', function() {
            bodyFilter.classList.remove('active');
            floatingBack.classList.remove('active');
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
            const sections = document.querySelectorAll('.dream-car, .newsletter, .visit-us, .why-choose, .testimonials, .about-section, .blog-section, .faq-section, .contact-section');
            
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

        // Car Data - UPDATED WITH ADDITIONAL FIELDS AND MORE CARS
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
                    "images/forester_interior.jpg",
                    "images/forester_black.jpg"
                ],
                condition: 5,
                price: "KES 3,900,000",
                source: "fresh", // NEW: locally used or fresh import
                registered: true, // NEW: registered or unregistered
                fuelType: "petrol", // NEW: petrol, diesel, hybrid, electric
                color: "Black", // NEW: Color property
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
                    acceleration: "(0-100kph) 6.2 secs",
                    color: "Black" // NEW: Added color to specs
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
                    "images/lexus_interior.jpg",
                    "images/lexus_side.jpg",
                    "images/lexus.jpg"
                ],
                condition: 5,
                price: "KES 14,900,000",
                source: "fresh", // NEW: locally used or fresh import
                registered: false, // NEW: registered or unregistered
                fuelType: "petrol", // NEW: petrol, diesel, hybrid, electric
                color: "White", // NEW: Color property
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
                    acceleration: "(0-100kph) 6.2 secs",
                    color: "White" // NEW: Added color to specs
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
                id: 5,
                name: "TOYOTA VITZ",
                bodyType: "Hatchback",
                image: "images/vitz_front.jpg",
                images: [
                    "images/vitz_back.jpg",
                    "images/vitz_left_back.jpg",
                    ".."
                ],
                condition: 4,
                price: "KES 1,200,000",
                source: "fresh",
                registered: true,
                fuelType: "petrol",
                color: "Red", // NEW: Color property
                specs: {
                    year: "2018",
                    location: "Celimax Motors",
                    drive: "FWD",
                    mileage: "45,000 km",
                    engine: "1.0L",
                    fuel: "Petrol",
                    horsepower: "68 hp",
                    transmission: "Automatic",
                    torque: "92 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 11.5 secs",
                    color: "Grey" // NEW: Added color to specs
                },
                package: [
                    "Alloy Wheels",
                    "Air Conditioning",
                    "Power Steering",
                    "Power Windows",
                    "Central Locking",
                    "Radio/CD Player"
                ]
            },
            {
                id: 4,
                name: "TOYOTA HARRIER",
                bodyType: "SUV",
                image: "images/harrier3.jpg",
                images: [
                    "images/harrier2.jpg",
                    "images/harrier1.jpg",
                    "images/harrier4.jpg"
                ],
                condition: 5,
                price: "KES 3,200,000",
                source: "fresh",
                registered: false,
                fuelType: "petrol",
                color: "Black", // NEW: Color property
                specs: {
                    year: "2020",
                    location: "Celimax Motors",
                    drive: "AWD",
                    mileage: "32,000 km",
                    engine: "2.0L",
                    fuel: "Petrol",
                    horsepower: "170 hp",
                    transmission: "CVT",
                    torque: "207 Nm",
                    aspiration: "Turbocharged",
                    acceleration: "(0-100kph) 8.2 secs",
                    color: "Silver" // NEW: Added color to specs
                },
                package: [
                    "Leather Seats",
                    "Sunroof",
                    "Alloy Wheels",
                    "Reverse Camera",
                    "Power Windows",
                    "Keyless Entry",
                    "Touchscreen Infotainment",
                    "Climate Control"
                ]
            },
            {
                id: 5,
                name: "HONDA FIT",
                bodyType: "Hatchback",
                image: "images/honda_red3.jpg",
                images: [
                    "images/honda_red4.jpg",
                    "images/honda_red2.jpg"
                ],
                condition: 4,
                price: "KES 1,300,000",
                source: "fresh",
                registered: true,
                fuelType: "petrol",
                color: "Red", // NEW: Color property
                specs: {
                    year: "2017",
                    location: "Celimax Motors",
                    drive: "FWD",
                    mileage: "65,000 km",
                    engine: "1.3L",
                    fuel: "Petrol",
                    horsepower: "98 hp",
                    transmission: "CVT",
                    torque: "119 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 10.6 secs",
                    color: "Blue" // NEW: Added color to specs
                },
                package: [
                    "Alloy Wheels",
                    "Air Conditioning",
                    "Power Steering",
                    "Power Windows",
                    "Central Locking",
                    "Touchscreen Display",
                    "Rear Camera"
                ]
            },
            {
                id: 6,
                name: "NISSAN X-TRAIL",
                bodyType: "SUV",
                image: "images/xtrail2.jpg",
                images: [
                    "images/xtrail4.jpg",
                    "images/xtrail1.jpg"
                ],
                condition: 4,
                price: "KES 3,500,000",
                source: "fresh",
                registered: false,
                fuelType: "petrol",
                color: "Black", // NEW: Color property
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "AWD",
                    mileage: "48,000 km",
                    engine: "2.0L",
                    fuel: "Petrol",
                    horsepower: "144 hp",
                    transmission: "CVT",
                    torque: "200 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 10.5 secs",
                    color: "Gray" // NEW: Added color to specs
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "Reverse Camera",
                    "Power Windows",
                    "Keyless Entry",
                    "Touchscreen Infotainment",
                    "Climate Control",
                    "Roof Rails"
                ]
            },
            {
                id: 7,
                name: "MAZDA CX-5",
                bodyType: "SUV",
                image: "images/cx5_red.jpg",
                images: [
                    "images/cx5_red3.jpg",
                    "images/cx5_red4.jpg"
                ],
                condition: 5,
                price: "KES 3,600,000",
                source: "fresh",
                registered: false,
                fuelType: "petrol",
                color: "Red", // NEW: Color property
                specs: {
                    year: "2021",
                    location: "Celimax Motors",
                    drive: "AWD",
                    mileage: "22,000 km",
                    engine: "2.5L",
                    fuel: "Petrol",
                    horsepower: "187 hp",
                    transmission: "Automatic",
                    torque: "251 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 8.2 secs",
                    color: "Black" // NEW: Added color to specs
                },
                package: [
                    "Leather Seats",
                    "Sunroof",
                    "Alloy Wheels",
                    "360° Camera",
                    "Power Windows",
                    "Keyless Start",
                    "Premium Sound System",
                    "Heated Seats"
                ]
            },
            {
                id: 8,
                name: "SUBARU OUTBACK",
                bodyType: "Station Wagon",
                image: "images/outback2.jpg",
                images: [
                    "images/outback1.jpg",
                    "images/outback3.jpg"
                ],
                condition: 5,
                price: "KES 3,600,000",
                source: "fresh",
                registered: false,
                fuelType: "petrol",
                color: "white", // NEW: Color property
                specs: {
                    year: "2018",
                    location: "Celimax Motors",
                    drive: "AWD",
                    mileage: "52,000 km",
                    engine: "2.5L",
                    fuel: "Petrol",
                    horsepower: "175 hp",
                    transmission: "CVT",
                    torque: "235 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 9.5 secs",
                    color: "Green" // NEW: Added color to specs
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "Roof Rails",
                    "Reverse Camera",
                    "Power Windows",
                    "Keyless Entry",
                    "Touchscreen Infotainment",
                    "All-Wheel Drive"
                ]
            },
             {
                id: 9,
                name: "TOYOTA AXIO",
                bodyType: "Sedan",
                image: "images/axio_left_back.jpg",
                images: [
                    "images/axio_right.jpg",
                    "images/axio_wing.jpg"
                ],
                condition: 5,
                price: "KES 2,100,000",
                source: "fresh",
                registered: false,
                fuelType: "petrol",
                color: "Grey", // NEW: Color property
                specs: {
                    year: "2018",
                    location: "Celimax Motors",
                    drive: "AWD",
                    mileage: "52,000 km",
                    engine: "2.5L",
                    fuel: "Petrol",
                    horsepower: "175 hp",
                    transmission: "CVT",
                    torque: "235 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 9.5 secs",
                    color: "Green" // NEW: Added color to specs
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "Roof Rails",
                    "Reverse Camera",
                    "Power Windows",
                    "Keyless Entry",
                    "Touchscreen Infotainment",
                    "All-Wheel Drive"
                ]
            },
            {
                id: 10,
                name: "MAZDA CX-5",
                bodyType: "SUV",
                image: "images/black_cx5.jpg",
                images: [
                    "images/black_cx53.jpg",
                    "images/black_cx54.jpg"
                ],
                condition: 5,
                price: "KES 3,100,000",
                source: "fresh",
                registered: false,
                fuelType: "petrol",
                color: "Black", // NEW: Color property
                specs: {
                    year: "2018",
                    location: "Celimax Motors",
                    drive: "AWD",
                    mileage: "52,000 km",
                    engine: "2.5L",
                    fuel: "Petrol",
                    horsepower: "175 hp",
                    transmission: "CVT",
                    torque: "235 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 9.5 secs",
                    color: "Green" // NEW: Added color to specs
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "Roof Rails",
                    "Reverse Camera",
                    "Power Windows",
                    "Keyless Entry",
                    "Touchscreen Infotainment",
                    "All-Wheel Drive"
                ]
            },
            {
                id: 11,
                name: "TOYOTA CROWN",
                bodyType: "Sedan",
                image: "images/crown_2.jpg",
                images: [
                    "images/crown_4.jpg",
                    "images/crown.jpg"
                ],
                condition: 5,
                price: "KES 3,700,000",
                source: "fresh",
                registered: false,
                fuelType: "petrol",
                color: "White", // NEW: Color property
                specs: {
                    year: "2018",
                    location: "Celimax Motors",
                    drive: "AWD",
                    mileage: "52,000 km",
                    engine: "2.5L",
                    fuel: "Petrol",
                    horsepower: "175 hp",
                    transmission: "CVT",
                    torque: "235 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 9.5 secs",
                    color: "Green" // NEW: Added color to specs
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "Roof Rails",
                    "Reverse Camera",
                    "Power Windows",
                    "Keyless Entry",
                    "Touchscreen Infotainment",
                    "All-Wheel Drive"
                ]
            },
            {
                id: 12,
                name: "TOYOTA FIELDER",
                bodyType: "Station Wagon",
                image: "images/fielder_silver3.jpg",
                images: [
                    "images/fielder_silver1.jpg",
                    "images/fielder_silver2.jpg"
                ],
                condition: 5,
                price: "KES 3,700,000",
                source: "fresh",
                registered: false,
                fuelType: "petrol",
                color: "Silver", // NEW: Color property
                specs: {
                    year: "2018",
                    location: "Celimax Motors",
                    drive: "AWD",
                    mileage: "52,000 km",
                    engine: "2.5L",
                    fuel: "Petrol",
                    horsepower: "175 hp",
                    transmission: "CVT",
                    torque: "235 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 9.5 secs",
                    color: "Green" // NEW: Added color to specs
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "Roof Rails",
                    "Reverse Camera",
                    "Power Windows",
                    "Keyless Entry",
                    "Touchscreen Infotainment",
                    "All-Wheel Drive"
                ]
            },
             {
                id: 13,
                name: "TOYOTA PROBOX",
                bodyType: "VAN",
                image: "images/probox_front.jpg",
                images: [
                    "images/probox _back.jpg",
                    "images/probox_left.jpg"
                ],
                condition: 5,
                price: "KES 1,800,000",
                source: "fresh",
                registered: false,
                fuelType: "petrol",
                color: "White", // NEW: Color property
                specs: {
                    year: "2018",
                    location: "Celimax Motors",
                    drive: "AWD",
                    mileage: "52,000 km",
                    engine: "2.5L",
                    fuel: "Petrol",
                    horsepower: "175 hp",
                    transmission: "CVT",
                    torque: "235 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 9.5 secs",
                    color: "Green" // NEW: Added color to specs
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "Roof Rails",
                    "Reverse Camera",
                    "Power Windows",
                    "Keyless Entry",
                    "Touchscreen Infotainment",
                    "All-Wheel Drive"
                ]
            },
            {
                id: 14,
                name: "TOYOTA NOAH",
                bodyType: "MPV",
                image: "images/noah2.jpg",
                images: [
                    "images/noah3.jpg",
                    "images/noah1.jpg"
                ],
                condition: 5,
                price: "KES 2,800,000",
                source: "fresh",
                registered: false,
                fuelType: "petrol",
                color: "Silver", // NEW: Color property
                specs: {
                    year: "2018",
                    location: "Celimax Motors",
                    drive: "AWD",
                    mileage: "52,000 km",
                    engine: "2.5L",
                    fuel: "Petrol",
                    horsepower: "175 hp",
                    transmission: "CVT",
                    torque: "235 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 9.5 secs",
                    color: "Green" // NEW: Added color to specs
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "Roof Rails",
                    "Reverse Camera",
                    "Power Windows",
                    "Keyless Entry",
                    "Touchscreen Infotainment",
                    "All-Wheel Drive"
                ]
            },
             {
                id: 15,
                name: "TOYOTA PREMIO 260",
                bodyType: "Sedan",
                image: "images/premio.jpg",
                images: [
                    "..",
                    ".."
                ],
                condition: 3,
                price: "KES 1,500,000",
                source: "local",
                registered: false,
                fuelType: "petrol",
                color: "Maroon", // NEW: Color property
                specs: {
                    year: "2018",
                    location: "Celimax Motors",
                    drive: "AWD",
                    mileage: "152,000 km",
                    engine: "2.5L",
                    fuel: "Petrol",
                    horsepower: "175 hp",
                    transmission: "CVT",
                    torque: "235 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 9.5 secs",
                    color: "Green" // NEW: Added color to specs
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "Roof Rails",
                    "Reverse Camera",
                    "Power Windows",
                    "Keyless Entry",
                    "Touchscreen Infotainment",
                    "All-Wheel Drive"
                ]
            },
            {
                id: 16,
                name: "TOYOTA HIACE",
                bodyType: "VAN",
                image: "images/WhatsApp Image 2025-10-11 at 15.57.46_ac0d341b.jpg",
                images: [
                    "images/WhatsApp Image 2025-10-11 at 15.57.45_648d42b8.jpg",
                    "images/WhatsApp Image 2025-10-11 at 15.57.45_0a6113b2.jpg"
                ],
                condition: 5,
                price: "KES 3,600,000",
                source: "fresh",
                registered: false,
                fuelType: "petrol",
                color: "White", // NEW: Color property
                specs: {
                    year: "2018",
                    location: "Celimax Motors",
                    drive: "AWD",
                    mileage: "152,000 km",
                    engine: "2.5L",
                    fuel: "Petrol",
                    horsepower: "175 hp",
                    transmission: "CVT",
                    torque: "235 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 9.5 secs",
                    color: "Green" // NEW: Added color to specs
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "Roof Rails",
                    "Reverse Camera",
                    "Power Windows",
                    "Keyless Entry",
                    "Touchscreen Infotainment",
                    "All-Wheel Drive"
                ]
            },
            {
                id: 17,
                name: "NISSAN WINGROAD",
                bodyType: "Station Wagon",
                image: "images/wingroad.jpg",
                images: [
                    "..",
                    ".."
                ],
                condition: 3,
                price: "KES 1,800,000",
                source: "fresh",
                registered: true,
                fuelType: "petrol",
                color: "Silver", // NEW: Color property
                specs: {
                    year: "2018",
                    location: "Celimax Motors",
                    drive: "AWD",
                    mileage: "152,000 km",
                    engine: "2.5L",
                    fuel: "Petrol",
                    horsepower: "175 hp",
                    transmission: "CVT",
                    torque: "235 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 9.5 secs",
                    color: "Green" // NEW: Added color to specs
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "Roof Rails",
                    "Reverse Camera",
                    "Power Windows",
                    "Keyless Entry",
                    "Touchscreen Infotainment",
                    "All-Wheel Drive"
                ]
            },
             {
                id: 18,
                name: "VOLKS WAGEN TOURAN",
                bodyType: "MPV",
                image: "images/touran1.jpg",
                images: [
                    "..",
                    ".."
                ],
                condition: 3,
                price: "KES 1,900,000",
                source: "fresh",
                registered: false,
                fuelType: "petrol",
                color: "White", // NEW: Color property
                specs: {
                    year: "2018",
                    location: "Celimax Motors",
                    drive: "AWD",
                    mileage: "152,000 km",
                    engine: "2.5L",
                    fuel: "Petrol",
                    horsepower: "175 hp",
                    transmission: "CVT",
                    torque: "235 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 9.5 secs",
                    color: "Green" // NEW: Added color to specs
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "Roof Rails",
                    "Reverse Camera",
                    "Power Windows",
                    "Keyless Entry",
                    "Touchscreen Infotainment",
                    "All-Wheel Drive"
                ]
            },
            {
                id: 19,
                name: "TOYOTA VOXY",
                bodyType: "MPV",
                image: "images/voxy1.jpg",
                images: [
                    "images/voxy2.jpg",
                    "images/vvoxy2.jpg"
                ],
                condition: 3,
                price: "KES 1,900,000",
                source: "fresh",
                registered: false,
                fuelType: "petrol",
                color: "White", // NEW: Color property
                specs: {
                    year: "2018",
                    location: "Celimax Motors",
                    drive: "AWD",
                    mileage: "152,000 km",
                    engine: "2.5L",
                    fuel: "Petrol",
                    horsepower: "175 hp",
                    transmission: "CVT",
                    torque: "235 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 9.5 secs",
                    color: "Green" // NEW: Added color to specs
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "Roof Rails",
                    "Reverse Camera",
                    "Power Windows",
                    "Keyless Entry",
                    "Touchscreen Infotainment",
                    "All-Wheel Drive"
                ]
            },
             {
                id: 20,
                name: "SUZUKI JIMNY",
                bodyType: "SUV",
                image: "images/suzuki1.jpg",
                images: [
                    "images/suzuki3.jpg",
                    "images/suzuki2.jpg"
                ],
                condition: 3,
                price: "KES 1,900,000",
                source: "fresh",
                registered: false,
                fuelType: "petrol",
                color: "Silver", // NEW: Color property
                specs: {
                    year: "2018",
                    location: "Celimax Motors",
                    drive: "AWD",
                    mileage: "152,000 km",
                    engine: "2.5L",
                    fuel: "Petrol",
                    horsepower: "175 hp",
                    transmission: "CVT",
                    torque: "235 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 9.5 secs",
                    color: "Green" // NEW: Added color to specs
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "Roof Rails",
                    "Reverse Camera",
                    "Power Windows",
                    "Keyless Entry",
                    "Touchscreen Infotainment",
                    "All-Wheel Drive"
                ]
            },
            {
                id: 21,
                name: "TOYOTA PRADO",
                bodyType: "SUV",
                image: "images/prado2008.jpg",
                images: [
                    "..",
                    ".."
                ],
                condition: 3,
                price: "KES 1,900,000",
                source: "local",
                registered: true,
                fuelType: "petrol",
                color: "Black", // NEW: Color property
                specs: {
                    year: "2008",
                    location: "Celimax Motors",
                    drive: "AWD",
                    mileage: "152,000 km",
                    engine: "2.5L",
                    fuel: "Petrol",
                    horsepower: "175 hp",
                    transmission: "CVT",
                    torque: "235 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 9.5 secs",
                    color: "Green" // NEW: Added color to specs
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "Roof Rails",
                    "Reverse Camera",
                    "Power Windows",
                    "Keyless Entry",
                    "Touchscreen Infotainment",
                    "All-Wheel Drive"
                ]
            },
             {
                id: 22,
                name: "NISSAN X-TRAIL",
                bodyType: "SUV",
                image: "images/xtrail_front.jpg",
                images: [
                    "..",
                    ".."
                ],
                condition: 5,
                price: "KES 3,300,000",
                source: "fresh",
                registered: false,
                fuelType: "petrol",
                color: "Red", // NEW: Color property
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "AWD",
                    mileage: "152,000 km",
                    engine: "2.5L",
                    fuel: "Petrol",
                    horsepower: "175 hp",
                    transmission: "CVT",
                    torque: "235 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 9.5 secs",
                    color: "Green" // NEW: Added color to specs
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "Roof Rails",
                    "Reverse Camera",
                    "Power Windows",
                    "Keyless Entry",
                    "Touchscreen Infotainment",
                    "All-Wheel Drive"
                ]
            },
             {
                id: 23,
                name: "NISSAN JUKE",
                bodyType: "SUV",
                image: "images/juke1.jpg",
                images: [
                    "images/juke2.jpg",
                    ".."
                ],
                condition: 5,
                price: "KES 1,800,000",
                source: "fresh",
                registered: false,
                fuelType: "petrol",
                color: "Red", // NEW: Color property
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "AWD",
                    mileage: "152,000 km",
                    engine: "2.5L",
                    fuel: "Petrol",
                    horsepower: "175 hp",
                    transmission: "CVT",
                    torque: "235 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 9.5 secs",
                    color: "Green" // NEW: Added color to specs
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "Roof Rails",
                    "Reverse Camera",
                    "Power Windows",
                    "Keyless Entry",
                    "Touchscreen Infotainment",
                    "All-Wheel Drive"
                ]
            },
            {
                id: 24,
                name: "TOYOTA PRADO",
                bodyType: "Crossover",
                image: "images/prado_front.jpg",
                images: [
                    "images/prado_back.jpg",
                    ".."
                ],
                condition: 5,
                price: "KES 7,300,000",
                source: "fresh",
                registered: false,
                fuelType: "petrol",
                color: "White", // NEW: Color property
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "AWD",
                    mileage: "152,000 km",
                    engine: "2.5L",
                    fuel: "Petrol",
                    horsepower: "175 hp",
                    transmission: "CVT",
                    torque: "235 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 9.5 secs",
                    color: "Green" // NEW: Added color to specs
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "Roof Rails",
                    "Reverse Camera",
                    "Power Windows",
                    "Keyless Entry",
                    "Touchscreen Infotainment",
                    "All-Wheel Drive"
                ]
            },
            {
                id: 25,
                name: "SUBARU IMPREZA",
                bodyType: "hatchback",
                image: "images/impreza3.jpg",
                images: [
                    "images/impreza2.jpg",
                    ".."
                ],
                condition: 5,
                price: "KES 3,300,000",
                source: "fresh",
                registered: false,
                fuelType: "petrol",
                color: "Light Blue", // NEW: Color property
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "AWD",
                    mileage: "152,000 km",
                    engine: "2.5L",
                    fuel: "Petrol",
                    horsepower: "175 hp",
                    transmission: "CVT",
                    torque: "235 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 9.5 secs",
                    color: "Green" // NEW: Added color to specs
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "Roof Rails",
                    "Reverse Camera",
                    "Power Windows",
                    "Keyless Entry",
                    "Touchscreen Infotainment",
                    "All-Wheel Drive"
                ]
            },
            {
                id: 26,
                name: "HONDA FIT",
                bodyType: "hatchback",
                image: "images/honda1.jpg",
                images: [
                    "images/honda2.jpg",
                    "images/honda3.jpg"
                ],
                condition: 5,
                price: "KES 1,500,000",
                source: "fresh",
                registered: false,
                fuelType: "petrol",
                color: "Silver", // NEW: Color property
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "AWD",
                    mileage: "152,000 km",
                    engine: "2.5L",
                    fuel: "Petrol",
                    horsepower: "175 hp",
                    transmission: "CVT",
                    torque: "235 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 9.5 secs",
                    color: "Green" // NEW: Added color to specs
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "Roof Rails",
                    "Reverse Camera",
                    "Power Windows",
                    "Keyless Entry",
                    "Touchscreen Infotainment",
                    "All-Wheel Drive"
                ]
            },
            {
                id: 27,
                name: "TOYOTA HILUX",
                bodyType: "Pickup",
                image: "images/hilux_front.jpg",
                images: [
                    "images/hilux_back.jpg",
                    ".."
                ],
                condition: 5,
                price: "KES 5,500,000",
                source: "fresh",
                registered: false,
                fuelType: "petrol",
                color: "White", // NEW: Color property
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "AWD",
                    mileage: "152,000 km",
                    engine: "2.5L",
                    fuel: "Petrol",
                    horsepower: "175 hp",
                    transmission: "CVT",
                    torque: "235 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 9.5 secs",
                    color: "Green" // NEW: Added color to specs
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "Roof Rails",
                    "Reverse Camera",
                    "Power Windows",
                    "Keyless Entry",
                    "Touchscreen Infotainment",
                    "All-Wheel Drive"
                ]
            },
            {
                id: 28,
                name: "MAZDA DEMIO",
                bodyType: "Hatchback",
                image: "images/demio_silver_back.jpg",
                images: [
                    "images/demio_silver.jpg",
                    "images/demio_silver_int.jpg"
                ],
                condition: 5,
                price: "KES 1,800,000",
                source: "fresh",
                registered: false,
                fuelType: "petrol",
                color: "Silver", // NEW: Color property
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "AWD",
                    mileage: "152,000 km",
                    engine: "2.5L",
                    fuel: "Petrol",
                    horsepower: "175 hp",
                    transmission: "CVT",
                    torque: "235 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 9.5 secs",
                    color: "Green" // NEW: Added color to specs
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "Roof Rails",
                    "Reverse Camera",
                    "Power Windows",
                    "Keyless Entry",
                    "Touchscreen Infotainment",
                    "All-Wheel Drive"
                ]
            },
             {
                id: 29,
                name: "MAZDA CX5",
                bodyType: "SUV",
                image: "images/cx5_front.jpg",
                images: [
                    "images/cx5_backk.jpg",
                    ".."
                ],
                condition: 5,
                price: "KES 2,800,000",
                source: "fresh",
                registered: false,
                fuelType: "petrol",
                color: "Dark", // NEW: Color property
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "AWD",
                    mileage: "152,000 km",
                    engine: "2.5L",
                    fuel: "Petrol",
                    horsepower: "175 hp",
                    transmission: "CVT",
                    torque: "235 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 9.5 secs",
                    color: "Green" // NEW: Added color to specs
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "Roof Rails",
                    "Reverse Camera",
                    "Power Windows",
                    "Keyless Entry",
                    "Touchscreen Infotainment",
                    "All-Wheel Drive"
                ]
            },
            {
                id: 29,
                name: "MAZDA CX3",
                bodyType: "SUV",
                image: "images/cx3_2.jpg",
                images: [
                    "images/cx3_1.jpg",
                    "images/cx3_5.jpg"
                ],
                condition: 5,
                price: "KES 2,800,000",
                source: "fresh",
                registered: false,
                fuelType: "petrol",
                color: "Black", // NEW: Color property
                specs: {
                    year: "2019",
                    location: "Celimax Motors",
                    drive: "AWD",
                    mileage: "152,000 km",
                    engine: "2.5L",
                    fuel: "Petrol",
                    horsepower: "175 hp",
                    transmission: "CVT",
                    torque: "235 Nm",
                    aspiration: "Naturally Aspirated",
                    acceleration: "(0-100kph) 9.5 secs",
                    color: "Green" // NEW: Added color to specs
                },
                package: [
                    "Leather Seats",
                    "Alloy Wheels",
                    "Roof Rails",
                    "Reverse Camera",
                    "Power Windows",
                    "Keyless Entry",
                    "Touchscreen Infotainment",
                    "All-Wheel Drive"
                ]
            }











        ];

        // NEW: Direct Import Car Data
        const directImportCars = [
            {
                id: 101,
                name: "Toyota Land Cruiser 300",
                bodyType: "SUV",
                image: "https://cdn.pixabay.com/photo/2021/09/07/07/11/car-6602386_1280.jpg",
                price: "KES 18,500,000",
                location: "Japan",
                shippingFee: "KES 450,000",
                estimatedDelivery: "4-6 weeks",
                specs: {
                    year: "2023",
                    engine: "3.5L V6 Twin Turbo",
                    fuel: "Petrol",
                    transmission: "10-Speed Automatic",
                    drive: "4WD",
                    mileage: "0 km"
                }
            },
            {
                id: 102,
                name: "Mercedes-Benz GLE 450",
                bodyType: "SUV",
                image: "https://cdn.pixabay.com/photo/2019/08/15/08/25/mercedes-benz-4407420_1280.jpg",
                price: "KES 12,800,000",
                location: "Germany",
                shippingFee: "KES 380,000",
                estimatedDelivery: "3-5 weeks",
                specs: {
                    year: "2022",
                    engine: "3.0L Inline-6 Turbo",
                    fuel: "Petrol",
                    transmission: "9-Speed Automatic",
                    drive: "4MATIC",
                    mileage: "5,000 km"
                }
            },
            {
                id: 103,
                name: "BMW X5 M Competition",
                bodyType: "SUV",
                image: "https://cdn.pixabay.com/photo/2021/01/11/14/56/bmw-5908993_1280.jpg",
                price: "KES 16,200,000",
                location: "USA",
                shippingFee: "KES 520,000",
                estimatedDelivery: "5-7 weeks",
                specs: {
                    year: "2022",
                    engine: "4.4L V8 Twin Turbo",
                    fuel: "Petrol",
                    transmission: "8-Speed Automatic",
                    drive: "xDrive",
                    mileage: "2,500 km"
                }
            },
            {
                id: 104,
                name: "Audi Q7",
                bodyType: "SUV",
                image: "https://cdn.pixabay.com/photo/2015/05/28/23/12/auto-788744_1280.jpg",
                price: "KES 11,500,000",
                location: "Germany",
                shippingFee: "KES 350,000",
                estimatedDelivery: "4-6 weeks",
                specs: {
                    year: "2021",
                    engine: "3.0L V6 Turbo",
                    fuel: "Petrol",
                    transmission: "8-Speed Automatic",
                    drive: "Quattro",
                    mileage: "8,000 km"
                }
            },
            {
                id: 105,
                name: "Lexus RX 350",
                bodyType: "SUV",
                image: "https://cdn.pixabay.com/photo/2016/11/23/17/25/car-1853936_1280.jpg",
                price: "KES 9,800,000",
                location: "Japan",
                shippingFee: "KES 320,000",
                estimatedDelivery: "3-5 weeks",
                specs: {
                    year: "2022",
                    engine: "3.5L V6",
                    fuel: "Petrol",
                    transmission: "8-Speed Automatic",
                    drive: "AWD",
                    mileage: "3,500 km"
                }
            },
            {
                id: 106,
                name: "Porsche Cayenne",
                bodyType: "SUV",
                image: "https://cdn.pixabay.com/photo/2018/12/13/20/53/porsche-3873401_1280.jpg",
                price: "KES 22,500,000",
                location: "Germany",
                shippingFee: "KES 580,000",
                estimatedDelivery: "5-7 weeks",
                specs: {
                    year: "2023",
                    engine: "3.0L V6 Turbo",
                    fuel: "Petrol",
                    transmission: "8-Speed Automatic",
                    drive: "AWD",
                    mileage: "0 km"
                }
            }
        ];

        // NEW: Blog Posts Data
        const blogPosts = [
            {
                id: 1,
                title: "Audi's Struggle with Kenyan Floods",
                image: "https://cdn.pixabay.com/photo/2015/05/15/14/46/bmw-768770_1280.jpg",
                excerpt: "How recent flooding in Kenya has impacted luxury car imports and what Audi owners need to know about water damage prevention...",
                content: `
                    <img src="https://cdn.pixabay.com/photo/2015/05/15/14/46/bmw-768770_1280.jpg" alt="Audi Floods" class="blog-post-image">
                    <div class="blog-post-text">
                        <p>The recent unprecedented flooding in Kenya has had a significant impact on the automotive industry, particularly affecting luxury car imports. Audi, known for its sophisticated electronics and advanced systems, has been particularly vulnerable to water damage.</p>
                        
                        <p>At Celimax Motors, we've seen an increase in inquiries about flood-damaged vehicles and how to identify them. Water damage can be particularly insidious in luxury vehicles because it may not be immediately visible but can cause electrical issues months or even years later.</p>
                        
                        <h4>Identifying Flood-Damaged Vehicles</h4>
                        <p>When inspecting a vehicle for potential flood damage, pay attention to these key indicators:</p>
                        <ul>
                            <li>Musty odor in the interior</li>
                            <li>Water lines in the engine bay or trunk</li>
                            <li>Rust in unusual places like seat brackets or pedal assemblies</li>
                            <li>Fogging inside instrument clusters or headlights</li>
                            <li>Malfunctioning electronics that can't be easily explained</li>
                        </ul>
                        
                        <p>For Audi owners specifically, water damage can be particularly problematic due to the complex electrical systems and numerous control modules throughout the vehicle. A professional inspection is always recommended when purchasing any used luxury vehicle.</p>
                        
                        <h4>Prevention Tips</h4>
                        <p>If you own an Audi or any luxury vehicle in flood-prone areas:</p>
                        <ul>
                            <li>Park on higher ground during heavy rains</li>
                            <li>Consider waterproof undercoating</li>
                            <li>Install water detection sensors in your garage</li>
                            <li>Maintain comprehensive insurance coverage</li>
                        </ul>
                        
                        <p>At Celimax Motors, all our vehicles undergo rigorous inspections to ensure they're free from flood damage and other issues. We provide complete vehicle history reports so you can buy with confidence.</p>
                    </div>
                `
            },
            {
                id: 2,
                title: "5 Essential Car Maintenance Tips for Kenyan Roads",
                image: "https://cdn.pixabay.com/photo/2016/11/23/17/25/car-1853936_1280.jpg",
                excerpt: "Keep your vehicle in top condition with these practical maintenance tips tailored for Kenya's diverse road conditions...",
                content: `
                    <img src="https://cdn.pixabay.com/photo/2016/11/23/17/25/car-1853936_1280.jpg" alt="Car Maintenance" class="blog-post-image">
                    <div class="blog-post-text">
                        <p>Kenya's diverse road conditions - from smooth highways to challenging rural roads - require special attention to vehicle maintenance. Proper care not only extends your vehicle's lifespan but also ensures your safety on the road.</p>
                        
                        <h4>1. Regular Oil Changes</h4>
                        <p>Dusty conditions common in many parts of Kenya can contaminate engine oil faster than normal. We recommend changing your oil every 5,000 km instead of the standard 10,000 km, especially if you frequently drive on unpaved roads.</p>
                        
                        <h4>2. Tire Care and Rotation</h4>
                        <p>Kenya's varying road surfaces can cause uneven tire wear. Rotate your tires every 10,000 km and check pressure weekly. Consider all-terrain tires if you frequently drive on rough roads.</p>
                        
                        <h4>3. Suspension System Checks</h4>
                        <p>Potholes and rough roads take a toll on your suspension. Have your shocks, struts, and bushings inspected every 15,000 km. Listen for unusual noises when driving over bumps.</p>
                        
                        <h4>4. Air Filter Maintenance</h4>
                        <p>Dusty conditions mean your air filter works harder. Check and clean or replace your air filter every 10,000 km. A clogged filter reduces fuel efficiency and engine performance.</p>
                        
                        <h4>5. Brake System Attention</h4>
                        <p>Kenya's hilly terrain and stop-and-go city traffic demand more from your brakes. Have your brake pads, rotors, and fluid checked regularly. Listen for squealing or grinding noises.</p>
                        
                        <p>At Celimax Motors, we offer comprehensive maintenance packages tailored for Kenyan driving conditions. Our certified technicians understand the unique challenges faced by vehicles in our region.</p>
                    </div>
                `
            },
            {
                id: 3,
                title: "The Future of Electric Vehicles in Kenya",
                image: "https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629_1280.png",
                excerpt: "As Kenya embraces renewable energy, we explore the growing market for electric vehicles and what it means for car buyers...",
                content: `
                    <img src="https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629_1280.png" alt="Electric Vehicles" class="blog-post-image">
                    <div class="blog-post-text">
                        <p>Kenya is positioning itself as a leader in renewable energy in Africa, with over 90% of its electricity coming from green sources. This creates a perfect environment for electric vehicle (EV) adoption, and we're already seeing growing interest in EVs among Kenyan consumers.</p>
                        
                        <h4>Current EV Landscape in Kenya</h4>
                        <p>While still in its early stages, Kenya's EV market is growing rapidly. Several companies have begun importing electric vehicles, and charging infrastructure is slowly expanding, particularly in urban centers like Nairobi and Mombasa.</p>
                        
                        <p>The government has shown support through reduced import duties on electric vehicles and components, making EVs more accessible to Kenyan buyers.</p>
                        
                        <h4>Benefits for Kenyan Drivers</h4>
                        <p>Electric vehicles offer several advantages in the Kenyan context:</p>
                        <ul>
                            <li><strong>Lower operating costs:</strong> Electricity is cheaper than petrol or diesel</li>
                            <li><strong>Reduced maintenance:</strong> Fewer moving parts mean less maintenance</li>
                            <li><strong>Environmental benefits:</strong> Zero emissions align with Kenya's green energy focus</li>
                            <li><strong>Performance:</strong> Instant torque provides excellent acceleration</li>
                        </ul>
                        
                        <h4>Challenges and Considerations</h4>
                        <p>Despite the advantages, there are challenges to widespread EV adoption in Kenya:</p>
                        <ul>
                            <li>Limited charging infrastructure outside major cities</li>
                            <li>Higher upfront costs compared to conventional vehicles</li>
                            <li>Limited model availability and after-sales support</li>
                            <li>Range anxiety for long-distance travel</li>
                        </ul>
                        
                        <h4>The Road Ahead</h4>
                        <p>At Celimax Motors, we're excited about the future of electric vehicles in Kenya. We're closely monitoring developments in the EV space and plan to introduce electric models to our inventory as the market matures and infrastructure improves.</p>
                        
                        <p>For now, hybrid vehicles offer a practical middle ground, providing some electric benefits while maintaining the flexibility of petrol power. We have several hybrid models available that are perfect for Kenyan drivers looking to reduce their fuel consumption and environmental impact.</p>
                    </div>
                `
            },
            {
                id: 4,
                title: "Understanding Car Financing Options in Kenya",
                image: "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_1280.jpg",
                excerpt: "A comprehensive guide to the various financing options available for car buyers in Kenya, from bank loans to hire purchase...",
                content: `
                    <img src="https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_1280.jpg" alt="Car Financing" class="blog-post-image">
                    <div class="blog-post-text">
                        <p>Purchasing a vehicle is a significant financial decision, and understanding your financing options is crucial. In Kenya, several financing methods are available to help you acquire your dream car.</p>
                        
                        <h4>1. Bank Loans</h4>
                        <p>Most commercial banks in Kenya offer car loans with varying terms and interest rates. Typically, you'll need:</p>
                        <ul>
                            <li>Proof of income (payslips or business records)</li>
                            <li>Bank statements (usually 3-6 months)</li>
                            <li>Identification documents</li>
                            <li>Down payment (usually 20-30% of the vehicle price)</li>
                        </ul>
                        
                        <h4>2. Hire Purchase</h4>
                        <p>Hire purchase agreements allow you to use the vehicle while paying for it in installments. The vehicle remains the property of the financier until the final payment is made. This option often requires less documentation than bank loans.</p>
                        
                        <h4>3. SACCO Loans</h4>
                        <p>Many Savings and Credit Cooperative Organizations (SACCOs) offer vehicle loans to their members at competitive rates. These loans often have more flexible terms than traditional bank loans.</p>
                        
                        <h4>4. Dealer Financing</h4>
                        <p>Some dealerships, including Celimax Motors, offer in-house financing options. These are often tailored specifically for car purchases and may have more flexible approval criteria.</p>
                        
                        <h4>5. Logbook Loans</h4>
                        <p>If you already own a vehicle, you can use it as collateral for a loan to purchase another car. This option provides quick access to funds but typically comes with higher interest rates.</p>
                        
                        <h4>Tips for Choosing the Right Financing</h4>
                        <ul>
                            <li>Compare interest rates from multiple lenders</li>
                            <li>Consider the total cost of the loan, not just monthly payments</li>
                            <li>Check for hidden fees and charges</li>
                            <li>Ensure the repayment period aligns with your financial goals</li>
                            <li>Read and understand all terms and conditions before signing</li>
                        </ul>
                        
                        <p>At Celimax Motors, we work with several financial partners to help our customers find the best financing options for their needs. Our team can guide you through the process and help you understand the various options available.</p>
                    </div>
                `
            },
            {
                id: 5,
                title: "Car Insurance: What You Need to Know in Kenya",
                image: "https://cdn.pixabay.com/photo/2015/05/28/23/12/auto-788747_1280.jpg",
                excerpt: "Navigating the complexities of car insurance in Kenya - from comprehensive to third-party coverage and everything in between...",
                content: `
                    <img src="https://cdn.pixabay.com/photo/2015/05/28/23/12/auto-788747_1280.jpg" alt="Car Insurance" class="blog-post-image">
                    <div class="blog-post-text">
                        <p>Car insurance is not just a legal requirement in Kenya - it's essential financial protection for one of your most valuable assets. Understanding the different types of coverage available can help you make informed decisions about protecting your vehicle.</p>
                        
                        <h4>Types of Car Insurance in Kenya</h4>
                        
                        <h5>1. Third-Party Insurance</h5>
                        <p>This is the minimum legal requirement for all vehicles in Kenya. It covers:</p>
                        <ul>
                            <li>Bodily injury to other people</li>
                            <li>Damage to other people's property</li>
                            <li>Death benefits for third parties</li>
                        </ul>
                        <p>It does not cover damage to your own vehicle or injuries to yourself.</p>
                        
                        <h5>2. Comprehensive Insurance</h5>
                        <p>This provides the broadest coverage, including:</p>
                        <ul>
                            <li>All third-party coverage</li>
                            <li>Damage to your own vehicle from accidents</li>
                            <li>Theft and fire damage</li>
                            <li>Natural disasters and vandalism</li>
                            <li>Personal accident cover for driver and passengers</li>
                        </ul>
                        
                        <h5>3. Third-Party, Fire and Theft</h5>
                        <p>A middle ground between third-party and comprehensive coverage that adds protection against fire damage and theft to the basic third-party coverage.</p>
                        
                        <h4>Factors Affecting Insurance Premiums</h4>
                        <p>Several factors influence how much you'll pay for car insurance:</p>
                        <ul>
                            <li><strong>Vehicle value:</strong> More expensive cars cost more to insure</li>
                            <li><strong>Driver's age and experience:</strong> Younger, less experienced drivers pay higher premiums</li>
                            <li><strong>Claims history:</strong> Drivers with previous claims may pay more</li>
                            <li><strong>Vehicle use:</strong> Commercial vehicles typically have higher premiums</li>
                            <li><strong>Security features:</strong> Anti-theft devices can lower premiums</li>
                            <li><strong>Location:</strong> Areas with higher accident or theft rates may have higher premiums</li>
                        </ul>
                        
                        <h4>Tips for Choosing the Right Insurance</h4>
                        <ul>
                            <li>Compare quotes from multiple insurers</li>
                            <li>Consider the insurer's reputation and claims settlement process</li>
                            <li>Understand the excess (deductible) amounts</li>
                            <li>Check what additional benefits are included</li>
                            <li>Review the policy annually to ensure it still meets your needs</li>
                        </ul>
                        
                        <p>At Celimax Motors, we can connect you with reputable insurance providers and help you understand the coverage options available for your new vehicle.</p>
                    </div>
                `
            },
            {
                id: 6,
                title: "The Complete Guide to Importing a Car to Kenya",
                image: "https://cdn.pixabay.com/photo/2016/12/07/21/01/car-1890494_1280.jpg",
                excerpt: "Step-by-step guide to importing your dream car to Kenya, covering taxes, shipping, customs clearance, and registration...",
                content: `
                    <img src="https://cdn.pixabay.com/photo/2016/12/07/21/01/car-1890494_1280.jpg" alt="Car Import" class="blog-post-image">
                    <div class="blog-post-text">
                        <p>Importing a vehicle to Kenya can be a complex process, but with the right information and preparation, it can be a rewarding way to get exactly the car you want. This guide walks you through the entire process from start to finish.</p>
                        
                        <h4>Step 1: Research and Vehicle Selection</h4>
                        <p>Before importing, consider:</p>
                        <ul>
                            <li>Vehicle availability in the local market</li>
                            <li>Total cost including taxes and shipping</li>
                            <li>Right-hand drive vs. left-hand drive (Kenya requires right-hand drive)</li>
                            <li>Vehicle age restrictions (generally under 8 years for personal use)</li>
                        </ul>
                        
                        <h4>Step 2: Calculate Total Costs</h4>
                        <p>Beyond the purchase price, consider these additional costs:</p>
                        <ul>
                            <li>Import duty: 25% of CIF value</li>
                            <li>Excise duty: 20% of CIF value</li>
                            <li>VAT: 16% of CIF value plus import and excise duty</li>
                            <li>Shipping costs: Varies by origin and vehicle size</li>
                            <li>Insurance: During shipping</li>
                            <li>Port handling fees</li>
                            <li>Customs agency fees</li>
                            <li>Registration and inspection fees</li>
                        </ul>
                        
                        <h4>Step 3: Shipping and Documentation</h4>
                        <p>You'll need to arrange shipping and prepare the necessary documents:</p>
                        <ul>
                            <li>Bill of Lading</li>
                            <li>Commercial invoice</li>
                            <li>Certificate of origin</li>
                            <li>Export certificate</li>
                            <li>Insurance documents</li>
                        </ul>
                        
                        <h4>Step 4: Customs Clearance</h4>
                        <p>This is the most complex part of the process:</p>
                        <ul>
                            <li>Submit documents to Kenya Revenue Authority (KRA)</li>
                            <li>Pay all applicable taxes and duties</li>
                            <li>Vehicle inspection by Kenya Bureau of Standards (KEBS)</li>
                            <li>Clearance by customs</li>
                        </ul>
                        
                        <h4>Step 5: Registration and Licensing</h4>
                        <p>Once cleared through customs:</p>
                        <ul>
                            <li>Inspection by National Transport and Safety Authority (NTSA)</li>
                            <li>Apply for logbook and number plates</li>
                            <li>Get insurance coverage</li>
                        </ul>
                        
                        <h4>Why Use a Professional Importer?</h4>
                        <p>While it's possible to import a vehicle yourself, using a professional importer like Celimax Motors offers several advantages:</p>
                        <ul>
                            <li>Expertise in navigating complex regulations</li>
                            <li>Established relationships with shipping companies and customs officials</li>
                            <li>Ability to source quality vehicles from international markets</li>
                            <li>Handling of all paperwork and logistics</li>
                            <li>Quality assurance and inspection services</li>
                        </ul>
                        
                        <p>At Celimax Motors, we specialize in importing quality vehicles for our customers. Our direct import service handles every step of the process, ensuring a smooth and hassle-free experience from selection to delivery.</p>
                    </div>
                `
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

        // NEW: DOM Elements for Direct Import
        const directImportWindow = document.getElementById('directImportWindow');
        const directImportGrid = document.getElementById('directImportGrid');
        const backFromDirectImport = document.getElementById('backFromDirectImport');
        const directImportLink = document.getElementById('directImportLink');
        const directImportLink2 = document.getElementById('directImportLink2');
        const mobileDirectImportLink = document.getElementById('mobileDirectImportLink');

        // NEW: DOM Elements for Compare Feature
        const compareWindow = document.getElementById('compareWindow');
        const closeCompareModal = document.getElementById('closeCompareModal');
        const compareCars = document.getElementById('compareCars');
        const backFromCompare = document.getElementById('backFromCompare');

        // NEW: DOM Elements for Advanced Filters
        const sourceFilter = document.getElementById('sourceFilter');
        const registrationFilter = document.getElementById('registrationFilter');
        const fuelFilter = document.getElementById('fuelFilter');
        const priceFilter = document.getElementById('priceFilter');

        // NEW: DOM Elements for Full Screen Windows
        const aboutWindow = document.getElementById('aboutWindow');
        const blogWindow = document.getElementById('blogWindow');
        const blogPostWindow = document.getElementById('blogPostWindow');
        const blogPostTitle = document.getElementById('blogPostTitle');
        const blogPostContent = document.getElementById('blogPostContent');
        const backFromBlogPost = document.getElementById('backFromBlogPost');
        const faqWindow = document.getElementById('faqWindow');
        const contactWindow = document.getElementById('contactWindow');
        const aboutLink = document.getElementById('aboutLink');
        const blogsLink = document.getElementById('blogsLink');
        const faqLink = document.getElementById('faqLink');
        const contactLink = document.getElementById('contactLink');
        const mobileAboutLink = document.getElementById('mobileAboutLink');
        const mobileBlogsLink = document.getElementById('mobileBlogsLink');
        const mobileFaqLink = document.getElementById('mobileFaqLink');
        const mobileContactLink = document.getElementById('mobileContactLink');
        const backFromAbout = document.getElementById('backFromAbout');
        const backFromBlog = document.getElementById('backFromBlog');
        const backFromFaq = document.getElementById('backFromFaq');
        const backFromContact = document.getElementById('backFromContact');

        // NEW: DOM Elements for Car Details Window
        const carDetailsWindow = document.getElementById('carDetailsWindow');
        const backToCarListings = document.getElementById('backToCarListings');
        const carDetailsTitle = document.getElementById('carDetailsTitle');

        // NEW: DOM Elements for Related Cars
        const relatedCarsGrid = document.getElementById('relatedCarsGrid');

        // NEW: Comparison Array
        let comparisonCars = [];

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

        // NEW: Function to display cars in the grid with filtering
        function displayCars(bodyType = 'all') {
            carsGrid.innerHTML = '';
            
            // Get filter values
            const sourceValue = sourceFilter.value;
            const registrationValue = registrationFilter.value;
            const fuelValue = fuelFilter.value;
            const priceValue = priceFilter.value;
            
            let filteredCars = bodyType === 'all' 
                ? cars 
                : cars.filter(car => car.bodyType === bodyType);
            
            // Apply advanced filters
            if (sourceValue !== 'all') {
                filteredCars = filteredCars.filter(car => car.source === sourceValue);
            }
            
            if (registrationValue !== 'all') {
                const isRegistered = registrationValue === 'registered';
                filteredCars = filteredCars.filter(car => car.registered === isRegistered);
            }
            
            if (fuelValue !== 'all') {
                filteredCars = filteredCars.filter(car => car.fuelType === fuelValue);
            }
            
            if (priceValue !== 'all') {
                const [min, max] = priceValue.split('-').map(val => parseInt(val));
                filteredCars = filteredCars.filter(car => {
                    const price = parseInt(car.price.replace(/[^\d]/g, ''));
                    return price >= min && price <= max;
                });
            }
            
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
                
                // Determine badge text
                let badgeText = '';
                if (car.source === 'fresh') {
                    badgeText = 'Fresh Import';
                } else if (car.source === 'local') {
                    badgeText = 'Locally Used';
                }
                
                // Determine registration status
                const registrationStatus = car.registered ? 'Registered' : 'Unregistered';
                
                carCard.innerHTML = `
                    <img src="${car.image}" alt="${car.name}" class="car-image">
                    ${badgeText ? `<div class="car-badge">${badgeText}</div>` : ''}
                    <div class="car-details">
                        <h3 class="car-name">${car.name}</h3>
                        <div class="car-body-type">${car.bodyType}</div>
                        <div class="car-condition">
                            <div class="condition-stars">
                                ${renderStars(car.condition)}
                            </div>
                            <span class="condition-text">${getConditionText(car.condition)}</span>
                        </div>
                        <div class="car-specs-mini">
                            <div class="car-spec-item">
                                <i class="fas fa-calendar-alt"></i>
                                <span>${car.specs.year}</span>
                            </div>
                            <div class="car-spec-item">
                                <i class="fas fa-tachometer-alt"></i>
                                <span>${car.specs.mileage}</span>
                            </div>
                            <div class="car-spec-item">
                                <i class="fas fa-gas-pump"></i>
                                <span>${car.fuelType.charAt(0).toUpperCase() + car.fuelType.slice(1)}</span>
                            </div>
                            <div class="car-spec-item">
                                <i class="fas fa-file-alt"></i>
                                <span>${registrationStatus}</span>
                            </div>
                            <!-- NEW: Color spec item -->
                            <div class="car-spec-item">
                                <i class="fas fa-palette"></i>
                                <span>${car.color}</span>
                            </div>
                        </div>
                        <div class="car-price">${car.price}</div>
                        <div class="car-actions">
                            <!-- UPDATED: Car Package and See Full Details in same row -->
                            <div class="car-action-row">
                                <button class="package-btn" data-id="${car.id}">Car Package</button>
                                <button class="details-btn" data-id="${car.id}">See Full Details</button>
                            </div>
                            <!-- Compare and Get Quote in same row -->
                            <div class="car-action-row">
                                <button class="compare-btn" data-id="${car.id}">
                                    <i class="fas fa-exchange-alt"></i> Compare
                                </button>
                                <button class="quote-btn" data-id="${car.id}">
                                    <i class="fab fa-whatsapp"></i> Get Quote
                                </button>
                            </div>
                        </div>
                    </div>
                `;
                carsGrid.appendChild(carCard);
            });

            // Add event listeners to the buttons
            document.querySelectorAll('.details-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const carId = parseInt(this.getAttribute('data-id'));
                    showCarDetailsWindow(carId); // Updated to use new window
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

            // NEW: Add event listeners to compare buttons
            document.querySelectorAll('.compare-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const carId = parseInt(this.getAttribute('data-id'));
                    addToComparison(carId, this);
                });
            });
        }

        // NEW: Function to display direct import cars
        function displayDirectImportCars() {
            directImportGrid.innerHTML = '';
            
            directImportCars.forEach(car => {
                const importCarCard = document.createElement('div');
                importCarCard.className = 'import-car-card';
                importCarCard.innerHTML = `
                    <img src="${car.image}" alt="${car.name}" class="import-car-image">
                    <div class="import-location">${car.location}</div>
                    <div class="import-car-details">
                        <h3 class="import-car-name">${car.name}</h3>
                        <div class="car-body-type">${car.bodyType}</div>
                        <div class="import-car-price">${car.price}</div>
                        <div class="import-shipping">
                            <span>Shipping: ${car.shippingFee}</span>
                            <span>Delivery: ${car.estimatedDelivery}</span>
                        </div>
                        <div class="car-specs-mini">
                            <div class="car-spec-item">
                                <i class="fas fa-calendar-alt"></i>
                                <span>${car.specs.year}</span>
                            </div>
                            <div class="car-spec-item">
                                <i class="fas fa-tachometer-alt"></i>
                                <span>${car.specs.mileage}</span>
                            </div>
                            <div class="car-spec-item">
                                <i class="fas fa-gas-pump"></i>
                                <span>${car.specs.fuel}</span>
                            </div>
                        </div>
                        <div class="import-actions">
                            <button class="import-quote-btn" data-id="${car.id}">
                                <i class="fab fa-whatsapp"></i> Get Full Quote
                            </button>
                        </div>
                    </div>
                `;
                directImportGrid.appendChild(importCarCard);
            });

            // Add event listeners to import quote buttons
            document.querySelectorAll('.import-quote-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const carId = parseInt(this.getAttribute('data-id'));
                    redirectToWhatsAppForImport(carId);
                });
            });
        }

        // NEW: Function to add car to comparison
        function addToComparison(carId, button) {
            const car = cars.find(c => c.id === carId);
            if (!car) return;
            
            // Check if car is already in comparison
            const existingIndex = comparisonCars.findIndex(c => c.id === carId);
            
            if (existingIndex !== -1) {
                // Remove from comparison
                comparisonCars.splice(existingIndex, 1);
                button.classList.remove('selected');
                button.innerHTML = '<i class="fas fa-exchange-alt"></i> Compare';
            } else {
                // Add to comparison (max 3 cars)
                if (comparisonCars.length >= 3) {
                    alert('You can compare up to 3 cars at a time. Please remove one to add another.');
                    return;
                }
                
                comparisonCars.push(car);
                button.classList.add('selected');
                button.innerHTML = '<i class="fas fa-check"></i> Added';
            }
            
            // Update comparison button visibility
            updateComparisonButton();
        }

        // NEW: Function to update comparison button
        function updateComparisonButton() {
            // Check if compare button already exists
            let compareButton = document.querySelector('.compare-selected-btn');
            
            if (comparisonCars.length > 0) {
                if (!compareButton) {
                    compareButton = document.createElement('button');
                    compareButton.className = 'compare-selected-btn';
                    compareButton.innerHTML = `<i class="fas fa-exchange-alt"></i> Compare (${comparisonCars.length})`;
                    compareButton.addEventListener('click', showComparison);
                    
                    // Position the button
                    compareButton.style.position = 'fixed';
                    compareButton.style.bottom = '120px';
                    compareButton.style.right = '2rem';
                    compareButton.style.zIndex = '1001';
                    compareButton.style.backgroundColor = '#4A6FDC';
                    compareButton.style.color = 'white';
                    compareButton.style.border = 'none';
                    compareButton.style.borderRadius = '8px';
                    compareButton.style.padding = '1rem 1.5rem';
                    compareButton.style.fontWeight = '600';
                    compareButton.style.cursor = 'pointer';
                    compareButton.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                    compareButton.style.transition = 'all 0.4s ease';
                    
                    compareButton.addEventListener('mouseenter', function() {
                        this.style.transform = 'scale(1.05)';
                    });
                    
                    compareButton.addEventListener('mouseleave', function() {
                        this.style.transform = 'scale(1)';
                    });
                    
                    document.body.appendChild(compareButton);
                } else {
                    compareButton.innerHTML = `<i class="fas fa-exchange-alt"></i> Compare (${comparisonCars.length})`;
                }
            } else if (compareButton) {
                compareButton.remove();
            }
        }

        // NEW: Function to show comparison in full window
        function showComparison() {
            if (comparisonCars.length < 2) {
                alert('Please select at least 2 cars to compare');
                return;
            }
            
            compareCars.innerHTML = '';
            
            comparisonCars.forEach(car => {
                const compareCar = document.createElement('div');
                compareCar.className = 'compare-car';
                compareCar.innerHTML = `
                    <img src="${car.image}" alt="${car.name}" class="compare-car-image">
                    <h4 class="compare-car-name">${car.name}</h4>
                    <div class="compare-specs">
                        <div class="compare-spec-item">
                            <span class="compare-spec-label">Price:</span>
                            <span class="compare-spec-value">${car.price}</span>
                        </div>
                        <div class="compare-spec-item">
                            <span class="compare-spec-label">Body Type:</span>
                            <span class="compare-spec-value">${car.bodyType}</span>
                        </div>
                        <div class="compare-spec-item">
                            <span class="compare-spec-label">Year:</span>
                            <span class="compare-spec-value">${car.specs.year}</span>
                        </div>
                        <div class="compare-spec-item">
                            <span class="compare-spec-label">Engine:</span>
                            <span class="compare-spec-value">${car.specs.engine}</span>
                        </div>
                        <div class="compare-spec-item">
                            <span class="compare-spec-label">Fuel:</span>
                            <span class="compare-spec-value">${car.specs.fuel}</span>
                        </div>
                        <div class="compare-spec-item">
                            <span class="compare-spec-label">Transmission:</span>
                            <span class="compare-spec-value">${car.specs.transmission}</span>
                        </div>
                        <div class="compare-spec-item">
                            <span class="compare-spec-label">Drive:</span>
                            <span class="compare-spec-value">${car.specs.drive}</span>
                        </div>
                        <div class="compare-spec-item">
                            <span class="compare-spec-label">Mileage:</span>
                            <span class="compare-spec-value">${car.specs.mileage}</span>
                        </div>
                        <!-- NEW: Color in compare -->
                        <div class="compare-spec-item">
                            <span class="compare-spec-label">Color:</span>
                            <span class="compare-spec-value">${car.color}</span>
                        </div>
                    </div>
                `;
                compareCars.appendChild(compareCar);
            });
            
            // Show compare window and floating back button
            compareWindow.classList.add('active');
            floatingBack.classList.add('active');
        }

        // NEW: Function to redirect to WhatsApp for import cars
        function redirectToWhatsAppForImport(carId) {
            const car = directImportCars.find(c => c.id === carId);
            if (!car) return;

            const message = `Hello! I'm interested in importing the ${car.name} from ${car.location} priced at ${car.price} with shipping fee of ${car.shippingFee}. Can you provide more details about the import process?`;
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/254703913841?text=${encodedMessage}`;
            
            window.open(whatsappUrl, '_blank');
        }

        // NEW: Updated function to show car details in full window
        function showCarDetailsWindow(carId) {
            const car = cars.find(c => c.id === carId);
            if (!car) return;

            // Update window title
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
            const carSpecs = document.getElementById('carSpecs');
            carSpecs.innerHTML = '';

            // Add specs to window
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
            document.getElementById('modalPrice').textContent = car.price;

            // Set WhatsApp redirect for this car
            document.getElementById('modalQuoteBtn').setAttribute('data-id', car.id);

            // Display related cars
            displayRelatedCars(car);

            // Show window and floating back button
            carDetailsWindow.classList.add('active');
            floatingBack.classList.add('active');
        }

        // NEW: Function to display related cars - UPDATED TO SHOW SAME BRAND
        function displayRelatedCars(currentCar) {
            const relatedCarsGrid = document.getElementById('relatedCarsGrid');
            relatedCarsGrid.innerHTML = '';
            
            // Get the brand from the current car name (first word)
            const currentBrand = currentCar.name.split(' ')[0];
            
            // Find related cars (same brand, excluding current car)
            const relatedCars = cars.filter(car => 
                car.id !== currentCar.id && 
                car.name.split(' ')[0] === currentBrand
            ).slice(0, 4); // Limit to 4 related cars
            
            if (relatedCars.length === 0) {
                relatedCarsGrid.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--dark-gray);">
                        <i class="fas fa-car" style="font-size: 2rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                        <h4>No related vehicles at the moment</h4>
                        <p>Check back later for more ${currentBrand} vehicles.</p>
                    </div>
                `;
                return;
            }
            
            relatedCars.forEach(car => {
                const relatedCarCard = document.createElement('div');
                relatedCarCard.className = 'related-car-card';
                relatedCarCard.innerHTML = `
                    <img src="${car.image}" alt="${car.name}" class="related-car-image">
                    <div class="related-car-details">
                        <h4 class="related-car-name">${car.name}</h4>
                        <div class="related-car-price">${car.price}</div>
                    </div>
                `;
                relatedCarCard.addEventListener('click', () => {
                    // Close current details window
                    carDetailsWindow.classList.remove('active');
                    // Show new car details
                    showCarDetailsWindow(car.id);
                });
                relatedCarsGrid.appendChild(relatedCarCard);
            });
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

        // NEW: Initialize Blog Posts
        function initBlogPosts() {
            // Add event listeners to blog read more links
            document.querySelectorAll('.blog-read-more').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const blogId = parseInt(this.getAttribute('data-blog-id'));
                    showBlogPost(blogId);
                });
            });
        }

        // NEW: Function to show blog post in full window
        function showBlogPost(blogId) {
            const blogPost = blogPosts.find(blog => blog.id === blogId);
            if (!blogPost) return;

            // Update blog post title and content
            blogPostTitle.textContent = blogPost.title;
            blogPostContent.innerHTML = blogPost.content;

            // Show blog post window and floating back button
            blogPostWindow.classList.add('active');
            floatingBack.classList.add('active');
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

        // NEW: Event Listeners for Direct Import links
        directImportLink.addEventListener('click', function(e) {
            e.preventDefault();
            directImportWindow.classList.add('active');
            floatingBack.classList.add('active');
            displayDirectImportCars();
            
            // Close mobile nav if open
            mobileNav.classList.remove('active');
        });

        directImportLink2.addEventListener('click', function(e) {
            e.preventDefault();
            directImportWindow.classList.add('active');
            floatingBack.classList.add('active');
            displayDirectImportCars();
            
            // Close mobile nav if open
            mobileNav.classList.remove('active');
        });

        mobileDirectImportLink.addEventListener('click', function(e) {
            e.preventDefault();
            directImportWindow.classList.add('active');
            floatingBack.classList.add('active');
            displayDirectImportCars();
            
            // Close mobile nav if open
            mobileNav.classList.remove('active');
        });

        // NEW: Event Listeners for Full Screen Windows
        aboutLink.addEventListener('click', function(e) {
            e.preventDefault();
            aboutWindow.classList.add('active');
            floatingBack.classList.add('active');
            
            // Close mobile nav if open
            mobileNav.classList.remove('active');
        });

        blogsLink.addEventListener('click', function(e) {
            e.preventDefault();
            blogWindow.classList.add('active');
            floatingBack.classList.add('active');
            
            // Close mobile nav if open
            mobileNav.classList.remove('active');
        });

        faqLink.addEventListener('click', function(e) {
            e.preventDefault();
            faqWindow.classList.add('active');
            floatingBack.classList.add('active');
            
            // Close mobile nav if open
            mobileNav.classList.remove('active');
        });

        contactLink.addEventListener('click', function(e) {
            e.preventDefault();
            contactWindow.classList.add('active');
            floatingBack.classList.add('active');
            
            // Close mobile nav if open
            mobileNav.classList.remove('active');
        });

        // NEW: Event Listeners for Mobile Full Screen Windows
        mobileAboutLink.addEventListener('click', function(e) {
            e.preventDefault();
            aboutWindow.classList.add('active');
            floatingBack.classList.add('active');
            
            // Close mobile nav if open
            mobileNav.classList.remove('active');
        });

        mobileBlogsLink.addEventListener('click', function(e) {
            e.preventDefault();
            blogWindow.classList.add('active');
            floatingBack.classList.add('active');
            
            // Close mobile nav if open
            mobileNav.classList.remove('active');
        });

        mobileFaqLink.addEventListener('click', function(e) {
            e.preventDefault();
            faqWindow.classList.add('active');
            floatingBack.classList.add('active');
            
            // Close mobile nav if open
            mobileNav.classList.remove('active');
        });

        mobileContactLink.addEventListener('click', function(e) {
            e.preventDefault();
            contactWindow.classList.add('active');
            floatingBack.classList.add('active');
            
            // Close mobile nav if open
            mobileNav.classList.remove('active');
        });

        // Back to Home button
        backToHome.addEventListener('click', function() {
            carListingWindow.classList.remove('active');
            floatingBack.classList.remove('active');
        });

        // NEW: Back from Direct Import button
        backFromDirectImport.addEventListener('click', function() {
            directImportWindow.classList.remove('active');
            floatingBack.classList.remove('active');
        });

        // NEW: Back from Full Screen Windows
        backFromAbout.addEventListener('click', function() {
            aboutWindow.classList.remove('active');
            floatingBack.classList.remove('active');
        });

        backFromBlog.addEventListener('click', function() {
            blogWindow.classList.remove('active');
            floatingBack.classList.remove('active');
        });

        backFromBlogPost.addEventListener('click', function() {
            blogPostWindow.classList.remove('active');
            floatingBack.classList.remove('active');
        });

        backFromFaq.addEventListener('click', function() {
            faqWindow.classList.remove('active');
            floatingBack.classList.remove('active');
        });

        backFromContact.addEventListener('click', function() {
            contactWindow.classList.remove('active');
            floatingBack.classList.remove('active');
        });

        // NEW: Back from Compare Window
        backFromCompare.addEventListener('click', function() {
            compareWindow.classList.remove('active');
            floatingBack.classList.remove('active');
        });

        // NEW: Back to Car Listings button
        backToCarListings.addEventListener('click', function() {
            carDetailsWindow.classList.remove('active');
            floatingBack.classList.remove('active');
        });

        // Floating back button
        floatingBack.addEventListener('click', function() {
            carListingWindow.classList.remove('active');
            directImportWindow.classList.remove('active');
            aboutWindow.classList.remove('active');
            blogWindow.classList.remove('active');
            blogPostWindow.classList.remove('active');
            faqWindow.classList.remove('active');
            contactWindow.classList.remove('active');
            compareWindow.classList.remove('active');
            carDetailsWindow.classList.remove('active');
            brandFilter.classList.remove('active');
            bodyFilter.classList.remove('active');
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

        // NEW: Advanced filter change events
        sourceFilter.addEventListener('change', function() {
            const activeBodyType = document.querySelector('.body-type-btn.active');
            const bodyType = activeBodyType ? activeBodyType.getAttribute('data-body-type') : 'all';
            displayCars(bodyType);
        });

        registrationFilter.addEventListener('change', function() {
            const activeBodyType = document.querySelector('.body-type-btn.active');
            const bodyType = activeBodyType ? activeBodyType.getAttribute('data-body-type') : 'all';
            displayCars(bodyType);
        });

        fuelFilter.addEventListener('change', function() {
            const activeBodyType = document.querySelector('.body-type-btn.active');
            const bodyType = activeBodyType ? activeBodyType.getAttribute('data-body-type') : 'all';
            displayCars(bodyType);
        });

        priceFilter.addEventListener('change', function() {
            const activeBodyType = document.querySelector('.body-type-btn.active');
            const bodyType = activeBodyType ? activeBodyType.getAttribute('data-body-type') : 'all';
            displayCars(bodyType);
        });

        // Close modals
        closeDetailsModal.addEventListener('click', function() {
            carDetailsModal.classList.remove('active');
        });

        closePackageModal.addEventListener('click', function() {
            carPackageModal.classList.remove('active');
        });

        // NEW: Close compare modal
        closeCompareModal.addEventListener('click', function() {
            compareModal.classList.remove('active');
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
            if (e.target === compareModal) {
                compareModal.classList.remove('active');
            }
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
                
                // Determine badge text
                let badgeText = '';
                if (car.source === 'fresh') {
                    badgeText = 'Fresh Import';
                } else if (car.source === 'local') {
                    badgeText = 'Locally Used';
                }
                
                // Determine registration status
                const registrationStatus = car.registered ? 'Registered' : 'Unregistered';
                
                carCard.innerHTML = `
                    <img src="${car.image}" alt="${car.name}" class="car-image">
                    ${badgeText ? `<div class="car-badge">${badgeText}</div>` : ''}
                    <div class="car-details">
                        <h3 class="car-name">${car.name}</h3>
                        <div class="car-body-type">${car.bodyType}</div>
                        <div class="car-condition">
                            <div class="condition-stars">
                                ${renderStars(car.condition)}
                            </div>
                            <span class="condition-text">${getConditionText(car.condition)}</span>
                        </div>
                        <div class="car-specs-mini">
                            <div class="car-spec-item">
                                <i class="fas fa-calendar-alt"></i>
                                <span>${car.specs.year}</span>
                            </div>
                            <div class="car-spec-item">
                                <i class="fas fa-tachometer-alt"></i>
                                <span>${car.specs.mileage}</span>
                            </div>
                            <div class="car-spec-item">
                                <i class="fas fa-gas-pump"></i>
                                <span>${car.fuelType.charAt(0).toUpperCase() + car.fuelType.slice(1)}</span>
                            </div>
                            <div class="car-spec-item">
                                <i class="fas fa-file-alt"></i>
                                <span>${registrationStatus}</span>
                            </div>
                            <!-- NEW: Color spec item -->
                            <div class="car-spec-item">
                                <i class="fas fa-palette"></i>
                                <span>${car.color}</span>
                            </div>
                        </div>
                        <div class="car-price">${car.price}</div>
                        <div class="car-actions">
                            <!-- UPDATED: Car Package and See Full Details in same row -->
                            <div class="car-action-row">
                                <button class="package-btn" data-id="${car.id}">Car Package</button>
                                <button class="details-btn" data-id="${car.id}">See Full Details</button>
                            </div>
                            <!-- Compare and Get Quote in same row -->
                            <div class="car-action-row">
                                <button class="compare-btn" data-id="${car.id}">
                                    <i class="fas fa-exchange-alt"></i> Compare
                                </button>
                                <button class="quote-btn" data-id="${car.id}">
                                    <i class="fab fa-whatsapp"></i> Get Quote
                                </button>
                            </div>
                        </div>
                    </div>
                `;
                carsGrid.appendChild(carCard);
            });

            // Add event listeners to the buttons
            document.querySelectorAll('.details-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const carId = parseInt(this.getAttribute('data-id'));
                    showCarDetailsWindow(carId);
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

            // NEW: Add event listeners to compare buttons
            document.querySelectorAll('.compare-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const carId = parseInt(this.getAttribute('data-id'));
                    addToComparison(carId, this);
                });
            });
        }

        // NEW: Contact form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });

        document.getElementById('contactFormFull').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });

        // Initialize the page
        window.addEventListener('DOMContentLoaded', function() {
            // Display initial cars
            displayCars();
            
            // Display direct import cars
            displayDirectImportCars();
        });