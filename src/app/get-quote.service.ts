import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetQuoteService {

  constructor(private http:HttpClient) { }

  //method to get the quotes
  getquotes():Observable<quote>{

    let headers=new HttpHeaders().set('x-rapidapi-key','aa46c9094fmsh538eb9a015d8dc1p112ebajsn07c1eeb9d4d1')
    .set('x-rapidapi-host','quotes15.p.rapidapi.com');
    let url='https://quotes15.p.rapidapi.com/quotes/random/';
     return this.http.get<quote>(url,{headers});
   }

   
}
export interface quote{
  
  content:string;
}