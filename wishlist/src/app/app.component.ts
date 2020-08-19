import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wishlist';
  time = new Observable(o => {
    setInterval(() => o.next(
      new Date().getHours().toString() + ":" + 
      new Date().getMinutes().toString() + ":" +
      new Date().getSeconds().toString()
      ), 1000);
  });
}
