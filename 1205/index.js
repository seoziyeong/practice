const input_player = document.querySelector("p");

input_player.addEventListener("click", update_name);

function update_name() {
    const name = prompt("Enter the name of Best Player");
    input_player.textContent = "Man of the Match : " + name;
}