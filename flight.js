function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let fare = 300 + (classType === "Business" ? 200 : classType === "First" ? 500 : 0);
    if (luggageWeight > 20) fare += Math.ceil((luggageWeight - 20) / 10) * 50;
    if (isStudent) fare *= 0.85;
    if (isSenior) fare *= 0.9;
    return fare;
}
console.log(calculateFlightFare("Economy", 25, true, false));