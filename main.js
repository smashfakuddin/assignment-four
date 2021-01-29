document.getElementById('increase').addEventListener('click', function(){
    var secondClassSeatCount = document.getElementById("second-class");
    var secondClassSeatCountNumber = parseInt(secondClassSeatCount.value);
    var secondClassSeatCountNew = secondClassSeatCountNumber + 1;
    secondClassSeatCount.value = secondClassSeatCountNew;
})