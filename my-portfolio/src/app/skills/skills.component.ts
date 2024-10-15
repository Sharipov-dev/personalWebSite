import {Component, ElementRef, Renderer2} from '@angular/core';
import {SkillCardComponent} from '../skill-card/skill-card.component';
import {AnimatedComponent} from '../animated.component';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    SkillCardComponent
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent extends AnimatedComponent {
  constructor(
    override renderer: Renderer2,
    override el: ElementRef,
    override router: Router
  ) {
    super(renderer, el, router);
  }

  // Реализация метода для проверки текущего маршрута
  protected isCurrentRoute(event: NavigationEnd): boolean {
    return event.urlAfterRedirects === '/skills';
  }

  // Реализация поочередной анимации
  protected startAnimation(): void {
    const skillCards = this.el.nativeElement.querySelectorAll('.skill-card.fade-in');
    skillCards.forEach((card: HTMLElement, index: number) => {
      setTimeout(() => {
        this.renderer.addClass(card, 'visible');
      }, index * 200); // Задержка в 200 мс для каждой карточки
    });
  }
}
