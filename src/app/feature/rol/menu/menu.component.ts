import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { migasInterface } from '../rol';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  rutas:migasInterface[] = [
    {
      ruta:"/layout/menu",
      descripcion:"Inicio Roles"
    }
  ];
  Roles:any= [];

  constructor(
    private readonly _router:Router
  ) { }

  ngOnInit(): void {
  }

  irConsulta(){
    this._router.navigate(['layout','consultar']);
  }
}
