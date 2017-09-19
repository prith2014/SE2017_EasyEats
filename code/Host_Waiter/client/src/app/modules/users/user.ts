import {Component, OnInit, AfterViewInit} from '@angular/core';

declare let $:any;

@Component({
    moduleId: module.id,
    selector: 'my-users',
    styleUrls: ['user.css'],
    templateUrl: 'user.html'
})
export class UserComponent implements OnInit, AfterViewInit {
    constructor() { }

    ngOnInit() { }

    ngAfterViewInit(){

    }

    addButtonClicked(){
        $('#myModal').modal('show')
    }

}