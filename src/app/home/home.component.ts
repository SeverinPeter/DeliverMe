import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Offer } from '../offer';
import { Request } from '../request';
import { RequestService } from '../_services/request.service';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  moduleId: module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  requests: Request [];
  selectedRequest: Request;
  currentUser: User;
  users: User[] = [];

  constructor(
    private router: Router,
    private requestService: RequestService,
    private userService: UserService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  getRequests(): void {
    this.requestService.getRequests().then(requests => this.requests = requests);
  }

  ngOnInit() {
    this.getRequests();
    this.loadAllUsers();
  }

  private loadAllUsers() {
     this.userService.getAll().subscribe(users => { this.users = users; });
  }

  onSelect(request: Request): void {
    this.selectedRequest = request;
    this.gotoDetail()
  }

  gotoDetail(): void {
    this.router.navigate(['/singleRequest', this.selectedRequest.id]);
  }

  newRequest(): void {
    this.router.navigate(["/newRequest"]);
  }

}
