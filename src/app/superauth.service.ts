import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuperauthService {

  private superadstatus=false;
  constructor() { }

  setAdLogin(value:boolean){
this.superadstatus=value;
  }
  get Adlogin(){
    return this.superadstatus;
  }
}
