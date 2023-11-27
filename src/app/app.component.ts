import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FirstComponentComponent, SecondComponent, ThirdComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-project';
}
