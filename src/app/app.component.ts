import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent {
  isHeaderShrunk = false;
  private lastScrollTop = 0;
  
  onScroll(event: Event): void {
    const scrollTop = (event.target as HTMLElement).scrollTop;

    this.isHeaderShrunk = scrollTop > this.lastScrollTop && scrollTop > 10;
    this.lastScrollTop = Math.max(scrollTop, 0);
  }

}