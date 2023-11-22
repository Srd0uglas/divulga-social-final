const dropdownBtn = document.querySelector('.nav__dropdown');
dropdownBtn.addEventListener('click', () => {
  const dropdownMenu = document.getElementById('dropdownContent');
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
      } else {
        dropdownMenu.style.display = "block";
      }
});