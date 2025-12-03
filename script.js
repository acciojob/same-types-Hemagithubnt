function isSameType(value1, value2) {
    // Convert strings to numbers if they look like numbers
    let val1 = isNaN(value1) ? value1 : Number(value1);
    let val2 = isNaN(value2) ? value2 : Number(value2);
    
    return typeof(val1) === typeof(val2);
}

let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
