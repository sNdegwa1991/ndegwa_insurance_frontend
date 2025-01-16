import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Policy } from '../models/policy.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private API_URL = environment.apiUrl+'/Policies';

  constructor(private http: HttpClient) {}

  getPolicies(): Observable<Policy[]> {
    return this.http.get<Policy[]>(this.API_URL);
  }

  getPolicy(id: number): Observable<Policy> {
    return this.http.get<Policy>(`${this.API_URL}/${id}`);
  }

  createPolicy(policy: Policy): Observable<Policy> {
    return this.http.post<Policy>(this.API_URL, policy);
  }

  updatePolicy(id: number, policy: Policy): Observable<Policy> {
    return this.http.put<Policy>(`${this.API_URL}/${id}`, policy);
  }

  deletePolicy(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }
}
