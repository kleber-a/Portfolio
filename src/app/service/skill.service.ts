import { Injectable } from '@angular/core';
import { Skill, skills } from '../models/skills.models';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  public listSkills : Skill[] = skills;

  constructor() { }
  
  getAll(){
    return this.listSkills;
  }
}


