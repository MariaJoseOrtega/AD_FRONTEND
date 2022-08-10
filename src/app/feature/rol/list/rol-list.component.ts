import { Component, OnInit } from '@angular/core';
import { Rol } from '../rol';
import { RolService } from '../rol.service';

@Component({
  selector: 'app-rol-list',
  templateUrl: './rol-list.component.html'
})
export class RolListComponent implements OnInit {

  constructor(
    private rolService: Rolservice
  ) { }

  rolList: Rol[] = [];

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void {
    this.rolService.findAll().subscribe(
      (response) => this.rolList = response
    )
  }

  public findByName(term: string): void{
    if (term.length>=2){
      this.rolService.findByName(term).subscribe(
        (response) => this.rolList = response
      )
    }
    if (term.length===0){
      this.findAll();
    }

  }

}
