import { Component, OnInit } from '@angular/core';
import { Registro } from '../registro';
import { RegistroService } from '../registro.service';

@Component({
  selector: 'app-registro-list',
  templateUrl: './registro-list.component.html'
})
export class RegistroListComponent implements OnInit {

  constructor(
    private registroService: RegistroService
  ) { }

  registroList: Registro[] = [];

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void {
    this.registroService.findAll().subscribe(
      (response) => this.registroList = response
    )
  }

  public findByName(term: string): void{
    if (term.length>=2){
      this.registroService.findByName(term).subscribe(
        (response) => this.registroList = response
      )
    }
    if (term.length===0){
      this.findAll();
    }

  }

}
