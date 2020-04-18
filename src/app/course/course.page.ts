import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit {
  
  type: string;
  discussMsg: string;
  discusPic:string;
  image:any;
  userid:any;

  constructor() { 

this.type = 'deposit';

}

  ngOnInit() {

this.type = 'deposit';

  }

segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

postDmsg(){

let data = {
      msg: this.discussMsg,
      imgurl: this.image,
      likes: this.item.likes,
      crtd: this.item.crtd,
      userid: this.item.byuser
    };
    this.firebaseService.updateTask(this.item.id, data).then(res => {
      
    });

this.discussMsg='';
}

}
