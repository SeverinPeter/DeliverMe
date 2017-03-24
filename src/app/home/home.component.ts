import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Offer } from '../offer';
import { Request } from '../request';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  requests: Request [];
  selectedRequest: Request;

  constructor(
    private router: Router,
    private requestService: RequestService
  ) { }

  getRequests(): void {
    this.requestService.getRequests().then(requests => this.requests = requests);
  }

  ngOnInit() {
    this.getRequests();
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
