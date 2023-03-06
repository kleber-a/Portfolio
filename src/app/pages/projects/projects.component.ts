import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/projects.models';
import { EmitterService } from 'src/app/service/emitter.service';
import { ProjectService } from 'src/app/service/project.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{

  public projects : Project[] | undefined;

  //Enviar dados para modal
  public dados: Project | undefined;
  public open: boolean = false;

  constructor(private projectService: ProjectService, private emitter: EmitterService ){}

  public close: boolean = true

  ngOnInit(): void {    
    this.projects = this.projectService.getAll();

    this.emitter.emitEvent.subscribe({
      next: (res: any)=>{this.close = res}
    })

  }

  public openModal(value: Project){
    this.dados = value;
    this.open = true;
    

  }
  
  public getOpenModal(value:boolean){
    this.open = value;

  }

}
