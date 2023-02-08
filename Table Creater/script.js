let table = document.getElementById("table");
let input = document.getElementById("text-input");
let data;
let form = document.getElementById("input-value");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    table.innerHTML = input.value ? createTable(input.value) : "<h3>Please Enter a Number</h3>";

    
})

function createTable(num) {
    for(let i = 1; i <= 10; i++) {
        data += `<tr><td>${num} x ${i} = ${num * i}</td></tr>`;
    }
    return data;
}