import { Injectable } from '@angular/core';
import { Project, projects } from '../models/projects.models';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  public projects : Project[] = projects;

  constructor() { }

  public getAll(){
    return this.projects;
  }

}
