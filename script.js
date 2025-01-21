console.log('Javascript loaded!')

document.getElementById('validation-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
  
    const password = document.getElementById('password').value.trim();
    const passwordConfirm = document.getElementById('passwordConfirm').value.trim();
    const errorMatch = document.getElementById('errorMatch');
  
    // Clear previous error messages
    errorMatch.textContent = '';
    errorMatch.classList.remove('error-visible');
  
    if (password !== passwordConfirm) {
      // Display error if passwords do not match
      errorMatch.textContent = 'Passwords do not match.';
      errorMatch.classList.add('error-visible');
    } else {
      alert('Form submitted successfully!');
      // Optionally submit the form programmatically
      this.submit();
    }
  });