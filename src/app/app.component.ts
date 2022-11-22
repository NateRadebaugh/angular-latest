import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault
  ],
})
export class AppComponent {
  title = 'angular-latest';
}
