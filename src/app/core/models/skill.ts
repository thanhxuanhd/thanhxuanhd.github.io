export interface ISkillCategory {
  name: string;
  children: Array<string>;
}

export type ISkills = Array<ISkillCategory>;
