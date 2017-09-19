//UNIT TESTING

var request = require('request');  // => npm HTTP request module
var http = require('http');
// console.log(request);
var SendRequest = function(url, path , method ,callback, body){
    console.log("Sending a request now...");
    if(method === "GET"){
        console.log('Please hold...');
        http.get({
            hostname: url,
            port: 3000,
            path: path,
            agent: false  // create a new agent just for this one request
        }, function(res) {
            res.setEncoding('utf8');
            res.on('data', function (body) {
                callback(body);
            });
        });
    }
    if(method === "POST"){
        console.log("Please hold...");
        var fullurl = 'http://localhost:3000'+path;
        request.post({
            uri: fullurl,
            body: body,
            json: true
        }, function(err, res, body){
            if(err) callback(err);
            if(body) callback(body);
        });
    }
};

//REQUEST   :   GET
//URL       :   localhost:{port}/api/getalldata
var GetAllDataTest = function(){
    SendRequest('192.168.1.12', '/api/getalldata','GET', function(res){
            console.log("HTTP request is finished...");
            console.log(res);
        });
};


//REQUEST   :   GET
//URL       :   localhost:{port}/api/getalltable
var GetAllTableTest = function(){
    SendRequest('192.168.1.12', '/api/getalltable','GET', function(res){
            console.log("HTTP request is finished...");
            console.log(res);
        })
};

//REQUEST   :   POST
//URL       :   localhost:{port}/api/updatefood
var UpdateFoodTest = function(){
    var fakeData = {
        "table": "table2",
        "orders": [
            {
                "order_name": "Drinks",
                "price": 2.99,
                "special_request": "mad cheese"
            }
        ]
    };
    SendRequest('192.168.1.12','/api/updatefood','POST', function(res){
            console.log("HTTP request is finished...");
            console.log(res);
        }, fakeData)
};

//REQUEST   :   POST
//URL       :   localhost:{port}/api/finalizebill
var TestFinalizeBill = function(){
    var fakeData = {
        "table": "table1"
    };
    SendRequest('192.168.1.12','/api/finalizebill','POST', function(res){
            console.log("HTTP request is finished...");
            console.log(res);
        }, body)
};


//REQUEST   :   POST
//URL       :   localhost:{port}/api/setwaiter
var SetWaiterTest = function(){
    var fakeData = {
        "waiter": "Kristen Wong",
        "table": "table1"
    };
    SendRequest('192.168.1.12','/api/setwaiter','POST', function(res){
            console.log("HTTP request is finished...");
            console.log(res);
        }, fakeData)
};


//GRAB ALL DATA
GetAllDataTest();

//GRAB ALL TABLE
// GetAllTableTest();

//UPDATE FOOD
// UpdateFoodTest();

//GET TOTAL BILL
// TestFinalizeBill();

//SET A WAITER TO A TABLE
// SetWaiterTest();