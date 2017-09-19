"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var firebase = require('firebase');
exports.firebase = firebase;
var RestaurantDB = express_1.Router();
exports.RestaurantDB = RestaurantDB;
var ProcessVar = process.env.NODE_ENV;
var config = {
    apiKey: "AIzaSyCFvvrXp6BXXrvLbg4UC-DHgiN2TXzCem0",
    authDomain: "easyeat-a6bd1.firebaseapp.com",
    databaseURL: "https://easyeat-a6bd1.firebaseio.com",
    storageBucket: "easyeat-a6bd1.appspot.com",
    messagingSenderId: "134709852290"
};
var FoodMenu = {
    Hamburger: {
        price: 5.35
    },
    Drink: {
        price: 2.99
    },
    Fries: {
        price: 3.99
    },
    IceCream: {
        price: 4.99
    }
};
firebase.initializeApp(config);
//LOOK UP DATA
// firebase.database().ref("/test/").once("value").then(function(x) {
//     console.log(x.val());
// });
// Update Data
// var hello = {wow: "yeahhhsdjkvhsdjkh"};
// firebase.database().ref("/test/").update(hello).then(function(x) {
//     console.log("Sucess!");
// });
//GET ALL DATA
RestaurantDB.get("/getalldata", function (request, response) {
    firebase.database().ref().once("value").then(function (x) {
        response.json(x.val());
    });
});
//GET ALL TABLE INFORMATION
RestaurantDB.get("/getalltable", function (request, response) {
    firebase.database().ref("/Current_Tables").once("value").then(function (x) {
        response.json(x.val());
    });
});
//done done done done done done done done done done done done
//GET SINGLE TABLE
//getsingletable/:id"
RestaurantDB.get("/getsingletable", function (request, response) {
    if (ProcessVar !== 'test') {
        console.log(request.query);
    }
    ;
    firebase.database().ref("Current_Tables/" + request.query.id).once("value").then(function (x) {
        response.json(x.val());
    });
});
//GET ALL OPEN DATA
RestaurantDB.get("/getopentables", function (request, response) {
    firebase.database().ref().once("Current_Tables").then(function (x) {
        response.json(x.val());
    });
});
//UPDATE FOOD INTO TABLE
//QUERY PARAMS
//FOOD OBJECT
//TABLE NAME
//INPUT
// {
//     "table": "table2",
//     "orders": [
//         {
//             "order_name": "Drinks",
//             "price": 2.99,
//             "special_request": "no cheese"
//         }
//     ]
// }
//This will be the update food method
RestaurantDB.post("/updatefood", function (request, response) {
    var table = request.body.table;
    var orders = request.body.orders;
    if (ProcessVar !== "test") {
        console.log(request.body);
        console.log(orders);
    }
    ;
    var OrderObj = {
        orders: orders
    };
    firebase.database().ref("/Current_Tables/" + table).update(OrderObj).then(function (x) {
        response.json({ table: table, orders: orders, message: "Successfully updated the table" });
    });
});
//FINALYZE ITEM
//TABLE NAME
//Input
// {
//     "table": "table1"
// }
RestaurantDB.post("/finalizebill", function (request, response) {
    var table = request.body.table;
    firebase.database().ref("/Current_Tables/" + table).once("value").then(function (x) {
        var FoodArray = x.val().orders;
        console.log(FoodArray);
        var total = FoodArray.reduce(function (prev, current) {
            return prev += current.price;
        }, 0);
        var tax = Math.round(((total * 0.07)) * 100) / 100;
        var TotalObj = {
            total_without_tax: total,
            tax_alone: tax,
            total_with_tax: tax + total
        };
        response.json(TotalObj);
    });
});
//SET WAITER TO TABLE
//WAITER ID AND TABLE NAME
//Post Data
// {
//     "waiter": "Kristen Wong",
//     "table": "table1"
// }
RestaurantDB.post("/setwaiter", function (request, response) {
    var waiter_name = request.body.waiter;
    var table = request.body.table;
    if (ProcessVar !== 'test') {
        console.log(waiter_name);
    }
    ;
    var updateObj = {
        waiter_assigned: waiter_name
    };
    firebase.database().ref("/Current_Tables/" + table).update(updateObj).then(function (x) {
        response.json({ message: "Success", waiter_name: waiter_name, table: table });
    });
});
//# sourceMappingURL=protected.js.map