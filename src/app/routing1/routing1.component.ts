import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-routing1',
  templateUrl: './routing1.component.html',
  styleUrls: ['./routing1.component.css']
})
export class Routing1Component implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
show(){
  this.router.navigate(['childrouting'],{relativeTo:this.route});
}
}
