import {Component, ElementRef, Renderer2} from '@angular/core';
import {TextCardComponent} from '../text-card/text-card.component';
import {AnimatedComponent} from '../animated.component';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    TextCardComponent
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent extends AnimatedComponent {

  constructor(
    override renderer: Renderer2,
    override el: ElementRef,
    override router: Router
  ) {
    super(renderer, el, router);
  }

  protected isCurrentRoute(event: NavigationEnd): boolean {
    return event.urlAfterRedirects === '/contacts';
  }

  protected startAnimation(): void {
    const contacts = this.el.nativeElement.querySelectorAll('.fade-in');
    contacts.forEach((contact: HTMLElement, index: number) => {
      setTimeout(() => {
        this.renderer.addClass(contact, 'visible');
      }, index * 200);
    });
  }
}
