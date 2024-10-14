import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { LoadSyncService } from '../load-sync.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
})
export class FooterComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private loadSyncService: LoadSyncService
  ) {}

  ngOnInit(): void {
    this.startFooterAnimation();
  }

  startFooterAnimation(): void {
    const fadeInElements = this.el.nativeElement.querySelectorAll('.fade-in');
    fadeInElements.forEach((element: any, index: number) => {
      setTimeout(() => {
        this.renderer.addClass(element, 'visible');
      }, index * 200);
    });
  }
}
