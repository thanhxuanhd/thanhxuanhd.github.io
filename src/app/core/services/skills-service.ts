import { Injectable } from '@angular/core';
import { ISkills } from '../models';
import skills from 'src/assets/configs/skills.json';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skills: ISkills = null!;


  getSkills(): ISkills {
    if (!this.skills) {
      this.skills = skills;
    }

    return this.skills;
  }
}
