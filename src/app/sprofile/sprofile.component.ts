import { Component, OnInit } from '@angular/core';
import { SuperauthService} from '../superauth.service'
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-sprofile',
  templateUrl: './sprofile.component.html',
  styleUrls: ['./sprofile.component.css']
})
export class SprofileComponent implements OnInit {

  constructor( private supauth:SuperauthService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  userin(){
this.router.navigate(['userlist'],{relativeTo:this.route});
  }
  upin(){
    this.router.navigate(['update'],{relativeTo:this.route});
      }
 manin(){
    this.router.navigate(['management'],{relativeTo:this.route});
      }
logout()
{
  this.supauth.setAdLogin(false);
}
canDeactivate(){
  return new Promise((resolve, reject) => {
    resolve(confirm('Do you want to Logout?'))
    ,this.supauth.setAdLogin(false),
    alert("loggedout Successfully");
  
  });
}

}

