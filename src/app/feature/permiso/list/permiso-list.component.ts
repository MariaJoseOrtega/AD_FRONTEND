import { Component, OnInit } from '@angular/core';
import { Permiso } from '../permiso';
import { PermisoService } from '../permiso.service';

@Component({
  selector: 'app-permiso-list',
  templateUrl: './permiso-list.component.html',
})
export class PermisoListComponent implements OnInit {

  constructor(
    private permisoService: PermisoService
  ) { }

  permisoList : Permiso[] = [];

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void {
    this.permisoService.findAll().subscribe(
      (response) => this.permisoList = response
    )
  }

  public findByName(term: string): void{
     if (term.length>=2){
       this.permisoService.findByName(term).subscribe(
         (response) => this.permisoList = response
       )
     }
     if (term.length===0){
       this.findAll();
     }

   }

   

}
