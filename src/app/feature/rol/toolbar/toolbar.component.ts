import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { migasInterface, Rol } from '../rol';
import { RolService } from '../rol.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent implements OnInit {
  @Input() items:migasInterface[]=[];
  @Input() texto:string = "";

  @Output() listaFiltrada = new EventEmitter<any>();
  
  searchTerm$ = new Subject<string>();
  listDeliciousDishes:any = [];
  listFiltered:any = [];


  constructor(
    private readonly _router:Router,
    private readonly rolService:RolService,
  ) { 

  }

  ngOnInit(): void {
    this.rolService.consultarRoles().subscribe(roles=>{
      this.listDeliciousDishes = roles;
      this.listFiltered = this.listDeliciousDishes;
      this.filterList();
    })
  }

  filterList(): void {
    this.searchTerm$.subscribe(term => {
      this.listaFiltrada.emit( this.listFiltered = this.listDeliciousDishes
        .filter((item: Rol) => item.name!.toLowerCase().indexOf(term.toLowerCase()) >= 0))
    });
  }

  irNuevoRol(){
    this._router.navigate(['layout','rol']);
  }

}
