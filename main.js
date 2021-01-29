document.getElementById('economy-increase').addEventListener('click', function () {
    testFunction(true);

})
document.getElementById('economy-decrease').addEventListener('click', function () {
    testFunction(false);

})

document.getElementById('firstClass-increase').addEventListener('click', function () {
    testFunction2(true);


})
document.getElementById('firstClass-decrease').addEventListener('click', function () {
    testFunction2(false);

})

function testFunction(wantToIncrease) {
    var secondClassSeatCount = document.getElementById("economy-class");
    var secondClassSeatCountNumber = parseInt(secondClassSeatCount.value);
    var secondClassSeatCountNew = 0;
    if (wantToIncrease == true) {
        var secondClassSeatCountNew = secondClassSeatCountNumber + 1;
    }
    if (wantToIncrease == false && secondClassSeatCountNumber > 0) {
        var secondClassSeatCountNew = secondClassSeatCountNumber - 1;
    }
    secondClassSeatCount.value = secondClassSeatCountNew;

    secondClassTotal = secondClassSeatCountNew * 100;
    document.getElementById('economyClass-price').innerText = secondClassTotal;

}

function testFunction2(wantToIncrease) {
    var secondClassSeatCount = document.getElementById("first-class");
    var secondClassSeatCountNumber = parseInt(secondClassSeatCount.value);
    var secondClassSeatCountNew = 0;
    if (wantToIncrease == true) {
        var secondClassSeatCountNew = secondClassSeatCountNumber + 1;
    }
    if (wantToIncrease == false && secondClassSeatCountNumber > 0) {
        var secondClassSeatCountNew = secondClassSeatCountNumber - 1;
    }
    secondClassSeatCount.value = secondClassSeatCountNew;

    secondClassTotal = secondClassSeatCountNew * 150;
    document.getElementById('firstClass-price').innerText = secondClassTotal;

}