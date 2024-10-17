import {Component, HostListener, Input} from '@angular/core';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css'
})
export class JobCardComponent {
  @Input() company: string = '';
  @Input() position: string = '';
  @Input() date: string = '';
  @Input() skills: string ='';
  isHovered: boolean = false;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.isHovered = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isHovered = false;
  }
}
