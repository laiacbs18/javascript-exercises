const repeatString = function(word, count) {
    if(count >= 0){
        return word.repeat(Math.abs(Math.round(count)));
    }else{
        return 'ERROR';
    }
    
};

// Do not edit below this line
module.exports = repeatString;
