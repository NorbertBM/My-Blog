console.log("log");

const allNavTags = document.querySelectorAll("#mainNav a");

allNavTags.forEach(() => (navTag.onclick = () => console.log(navTag)));

function toggleActive(element) {
  element.className.toggle("active");
}
