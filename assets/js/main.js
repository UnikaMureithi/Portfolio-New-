document.addEventListener('DOMContentLoaded', function () {
  var button = document.createElement('button');
  
  button.textContent = 'View on GitHub';
  
  button.style.color = 'white';
  button.style.backgroundColor = '#a80294'; // Customize the background color
  button.style.border = 'none'; // Remove the border for a cleaner look
  button.style.borderRadius = '5px'; // Add rounded edges
  button.style.padding = '10px 15px'; // Add padding for better aesthetics
  button.style.marginLeft = '30px';

  button.addEventListener('click', function() {
    window.open('https://github.com/UnikaMureithi/136017', '_blank');
  });

  var targetSection = document.getElementById('hobbies');
  
  // Append the button to the specified section
  targetSection.appendChild(button);
});
