import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/courses.models';
import { Skill } from 'src/app/models/skills.models';
import { CourseService } from 'src/app/service/course.service';
import { EmitterService } from 'src/app/service/emitter.service';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit{
  
  public skills : Skill[] | any;
  public courses : Course[] | any;
  public select : string | any;
  public description: string = "Selecione alguma tecnologia"
  
 
  public panelOpenState: boolean = false;
  public isSelected: boolean = false;

  constructor(private skillService: SkillService, 
    private courseService: CourseService, 
    private emitter: EmitterService){}

    public close: boolean = true

  ngOnInit():void{
    this.skills = this.skillService.getAll();
    this.courses = this.courseService.getAll();

    this.emitter.emitEvent.subscribe({
      next: (res: any)=>{this.close = res}
    })

  }

  public getSelect(value:string){
    this.select = value;
    this.skills.map((item: any)=>{
      if(item.nome == value){
        this.isSelected = true;
        this.description = item.description
      }if(value == 'none'){
        this.isSelected = false;
        this.description = "Selecione alguma tecnologia"
      }
    })
}


}

