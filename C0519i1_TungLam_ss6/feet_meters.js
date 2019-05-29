function changeToMeter() {
    F = parseFloat(document.getElementById("foot").value);
    M = F * 0.305;
    document.getElementById("M").innerHTML = M;
}

function changeToFeet() {
    M = parseFloat(document.getElementById("meter").value);
    F = M * 3.279;
    document.getElementById("F").innerHTML = F;
}