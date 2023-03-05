import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Project } from 'src/app/models/projects.models';

@Component({
  selector: 'app-modal-project',
  templateUrl: './modal-project.component.html',
  styleUrls: ['./modal-project.component.scss']
})
export class ModalProjectComponent implements OnInit, OnChanges {

  @Input() public open: boolean = false;
  @Input() public dados: Project | undefined;
  @Output() public changeOpen = new EventEmitter();

  public getDados: Project | undefined; 

  ngOnInit(): void {
    this.open = false;

  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.open && changes?.['open'].currentValue === true){
      this.open = true;
      
    }else if(this.open && changes?.['open'].currentValue === false){
      this.open = false;
    }
  }
  public closeModal() {
    this.changeOpen.emit(false)
  }

}
