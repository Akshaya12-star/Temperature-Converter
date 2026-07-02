function convertTemperature(){
    let temp = document.getElementById("temperature").value;
    let conversion = document.getElementById("conversion").value;
    let result = document.getElementById("result");
    if(temp === ""){
        result.innerHTML = "Please enter a temperature.";
        return;
    }
    temp = Number(temp);
    let answer;
    if(conversion === "ctof"){
        answer = (temp * 9/5) + 32;
        result.innerHTML =
        `${temp} °C = ${answer.toFixed(2)} °F`;
    }
    else{
        answer = (temp - 32) * 5/9;
        result.innerHTML =
        `${temp} °F = ${answer.toFixed(2)} °C`;
    }
}