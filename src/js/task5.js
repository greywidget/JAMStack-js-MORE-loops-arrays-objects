// Return items from the cart if the price falls within a low -> high Range.
// The first function bases selection simply on the price.
// The second function allows selection to be based on price * quantity if
//   the quantity boolean is passed as true.
// N.B that this uses the golfScore array from golfScore.js

function getResults() {
    // Calculate the means
    var statType = 'mean';
    var outStr = "Mean Golf: " + getStats(golfScore, statType);
    document.getElementById('js-output1').innerHTML = outStr;

    outStr = "Mean Darts: " + getStats(dartScore, statType);
    document.getElementById('js-output2').innerHTML = outStr;

    // Calculate the medians
    statType = 'median';
    outStr = "Median Golf: " + getStats(golfScore, statType);
    document.getElementById('js-output3').innerHTML = outStr;

    outStr = "Median Darts: " + getStats(dartScore, statType);
    document.getElementById('js-output4').innerHTML = outStr;

    // Calculate the modes
    statType = 'mode';
    outStr = "Mode(s) Golf: " + 
    getStats(golfScore, statType);
    document.getElementById('js-output5').innerHTML = outStr;

    outStr = "Mode(s) Darts: " + 
    getStats(dartScore, statType);
    document.getElementById('js-output6').innerHTML = outStr;
}

function getStats(values, statType) {
    switch(statType) {
        case 'mean':
        return getMean(values);

        case 'median':
        return getMedian(values);

        case 'mode':
        return getMode(values);
    }
}

function getMean(values) {
    var total = 0;

    for (const value of values) {
        total += value;
    }
    return (total/values.length).toFixed(2);
}

function getMedian(values) {
    if (values.length == 0)
        return [];

    // Median processing requires ordered data. Nb InPlace sort.
    values.sort((a, b) => a - b);
    var median = 0;
    var dataLen = values.length;
    var mid1 = 0;
    var mid2 = 0;

    if (dataLen == 0) {
        median = undefined;
    } else if (dataLen % 2 == 0) {
        mid1 = (dataLen / 2) - 1;
        mid2 = mid1 + 1;
        median = (values[mid1] + values[mid2]) / 2;
    } else {
        mid1 = (dataLen - 1) / 2;
        median = values[mid1];
    }

    return median.toFixed(2);
}

function getMode(values) {
    var counts = {};
    var modeArr = [];
    var maxCount = 0;

    for (const val of values) {
        if (counts.hasOwnProperty(val))
            counts[val] += 1;
        else
            counts[val] = 1;

        if (counts[val] > maxCount)
            maxCount = counts[val];
    }
    
    for (const val in counts) {
        if (counts[val] == maxCount )
            modeArr.push(val);
    }
    return modeArr;
}
