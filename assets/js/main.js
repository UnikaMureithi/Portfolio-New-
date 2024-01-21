document.addEventListener('DOMContentLoaded', function () {
  var link = document.createElement('a');
  
  link.href = 'https://github.com/UnikaMureithi/136017';

  link.textContent = 'View on GitHub';
  
  link.target = '_blank';
  
  var targetSection = document.getElementById('hobbies');
  
  // Append the link to the specified section
  targetSection.appendChild(link);
});
