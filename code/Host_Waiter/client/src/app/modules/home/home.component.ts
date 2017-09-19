import {Component, AfterViewInit, ViewChild, ElementRef} from "@angular/core";

declare let TweenMax:any,
            Circ: any;

@Component({
  moduleId: module.id,
  selector: "home",
  styleUrls: ['home.css'],
  templateUrl:  `home.component.html`
})
export class HomeComponent implements AfterViewInit {

  @ViewChild("HomeContainer") HomeContainer: ElementRef;

  public ViewSet = {
      myTable: true,
      myGraph: false,
      myUser: false,
      myMenu: false
  };

  public CurrentView : any = "myTable";

  constructor() {}

  ngAfterViewInit(){
      console.log(this.HomeContainer);
      setTimeout(() => {
        TweenMax.from(this.HomeContainer.nativeElement,0.5 ,{scale: 0, ease: Circ.easeOut, delay: 1});
      });
  }

  SwitchView(val:string){
      this.ViewSet[this.CurrentView] = false;
      this.ViewSet[val] = true;
      this.CurrentView = val;
  }


}
