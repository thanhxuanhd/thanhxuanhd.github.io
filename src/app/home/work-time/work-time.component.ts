import { Component, OnInit } from '@angular/core';
import {
  WorkTimeService,
  IWorkTime,
  SkillsService,
  ISkills
} from 'src/app/core';

@Component({
  selector: 'app-work-time',
  templateUrl: './work-time.component.html',
  styleUrls: ['./work-time.component.scss']
})
export class WorkTimeComponent implements OnInit {

  works: Array<IWorkTime> = [];
  skills: ISkills = {
    BackEnd: [],
    FrontEnd: [],
    Database: []
  };

  constructor(private workTimeService: WorkTimeService,
    private skillServie: SkillsService) { }

  ngOnInit(): void {
    if (this.works && this.works.length === 0) {
      this.works = this.workTimeService.getWorkTimes();
    }
    if (this.skills && this.skills?.BackEnd.length === 0) {
      this.skills = this.skillServie.getSkills();
    }
  }

}
