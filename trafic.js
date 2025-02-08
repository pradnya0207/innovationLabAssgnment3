function trafficLightControl(density) {
    if (density === "Heavy Traffic") return 60;
    if (density === "Moderate Traffic") return 40;
    return 20;
}
console.log(trafficLightControl("Moderate Traffic"));