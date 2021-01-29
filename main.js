document.getElementById('increase').addEventListener('click', function () {
    testFunction(true);
    

})
document.getElementById('decrease').addEventListener('click', function () {
    testFunction(false);
    
    
})


function testFunction(wantIncrease) {
    var secondClassSeatCount = document.getElementById("second-class");
    var secondClassSeatCountNumber = parseInt(secondClassSeatCount.value);
    var secondClassSeatCountNew = 0;
    if (wantIncrease == true) {
        var secondClassSeatCountNew = secondClassSeatCountNumber + 1;
    }
    if (wantIncrease == false && secondClassSeatCountNumber > 0) {
        var secondClassSeatCountNew = secondClassSeatCountNumber - 1;
    }
    secondClassSeatCount.value = secondClassSeatCountNew;

    caseTotal = secondClassSeatCountNew * 100 ;
    document.getElementById('secondClass-price').innerText = caseTotal;
    
}





