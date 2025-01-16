import { Component } from '@angular/core';
import { Policy } from '../../../models/policy.model';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { PolicyService } from '../../../services/policy.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-policy-list',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  providers: [PolicyService, AuthService],
  templateUrl: './policy-list.component.html',
  styleUrl: './policy-list.component.css'
})
export class PolicyListComponent {
  policies: Policy[] = [];
  loading: boolean = true;
  errorMessage: string = '';

  constructor(
    private policyService: PolicyService,
    private authService: AuthService,
    private router: Router
  ) {
    this.policyService.getPolicies().subscribe(res =>{
      console.log(res)
    })
  }

  ngOnInit(): void {
    this.loadPolicies();
  }

  loadPolicies(): void {
    this.loading = true;
    this.policyService.getPolicies().subscribe({
      next: (policies) => {
        this.policies = policies;
        console.log(this.policies)
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = 'Error loading policies. Please try again later.';
        this.loading = false;
        console.error('Error loading policies:', error);
      }
    });
  }

  postPloicy(){
    alert("Sorry! I was unable to impliment this action due to time constrain. Please post a policy here 'PUT POST /api/Policies '")
  }

  editPolicy(id: number): void {
    alert("Sorry! I was unable to impliment this action due to time constrain. Please edit a policy through 'PUT /api/Policies/{id} '")
  }

  deletePolicy(id: number): void {
    if (confirm('Are you sure you want to delete this policy?')) {
      this.policyService.deletePolicy(id).subscribe({
        next: () => {
          this.loadPolicies();
          this.errorMessage = '';
        },
        error: (error) => {
          this.errorMessage = 'Error deleting policy. Please try again later.';
          console.error('Error deleting policy:', error);
        }
      });
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
