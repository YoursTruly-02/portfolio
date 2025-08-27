/*==================== toggle icon navbar ====================*/
/*==================== scroll sections active link ====================*/


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
console.log("Sections found:", sections);
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');

        document.querySelector('header nav a[href*=' + id + '"]').classList.add('active');

      });
    };
  });
};

/*==================== sticky navbar ====================*/
/*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/

/*==================== scroll reveal ====================*/
/*==================== typed js ====================*/