import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your page components here
import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
import { ProfilePage } from './pages/profile/profile.page';

const routes: Routes = [
  // Define your routes here
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect to the 'home' page by default
  { path: 'home', component: HomePage },
  { path: 'login', component: LoginPage },
  { path: 'profile', component: ProfilePage },
  // Add more routes for other pages if needed
  // { path: 'other-page', component: OtherPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
