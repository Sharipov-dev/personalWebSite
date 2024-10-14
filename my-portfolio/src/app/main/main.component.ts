import { Component, Renderer2, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {AnimatedComponent} from '../animated.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
})
export class MainComponent extends AnimatedComponent {
  constructor(
    override renderer: Renderer2,
    override el: ElementRef,
    override router: Router,
    private route: ActivatedRoute
  ) {
    super(renderer, el, router);
  }

  protected isCurrentRoute(event: NavigationEnd): boolean {
    return event.urlAfterRedirects === '/';
  }

  protected startAnimation(): void {
    const fadeInElements = this.el.nativeElement.querySelectorAll('.fade-in');
    let counter = 0;

    fadeInElements.forEach((element: any, index: number) => {
      if (counter === 1) {
        const profileElement = this.el.nativeElement.getElementsByClassName('profile')[0];
        if (profileElement) {
          this.renderer.addClass(profileElement, 'hoverable');
        }
      }
      if (counter === 2) {
        const descriptionElement = this.el.nativeElement.getElementsByClassName('description')[0];
        if (descriptionElement) {
          this.renderer.addClass(descriptionElement, 'hoverable');
        }
      }

      setTimeout(() => {
        this.renderer.addClass(element, 'visible');
      }, index * 200);

      counter++;
    });
  }
}
