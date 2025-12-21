import { Component, signal } from '@angular/core';

import { DataBinding } from './components/data-binding/data-binding';
import { SignalEx } from './components/signal-ex/signal-ex';
import { ControlFlow } from "./components/control-flow/control-flow";


@Component({
  selector: 'app-root',
  imports: [ControlFlow],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular20Tutorial');
}
