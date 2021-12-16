function calculateChange(total, payment){
    let change = (payment - total).toFixed(2);
    return parseFloat(change);
}

function isSufficientPayment(total, payment) {
    return payment >= total;
}

function calculateTotal(items) {
    let total = 0;
    for(let item of items){
        total += item.price;
    }
    return total;
}
module.exports = { 
    calculateChange: calculateChange,
    isSufficientPayment: isSufficientPayment,
    calculateTotal: calculateTotal
} 