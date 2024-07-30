// Function to calculate and display values for input fields
function calculateField(id, multiplier) {
    const input = document.getElementById(id);
    const value = parseInt(input.value) || 0;
    const result = value * multiplier;
    document.getElementById(id + 'Value').innerText = `₹ ${result}`;
    calculateTotal();
}

// Function to handle calculations for 1 L Milk
function calculateOneLitreMilk() {
    const bakery = document.getElementById('bakery').checked;
    const shop = document.getElementById('shop').checked;
    const amount = parseInt(document.getElementById('oneLitreMilkAmount').value) || 0;
    let multiplier = 0;
    if (bakery) {
        multiplier = 65;
    } else if (shop) {
        multiplier = 63;
    }
    const result = amount * multiplier;
    document.getElementById('oneLitreMilkValue').innerText = `₹ ${result}`;
    calculateTotal();
}

// Function to handle calculations for ₹10 Cup
function calculateCup() {
    const sixPcs = document.getElementById('sixPcs').checked;
    const oneBox = document.getElementById('oneBox').checked;
    let multiplier = 0;
    if (sixPcs) {
        multiplier = 52;
    } else if (oneBox) {
        multiplier = 104;
    }
    document.getElementById('tenRupeesCupValue').innerText = `₹ ${multiplier}`;
    calculateTotal();
}

// Function to calculate the total amount
function calculateTotal() {
    const halfLitreMilk = parseInt(document.getElementById('halfLitreMilk').value) || 0;
    const quarterLitreMilk = parseInt(document.getElementById('quarterLitreMilk').value) || 0;
    const oneLitreMilk = parseInt(document.getElementById('oneLitreMilkAmount').value) || 0;
    const butterMilk = parseInt(document.getElementById('butterMilk').value) || 0;
    const tenRupeesCup = parseInt(document.getElementById('tenRupeesCupValue').innerText.replace('₹ ', '')) || 0;
    const tenRupeesCurd = parseInt(document.getElementById('tenRupeesCurd').value) || 0;
    const halfPackCurd = parseInt(document.getElementById('halfPackCurd').value) || 0;
    const tenRupeesMilk = parseInt(document.getElementById('tenRupeesMilk').value) || 0;
    const balance = parseInt(document.getElementById('balance').value) || 0;

    const total =
        (halfLitreMilk * 69) +
        (quarterLitreMilk * 17) +
        (oneLitreMilk * (document.getElementById('bakery').checked ? 65 : document.getElementById('shop').checked ? 63 : 0)) +
        (butterMilk * 8) +
        tenRupeesCup +
        (tenRupeesCurd * 9) +
        (halfPackCurd * 36) +
        (tenRupeesMilk * 46);

    const finalTotal = total + balance;
    document.getElementById('totalAmount').innerText = finalTotal;
}

// Function to reset the form
function resetForm() {
    document.getElementById('orderForm').reset();
    document.querySelectorAll('.calculated-value').forEach(el => el.innerText = '₹ 0');
    document.getElementById('totalAmount').innerText = '0';
}

// Function to save the page as an image
function saveAsImage() {
    html2canvas(document.body, {
        scale: 2, // Increase the scale for better quality
    }).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpeg');
        link.download = 'siva_milk_agency.jpg';
        link.click();
    });
}
