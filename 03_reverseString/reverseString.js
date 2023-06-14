const reverseString = function(input) {
    var myInput =  Array.from(input);
    input = '';    

    for(var i = myInput.length - 1; i >= 0; i--){
        input += myInput[i];
    }

    return input;
};

// Do not edit below this line
module.exports = reverseString;
