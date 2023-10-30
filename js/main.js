const container = document.getElementById("container");

for (let i = 0; i <= 100; i++) {
    let resto3 = (i % 3);
    let resto5 = (i % 5);

    if ((resto3 == 0) && (resto5 == 0)) {
        console.log(i)
        container.innerHTML = container.innerHTML + `<p class="orange">Valore: ${i}</p>`;
    } else if (resto3 == 0) {
        console.log(i)
        container.innerHTML = container.innerHTML + `<p class="red">Valore: ${i}</p>`;
    } else if (resto5 == 0) {
        console.log(i)
        container.innerHTML = container.innerHTML + `<p class="green">Valore: ${i}</p>`;
    } else {
        console.log(i)
        container.innerHTML = container.innerHTML + `<p>Valore: ${i}</p>`;
    }

}