import { Component, OnInit } from '@angular/core';
import {
  IWorkExperience,
  WorkExperiencesService
} from '../core'

@Component({
  selector: 'app-work-experiences',
  templateUrl: './work-experiences.component.html',
  styleUrls: ['./work-experiences.component.scss']
})
export class WorkExperiencesComponent implements OnInit {

  workExperiences: Array<IWorkExperience> = [];

  constructor(private workExperiencesService: WorkExperiencesService) { }

  ngOnInit(): void {
    this.workExperiences = this.workExperiencesService.getWorkExperiences();
  }

}
