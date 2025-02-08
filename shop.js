function calculateFinalAmount(orderAmount) {
    let discount = 0;
    if (orderAmount > 1000) discount = 0.2;
    else if (orderAmount >= 500) discount = 0.1;
    let finalAmount = orderAmount * (1 - discount);
    finalAmount += finalAmount > 50 ? 0 : 10;
    return finalAmount;
}
console.log(calculateFinalAmount(1200)); 