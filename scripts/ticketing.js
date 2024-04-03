function formPage(){
    showElementById('phParibahan');
}

var count = 0;
function changeNow(button){
    const buttons = document.getElementsByClassName('ticket-number');

    button.style.backgroundColor = '#1DD100';
    button.style.color = 'white';
    // console.log(button.textColor);
    count++;
    
    // console.log(count);
    if(count >= 4){
        console.log('Warning: Maximum 4 tickets can be selected!');
        const warning = document.getElementById('first-warning');
        warning.classList.remove('hidden');
        showElementById('first-warning');
        for(const bg of buttons){
            bg.disabled = true;
        }
    }
    


    const fortySeats = document.getElementById('forty-seats');
    const seatNumber = parseInt(fortySeats.innerText);
    const result = seatNumber - 1;
    fortySeats.innerText = result;
    

}