import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../service/projects.service';
import { Project } from '../model/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  featureProject = {} as Project;
  constructor(private title: Title, private proService: ProjectsService) { 
    this.title.setTitle('Khushboo Kumari - Home')
  }

  ngOnInit(): void {
    this.featureProject = this.proService.GetProjectById(0)
  }

}
