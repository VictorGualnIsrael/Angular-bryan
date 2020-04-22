import { Component, OnInit } from '@angular/core';
import * as cards from './cards.json';
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public programacion  = { name: '', isVIP: false, tipo: '' };
  name: string ="Bryan Gualan";
  dni: number = 1150580742;
  age: number = 23;

  products: any = (cards as any).default;
  constructor(){
  }

  ngOnInit(){
    console.log(cards);
  }

}
