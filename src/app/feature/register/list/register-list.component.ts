import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register-list',
  templateUrl: './register-list.component.html'
})
export class RegisterListComponent implements OnInit {

  constructor(
    private registerService: RegisterService
  ) { }

  registerList: Register[] = [];

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void {
    this.registerService.findAll().subscribe(
      (response) => this.registerList = response
    )
  }

  public findByDetalle(term: string): void{
    if (term.length>=2){
      this.registerService.findByDetalle(term).subscribe(
        (response) => this.registerList = response
      )
    }
    if (term.length===0){
      this.findAll();
    }

  }

}
