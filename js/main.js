const container = document.getElementById("container");

for (let i = 0; i <= 100; i++) {
    let resto3 = (i % 3);
    let resto5 = (i % 5);

    if ((resto3 == 0) && (resto5 == 0)) {
        console.log(i)
        container.innerHTML = container.innerHTML + `<div class="col-2 orange">Valore: ${i}</div>`;
    } else if (resto3 == 0) {
        console.log(i)
        container.innerHTML = container.innerHTML + `<div class="col-2 red">Valore: ${i}</div>`;
    } else if (resto5 == 0) {
        console.log(i)
        container.innerHTML = container.innerHTML + `<div class="col-2 green">Valore: ${i}</div>`;
    } else {
        console.log(i)
        container.innerHTML = container.innerHTML + `<div class="col-2">Valore: ${i}</div>`;
    }

}