const container = document.getElementById("container");

for (let i = 1; i <= 100; i++) {
    let resto3 = (i % 3);
    let resto5 = (i % 5);
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `${i}`;
    container.append(newDiv);
    newDiv.classList.add("square");
    

    if ((resto3 == 0) && (resto5 == 0)) {
        console.log(i);
        newDiv.innerHTML = `BuzzFizz`;
        newDiv.classList.add("orange");
        
    } else if (resto3 == 0) {
        console.log(i);
        newDiv.innerHTML = `Buzz`;
        newDiv.classList.add("red");
        
    } else if (resto5 == 0) {
        console.log(i);
        newDiv.innerHTML = `Fizz`;
        newDiv.classList.add("green");
        
    } else {
        console.log(i);
        newDiv.classList.add("white");
    }

}