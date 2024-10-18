import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [RouterLink],
})
export class HeaderComponent {
  currentRoute: string = '';

  constructor(private router: Router) {
    // 現在のルートを監視
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }

  // Homeページかどうか
  isHomePage(): boolean {
    return this.currentRoute === '/';
  }

  // Todo一覧ページかどうか
  isTodoPage(): boolean {
    return this.currentRoute === '/todos';
  }

  // カテゴリー一覧ページかどうか
  isCategoryPage(): boolean {
    return this.currentRoute === '/categories';
  }
}
