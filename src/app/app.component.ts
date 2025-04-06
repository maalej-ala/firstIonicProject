import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone:false
})
export class AppComponent implements OnInit {
  menuPages: any[] = [];
  tabPages: any[] = [];

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
   // const role = this.auth.getRole();
var role ='doctor';
    if (role === null) {
      this.menuPages = [{ title: 'Sign In', page: 'login', icon: 'log-in' }];
      this.tabPages = [
        { title: 'Search', tab: 'search', icon: 'search' },
        { title: 'Home', tab: 'home', icon: 'home' },
        { title: 'Settings', tab: 'settings', icon: 'settings' },
      ];      this.router.navigate(['/login']);
    } else if (role === 'patient') {
      this.menuPages = [
        { title: 'Home', page: 'patient-home', icon: 'home' },
        { title: 'Profile', page: 'patient-profile', icon: 'person' },
        { title: 'Logout', page: 'logout', icon: 'log-out', action: 'logout' },
      ];
      this.tabPages = [
        { title: 'Search', tab: 'search', icon: 'search' },
        { title: 'Home', tab: 'home', icon: 'home' },
        { title: 'Settings', tab: 'settings', icon: 'settings' },
      ];
      this.router.navigate(['/home']);
    } else if (role === 'doctor') {
      this.menuPages = [
        { title: 'Dashboard', page: 'calendar', icon: 'speedometer' },
        { title: 'Patients', page: 'doctor-patients', icon: 'people' },
        { title: 'Logout', page: 'logout', icon: 'log-out', action: 'logout' },
      ];
      this.tabPages = [
        { title: 'Clients', tab: 'client', icon: 'people' },    // Existing Client tab
        { title: 'Calendar', tab: 'calendar', icon: 'calendar' }, // New Calendar tab
        { title: 'Personal', tab: 'personal', icon: 'id-card' },  // New Personal tab
      ];
      this.router.navigate(['/calendar']);
    } else if (role === 'admin') {
      this.menuPages = [
        { title: 'Admin Panel', page: 'admin-panel', icon: 'settings' },
        { title: 'Users', page: 'admin-users', icon: 'people' },
        { title: 'Logout', page: 'logout', icon: 'log-out', action: 'logout' },
      ];
      this.tabPages = [
        { title: 'Dashboard', tab: 'admin-panel', icon: 'home' },
        { title: 'Users', tab: 'admin-users', icon: 'people' },
        { title: 'Settings', tab: 'settings', icon: 'settings' },
      ];
      this.router.navigate(['/admin-panel']);
    }
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  handleMenuClick(page: any) {
    if (page.action === 'logout') {
      this.logout();
    } else {
      this.router.navigate(['/', page.page]);
    }
  }
}
