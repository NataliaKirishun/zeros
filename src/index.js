module.exports = function getZerosCount(number) {
    let s = 0;
    while (number >= 5)  {
        number = Math.floor(number / 5);
        s += number;
    }
    return s;
};

