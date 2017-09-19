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

let Daily = (month,callback) => {
    let x = CreateX(month);
    let arr = ComputeDaily(x, month);
    callback(arr);
};

let CreateX = (month) => {
   let counter = 0;
   let arr = Array.apply(null, Array(months[month])).map((x) => {
       counter++;
       return counter;
   });
   return arr;
};

let ComputeDaily = (x, month) => {
    let DaysArr = ytd_data.months[(month.toLowerCase())].days;
    let overall_X = x;

    let ConvertedData = ConvertData(DaysArr);

    let Sitting = {
        x: overall_X,
        y: ConvertedData.sitting,
        type: "scatter",
        name: "Sitting"
    };

    let Tips = {
        x: overall_X,
        y: ConvertedData.total_tip,
        type: "scatter",
        name: "Tips"
    };

    let Total_Value = {
        x: overall_X,
        y: ConvertedData.total_bill,
        type: "scatter",
        name: "Total"
    };

    let arr = [Total_Value, Tips, Sitting];
    return arr;
};

let ConvertData = (DaysArr) => {
    let obj = {
        total_bill:[],
        sitting: [],
        total_tip: []
    };

    //Loop Method
    let arr = DaysArr.reduce((prev, current) => {
        let tables = current.tables;

        var tablesTotalBill = 0;
        var totalSitting = 0;
        var totalTip = 0;

        for(let i of tables){
            tablesTotalBill += i.total_bill;
            totalSitting += i.num_of_customer;
            totalTip += i.total_tip;
        }

        prev.total_bill.push(Number(tablesTotalBill).toFixed(2));
        prev.sitting.push(Number(totalSitting).toFixed(2));
        prev.total_tip.push(Number(totalTip).toFixed(2));

        return prev;
    }, obj);
    return arr;
};





module.exports = Daily;



