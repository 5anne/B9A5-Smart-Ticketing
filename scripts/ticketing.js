function formPage() {
    showElementById('phParibahan');
}

var count = 0;
function changeNow(button) {

    const buttons = document.getElementsByClassName('ticket-number');

    button.style.backgroundColor = '#1DD100';
    button.style.color = 'white';
    button.disabled = true;

    count++;
    // console.log(count);
    var selectedSeats = document.getElementById('selected-seats');
    var selectedSeatNumber = parseInt(selectedSeats.innerText);
    selectedSeatNumber = count;
    selectedSeats.innerText = selectedSeatNumber;

    const totalPrice = document.getElementById('total-price');
    const grandPrice = document.getElementById('grand-price');

    if (count === 1) {
        const ticketNameOne = document.getElementById('ticket-name-one');
        ticketNameOne.innerText = button.innerText;
        const selectedTicketOne = document.getElementById('selected-ticket-one');
        selectedTicketOne.classList.remove('hidden');

        totalPrice.innerText = 550;
        grandPrice.innerText = 550;
    }
    if (count === 2) {
        const ticketNameTwo = document.getElementById('ticket-name-two');
        ticketNameTwo.innerText = button.innerText;
        const selectedTicketTwo = document.getElementById('selected-ticket-two');
        selectedTicketTwo.classList.remove('hidden');

        totalPrice.innerText = (550 * 2);
        grandPrice.innerText = (550 * 2);
    }
    if (count === 3) {
        const ticketNameThree = document.getElementById('ticket-name-three');
        ticketNameThree.innerText = button.innerText;
        const selectedTicketThree = document.getElementById('selected-ticket-three');
        selectedTicketThree.classList.remove('hidden');

        totalPrice.innerText = (550 * 3);
        grandPrice.innerText = (550 * 3);
    }
    if (count === 4) {
        const ticketNameFour = document.getElementById('ticket-name-four');
        ticketNameFour.innerText = button.innerText;
        const selectedTicketFour = document.getElementById('selected-ticket-four');
        selectedTicketFour.classList.remove('hidden');

        totalPrice.innerText = (550 * 4);
        grandPrice.innerText = (550 * 4);
    }

    if (count >= 4) {
        console.log('Warning: Maximum 4 tickets can be selected!');
        const warning = document.getElementById('first-warning');
        warning.classList.remove('hidden');
        showElementById('first-warning');
        for (const bg of buttons) {
            bg.disabled = true;
        }
        const couponField = document.getElementById('coupon-field');
        couponField.disabled = false;
        const couponButton = document.getElementById('coupon-button');
        couponButton.disabled = false;

    }

    const fortySeats = document.getElementById('forty-seats');
    const seatNumber = parseInt(fortySeats.innerText);
    const result = seatNumber - 1;
    fortySeats.innerText = result;

}

function discountPrice() {

    const couponField = document.getElementById('coupon-field');
    const couponButton = document.getElementById('coupon-button');
    // console.log(couponField.value);

    const totalPrice = document.getElementById('total-price');
    const grandPrice = document.getElementById('grand-price');
    const discounted = document.getElementById('discount-price');
    const hiddenDiscount = document.getElementById('hidden-discount');
    const secondWarning = document.getElementById('second-warning');
    const price = parseInt(totalPrice.innerText);

    if (couponField.value === 'NEW15') {
        const discount_Price = price * (15 / 100);
        discounted.innerText = discount_Price;
        hiddenDiscount.classList.remove('hidden');
        couponField.classList.add('hidden');
        couponButton.classList.add('hidden');
        const sum = price - discount_Price;
        grandPrice.innerText = sum;
        secondWarning.classList.add('hidden');
        
    }
    else if(couponField.value === 'Couple20'){
        const discount_Price = price * (20 / 100);
        discounted.innerText = discount_Price;
        hiddenDiscount.classList.remove('hidden');
        couponField.classList.add('hidden');
        couponButton.classList.add('hidden');
        const sum = price - discount_Price;
        grandPrice.innerText = sum;
        secondWarning.classList.add('hidden');
    }
    else{
        hiddenDiscount.classList.add('hidden');
        grandPrice.innerText = price;
        secondWarning.classList.remove('hidden');
        // console.log('Warning: Wrong Coupon Code!');
    }

}

function enableNext(event) {
    const numberInput = parseInt(event.value);
    if(count > 0 && typeof numberInput === "number"){
        document.getElementById('next-button').disabled = false;
    } else{
        document.getElementById('third-warning').classList.remove('hidden');
    }
}

function confirmNow(event) {
    location.replace("http://127.0.0.1:5500/index2.html");
}

function backNow(event) {
    location.replace("http://127.0.0.1:5500/index.html");
}