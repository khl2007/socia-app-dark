import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit {
  
  type: string;

  constructor() { }

  ngOnInit() {

this.type = 'deposit';

  }

segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
