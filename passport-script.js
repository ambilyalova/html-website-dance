function switch_to_latin_symbols() {
    const surname = document.getElementById('surname')
    const name = document.getElementById('name')

    surname.innerText = "BILYALOVA"
    name.innerText = "ADELIYA"
}

const node_for_click = document.getElementById("for_click")
node_for_click.addEventListener("click", switch_to_latin_symbols)

