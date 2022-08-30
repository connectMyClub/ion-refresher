import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'With ion-refresher', url: 'folder/ion-refresher', icon: 'home' },
    { title: 'No ion-refresher', url: '/folder/no-refresher', icon: 'paper-plane' },
  ];
  public labels = [];
  constructor() {}
}
