import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coment } from '../../coment/coment';
import { ComentService } from '../../coment/coment.service';
import { Register } from '../register';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register.form.component.html'
})
export class RegisterFormComponent implements OnInit {

  constructor(
    private registerService: RegisterService,
    private comentService: ComentService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  currentEntity: Register =
  {
    registerId: 0,
    detalle: "",
    fechaHoraDesde: new Date(),
    fechaHoraHasta: new Date(),
    created: new Date(),
    enabled: true,
    permisoId: 0,
    coments: []
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
          enabled: true,
          permisoId: 0,
          coments: []
        };
        this.router.navigate(['/layout/register-list']);
      }
    )
  }

  findById(id: number):void {
    this.registerService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
        this.currentEntity.coments.forEach(
          (comm) =>{
            this.comentService.findById(comm.id).subscribe(
              (item) => comm.name = item.name
            )
          } 
        )
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
  removeComent(id: number){
    this.currentEntity.coments = 
    this.currentEntity.coments.filter(
      (item) => item.id !== id
    )
  }
}
