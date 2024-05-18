// src/app/components/header/header.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() search = new EventEmitter<number>();

  onSearch(value: string) {
    const id = Number(value);
    if (!isNaN(id)) {
      this.search.emit(id);
    }
  }
}
