let form = document.querySelector(".form");
let input = document.querySelector(".input");
let list = document.querySelector(".list");
let listArray = [];
let alertShown = false;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value < 0) return alert("incorrect number");

  let inputValue = parseInt(input.value);
  input.value = "";

  let item = document.createElement("li");
  item.textContent = inputValue;
  list.appendChild(item);
  listArray.push(item);

  let id = setInterval(() => {
    item.textContent = inputValue;

    if (inputValue <= 0) {
      clearInterval(id);
      let index = listArray.indexOf(item);
      if (index !== -1) {
        listArray.splice(index, 1);
      }
      item.remove();
    }

    if (listArray.length == 6) {
      input.disabled = true;

      if (!alertShown) {
        alert(
          "You entered max number length => this message will accur onbly one time remeber 😁"
        );
        alertShown = true;
      }
    } else {
      input.disabled = false;
    }

    inputValue--;
  }, 1000);
});
