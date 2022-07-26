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

  // permisoList : Permiso[] = [];

  ngOnInit(): void {
  }

  // public findAll():void{
  //   this.permisoService.findAll().subscribe(
  //     (response) =>this.permisoList = response
  //   )
  // }

}
