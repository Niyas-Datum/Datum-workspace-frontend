import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../../services/login.service';
import { ENDPOINTCONSTANT } from '@datum/constants';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CompanyDto } from '@datum/models';

@Component({
  selector: 'app-authlogin.component',
  imports: [CommonModule],
  templateUrl: './authlogin.component.html',
  styleUrl: './authlogin.component.css',
})
export class AuthloginComponent {
  
  private loginService = inject(LoginService);
private companyList = signal<CompanyDto[]>([]);
        
constructor() {
            this.getCompanyList();
        }

    getCompanyList() {
            this.loginService
              .get(ENDPOINTCONSTANT.COMPANY_LIST)
              .subscribe((res) => {
                this.companyList.set(res as CompanyDto[]);
              },  (err) => {
                console.error('Error fetching companies', err);
              });
        }

}
