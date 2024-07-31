// Function to display the current date
function displayCurrentDate() {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    document.getElementById('currentDate').innerText = formattedDate;
}

// Call the function to display the date when the page loads
displayCurrentDate();


// Function to handle the custom radio button deselection
function handleRadioClick(event) {
    const currentRadio = event.target;
    if (currentRadio.dataset.waschecked === 'true') {
        currentRadio.checked = false;
        currentRadio.dataset.waschecked = 'false';
    } else {
        document.querySelectorAll('input[type="radio"]').forEach((radio) => {
            radio.dataset.waschecked = 'false';
        });
        currentRadio.dataset.waschecked = 'true';
    }

    // Update calculations
    calculateOneLitreMilk();
    calculateCup();
}

// Attach event listeners to the radio buttons
document.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.dataset.waschecked = radio.checked ? 'true' : 'false';
    radio.addEventListener('click', handleRadioClick);
});


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
