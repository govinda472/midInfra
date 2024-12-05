import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowlogoService {
  private showLogo = false;
  constructor() { }

  get _showLogo() {
    return this.showLogo;
  }

  set set_showLogo(value: boolean) {
    this.showLogo = value;
  }
}
