// src/app/components/user-detail/user-detail.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Location } from '@angular/common';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show(); // Show spinner
    this.route.params.subscribe(params => {
      const userId = +params['id'];
      this.userService.getUserById(userId).subscribe(user => {
        this.user = user;
        this.spinner.hide(); // Hide spinner
      }, () => {
        this.spinner.hide(); // Hide spinner on error
      });
    });
  }

  goBack(): void {
    this.location.back();
  }
}
