import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';


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
      levelid:1,
      crtd: this.firebaseService.getTimeSamp(),
      userid: this.firebaseService.getUserId()
    };
    this.firebaseService.postDmsg(data).then(res => {
      
    });

this.discussMsg='';
}

}
