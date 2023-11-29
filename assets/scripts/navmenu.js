/* dropdown menu */
const dropdownBtn = document.querySelector('.nav__dropdown');
dropdownBtn.addEventListener('click', () => {
  const dropdownMenu = document.getElementById('dropdownContent');
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
      } else {
        dropdownMenu.style.display = "block";
      }
});

/* responsive menu dropdown menu*/
if (window.screenY < 1180 ) {
  const hamburgerBtn = document.querySelector('.nav__hamburger');
hamburgerBtn.addEventListener('click', () => {
    const ResponsiveMenu = document.querySelector('#nav--switch');
      if (ResponsiveMenu.style.display === "block") {
          ResponsiveMenu.style.display = "none";
        } else {
          ResponsiveMenu.style.display = "block";
        }
  });
} else {
    ResponsiveMenu.style.display === "block"
}
