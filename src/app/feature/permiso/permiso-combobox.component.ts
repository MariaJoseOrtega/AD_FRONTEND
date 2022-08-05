import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Permiso } from './permiso';
import { PermisoService } from './permiso.service';

@Component({
  selector: 'app-permiso-combobox',
  templateUrl: './permiso-combobox.component.html'
})
export class PermisoComboboxComponent implements OnInit {

  constructor(
    private permisoService: PermisoService
  ) { }
    permisoss: Permiso[] = [];
    
    @Output() permisoIdEmitter = new EventEmitter<number>();
    @Input() permisoId: number = 0

  ngOnInit(): void {
    this.findAll();
  }

  public findAll():void{
    this.permisoService.findAll().subscribe(
      (response) => this.permisoss = (response)
    )
  }

  public onSelect(id:string){
    this.permisoIdEmitter.emit(parseInt(id));
  }
}
