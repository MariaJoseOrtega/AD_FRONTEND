import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Persona } from '../../person/person';
import { PersonService } from '../../person/person.service';

@Component({
  selector: 'app-rol-combobox',
  templateUrl: './rol-combobox.component.html'
})
export class RolComboboxComponent implements OnInit {

  constructor(
    private personService: PersonService
  ) { }

  persons: Persona[]=[];

  @Output() personEmitter = new EventEmitter<number>();
  @Input() personId: string = "";

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void{
    this.personService.findAll().subscribe(
      (respose) => this.persons = respose
    )

    }

    public onSelect(id:string){
      console.log("El id del usuario es" + parseInt(id));
      this.personEmitter.emit(parseInt(id));
    }

}

