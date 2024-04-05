
  // Wait for the DOM to be loaded
  document.addEventListener('DOMContentLoaded', function() {
    
    // Access the form element
    var form = document.querySelector('form');
    
    // Listen for a submit event on the form
    form.addEventListener('submit', function(event) {
      // Prevent the default form submission
      event.preventDefault();
      
      // Access the input elements
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value; // Not storing password, just for demonstration
      var remember = document.getElementById('remember').checked;
      
      // Log to the console (for testing purposes)
      console.log('Login attempt:', username, password, remember);
      
      // Store the username and remember state in local storage if remember is checked
      if(remember) {
        localStorage.setItem('username', username);
        localStorage.setItem('remember', remember);
      } else {
        // Clear the stored data if remember is not checked
        localStorage.removeItem('username');
        localStorage.removeItem('remember');
      }
      
      // Here you might want to proceed with the form submission or further processing...
      // For example, you could send an AJAX request to a server with the login details
      // Or redirect to another page with window.location.href = 'somepage.html';
    });
  });

