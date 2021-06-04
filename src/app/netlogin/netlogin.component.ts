import { Component, OnInit, DoCheck,} from '@angular/core';
import { AuthService } from '../auth.service';
import { SuperauthService} from '../superauth.service';
import { FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-netlogin',
  templateUrl: './netlogin.component.html',
  styleUrls: ['./netlogin.component.css']
})
export class NetloginComponent implements  OnInit , DoCheck{
  username='';
  password='';
  loginable:boolean=true;
  formvalid=new FormGroup({
   uname:new FormControl(),
   passw:new FormControl()
 });
 
 isinput:boolean=false;
 ispassinput:boolean=false;
 
   constructor(private auth:AuthService, private supauth:SuperauthService, private formbuilder:FormBuilder, private router:Router) {
     this.formvalid=this.formbuilder.group({
       uname:['',Validators.required],
       passw:['',Validators.required]
     })
    }
  
    login(){
      if(this.username=="admin" && this.password=="admin123")
      {
        this.router.navigate(['profile']),
        this.auth.setLoggedIn(true);
      }
      else if (this.username=="superadmin" && this.password=="admin1234"){
        this.router.navigate(['adminprofile']),
        this.supauth.setAdLogin(true);
      }
      else{
        this.auth.setLoggedIn(false);
        this.supauth.setAdLogin(false);
      }
     }

   ngOnInit(): void {
    
   }
 ngDoCheck(){
   console.log("changes made")
  
  
 }
 
 
 
 }
 