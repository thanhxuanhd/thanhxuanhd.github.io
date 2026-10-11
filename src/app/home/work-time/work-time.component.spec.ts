import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { ISkills, IWorkTime, SkillsService, WorkTimeService } from '@app/core';
import { WorkTimeComponent } from './work-time.component';

describe('WorkTimeComponent', () => {
  let component: WorkTimeComponent;
  let fixture: ComponentFixture<WorkTimeComponent>;
  const works: IWorkTime[] = [
    { order: 1, companyName: 'Example Corp', workTimes: '2020-present', role: 'Engineer' }
  ];
  const skills: ISkills = [
    { name: 'Languages', children: ['TypeScript'] }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkTimeComponent],
      imports: [CommonModule],
      providers: [
        { provide: WorkTimeService, useValue: { getWorkTimes: () => works } },
        { provide: SkillsService, useValue: { getSkills: () => skills } }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('loads and renders work and skill data from its services', () => {
    expect(component.works).toEqual(works);
    expect(component.skills).toEqual(skills);
    expect(fixture.nativeElement.textContent).toContain('Example Corp');
    expect(fixture.nativeElement.textContent).toContain('TypeScript');
  });
});
