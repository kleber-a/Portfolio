import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Skill } from 'src/app/models/skills.models';
import { SkillService } from 'src/app/service/skill.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  public skills: Skill[] | any;
  constructor(private skillService: SkillService){}

  ngOnInit(): void {
    this.skills = this.skillService.getAll()
  }

  selectedValue: string = '...'
  public select(){
    this.emmitSearch.emit(this.selectedValue);
  }


}
