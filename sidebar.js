let sidebar = document.querySelector(".sidebar");
let barBtn = document.querySelector("#bars-btn");







barBtn.addEventListener("click",() => {
    sidebar.classList.toggle("active");
  })