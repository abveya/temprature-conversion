function myFunction() {
    let x = document.getElementById("cel").value;
    let celsius = parseFloat(x);
    let z = document.getElementById("result");
    if (x === "") {
        z.innerHTML = "enter a valid temp";
        z.style.paddingRight="100px";
        return;
    } 
    else {
    let fahrenheit = (celsius * 9) / 5 + 32;
    z.innerHTML = `Temperature in Fahrenheit is: ${fahrenheit.toFixed(2)}°F`;
    z.style.paddingLeft ="80px";    
}
}
