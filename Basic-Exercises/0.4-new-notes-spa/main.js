const list = document.querySelector(".list-items");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const item = document.createElement("li");
  item.textContent = e.target.elements[0].value;
  list.appendChild(item);
  e.target.elements[0].value = "";
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: item.textContent,
  }).then((response) => console.log(response));
});
