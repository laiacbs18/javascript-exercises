const sumAll = function(num1, num2) {
    var maxNum = 0;
    var minNum = 0;
    var sum = 0;

    if(num1 < num2){
        maxNum = num2;
        minNum = num1;
    }else if(num1 > num2){
        maxNum = num1;
        minNum = num2;
    }else{
        maxNum = num2;
        minNum = num1;
    }

    if(!Number.isInteger(minNum) || !Number.isInteger(maxNum) || minNum < 0 || maxNum < 0){
        return "ERROR";
    }

    for(var i = minNum; i <= maxNum; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
