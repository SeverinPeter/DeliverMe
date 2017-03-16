import { Request } from './request';
import { REQUESTS } from './mock-requests';
import { Offer } from './offer';
import { Injectable } from '@angular/core';

@Injectable()
export class RequestService {
  getRequests(): Promise<Request[]> {
    return Promise.resolve(REQUESTS);
  }

  getRequestsSlowly(): Promise<Request[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getRequests()), 2000);
    });
  }

  getRequestsById(id: number): Promise<Request> {
    return Promise.resolve(REQUESTS[id]);
  }
}