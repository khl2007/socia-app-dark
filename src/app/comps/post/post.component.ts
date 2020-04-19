import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
   

  @Input() inputPost;
  @Input() inputPostID;
  @Input() parentPid;


  constructor() { }

  ngOnInit() {

if (this.inputPostID) {
      this.postService.getPost(this.inputPostID).subscribe(
        post => {
          if (post) {
            this.inputPost = post;
            this.inputPostID = null;
            this.isInvalid = false;
            this.body = this.inputPost.body;
            this.date = this.inputPost.crtd;
           // this.pid = this.inputPost.pid;
            // this.type = this.inputPost.type;
            this.postPhotoURL = this.inputPost.imgurl;
            this.userService.retrieveUserDocumentFromID(this.inputPost.byuser).subscribe(
              user => {
                if (user) {
                  this.displayName = user.displayName;
                  this.userName = user.userName;
                  this.photoURL = user.photoURL;
                 this.isLoaded = true;
                }
              }
              );
             
             } else {
            this.isInvalid = true;
          }
        });
    }


  }

}
