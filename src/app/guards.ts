import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot,RouterStateSnapshot,CanActivate ,CanDeactivate} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class TestCanActivate implements CanActivate {
  constructor(private auth:AuthService){
  
  }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log("can actviate check");
    return this.auth.LoggedIn;
  }
}



export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
  }
  
  @Injectable({
    providedIn: "root"
  })

  export class TestCanDeactivate implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate): any {
      return component && component.canDeactivate ? component.canDeactivate() : true;
    }
  }