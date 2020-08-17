import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../services/project/project.service";
import {AuthService} from "../services/auth/auth.service";
import {CompanyService} from "../services/company/company.service";

@Component({
  selector: 'app-user-space-view',
  templateUrl: './user-space-view.component.html',
  styleUrls: ['./user-space-view.component.scss']
})
export class UserSpaceViewComponent implements OnInit {

  currentUser;
  company: any = [];
  projects;

  constructor(private projectService: ProjectService, private authService: AuthService, private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getUserCompany().subscribe(
      (data) => {this.company = data}
    )

    this.authService.userSubject.subscribe(
      (data)=> {this.currentUser = data}
    );
    this.projects = this.projectService.getProjectsByUser();
  }


}