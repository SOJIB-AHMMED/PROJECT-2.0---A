// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation items and sections
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section');
    
    // Navigation click handler
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            
            // Remove active class from all nav items and sections
            navItems.forEach(nav => nav.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked nav item and corresponding section
            this.classList.add('active');
            document.getElementById(targetSection).classList.add('active');
            
            // Scroll to top of content
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
    
    // Service card click handlers
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const service = this.getAttribute('data-service');
            showToast(`Opening ${service.charAt(0).toUpperCase() + service.slice(1)} service...`);
            
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });
    
    // Service list item click handlers
    const serviceListItems = document.querySelectorAll('.service-list-item');
    serviceListItems.forEach(item => {
        item.addEventListener('click', function() {
            const serviceName = this.querySelector('h4').textContent;
            showToast(`Opening ${serviceName}...`);
        });
    });
    
    // Message item click handlers
    const messageItems = document.querySelectorAll('.message-item');
    messageItems.forEach(item => {
        item.addEventListener('click', function() {
            const messageName = this.querySelector('.message-name').textContent;
            showToast(`Opening conversation with ${messageName}...`);
            
            // Remove unread indicator
            this.classList.remove('unread');
        });
    });
    
    // Profile menu item click handlers
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const menuText = this.querySelector('span').textContent;
            
            if (menuText === 'Logout') {
                if (confirm('Are you sure you want to logout?')) {
                    showToast('Logging out...');
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                }
            } else {
                showToast(`Opening ${menuText}...`);
            }
        });
    });
    
    // Wallet button handlers
    const walletBtns = document.querySelectorAll('.wallet-btn');
    walletBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.textContent.trim();
            showToast(`${action} feature coming soon!`);
        });
    });
    
    // Transaction item click handlers
    const transactionItems = document.querySelectorAll('.transaction-item');
    transactionItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.querySelector('.transaction-title').textContent;
            showToast(`Viewing details for: ${title}`);
        });
    });
    
    // Activity item click handlers
    const activityItems = document.querySelectorAll('.activity-item');
    activityItems.forEach(item => {
        item.addEventListener('click', function() {
            const title = this.querySelector('.activity-title').textContent;
            showToast(`Viewing details for: ${title}`);
        });
    });
    
    // Banner button handler
    const bannerBtns = document.querySelectorAll('.banner-btn');
    bannerBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            showToast('Promo code applied! Enjoy 50% off on your first ride.');
        });
    });
    
    // Search bar functionality
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('focus', function() {
            this.parentElement.style.boxShadow = '0 0 0 2px rgba(108, 92, 231, 0.2)';
        });
        
        searchInput.addEventListener('blur', function() {
            this.parentElement.style.boxShadow = 'none';
        });
        
        searchInput.addEventListener('input', function() {
            if (this.value.length > 0) {
                // Simulate search
                console.log('Searching for:', this.value);
            }
        });
    }
    
    // Notification button handler
    const notificationBtn = document.getElementById('notification-btn');
    if (notificationBtn) {
        notificationBtn.addEventListener('click', function() {
            showToast('You have 3 new notifications');
        });
    }
    
    // View All link handler
    const viewAllLinks = document.querySelectorAll('.view-all');
    viewAllLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Switch to services section
            navItems.forEach(nav => nav.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            document.querySelector('[data-section="services"]').classList.add('active');
            document.getElementById('services').classList.add('active');
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
    
    // Toast notification system
    function showToast(message) {
        // Remove existing toast if any
        const existingToast = document.querySelector('.toast');
        if (existingToast) {
            existingToast.remove();
        }
        
        // Create toast element
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        
        // Add to DOM
        document.body.appendChild(toast);
        
        // Remove after 3 seconds
        setTimeout(() => {
            toast.style.animation = 'slideDown 0.3s ease';
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3000);
    }
    
    // Add pull-to-refresh functionality (simulated)
    let touchStartY = 0;
    let touchEndY = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });
    
    document.addEventListener('touchend', function(e) {
        touchEndY = e.changedTouches[0].clientY;
        
        // Check if user pulled down from top
        if (touchEndY - touchStartY > 100 && window.scrollY === 0) {
            // Simulate refresh
            const header = document.querySelector('.app-header');
            header.style.transform = 'translateY(40px)';
            header.style.transition = 'transform 0.3s ease';
            
            setTimeout(() => {
                header.style.transform = 'translateY(0)';
                showToast('Content refreshed!');
            }, 500);
        }
    }, { passive: true });
    
    // Add swipe gesture for navigation
    let touchStartX = 0;
    let touchEndX = 0;
    
    const mainContent = document.querySelector('.main-content');
    
    mainContent.addEventListener('touchstart', function(e) {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });
    
    mainContent.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].clientX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 100;
        const swipeDistance = touchEndX - touchStartX;
        
        if (Math.abs(swipeDistance) > swipeThreshold) {
            const currentSection = document.querySelector('.section.active').id;
            const sectionOrder = ['home', 'services', 'wallet', 'messages', 'profile'];
            const currentIndex = sectionOrder.indexOf(currentSection);
            
            let newIndex;
            if (swipeDistance > 0 && currentIndex > 0) {
                // Swipe right - go to previous section
                newIndex = currentIndex - 1;
            } else if (swipeDistance < 0 && currentIndex < sectionOrder.length - 1) {
                // Swipe left - go to next section
                newIndex = currentIndex + 1;
            }
            
            if (newIndex !== undefined) {
                const newSection = sectionOrder[newIndex];
                const navItem = document.querySelector(`[data-section="${newSection}"]`);
                if (navItem) {
                    navItem.click();
                }
            }
        }
    }
    
    // Add haptic feedback simulation
    function vibrateDevice() {
        if ('vibrate' in navigator) {
            navigator.vibrate(10);
        }
    }
    
    // Add vibration to buttons
    document.querySelectorAll('button, .service-card, .nav-item').forEach(element => {
        element.addEventListener('click', vibrateDevice);
    });
    
    // Log app initialization
    console.log('SuperApp initialized successfully!');
    console.log('Version: 2.0');
    console.log('Mobile-first design: Active');
});
