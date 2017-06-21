import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../shared/auth/auth.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // Attributes
  profile: any;

  // Methods

  // Lifecycle
  constructor(public auth: AuthService) { }

  ngOnInit() {
      if (this.auth.userProfile) {
          this.profile = this.auth.userProfile;
      } else {
          this.auth.getProfile((err, profile) => {
              this.profile = profile;
          });
      }
  }
}
