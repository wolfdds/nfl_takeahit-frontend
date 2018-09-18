import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../_models';



@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: [ './user-detail.component.css' ]
})
export class UserDetailComponent implements OnInit {
  
  @Input() selectedUser: User
  
constructor() { }

  ngOnInit() {
  }

}
