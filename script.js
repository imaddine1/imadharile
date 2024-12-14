document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

var date = new Date().getFullYear();
console.log("the year is : ", date);
  
document.getElementsByClassName('current-year')[0].textContent = new Date().getFullYear();
