import {Component, NgZone} from '@angular/core';
import {ModalController} from 'ionic-angular';
import {FbService} from "../../providers/FbService";
import {TableViewPopOverComponent} from "../popovers/TableView/tableview";


declare let firebase;

@Component({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {

  zone;
  full_tables;

  MyWaiters = {
    "Sarah King": "img/fake_profile1.png",
    "Kevin Tran": "img/fake_profile2.jpg",
    "Miley Cyrus": "img/fake_profile3.jpg"
  };

  constructor(private serverService: FbService, public tableViewPop: ModalController) {

  }

  ionViewDidEnter(){

    this.zone = new NgZone({enableLongStackTrace: false});
    let valueChanged = firebase.database().ref();


    valueChanged.on("value", (snapshot) => {

      let obj = snapshot.val();
      // console.log(obj);

      // this.CheckAtStartUp(obj);

      this.zone.run(() => {


        //Might as well always change the main table set
        this.MapOutTables(obj.Current_Tables);

        // console.log(this.full_tables);


        //Check for any sort of custom calls
        Object.keys(obj).forEach((key) => {
          if(obj[key].active === 1){
            this[key](key, obj);
          };

        });
      });
    });

  }

  refreshSkill(skill){
    this.serverService.Refresh_ActiveSkill(skill).subscribe(
      (data) => {
        console.log("Sucessfylly changed the data");
      }, (err) => {
        console.log(err);
      }
    );
  }


  MapOutTables(tables){
    let arr = [];
    Object.keys(tables).forEach((x) => {
        let bill_total = this.AddTheBillsTogether(tables[x].orders);
        tables[x].bill_total = Number(((bill_total * 0.07) + bill_total ).toFixed(2));
        tables[x].waiters_pic = this.MyWaiters[tables[x].waiter_assigned];
        arr.push(tables[x]);
    })
    this.full_tables = arr;
  }

  AddTheBillsTogether(orders){
    // console.log("TUPPP");
    return Number(orders.reduce((prev, curr) => {
        prev += curr.price;
       return prev;
    }, 0).toFixed(2));
  }

  TableClicked(tableNum){
    let num = tableNum.tableNum - 1;
    let modal = this.tableViewPop.create(TableViewPopOverComponent, {tableNum: tableNum.tableNum, tableData:this.full_tables[num]});
    modal.present();
  }





}
