document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('tester-signup');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const experienceInput = document.getElementById('experience');

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

    if (experienceInput.value === '') {
      isValid = false;
      errorMessage += 'Please select an experience level. ';
    }

    if (isValid) {
      window.location.href = 'signedup.html';
    } else {
      alert(errorMessage);
    }
  });

  function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
});
