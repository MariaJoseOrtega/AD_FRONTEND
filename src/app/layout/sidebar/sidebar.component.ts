import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',

})
export class SidebarComponent implements OnInit {

  constructor(
    private readonly _router:Router
  ) { }

  ngOnInit(): void {
  }

  irRol(){
    this._router.navigate(["layout", "buscar"]);
  }
  irPersonas(){
    this._router.navigate(["layout", "menu"]);
  }

}
