import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage {
  constructor() {
    // Initialization or setup code can be added here
  }

  logout() {
    // Your logout logic goes here
    // For example, you can clear user session, navigate to the login page, etc.
  }
}
