import {OnInit, OnDestroy, Renderer2, ElementRef, Directive} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Directive()
export abstract class AnimatedComponent implements OnInit, OnDestroy {
  private routerSubscription!: Subscription;

  constructor(
    protected renderer: Renderer2,
    protected el: ElementRef,
    protected router: Router
  ) {}

  ngOnInit(): void {
    this.startAnimation();

    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (this.isCurrentRoute(event)) {
          this.resetAnimationState();
          this.startAnimation();
        }
      });
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
  protected abstract isCurrentRoute(event: NavigationEnd): boolean;

  protected abstract startAnimation(): void;

  protected resetAnimationState(): void {
    const fadeInElements = this.el.nativeElement.querySelectorAll('.fade-in');
    fadeInElements.forEach((element: any) => {
      this.renderer.removeClass(element, 'visible');
      this.renderer.removeClass(element, 'hoverable');
    });
  }
}
