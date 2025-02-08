function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    if (planType === "Basic" && wantsTrainer) return "Upgrade to Premium";
    if (planType !== "VIP" && wantsDietPlan) return "Upgrade to VIP";
    return planType;
}
console.log(choosePlan("Bacic","true"))