let slider = document.getElementById("slider");
let cost = document.getElementById("cost-value");
let pageviews = document.getElementById("pageviews-value");
let switchInput = document.getElementById("switch-input");
// chosen discount
let yearlyDiscount = 0.25;
// default multiplier
let appliedMultiplier = 1;

let pageCostArr = [
    ["10K", 8],
    ["50K", 12],
    ["100K", 16],
    ["500K", 24],
    ["1M", 36],
];
// default cost and pageviews
cost.innerHTML = pageCostArr[0][1];
pageviews.innerHTML = pageCostArr[0][0];

function refreshValues() {
    let totalCost = pageCostArr[slider.value][1] * appliedMultiplier;
    cost.innerHTML = totalCost;
    pageviews.innerHTML = pageCostArr[slider.value][0];
}

slider.oninput = refreshValues;

slider.addEventListener("mousemove", function () {
    let fullBar = (slider.value * 100) / 4;
    let barColor = `linear-gradient(90deg, hsl(174, 77%, 80%) ${fullBar}%, hsl(224, 65%, 95%) ${fullBar}%)`;
    slider.style.background = barColor;
});

switchInput.onclick = function () {
    if (this.checked) {
        appliedMultiplier = 1 - yearlyDiscount;
        refreshValues();
    }
    if (!this.checked) {
        appliedMultiplier = 1;
        refreshValues();
    }
};
