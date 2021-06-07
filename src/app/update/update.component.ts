import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor() { }
  user(login:NgForm){
    console.log(login.value);
    login.reset();
  }
  secuser(secondlogin:NgForm){
    console.log(secondlogin.value);
    
  }

  ngOnInit(): void {
  }
 
}
