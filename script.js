function calculateField(fieldId, multiplier) {
    const value = parseInt(document.getElementById(fieldId).value) || 0;
    const total = value * multiplier;
    document.getElementById(fieldId + 'Value').textContent = `₹${total}`;
    calculateTotal();
}

function calculateOneLitreMilk() {
    const value = parseInt(document.getElementById('oneLitreMilkAmount').value) || 0;
    const type = document.querySelector('input[name="oneLitreMilk"]:checked')?.value || '';
    const multiplier = type === 'bakery' ? 65 : 63;
    const total = value * multiplier;
    document.getElementById('oneLitreMilkValue').textContent = `₹${total}`;
    calculateTotal();
}

function calculateCup() {
    const type = document.querySelector('input[name="tenRupeesCup"]:checked')?.value || '';
    const total = type === '6pcs' ? 52 : 104;
    document.getElementById('tenRupeesCupValue').textContent = `₹${total}`;
    calculateTotal();
}

function calculateTotal() {
    const halfLitreMilkTotal = parseInt(document.getElementById('halfLitreMilk').value) * 69 || 0;
    const quarterLitreMilkTotal = parseInt(document.getElementById('quarterLitreMilk').value) * 17 || 0;
    const oneLitreMilkType = document.querySelector('input[name="oneLitreMilk"]:checked')?.value || '';
    const oneLitreMilkMultiplier = oneLitreMilkType === 'bakery' ? 65 : 63;
    const oneLitreMilkTotal = parseInt(document.getElementById('oneLitreMilkAmount').value) * oneLitreMilkMultiplier || 0;
    const tenRupeesMilkTotal = parseInt(document.getElementById('tenRupeesMilk').value) * 46 || 0;
    const tenRupeesCurdTotal = parseInt(document.getElementById('tenRupeesCurd').value) * 9 || 0;
    const halfPackCurdTotal = parseInt(document.getElementById('halfPackCurd').value) * 36 || 0;
    const tenRupeesCupTotal = document.getElementById('tenRupeesCupValue').textContent.match(/\d+/) ? parseInt(document.getElementById('tenRupeesCupValue').textContent.match(/\d+/)[0]) : 0;
    const balance = parseInt(document.getElementById('balance').value) || 0;

    // Calculate the total with the balance
    let total = halfLitreMilkTotal + quarterLitreMilkTotal + oneLitreMilkTotal +
        tenRupeesMilkTotal + tenRupeesCurdTotal + halfPackCurdTotal + tenRupeesCupTotal;

    // Adjust the total based on the balance value
    if (balance < 0) {
        total += balance; // Subtract if balance is negative
    } else {
        total += balance; // Add if balance is positive or zero
    }

    document.getElementById('totalAmount').textContent = total;
}

function performCalculation() {
    const value1 = parseFloat(document.getElementById('calcInput1').value);
    const operator = document.getElementById('operator').value.trim();
    const value2 = parseFloat(document.getElementById('calcInput2').value);
    let result = 0;

    switch (operator) {
        case '+':
            result = value1 + value2;
            break;
        case '-':
            result = value1 - value2;
            break;
        case '*':
            result = value1 * value2;
            break;
        case '/':
            if (value2 !== 0) {
                result = value1 / value2;
            } else {
                result = 'Infinity';
            }
            break;
        default:
            result = 'Invalid operator';
    }

    document.getElementById('calcResult').textContent = result;
}

// Initial total calculation in case the form is pre-filled
document.addEventListener("DOMContentLoaded", function() {
    calculateTotal();
});
