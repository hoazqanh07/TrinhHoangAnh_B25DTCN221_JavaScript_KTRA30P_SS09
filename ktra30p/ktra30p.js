let order = [
    "Đơn hàng A",
    "Đơn hàng B",
    "Đơn hàng C",
    "Đơn hàng D",
    "Đơn hàng E",
];

let revenues = [1500, 2800, 1200, -500, 3200];

function checkNegative(arr) {
    let negativeOrder = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativeOrder = true;
            break;
        }
    }
    return negativeOrder;
}
let resultNegative = checkNegative(revenues);
console.log("Có đơn hàng âm:", resultNegative);

function checkAbove500(arr) {
    let over = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 500) {
            over = false;
            break;
        }
    }
    return over;
}
let resultAbove500 = checkAbove500(revenues);
console.log("Tất cả trên 500:", resultAbove500);

function totalNetProfit(arr) {
    let netProfits = [];
    for (let i = 0; i < arr.length; i++) {
        let net = arr[i] * 0.9;
        netProfits.push(net);
    }
    return netProfits;
}
let profits = totalNetProfit(revenues);
console.log("Lợi nhuận ròng:", profits);