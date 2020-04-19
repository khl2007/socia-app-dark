import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

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
            this.date = this.inputPost.date;
            this.pid = this.inputPost.pid;
            this.type = this.inputPost.type;
            this.postPhotoURL = this.inputPost.photoURL;

             
          } else {
            this.isInvalid = true;
          }
        });
    }


}

}
