document.addEventListener('DOMContentLoaded', function() {
  // Change nojs class to hasjs
  document.documentElement.className = document.documentElement.className.replace(/\bnojs\b/, 'hasjs');

  // Form validation and submission
  const form = document.getElementById('beta-signup');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const occupationInput = document.getElementById('occupation');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isValid = true;
    let errorMessage = '';

    if (nameInput.value.trim() === '') {
      isValid = false;
      errorMessage += 'Name is required. ';
    }

    if (emailInput.value.trim() === '') {
      isValid = false;
      errorMessage += 'Email is required. ';
    } else if (!isValidEmail(emailInput.value)) {
      isValid = false;
      errorMessage += 'Please enter a valid email address. ';
    }

    if (occupationInput.value === '') {
      isValid = false;
      errorMessage += 'Please select an occupation. ';
    }

    if (isValid) {
      // Simulate form submission
      alert('Thank you for signing up! We\'ll be in touch soon.');
      form.reset();
    } else {
      alert(errorMessage);
    }
  });

  function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
});
