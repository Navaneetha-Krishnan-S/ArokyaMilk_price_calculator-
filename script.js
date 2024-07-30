// Function to calculate and display values for input fields
function calculateField(id, multiplier) {
    const input = document.getElementById(id);
    const value = parseInt(input.value) || 0;
    const result = value * multiplier;
    document.getElementById(id + 'Value').innerText = `₹ ${result}`;
    calculateTotal(); // Recalculate the total whenever a field is updated
}

// Function to calculate the value for 1 L Milk based on selected option
function calculateOneLitreMilk() {
    const amountInput = document.getElementById('oneLitreMilkAmount');
    const amount = parseInt(amountInput.value) || 0;
    const bakeryRadio = document.getElementById('bakery');
    const shopRadio = document.getElementById('shop');
    
    let multiplier = 0;
    if (bakeryRadio.checked) {
        multiplier = 65;
    } else if (shopRadio.checked) {
        multiplier = 63;
    }
    
    const result = amount * multiplier;
    document.getElementById('oneLitreMilkValue').innerText = `₹ ${result}`;
    calculateTotal(); // Recalculate the total whenever a field is updated
}

// Function to calculate the value for ₹10 Cup based on selected option
function calculateCup() {
    const sixPcsRadio = document.getElementById('sixPcs');
    const oneBoxRadio = document.getElementById('oneBox');
    let price = 0;

    if (sixPcsRadio.checked) {
        price = 52;
    } else if (oneBoxRadio.checked) {
        price = 104;
    }

    document.getElementById('tenRupeesCupValue').innerText = `₹ ${price}`;
    calculateTotal(); // Recalculate the total whenever a field is updated
}

// Function to calculate the total amount including balance
function calculateTotal() {
    const fields = [
        'halfLitreMilk',
        'quarterLitreMilk',
        'oneLitreMilk',
        'tenRupeesMilk',
        'tenRupeesCurd',
        'halfPackCurd',
        'tenRupeesCup'
    ];
    
    let total = 0;
    
    fields.forEach(id => {
        const value = parseInt(document.getElementById(id + 'Value').innerText.replace('₹ ', '')) || 0;
        total += value;
    });

    const balanceInput = document.getElementById('balance');
    const balance = parseInt(balanceInput.value) || 0;
    total += balance; // Add balance to the total
    
    document.getElementById('totalAmount').innerText = total;
}

// Function to reset all fields and calculated values
function resetForm() {
    document.getElementById('orderForm').reset();
    const fields = [
        'halfLitreMilk',
        'quarterLitreMilk',
        'oneLitreMilk',
        'tenRupeesMilk',
        'tenRupeesCurd',
        'halfPackCurd',
        'tenRupeesCup'
    ];
    
    fields.forEach(id => {
        document.getElementById(id + 'Value').innerText = '₹ 0';
    });

    document.getElementById('totalAmount').innerText = '0';
}

// Function to save the page as an image
function saveAsImage() {
    // Temporarily set a fixed height to capture the full content
    const originalHeight = document.body.style.height;
    document.body.style.height = document.body.scrollHeight + 'px';

    html2canvas(document.body, {
        scrollX: 0,
        scrollY: 0,
        useCORS: true, // Enable CORS if needed
        onclone: (document) => {
            document.body.style.height = document.body.scrollHeight + 'px';
        }
    }).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpeg');
        link.download = 'siva_milk_agency.jpg';
        link.click();

        // Restore original height after capturing
        document.body.style.height = originalHeight;
    }).catch(err => {
        console.error('Error capturing the page:', err);
    });
}
