import { Component, OnInit } from '@angular/core';
import {NavParams, ViewController} from "ionic-angular";

@Component({
  templateUrl: 'build/pages/popovers/TableView/tableview.html',
})
export class TableViewPopOverComponent implements OnInit {

    TableNum;
    TableData;

    ordersData;
    orders;
  // Hamburger Fries IceCream Drinks
  // img/food/fries.jpg


    constructor( public viewCtrl: ViewController, public params: NavParams) {


      this.TableNum = this.params.get('tableNum');
      this.TableData = this.params.get('tableData');

      // console.log(this.TableNum);
      // console.log(this.TableData);

      this.RecreateOrderList(this.TableData.orders);

    }

  ngOnInit() { }

  RecreateOrderList(arr){
      this.orders = arr.reduce((prev, current) => {
        var picUrl = "";
        if(current.order_name === "Hamburger") picUrl = 'img/food/hamburger.jpg';
        if(current.order_name === "Fries") picUrl = 'img/food/fries.jpg';
        if(current.order_name === "IceCream") picUrl = 'img/food/icecream.jpg';
        if(current.order_name === "Drinks") picUrl = 'img/food/softdrinks.jpg';

        let obj = {
          order_name: current.order_name,
          price: current.price,
          pic: picUrl
        }
        prev.push(obj);
        return prev;
      }, []);
      // console.log("NAIB SHIT ");
      // console.log(this.orders);
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

}
