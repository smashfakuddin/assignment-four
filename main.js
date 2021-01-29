document.getElementById('economy-increase').addEventListener('click', function () {
    seatIncrease("economy",true);

})
document.getElementById('economy-decrease').addEventListener('click', function () {
    seatIncrease("economy",false);

})

document.getElementById('firstClass-increase').addEventListener('click', function () {
    seatIncrease('first',true);


})
document.getElementById('firstClass-decrease').addEventListener('click', function () {
    seatIncrease('first',false);

})

function seatIncrease(seatName,wantToIncrease) {
        var SeatCount = document.getElementById(seatName +"-class");
        var SeatCountNumber = parseInt(SeatCount.value);
        var SeatCountNew = 0;
        if (wantToIncrease == true) {
            var SeatCountNew = SeatCountNumber + 1;
        }
        if (wantToIncrease == false && SeatCountNumber > 0) {
            var SeatCountNew = SeatCountNumber - 1;
        }
        var totalPrice = 0;
        if(seatName == 'economy'){
            totalPrice = SeatCountNew * 100;
        }
        if(seatName == 'first'){
            totalPrice = SeatCountNew * 150;
        }

        SeatCount.value = SeatCountNew;
    

        document.getElementById(seatName+ '-price').innerText =totalPrice;
    
    }




