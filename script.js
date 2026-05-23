document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('open');
            navMenu.classList.toggle('open');
        });

        // Close menu when clicking a nav link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('open');
                navMenu.classList.remove('open');
            });
        });
    }

    // 3. Navbar Scroll Class & Active Link Spy
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        // Sticky Nav styling
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active Section Scroll Spy
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // 4. Scroll Reveal Animations (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Animates only once
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // 5. Skills Categories Filter Engine
    const catButtons = document.querySelectorAll('.skill-cat-btn');
    const skillBadges = document.querySelectorAll('.skill-badge');

    catButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            catButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.getAttribute('data-category');

            skillBadges.forEach(badge => {
                const stackType = badge.getAttribute('data-stack');
                
                if (category === 'all' || stackType === category) {
                    badge.style.display = 'flex';
                    // Trigger reflow for animation
                    badge.style.opacity = '0';
                    badge.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        badge.style.transition = 'var(--transition-bounce)';
                        badge.style.opacity = '1';
                        badge.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    badge.style.display = 'none';
                }
            });
        });
    });

    // 6. Terminal Auto-Typing Emulator
    const terminalBody = document.getElementById('terminal-body');
    const cmd1 = document.getElementById('cmd-1');
    const output1 = document.getElementById('output-1');
    const line2 = document.getElementById('line-2');
    const cmd2 = document.getElementById('cmd-2');
    const output2 = document.getElementById('output-2');
    const line3 = document.getElementById('line-3');
    const cmd3 = document.getElementById('cmd-3');
    const output3 = document.getElementById('output-3');
    const cursorLine = document.getElementById('line-cursor');
    const fallbackCta = document.querySelector('.hero-fallback-cta');

    const commands = {
        cmd1Text: 'cat about_me.md',
        output1Text: `I am an AI/ML Engineer, Data Scientist, and Quantitative Analytics enthusiast. Currently pursuing an M.Sc. in Data Science at DIAT Pune, I specialize in building end-to-end ML pipelines, computer vision tracking models, and quantitative derivatives pricing frameworks.`,
        cmd2Text: 'skills --top',
        output2Text: `[ "PyTorch", "Scikit-Learn", "LangGraph", "YOLOv8", "ARIMA/Prophet", "Black-Scholes" ]`,
        cmd3Text: 'python -c "from quantdesk import pricing; pricing.simulate_mc()"',
        output3Text: `[i] Stabilizing implied volatility solver (Newton-Raphson + Bisection)...\n[+] Convergence reached in 4 iterations. Implied Volatility: 24.87%\n[+] Running 10,000 Monte Carlo paths for portfolio risk simulation...\n[+] Computation complete. VaR (95%): -1.84% | Expected Shortfall: -2.31%`
    };

    function typeWriter(element, text, speed, callback) {
        let i = 0;
        element.textContent = '';
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                // Scroll terminal body down as we type
                terminalBody.scrollTop = terminalBody.scrollHeight;
                setTimeout(type, speed);
            } else {
                if (callback) callback();
            }
        }
        type();
    }

    function runTerminalSimulation() {
        // Step 1: Type Command 1
        setTimeout(() => {
            typeWriter(cmd1, commands.cmd1Text, 70, () => {
                setTimeout(() => {
                    // Show Output 1
                    output1.textContent = commands.output1Text;
                    
                    // Show Line 2
                    line2.style.display = 'block';
                    
                    // Type Command 2
                    setTimeout(() => {
                        typeWriter(cmd2, commands.cmd2Text, 70, () => {
                            setTimeout(() => {
                                // Show Output 2
                                output2.textContent = commands.output2Text;
                                
                                // Show Line 3
                                line3.style.display = 'block';
                                
                                // Type Command 3
                                setTimeout(() => {
                                    typeWriter(cmd3, commands.cmd3Text, 50, () => {
                                        setTimeout(() => {
                                            // Show Output 3
                                            output3.textContent = commands.output3Text;
                                            
                                            // Show Cursor Line at end
                                            cursorLine.style.display = 'block';
                                            
                                            // Show Call to Actions
                                            if (fallbackCta) {
                                                fallbackCta.classList.add('show');
                                            }
                                            
                                            // Final Scroll adjust
                                            terminalBody.scrollTop = terminalBody.scrollHeight;
                                        }, 300);
                                    });
                                }, 400);
                            }, 500);
                        });
                    }, 400);
                }, 300);
            });
        }, 800);
    }

    // Trigger simulation
    runTerminalSimulation();

    // 7. Interactive Form Handler
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Disable button
            const submitBtn = contactForm.querySelector('.submit-btn');
            const submitText = submitBtn.querySelector('span');
            const submitIcon = submitBtn.querySelector('i');
            
            submitBtn.disabled = true;
            submitText.textContent = 'Transmitting...';
            
            // Simulate API Request
            setTimeout(() => {
                // Form Success
                formStatus.className = 'form-status success';
                formStatus.textContent = 'SUCCESS: Packet transmitted. I will respond to your ping shortly.';
                
                // Clear fields
                contactForm.reset();
                
                // Reset Button
                submitBtn.disabled = false;
                submitText.textContent = 'Send Packet';
                
                // Remove status after 5s
                setTimeout(() => {
                    formStatus.textContent = '';
                }, 5000);
            }, 1500);
        });
    }

    // 8. Dynamic spotlight tracking for mouse movements on card components
    const cards = document.querySelectorAll('.project-card, .sys-info-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});
