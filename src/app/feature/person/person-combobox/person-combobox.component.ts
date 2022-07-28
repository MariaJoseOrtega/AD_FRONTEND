import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-combobox',
  templateUrl: './person-combobox.component.html',
})
export class PersonComboboxComponent implements OnInit {

  constructor(
    private personService: PersonService
  ) { }

  persons: Person[]=[];

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void{
    this.personService.findAll().subscribe(
      (respose) => this.persons = respose
    )

    }

}

