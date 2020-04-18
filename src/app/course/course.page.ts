import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit {
  
  seg1 = true;
  seg2 = false;
  seg3 = false;
  constructor() { }

  ngOnInit() {
  }

segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
