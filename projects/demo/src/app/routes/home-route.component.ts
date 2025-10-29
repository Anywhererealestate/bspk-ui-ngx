import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'home-route',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>Component Library</h2>
    <p>Select a component from the navigation to view examples.</p>
    <div class="quick-links">
      <h3>Available Components:</h3>
      <ul>
        <li><a routerLink="/button">Button</a></li>
        <li><a routerLink="/card">Card</a></li>
        <li><a routerLink="/accordion">Accordion</a></li>
      </ul>
    </div>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
})
export class HomeRouteComponent {}
