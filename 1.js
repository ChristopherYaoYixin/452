// scripts.js
function handleSubmit(event) {
    // Block the default submission behavior of forms
    event.preventDefault();
  
    // Display a small window indicating successful submission
    alert("Submitted successfully!");
  
    // Reset Form
    var form = event.target;
    form.reset();
  }
  
  function toggleHighContrast() {
    document.body.classList.toggle('high-contrast');
  }
  
// Function for displaying modal boxes  
function showModal(modalId) {  
  var modal = document.getElementById(modalId);  
  modal.style.display = "block";  
}  
  
// Function to close modal boxes  
function closeModal(modalId) {  
  var modal = document.getElementById(modalId);  
  modal.style.display = "none";  
}  

  function toggleHighContrast() {
  document.body.classList.toggle('high-contrast');
}
