import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Register } from '../register';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.form.component.html'
})
export class RegisterFormComponent implements OnInit {

  constructor(
    private registerService: RegisterService,
    private activatedRoute: ActivatedRoute
  ) { }

  currentEntity: Register =
  {
    registerId: 0,
    detalle: "",
    fechaHoraDesde: new Date(),
    fechaHoraHasta: new Date(),
    created: new Date(),
    enabled: true
  };

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        if (params.get("id")){
          this.findById(parseInt(params.get("id")!));
        }
      }
    )
  }

  save():void {
    console.table(this.currentEntity);
    this.registerService.save(this.currentEntity)
    .subscribe(
      () => {
        this.currentEntity =
        {
          registerId: 0,
          detalle: "",
          fechaHoraDesde: new Date(),
          fechaHoraHasta: new Date(),
          created: new Date(),
          enabled: true
        };
      }
    )
  }

  findById(id: number):void {
    this.registerService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

  deleteById():void{
    this.registerService.deleteById(this.currentEntity.registerId).subscribe(
      () => {
        console.log("Borrado");
        //redireccionar ....
      }
    )
  }

}
