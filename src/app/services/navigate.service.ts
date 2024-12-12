import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {
  private scrollSubject = new Subject<string>();
  scrollEvent$ = this.scrollSubject.asObservable();
  constructor() { }

  
  triggerScroll(elementId: string) {
    this.scrollSubject.next(elementId);
  }
}
