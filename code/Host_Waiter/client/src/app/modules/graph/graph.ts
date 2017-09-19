import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {GraphService} from "../../services/GraphService";

@Component({
    moduleId: module.id,
    selector: 'my-graph',
    styleUrls: ['graph.css'],
    templateUrl: 'graph.html'
})
export class GraphComponent implements OnInit {

    public ShowMonthly : boolean = true;
    public ShowDaily : boolean = false;

    constructor(public graphService : GraphService) { }

    @ViewChild('secondFrame') dailyFrame: ElementRef;

    ngOnInit() {
        this.graphService.GetAllData()
            .then(val => {
                console.log('Passed!!!');
                console.log(val);
            })
            .catch(err => {
                console.log('There was an error');
                console.log(err);
            });
    }

  ReloadIFrameDaily(myIframe:any){
    myIframe.src = myIframe.src;
  }

  ReloadIFrameMonthly(myIframe:any){
    myIframe.src = myIframe.src;
  }

  ViewChange(val:string){
    if(val === 'monthly'){
       this.ShowDaily = false;
      this.ShowMonthly = true;
    }else{
      this.ShowMonthly = false;
      this.ShowDaily = true;
    }

  }

  MonthClicked(month:any) {
    this.graphService.SpecifyMonth(month).then((x) => {
      this.ReloadIFrameDaily(this.dailyFrame.nativeElement);
    })
  }

}
