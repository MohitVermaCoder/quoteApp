import { Component, OnInit } from '@angular/core';
import { GetQuoteService } from '../get-quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  quote:string='';
  constructor(private service:GetQuoteService) { }

  ngOnInit(): void {
  }

  getQuote(){
     this.service.getquotes().subscribe(data=>{
      console.log(data.content);
      this.quote=data.content;
     });

  }

}
