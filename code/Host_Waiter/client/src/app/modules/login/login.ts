import {Component, AfterViewInit, ElementRef, ViewChild, AfterContentInit} from '@angular/core';

declare let $: any,
        TweenMax: any,
            Circ: any;

@Component({
    moduleId: module.id,
    selector: 'login',
    styleUrls: ['login.css'],
    templateUrl: 'login.html'
})
export class LoginComponent implements AfterContentInit{

    @ViewChild('loginwrapper') loginWrapper: ElementRef;

    public WrongPassword: boolean = false;

    constructor() { }

    ngAfterContentInit() {
        $("#login-button").click((event:any) => {
            event.preventDefault();
        })
    }


    LoginButton(){
        setTimeout(() => {
            TweenMax.to(this.loginWrapper.nativeElement, 0.5, {scale: 0, ease: Circ.easeOut});
            setTimeout(() => {
                window.location.href = "/#/home";
            }, 2000);
        }, 1500);
    }

    CheckPassword(user:string, pass:string){
        if(user === 'kristenwong' && pass === 'kristenwong'){
            this.WrongPassword = false;
            $('form').fadeOut(500);
            $('.wrapper').addClass('form-success');
            this.LoginButton();
        }else{
            this.WrongPassword = true;
        }
    }


}