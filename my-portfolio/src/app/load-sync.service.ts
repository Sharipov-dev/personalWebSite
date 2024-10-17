import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadSyncService {
  private headerLoadedSource = new Subject<void>();
  private contentLoadedSource = new Subject<void>();

  headerLoaded$ = this.headerLoadedSource.asObservable();
  contentLoaded$ = this.contentLoadedSource.asObservable();

  notifyHeaderLoaded(): void {
    this.headerLoadedSource.next();
  }

  notifyContentLoaded(): void {
    this.contentLoadedSource.next();
  }
}
