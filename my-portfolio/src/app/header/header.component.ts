import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {LoadSyncService} from '../load-sync.service';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [RouterModule]
})
export class HeaderComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private loadSyncService: LoadSyncService
  ) {}

  ngOnInit(): void {
    const fadeInElements = this.el.nativeElement.querySelectorAll('.fade-in');
    fadeInElements.forEach((element: any, index: number) => {
      setTimeout(() => {
        this.renderer.addClass(element, 'visible');
        if (index === fadeInElements.length - 1) {
          this.loadSyncService.notifyHeaderLoaded();
        }
      }, index * 200);
    });
  }
}
