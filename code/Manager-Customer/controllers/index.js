//@authors elizabeth prthvi tejas mithu

var scheduleApp = angular.module('scheduleApp', ['firebase']);


scheduleApp.controller('ScheduleCtrl', ['$scope','$firebaseArray', 
    function($scope, $firebaseArray) {
        
    // CREATE A FIREBASE REFERENCE
   // var shiftRef = new Firebase('https://software-engineering-9a76b.firebaseio.com/schedule');
    var nonperRef = new Firebase('https://scheduler-76554.firebaseio.com/nonperishables');
   // ////console.log(nonperRef);

    // GET TODOS AS AN ARRAY
    $scope.nonperishables = $firebaseArray(nonperRef);

            // CREATE A FIREBASE REFERENCE
            //var perishRef = new Firebase('https://software-engineering-9a76b.firebaseio.com/schedule');
    var perishRef = new Firebase('https://scheduler-76554.firebaseio.com/perishables');
    //////console.log(perishRef);

            // GET TODOS AS AN ARRAY
    $scope.perishables = $firebaseArray(perishRef);
         //  $scope.perishables = [{'name':'eggs', 'quantity':'5','available':'true'}];
    //////console.log($scope.perishables);

    // CREATE A FIREBASE REFERENCE
            //var perishRef = new Firebase('https://software-engineering-9a76b.firebaseio.com/schedule');
    var menudrinksRef = new Firebase('https://scheduler-76554.firebaseio.com/menudrinks');
    ////console.log(drinksRef);

            // GET TODOS AS AN ARRAY
    $scope.menuDrinks = $firebaseArray(menudrinksRef);
    console.log($scope.menuDrinks);


    // CREATE A FIREBASE REFERENCE
            //var perishRef = new Firebase('https://software-engineering-9a76b.firebaseio.com/schedule');
    var utensilsRef = new Firebase('https://scheduler-76554.firebaseio.com/utensils');
    ////console.log(utensilsRef);

            // GET TODOS AS AN ARRAY
    $scope.utensils = $firebaseArray(perishRef);


// CREATE A FIREBASE REFERENCE
            //var perishRef = new Firebase('https://software-engineering-9a76b.firebaseio.com/schedule');
    var appRef = new Firebase('https://scheduler-76554.firebaseio.com/appetizers');
    ////console.log(appRef);

            // GET TODOS AS AN ARRAY
    $scope.appetizers = $firebaseArray(appRef);
    ////console.log($scope.appetizers);

// CREATE A FIREBASE REFERENCE
            //var perishRef = new Firebase('https://software-engineering-9a76b.firebaseio.com/schedule');
    var entreeRef = new Firebase('https://scheduler-76554.firebaseio.com/entrees');
    ////console.log(entreeRef);

            // GET TODOS AS AN ARRAY
    $scope.entree= $firebaseArray(entreeRef);
    ////console.log($scope.entree);

// CREATE A FIREBASE REFERENCE
            //var perishRef = new Firebase('https://software-engineering-9a76b.firebaseio.com/schedule');
    var menudrinksRef = new Firebase('https://scheduler-76554.firebaseio.com/menudrinks');
    ////console.log(menudrinksRef);

            // GET TODOS AS AN ARRAY
    $scope.menuDrinks = $firebaseArray(menudrinksRef);
    ////console.log($scope.menuDrinks);

// CREATE A FIREBASE REFERENCE
            //var perishRef = new Firebase('https://software-engineering-9a76b.firebaseio.com/schedule');
    var dessertRef = new Firebase('https://scheduler-76554.firebaseio.com/desserts');
    ////console.log(dessertRef);

            // GET TODOS AS AN ARRAY
    $scope.desserts = $firebaseArray(dessertRef);
    ////console.log($scope.desserts);

// CREATE A FIREBASE REFERENCE
            //var perishRef = new Firebase('https://software-engineering-9a76b.firebaseio.com/schedule');
    var costRef = new Firebase('https://scheduler-76554.firebaseio.com/costs');
    ////console.log(costRef);

            // GET TODOS AS AN ARRAY
    $scope.costs = $firebaseArray(costRef);

    // CREATE A FIREBASE REFERENCE
            //var perishRef = new Firebase('https://software-engineering-9a76b.firebaseio.com/schedule');
    var profitRef = new Firebase('https://scheduler-76554.firebaseio.com/profits');
    ////console.log(profitRef);

            // GET TODOS AS AN ARRAY
    $scope.profits = $firebaseArray(profitRef);

     var shiftRef = new Firebase('https://scheduler-76554.firebaseio.com/schedule');

     var reservationRef = new Firebase('https://scheduler-76554.firebaseio.com/reservations');
      $scope.reservations = $firebaseArray(reservationRef);

      var orderRef = new Firebase('https://scheduler-76554.firebaseio.com/order_queue');
      $scope.orderQueue = $firebaseArray(orderRef);
   // ////console.log(nonperRef);
   $scope.food = {};
   $scope.food.nuts = 0;
   $scope.food.dairy = 0;
   $scope.food.vegetarian = 0;


    // GET TODOS AS AN ARRAY
    $scope.shifts = $firebaseArray(shiftRef);

    $scope.years = ['2017'];
    $scope.months = ['January', 'February','March','April','May','June','July','August','September','October','November','Decemeber'];
    $scope.days = ['1','2','3','4','5'];
    $scope.startTimes = ['1200','1300','1400','1500','1600','1700'];
    $scope.endTimes = ['1700','1800','1900','2000','2100','2200'];
    // ADD TODO ITEM METHOD
    $scope.addShift = function () {

        // CREATE A UNIQUE ID
        var timestamp = new Date().valueOf();
        if($scope.selectedStart>=$scope.selectedEnd)
            {
              alert('end time must be greater than start time');
              return;
            }

    //next three lines for generating random code
     // for(var i = 0; i< 100; i++){
      //  $scope.selectedDay = Math.floor(Math.random() * (28 - 0 + 1)) + 0;
       // $scope.selectedStart = $scope.selectedStart + 1;
        $scope.shifts.$add({
            id: timestamp,
            username: $scope.shiftName,
            month: $scope.selectedMonth,
            day: $scope.selectedDay,
            year: $scope.selectedYear,
            start: $scope.selectedStart,
            end: $scope.selectedEnd,

            status: 'pending'
        });
   // }

        $scope.shiftName = "";
        $scope.day = "";
        $scope.time = "";

    };

    // REMOVE TODO ITEM METHOD
    $scope.removeShift = function (index, shift) {
        
        // CHECK THAT ITEM IS VALID
        if (shift.id === undefined)return;

        // FIREBASE: REMOVE ITEM FROM LIST
        $scope.shifts.$remove(shift);
                ////console.log(shift);


    };

    // MARK TODO AS IN PROGRESS METHOD
    $scope.startShift = function (index, shift) {
        ////console.log(shift);

        // CHECK THAT ITEM IS VALID
        if (shift.id === undefined)return;

        // UPDATE STATUS TO IN PROGRESS AND SAVE
        shift.status = 'in progress';
        $scope.shifts.$save(shift);

    };

    // MARK TODO AS COMPLETE METHOD
    $scope.completeShift = function (index, shift) {

        // CHECK THAT ITEM IS VALID
        if (shift.id === undefined)return;

        // UPDATE STATUS TO COMPLETE AND SAVE
        shift.status = 'complete';
        $scope.shifts.$save(shift);
                ////console.log(shift);

    };
////////////////////////////////////////
    var getTotal = function() {
        var total = 0;
        for (var i=0; i < $scope.profits.length; i++) {
            total += parseFloat($scope.profits[i].amount);
            //console.log("Total",total);
        }
        $scope.profitsTotal = total;
        $scope.netTotal = $scope.profitsTotal - $scope.costsTotal;
        $scope.avgTotal = $scope.profitsTotal/$scope.profits.length;
    };

   

     $scope.addProfits = function () {

        // CREATE A UNIQUE ID
        var timestamp = new Date().valueOf();
  
    //next three lines for generating random code
     // for(var i = 0; i< 100; i++){
      //  $scope.selectedDay = Math.floor(Math.random() * (28 - 0 + 1)) + 0;
       // $scope.selectedStart = $scope.selectedStart + 1;
        $scope.profits.$add({
            id: timestamp,
            name: $scope.item.name,
            amount: $scope.item.amount
        });
   // }

        $scope.item = "";

        getTotal();
      //  //console.log("get total");

    };

     $scope.removeProfits = function (item) {
        // CHECK THAT ITEM IS VALID

        if (item.name === undefined)return;

        // FIREBASE: REMOVE ITEM FROM LIST
        $scope.profits.$remove(item);

        ////console.log("removed");

        getTotal();


    };

     $scope.updateProfit = function (item) {
        ////console.log(shift);

        // CHECK THAT ITEM IS VALID
        if (item.name === undefined)return;
        var timestamp = new Date().valueOf();
        // UPDATE STATUS TO IN PROGRESS AND SAVE
        $scope.profits.$add({
            id:timestamp,
            name: item.name,
            amount: item.amount
            });

        getTotal();

    };

    $scope.addCosts = function () {

        // CREATE A UNIQUE ID
        var timestamp = new Date().valueOf();
  
    //next three lines for generating random code
     // for(var i = 0; i< 100; i++){
      //  $scope.selectedDay = Math.floor(Math.random() * (28 - 0 + 1)) + 0;
       // $scope.selectedStart = $scope.selectedStart + 1;
        $scope.costs.$add({
            id: timestamp,
            name: $scope.item2.name,
            amount: $scope.item2.amount
        });
   // }

        $scope.item2 = "";

        getTotalCost();

    };
 var getTotalCost = function() {
        var total = 0;
        for (var i=0; i < $scope.costs.length; i++) {
            total += parseFloat($scope.costs[i].amount);
            //console.log("total", total);
        }
        $scope.costsTotal = total;
        $scope.netTotal = $scope.profitsTotal - $scope.costsTotal;
        $scope.avgCost = $scope.costsTotal/$scope.costs.length;


    };

     $scope.removeCosts = function (item2) {
        // CHECK THAT ITEM IS VALID

        if (item2.name === undefined)return;

        // FIREBASE: REMOVE ITEM FROM LIST
        $scope.costs.$remove(item2);

        getTotalCost();


    };

     $scope.updateCosts = function (item2) {
        ////console.log(shift);

        // CHECK THAT ITEM IS VALID
        if (item2.name === undefined)return;
        var timestamp = new Date().valueOf();
        // UPDATE STATUS TO IN PROGRESS AND SAVE
        $scope.costs.$add({
            id:timestamp,
            name: item2.name,
            amount: item2.amount
            });

        getTotalCost();
    };

//////////////////////////////////////////////////////

$scope.addPerishable = function () {

        // CREATE A UNIQUE Ia
        var timestamp = new Date().valueOf();
             //   //console.log("get total");

  
    //next three lines for generating random code
     // for(var i = 0; i< 100; i++){
      //  $scope.selectedDay = Math.floor(Math.random() * (28 - 0 + 1)) + 0;
       // $scope.selectedStart = $scope.selectedStart + 1;
        $scope.perishables.$add({
            id: timestamp,
            name: $scope.more.name,
            quantity: $scope.more.quantity,
            available: true,
            mealsIn: $scope.more.mealsIn

        });
   // }

    
        $scope.more = "";

       // //console.log("get total");

    };

     $scope.removePerishable = function (item) {
        // CHECK THAT ITEM IS VALID

        if (item.name === undefined)return;

        // FIREBASE: REMOVE ITEM FROM LIST
        $scope.perishables.$remove(item);

        ////console.log("removed");

        getTotal();


    };

     $scope.updatePerishable = function (item) {
        ////console.log(shift);

        // CHECK THAT ITEM IS VALID
        if (item.name === undefined)return;
        var timestamp = new Date().valueOf();
        // UPDATE STATUS TO IN PROGRESS AND SAVE
        $scope.perishables.$add({
            id:timestamp,
            name: item.name,
            amount: item.amount
            });


    };

    $scope.unavailablePerishable = function(item){
        item.available = false;
        $scope.perishables.$save(item);

    };

     $scope.availablePerishable = function(item){
        item.available = true;
        $scope.perishables.$save(item);
    };

//non perishable
    $scope.addNonPerishable = function () {
    //console.log($scope.item2.name);
        // CREATE A UNIQUE ID
        var timestamp = new Date().valueOf();
           //     //console.log("get total");

  
    //next three lines for generating random code
     // for(var i = 0; i< 100; i++){
      //  $scope.selectedDay = Math.floor(Math.random() * (28 - 0 + 1)) + 0;
       // $scope.selectedStart = $scope.selectedStart + 1;
        $scope.nonperishables.$add({
            id: timestamp,
            name: $scope.item2.name,
            quantity: $scope.item2.quantity,
            available: true,
            mealsIn: $scope.item2.mealsIn

        });
   // }

       // //console.log("get total");

        $scope.item2 = "";

       // //console.log("get total");

    };

    $scope.removeNonPerishable = function (item2) {
        // CHECK THAT ITEM IS VALID

        if (item2.name === undefined)return;

        // FIREBASE: REMOVE ITEM FROM LIST
        $scope.nonperishables.$remove(item2);
        $scope.appetizers.$remove(item2);
        console.log($scope.appetizers);

        //console.log("removed");




    };

     $scope.updateNonPerishable = function (item2) {
        ////console.log(shift);

        // CHECK THAT ITEM IS VALID
        if (item2.name === undefined)return;
        var timestamp = new Date().valueOf();
        // UPDATE STATUS TO IN PROGRESS AND SAVE
        $scope.nonperishables.$add({
            id:timestamp,
            name: item2.name,
            amount: item2.amount
            });

  

    };

     $scope.unavailableNonPerishable = function(item2){
        item2.available = false;
        $scope.nonperishables.$save(item2);
    };

     $scope.availableNonPerishable = function(item2){
        item2.available = true;
        $scope.nonperishables.$save(item2);
    };


//drinks
$scope.addDrink = function () {
   // //console.log($scope.more.name);
        // CREATE A UNIQUE ID
        var timestamp = new Date().valueOf();
             //   //console.log("get total");

  
    //next three lines for generating random code
     // for(var i = 0; i< 100; i++){
      //  $scope.selectedDay = Math.floor(Math.random() * (28 - 0 + 1)) + 0;
       // $scope.selectedStart = $scope.selectedStart + 1;
        $scope.menuDrinks.$add({
            id: timestamp,
            name: $scope.drink.name,
            quantity: $scope.drink.quantity,
            available: true,
            mealsIn: $scope.drink.mealsIn

        });
   // }

       // //console.log("get total");

        $scope.drink = "";

       // //console.log("get total");

    };

     $scope.removeDrink = function (drink) {
        // CHECK THAT ITEM IS VALID

        if (drink.name === undefined)return;

        // FIREBASE: REMOVE ITEM FROM LIST
        $scope.menuDrinks.$remove(drink);

        ////console.log("removed");



    };

     $scope.updateDrink = function (drink) {
        ////console.log(shift);

        // CHECK THAT ITEM IS VALID
        if (drink.name === undefined)return;
        var timestamp = new Date().valueOf();
        // UPDATE STATUS TO IN PROGRESS AND SAVE
        $scope.menuDrinks.$add({
            id:timestamp,
            name: drink.name,
            amount: drink.amount
            });


    };

     $scope.unavailableDrink = function(drink){
        drink.available = false;
        $scope.menuDrinks.$save(drink);
    };

     $scope.availableDrink = function(drink){
        drink.available = true;
        $scope.menuDrinks.$save(drink);
    };




    //utensil

    $scope.addUtensil = function () {
    //console.log($scope.uten.name);
        // CREATE A UNIQUE ID
        var timestamp = new Date().valueOf();
           //     //console.log("get total");

  
    //next three lines for generating random code
     // for(var i = 0; i< 100; i++){
      //  $scope.selectedDay = Math.floor(Math.random() * (28 - 0 + 1)) + 0;
       // $scope.selectedStart = $scope.selectedStart + 1;
        $scope.utensils.$add({
            id: timestamp,
            name: $scope.uten.name,
            quantity: $scope.uten.quantity,
            available: true

        });
   // }

       // //console.log("get total");

        $scope.uten = "";

       // //console.log("get total");

    };

    $scope.removeUtensil = function (uten) {
        // CHECK THAT ITEM IS VALID

        if (uten.name === undefined)return;

        // FIREBASE: REMOVE ITEM FROM LIST
        $scope.utensils.$remove(uten);

        ////console.log("removed");




    };

     $scope.updateUtensil = function (uten) {
        ////console.log(shift);

        // CHECK THAT ITEM IS VALID
        if (uten.name === undefined)return;
        var timestamp = new Date().valueOf();
        // UPDATE STATUS TO IN PROGRESS AND SAVE
        $scope.utensils.$add({
            id:timestamp,
            name: uten.name,
            amount: uten.amount
            });

  

    };

     $scope.unavailableUtensil = function(uten){
        uten.available = false;
        $scope.utensils.$save(uten);
    };

     $scope.availableUtensil = function(uten){
        uten.available = true;
        $scope.utensils.$save(uten);
    };




//////////////////////////////////////////////////////////


$scope.dairyChange = function(){
    if ($scope.dairyFilter === 0)
    {
        $scope.dairyFilter = true;
    }
    else
    {
        $scope.dairyFilter = 0;
    }
}

$scope.nutsChange = function(){
    if ($scope.nutsFilter === 0)
    {
        $scope.nutsFilter = true;
    }
    else
    {
        $scope.nutsFilter = 0;
    }
}

$scope.vegChange = function(){
    if ($scope.vegFilter === 0)
    {
        $scope.vegFilter = false;
    }
    else
    {
        $scope.vegFilter = 0;
    }
}

$scope.addAppmenu = function(){
    console.log($scope.food.dairy);
    
    $scope.appetizers.$add({
            name: $scope.food.name,
            price: $scope.food.price,
            available: true,
            production_costs: $scope.food.production_costs,
            dairy: $scope.food.dairy,
            veg: $scope.food.vegetarian,
            nuts: $scope.food.nuts
          

    });

    $scope.food = {};
   $scope.food.nuts = 0;
   $scope.food.dairy = 0;
   $scope.food.vegetarian = 0;

    
};

$scope.addEntreemenu = function(){
   
    $scope.entree.$add({
            name: $scope.food.name,
            price: $scope.food.price,
            available: true,
            production_costs: $scope.food.production_costs,
             dairy: $scope.food.dairy,
            veg: $scope.food.vegetarian,
            nuts: $scope.food.nuts
          

    });

    $scope.food = {};
   $scope.food.nuts = 0;
   $scope.food.dairy = 0;
   $scope.food.vegetarian = 0;
         
};
$scope.addDessertmenu = function(){
  
    $scope.desserts.$add({
            name: $scope.food.name,
            price: $scope.food.price,
            available: true,
            production_costs: $scope.food.production_costs,
            dairy: $scope.food.dairy,
            veg: $scope.food.vegetarian,
            nuts: $scope.food.nuts
          

    });

    $scope.food = {};
   $scope.food.nuts = 0;
   $scope.food.dairy = 0;
   $scope.food.vegetarian = 0;
  

};
$scope.addDrinkmenu = function(){
    

    $scope.menuDrinks.$add({
            name: $scope.food.name,
            price: $scope.food.price,
            available: true,
            production_costs: $scope.food.production_costs
            

    });

   $scope.food = {};
   $scope.food.nuts = 0;
   $scope.food.dairy = 0;
   $scope.food.vegetarian = 0;
  
    
};


$scope.apps = 0;
    $scope.ent = 0;
    $scope.des = 0;
    $scope.dri = 0;
    $scope.subTotal = 0;
    $scope.totalTax = 0;
    $scope.totalCost = 0;

    var addTotalApps = function(appAmt){
        $scope.apps += appAmt;
        $scope.subTotal += appAmt;
        $scope.totalTax = $scope.totalTax + (0.07*$scope.subTotal);
        $scope.totalCost = $scope.totalTax + $scope.subTotal;
    }

    var addTotalEnt = function(entAmt){
        $scope.ent += entAmt;
        $scope.subTotal += entAmt;
        $scope.totalTax = $scope.totalTax + (0.07*$scope.subTotal);
        $scope.totalCost = $scope.totalTax + $scope.subTotal;
    }

    var addTotalDes = function(desAmt){
        $scope.des += desAmt;
        $scope.subTotal += desAmt;
        $scope.totalTax = $scope.totalTax + (0.07*$scope.subTotal);
        $scope.totalCost = $scope.totalTax + $scope.subTotal;
    }

    var addTotalDri = function(driAmt){
        $scope.dri += driAmt;
        $scope.subTotal += driAmt;
        $scope.totalTax = $scope.totalTax + (0.07*$scope.subTotal);
        $scope.totalCost = $scope.totalTax + $scope.subTotal;
    }

$scope.dataApps = {};
$scope.dataEntrees = {};
$scope.dataDesserts = {};
$scope.dataDrinks = {};

$scope.dataApps.selectedApps = 'current';
$scope.dataEntrees.selectedEntrees = 'current';
$scope.dataDesserts.selectedDesserts = 'current';
$scope.dataDrinks.selectedDrinks = 'current';

$scope.orderQueue = {};

$scope.submitOrder = function(){
    if ($scope.totalCost === 0)
    {
        alert("Please order an item before submitting");
    }
    else
    {
        window.location.href = "submitOrder.html";
    }
};

$scope.placeOrder = function(){
    console.log($scope.customer);
    $scope.orderQueue.$add({
        customer:$scope.customer});
    window.location.href = "index.html";
};

$scope.addApp = function(){

    if ($scope.dataApps.selectedApps != 0){
    $scope.orderQueue.name = $scope.dataApps.selectedApps.name;
    $scope.orderQueue.table = 'takeout';
   
 
    addTotalApps($scope.dataApps.selectedApps.price);
}

};

$scope.addEnt = function(){

    if ($scope.dataApps.selectedApps != 0){
    $scope.orderQueue.name = $scope.dataEntrees.selectedEntrees.name;
    $scope.orderQueue.table = 'takeout';
   


    addTotalEnt($scope.dataEntrees.selectedEntrees.price);
}
};

$scope.addDes = function(){
    if ($scope.dataApps.selectedApps != 0){
    $scope.orderQueue.name = $scope.dataDesserts.selectedDesserts.name;
    $scope.orderQueue.table = 'takeout';
   

    addTotalDes($scope.dataDesserts.selectedDesserts.price);
}
};

$scope.addDri = function(){

    if ($scope.dataApps.selectedApps != 0){
    $scope.orderQueue.name = $scope.dataDrinks.selectedDrinks.name;
    $scope.orderQueue.table = 'takeout';
   
   

    addTotalDri($scope.dataDrinks.selectedDrinks.price);
}
};
$scope.makeReservation = function(){
    console.log($scope.reservation);
   
    $scope.reservations.$add({
        reservation:$scope.reservation});
    window.location.href = "end.html";

};

}]);
