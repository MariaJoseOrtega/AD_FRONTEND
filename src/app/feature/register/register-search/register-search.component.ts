import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Register } from '../register';
import { RegisterService } from '../register.service'; 

@Component({
  selector: 'app-register-search',
  templateUrl: './register-search.component.html',
})
export class RegisterSearchComponent implements OnInit {

  constructor(
    private registerService: RegisterService
    ) {}
    registers: Register[] = [];

    @Output() registerEmitter = new EventEmitter<Register>();
  ngOnInit(): void {
  }

  onInput(term: string): void {
    if(term.length>=2){
      this.registerService.findByDetalle(term).subscribe(
        (response) => this.registers = response
      )
    }
    if(term.length===0){
      this.registers = [];
    }
  }

  onSelect(register: Register): void {
    this.registerEmitter.emit(register);
  }
}
