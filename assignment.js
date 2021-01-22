
// Problem1: kilometerToMeter
function kilometerToMeter(value) {
    if (value < 0) {
        return (" Error: 'Distance should not be negative value' ")
    }
    else {
        var meter = value * 1000;     //we know 1km=1000m;
        return meter;
    }
}
var result = kilometerToMeter(-5.5);// just for testing purpose;
console.log(result);// just for testing purpose;


// Problem2: budgetCalculator
function budgetCalculator(clock, phone, laptop) {
    var cost = 0;
    if (clock < 0) {
        console.log("Error: How you buy Negative amount of Clock??");
    }
    else {
        var clockPrize = clock * 50;
        cost = cost + clockPrize;
    }
    if (phone < 0) {
        console.log("Error: How you buy Negative amount of Phone??");
    }
    else {
        var phonePrize = phone * 100;
        cost = cost + phonePrize;
    }
    if (laptop < 0) {
        console.log("Error: How you buy Negative amount of Laptop??");
        return ("Error: Please give valid Amount!!");
    }
    else {
        var laptopPrize = laptop * 500;
        cost = cost + laptopPrize;
    }
    return cost;

}
var totalCost = budgetCalculator(-5, -5, -5);// just for testing purpose;
console.log(totalCost);// just for testing purpose;


// Problem3: hotelCost
function hotelCost(time) {
    var totalAmount = 0;
    if (time < 0) {
        return ("Error: It only be possible in your Dream!!!");
    }
    else {
        if (time <= 10) {
            var totalAmount = time * 100;
        }
        else if (time <= 20) {
            var initialCost = 10 * 100;
            var remaining = time - 10;
            var secondaryCost = remaining * 80;
            totalAmount = initialCost + secondaryCost;
        }
        else {
            var initialCost = 10 * 100;
            var secondaryCost = 10 * 80;
            var remaining = time - 20;
            var aditionalCost = remaining * 50;
            totalAmount = initialCost + secondaryCost + aditionalCost;
        }

    }
    return totalAmount;
}
var output = hotelCost(-5);// just for testing purpose;
console.log(output);// just for testing purpose;


// Problem4: megaFriend
function megaFriend(nameList) {
    var maxLong = nameList[0];
    if (maxLong == null) {
        return ("Error: Ki vai tomar ki kono friend nai??");
    }
    else {

        for (var i = 0; i < nameList.length; i++) {
            var element = nameList[i];
            if (maxLong.length < element.length) {
                maxLong = element;
            }
        }
    }

    return maxLong
}
var friend = [];// just for testing purpose;
var output = megaFriend(friend);// just for testing purpose;
console.log(output);// just for testing purpose;