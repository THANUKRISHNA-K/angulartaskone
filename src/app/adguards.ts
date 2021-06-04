import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot,RouterStateSnapshot,CanActivate ,CanDeactivate} from "@angular/router";
import { Observable } from "rxjs";
import {SuperauthService} from './superauth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})

export class SuperCanActivate implements CanActivate {
  constructor(private supauth:SuperauthService, private router:Router){
  
  }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log("can activate check");
    if(this.supauth.Adlogin){
      return true;
    }
    else{
    this.router.navigate(['/login']);
      return false;
    }
 
  }
}

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
  }
  
  @Injectable({
    providedIn: "root"
  })

  export class SuperCanDeactivate implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate): any {
      return component && component.canDeactivate ? component.canDeactivate() : true;
    }
  }