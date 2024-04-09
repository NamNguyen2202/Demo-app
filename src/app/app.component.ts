import { Component } from '@angular/core';
import { Product } from './common/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';

  // product : Product ={
  //   name: 'Hat',
  //   Price:200
  // }
}
