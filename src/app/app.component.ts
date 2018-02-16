import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedfeature = 'recipe';
  title = 'app';
  onfeature(feature: string) {
    this.selectedfeature = feature;
  }
}
