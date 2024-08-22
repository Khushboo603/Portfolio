import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor(private title: Title) { 
    this.title.setTitle('Khushboo Kumari - Resume')
  }

  ngOnInit(): void {
  }

}
