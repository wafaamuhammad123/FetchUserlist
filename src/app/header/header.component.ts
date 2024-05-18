// src/app/components/header/header.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router, private userService: UserService) {}

  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const userId = inputElement.value.trim(); // trim whitespace

    if (!userId) {
      // handle empty input case
      return;
    }

    const id = parseInt(userId, 10);
    if (!isNaN(id)) {
      this.userService.getUserById(id).subscribe(user => {
        if (user) {
          this.router.navigate(['/users', user.id]);
        } else {
          alert('User not found');
        }
      }, () => {
        alert('User not found');
      });
    }
  }
}
