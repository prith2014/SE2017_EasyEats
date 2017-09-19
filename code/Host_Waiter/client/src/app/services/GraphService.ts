import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class GraphService{

    public mainData:any;

    constructor(public http:Http) { }

    GetAllData(){
        return new Promise((resolve, reject) => {
            this.http.get("http://localhost:4000/graph").map((res:Response) => res.json()).subscribe(
                data => {
                    resolve(data);
                }, err => {
                    reject(err);
                }
            );
        });
    }


  SpecifyMonth(month:string){
    return new Promise((resolve, reject) => {
      this.http.get(`http://localhost:4000/graph/daily?month=${month}`).map((res:Response) => res.json()).subscribe(
        data => {
          resolve(data);
        }, err => {
          reject(err);
        }
      );
    });
  }

}
