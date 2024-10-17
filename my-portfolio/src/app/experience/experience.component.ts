import { Component } from '@angular/core';
import {JobCardComponent} from '../job-card/job-card.component';
import {AnimatedComponent} from '../animated.component';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    JobCardComponent
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent extends AnimatedComponent {
    protected override isCurrentRoute(event: NavigationEnd): boolean {
        return event.urlAfterRedirects === "/experience";
    }
    protected override startAnimation(): void {
      const contacts = this.el.nativeElement.querySelectorAll('.fade-in');
      contacts.forEach((contact: HTMLElement, index: number) => {
        setTimeout(() => {
          this.renderer.addClass(contact, 'visible');
        }, index * 200);
      });
    }


}
