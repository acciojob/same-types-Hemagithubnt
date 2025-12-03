function isSameType(value1, value2) {
    // Directly return the boolean result
    return typeof(value1) === typeof(value2);
}

let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));