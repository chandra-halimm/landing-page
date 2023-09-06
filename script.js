const check = document.getElementById("check");
const navList = document.getElementById("navList");

check.addEventListener("click", (e) => {
  e.preventDefault;
  if (check.checked) {
    navList.style.left = "0";
  } else {
    navList.style.left = "-100%"; // Or the original left value you had
  }
});
