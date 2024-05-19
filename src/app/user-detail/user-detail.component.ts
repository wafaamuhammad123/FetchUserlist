import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Location } from '@angular/common'; // Import Location service

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: any;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location // Inject Location service for back btn
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userId = +params['id'];
      this.userService.getUserById(userId).subscribe(user => {
        this.user = user;
        this.isLoading = false;
      },error => {
        this.isLoading = false;
        console.error(error);}
    );
    });

    
  }

  
  goBack(): void {
    this.location.back(); // Use the Location service to navigate back
  }
}
