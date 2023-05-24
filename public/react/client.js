


// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Get the form data
    const form = event.target;
    const formData = new FormData(form);
  
    // Create an object from the form data
    const item = {};
    formData.forEach((value, key) => {
      item[key] = value;
    });
  
    // Send a POST request to the server to add the item
    fetch('/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Item added:', data);
        // Handle the response data or perform additional actions
      })
      .catch(error => {
        console.error('Error adding item:', error);
        // Handle the error or display an error message
      });
  }
  
  // Add event listener to the form for form submission
  const form = document.querySelector('#item-form');
  form.addEventListener('submit', handleFormSubmit);
  