import { Routes } from '@angular/router';
import {MainComponent} from './main/main.component';
import {SkillsComponent} from './skills/skills.component';
import {ProjectsComponent} from './projects/projects.component';
import {ExperienceComponent} from './experience/experience.component';
import {ContactsComponent} from './contacts/contacts.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'contacts', component: ContactsComponent },
];
