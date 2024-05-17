/* js swiper */

let swiper = new Swiper(".wrapper", {
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: false,
    },
  });

  /*js login */
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simple authentication logic (for demonstration purposes)
    const validEmail = 'user@gmail.com';
    const validPassword = 'user';

    if (email === validEmail && password === validPassword) {
        // Redirect to another page or perform other actions here
        window.location.href = 'index.html'; // Change this to the desired URL
    } else {
        errorMessage.textContent = 'Invalid email or password';
    }
});
  