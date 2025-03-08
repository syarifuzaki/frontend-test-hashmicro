// Additional Vue 3 application logic
// This file can be included in the HTML after the inline script

// Animation utilities
const AnimationUtil = {
  addEntryAnimations() {
      // Animate cards when they enter viewport
      const animateOnScroll = () => {
          const cards = document.querySelectorAll('.card-shadow');
          cards.forEach(card => {
              const cardPosition = card.getBoundingClientRect();
              // Check if card is in viewport
              if (cardPosition.top < window.innerHeight && cardPosition.bottom > 0) {
                  card.classList.add('animate-fade-in');
              }
          });
      };

      // Add scroll listener
      window.addEventListener('scroll', animateOnScroll);
      
      // Run once on load
      setTimeout(animateOnScroll, 100);
  },
  
  addButtonEffects() {
      // Add hover effects to buttons
      const buttons = document.querySelectorAll('.hash-btn-primary, .hash-btn-secondary, .hash-btn-tertiary');
      buttons.forEach(button => {
          button.classList.add('btn-hover-effect');
      });
  },
  
  addTableRowEffects() {
      // Add hover effects to table rows
      const rows = document.querySelectorAll('.p-datatable tbody tr');
      rows.forEach(row => {
          row.classList.add('table-row-hover');
      });
  }
};

// Form validation utilities
const ValidationUtil = {
  validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
  },
  
  validateRequired(value) {
      return value !== null && value !== undefined && value.toString().trim() !== '';
  },
  
  validateForm(formData, requiredFields) {
      const errors = {};
      
      requiredFields.forEach(field => {
          if (!this.validateRequired(formData[field])) {
              errors[field] = 'This field is required';
          }
      });
      
      if (formData.email && !this.validateEmail(formData.email)) {
          errors.email = 'Please enter a valid email address';
      }
      
      return {
          isValid: Object.keys(errors).length === 0,
          errors
      };
  }
};

// Data formatting utilities
const FormatUtil = {
  formatDate(date) {
      if (!date) return '';
      
      if (typeof date === 'string') {
          // Parse date string (assuming DD/MM/YYYY format)
          const parts = date.split('/');
          if (parts.length !== 3) return date;
          
          date = new Date(parts[2], parts[1] - 1, parts[0]);
      }
      
      return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
  },
  
  getFullName(firstName, lastName) {
      return `${firstName} ${lastName}`.trim();
  },
  
  getInitials(fullName) {
      if (!fullName) return '';
      return fullName.split(' ').map(n => n[0]).join('').toUpperCase();
  }
};

// Theme/UI utilities
const ThemeUtil = {
  getStatusColor(status) {
      switch(status.toLowerCase()) {
          case 'active': return '#10B981';
          case 'inactive': return '#EF4444';
          case 'on leave': return '#F59E0B';
          default: return '#6B7280';
      }
  },
  
  getStatusClass(status) {
      switch(status.toLowerCase()) {
          case 'active': return 'status-active';
          case 'inactive': return 'status-inactive';
          case 'on leave': return 'status-onleave';
          default: return '';
      }
  },
  
  getDepartmentColor(department) {
      const colors = {
          'engineering': '#3B82F6',
          'marketing': '#8B5CF6',
          'finance': '#10B981',
          'human resources': '#F59E0B',
          'sales': '#EF4444',
          'customer success': '#6366F1'
      };
      
      return colors[department.toLowerCase()] || '#6B7280';
  }
};

// Event handlers for custom interactions
const setupCustomEvents = () => {
  // Example: Add pulse animation to logo on hover
  const logo = document.querySelector('.navbar img');
  if (logo) {
      logo.classList.add('pulse-on-hover');
  }
  
  // Initialize all animations
  AnimationUtil.addEntryAnimations();
  AnimationUtil.addButtonEffects();
  
  // Re-run table row effects after data changes
  const setupTableObserver = () => {
      const tableBody = document.querySelector('.p-datatable-tbody');
      if (tableBody) {
          // Use MutationObserver to detect when the table content changes
          const observer = new MutationObserver(() => {
              AnimationUtil.addTableRowEffects();
          });
          
          observer.observe(tableBody, { childList: true, subtree: true });
      }
  };
  
  // Run once after initial render
  setTimeout(() => {
      AnimationUtil.addTableRowEffects();
      setupTableObserver();
  }, 500);
};

// Run setup when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', setupCustomEvents);