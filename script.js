function calculateSI() {
    let P = parseFloat(document.getElementById('principal').value);
    let R = parseFloat(document.getElementById('rate').value);
    let N = parseFloat(document.getElementById('time').value);

    if (isNaN(P) || isNaN(R) || isNaN(N)) {
        document.getElementById('result').innerText = "Please fill in all fields.";
        return;
    }

    let SI = (P * R * N) / 100;
    document.getElementById('result').innerText = "Simple Interest: $" + SI.toFixed(2);
}