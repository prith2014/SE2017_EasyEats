import { Component, OnInit } from '@angular/core';
import {HomePage} from "../home/home";
import {SavedPage} from "../saved/saved";
import {SearchPage} from "../search/search";
import {BlogsPage} from "../blogs/blogs";
import {MorePage} from "../more/more";

@Component({
    templateUrl: 'build/pages/tabs/tabs.component.html'
})
export class TabsComponent implements OnInit {
  private tab1:any;
  private tab2: any;
  private tab3:any;
  private tab4:any;
  private tab5:any;


  constructor() {

    this.tab1 = HomePage;
    this.tab2 = SearchPage;
    this.tab3 = SavedPage;
    this.tab4 = BlogsPage;
    this.tab5 = MorePage;

    }


    ngOnInit() { }




}
