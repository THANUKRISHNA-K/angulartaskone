import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private auth:AuthService) { }
  islogout(){
    this.auth.setLoggedIn(false);
  }

  ngOnInit(): void {
  }
  canDeactivate(){
    return new Promise((resolve, reject) => {
      resolve(confirm('Do you want to Logout?'))
      ,this.auth.setLoggedIn(false);
    })
  }

}
