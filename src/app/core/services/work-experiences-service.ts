import { Injectable } from '@angular/core';
import { IWorkExperience } from '../models';
import workExperiences from 'src/assets/configs/work-experiences.json';

@Injectable({
  providedIn: 'root'
})
export class WorkExperiencesService {
  private workExperiences: Array<IWorkExperience> = [];

  getWorkExperiences(): Array<IWorkExperience> {

    if (this.workExperiences && this.workExperiences.length === 0) {
      this.workExperiences = workExperiences;
    }

    return this.workExperiences;
  }
}
