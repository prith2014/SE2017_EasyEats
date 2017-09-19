let ytd_data = require('../ytd.json');

let months = {
    "january": 31,
    "february": 28,
    "march": 31,
    "april": 30,
    "may": 31,
    "june": 30,
    "july": 31,
    "august": 31,
    "september": 31,
    "octobor": 31,
    "november": 30,
    "december": 31
};


let CreateMonth = (callback) => {
    let x = CreateX();
    let arr = ComputeMonthly(x);
    callback(arr);
};

let CreateX = () => {
    let arr = [];
    Object.keys(months).forEach(key => {
        arr.push(key);
    })
    return arr;
};


let CreateMonthly = (totalData) => {
    // totalData = [Total_Value, Tips, Sitting];
    var graphOptions = {filename: "easyeats_monthly", fileopt: "overwrite"};
    plotly.plot(totalData, graphOptions, function (err, msg) {
        console.log(msg);
    });
};

let ComputeMonthly = (x) => {
    let months = ytd_data.months;
    let overall_X = x;

    let Sitting = {
        x: overall_X,
        y: getSitting(months),
        type: "scatter",
        name: "Sitting"
    };

    let Tips = {
        x: overall_X,
        y: getTips(months),
        type: "scatter",
        name: "Tips"
    };

    let Total_Value = {
        x: overall_X,
        y: getTotal(months),
        type: "scatter",
        name: "Total"
    };

    let arr = [Total_Value, Tips, Sitting];
    return arr;
};

let getSitting = (months) => {
    let arr = [];
    Object.entries(months).forEach(([key, val]) => {
        arr.push(val.mtd_sitting);
    });
    return arr;
};


let getTips = (months) => {
    let arr = [];
    Object.entries(months).forEach(([key, val]) => {
        arr.push(val.mtd_tip);
    });
    return arr;
};

let getTotal = (months) => {
    let arr = [];
    Object.entries(months).forEach(([key, val]) => {
        arr.push(val.mtd_total);
    });
    return arr;
};




module.exports = CreateMonth;