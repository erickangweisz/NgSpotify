import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [ NavbarComponent ]
})
export class AppComponent {}
