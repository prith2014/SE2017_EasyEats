let plotly = require('plotly')('krisewong', 'uIA0c75MhPzsGd98luS6');
let MonthsScript = require('./monthly');
let DailyScript = require('./daily');


let GetData = {

    getMonthly: (val) => {
        MonthsScript((totalData) => {
            // totalData = [Total_Value, Tips, Sitting];
            var graphOptions = {filename: "easyeats_monthly", fileopt: "overwrite"};
            plotly.plot(totalData, graphOptions, function (err, msg) {
                console.log(msg);
            });
        });
    },

    getDaily: (val, callback) => {
        DailyScript(val,(totalData) => {
            var graphOptions = {filename: "easyeats_daily", fileopt: "overwrite"};
            plotly.plot(totalData, graphOptions, function (err, msg) {
                callback(msg);
            });
        });
    }
};


module.exports = GetData;