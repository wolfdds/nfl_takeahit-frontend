import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { User } from '../_models';
import { UserService } from '../_services';



@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: [ './user-detail.component.css' ]
})
export class UserDetailComponent implements OnInit {
  
  @Input() user: User;
  
  constructor(
    private route: ActivatedRoute, 
    private userService: UserService
  ) { 
     this.route.params.subscribe(params => this.user = params.id);
  }

 ngOnInit() {
   const id = +this.route.snapshot.paramMap.get('id');
   this.userService.getById(id).subscribe(user => this.user = user);
  }

  
}
    