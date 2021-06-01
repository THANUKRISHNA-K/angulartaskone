import { Component, OnInit, DoCheck,} from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit , DoCheck{
 username='';
 password='';
 loginable:boolean=true;
 formvalid=new FormGroup({
  uname:new FormControl(),
  passw:new FormControl()
});

isinput:boolean=false;
ispassinput:boolean=false;


  constructor(private auth:AuthService, private formbuilder:FormBuilder) {
    this.formvalid=this.formbuilder.group({
      uname:['',Validators.required],
      passw:['',Validators.required]
    })
   }
  ngOnInit(): void {
   
  }
ngDoCheck(){
  console.log("changes made")
 
  if(this.username=="admin" && this.password=="admin123")
  {
 this.loginable=false;
 this.auth.setLoggedIn(true);
 this.isinput=true;

 }
 else
 {
   this.loginable=true;
   this.isinput=false;
 
 }
}



}
