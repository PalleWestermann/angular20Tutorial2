import { Component, signal } from '@angular/core';
import { Admin } from "./components/admin/admin";
import { User } from "./components/user/user";


@Component({
  selector: 'app-root',
  imports: [Admin, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular20Tutorial');
}
