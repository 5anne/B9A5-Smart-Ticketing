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
    console.log(count);
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
    }

    const fortySeats = document.getElementById('forty-seats');
    const seatNumber = parseInt(fortySeats.innerText);
    const result = seatNumber - 1;
    fortySeats.innerText = result;


}

