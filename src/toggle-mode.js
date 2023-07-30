const toggleMode = document.getElementById('toggle-light-mode');

toggleMode.addEventListener('click', (event) => {
  document.documentElement.classList.toggle('light-mode');

})