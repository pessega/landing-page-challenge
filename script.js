// Add to local storage

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.getElementById("email").value;

  let data = {
    email,
  };

  let convertData = JSON.stringify(data);

  localStorage.setItem("lead", convertData);
});

// smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
