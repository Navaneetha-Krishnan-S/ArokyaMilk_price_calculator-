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

    let total = halfLitreMilkTotal + quarterLitreMilkTotal + oneLitreMilkTotal + tenRupeesMilkTotal + tenRupeesCurdTotal + halfPackCurdTotal + tenRupeesCupTotal;

    // Adjust the total based on the balance value
    total += balance; // Add or subtract balance as per its value

    document.getElementById('totalAmount').textContent = total;
}

function resetForm() {
    document.getElementById('orderForm').reset();
    document.querySelectorAll('.calculated-value').forEach(el => el.textContent = '₹0');
    document.getElementById('totalAmount').textContent = '0';
}

function printPage() {
    window.print();
}

// Initial total calculation in case the form is pre-filled
document.addEventListener("DOMContentLoaded", function() {
    calculateTotal();
});
