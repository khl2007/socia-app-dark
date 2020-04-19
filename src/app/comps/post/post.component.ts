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
  

  currentuser;
  currentuid;
  showContext = true;

  isLoggedIn = false;
  isSingle = false;
  isCurrentUser = false;
  isInvalid;
  isLoaded = false;
  showLoader = false;
  closeResult: string;
  isLiked;
  likeStyle = 'fa fa-thumbs-o-up';
  likeLen = 0;
  commentLen = 0;

  pid;
  displayName;
  userName;
  photoURL = '../../assets/images/default-profile.jpg';
  body;
  date;
  likes;
  type;
  comments;
  postPhotoURL;

  parentUsername;
  parentUID;

  gname;
  gid;




  constructor() { }

  ngOnInit() {

if (this.inputPostID) {
      this.postService.getPost(this.inputPostID).subscribe(
        post => {
          if (post) {
            this.inputPost = post;
            //this.inputPostID = null;
            this.isInvalid = false;
            this.body = this.inputPost.body;
            this.date = this.inputPost.crtd;
           // this.pid = this.inputPost.pid;
            // this.type = this.inputPost.type;
            this.postPhotoURL = this.inputPost.imgurl;
            this.userService.getUserInfo(this.inputPost.byuser).subscribe(
              user => {
                if (user) {
                  this.displayName = user.displayName;
                  //this.userName = user.userName;
                  this.photoURL = user.avatar;
                 this.isLoaded = true;
                }
              }
              );
             
             } else {
            this.isInvalid = true;
          }
        });

this.auth.getAuthState().subscribe(
        user => {
          if (user) {
            if (this.inputPost.byuser === user.uid) {
              this.currentuser = user.uid;
              this.isCurrentUser = true;
            }
          }
        });
        this.getLikes(this.inputPostID);
        this.getComments(this.inputPost.ID);

       
    }


  }


 getComments(pid) {
    this.postService.getComments(pid).subscribe(comments => {
      if (comments) {
        this.commentLen = comments.length;
        this.comments = comments;
      }
    });
  }

  getLikes(pid) {
    this.likeService.getLikes(pid).subscribe(likes => {
      this.likes = likes;
      this.likeLen = likes.length;
      this.auth.getAuthState().subscribe(
        user => {
          if (user) {
            this.currentuser = user;
            this.likes.forEach(like => {
              if (like.uid === user.uid) {
                this.isLiked = true;
                this.likeStyle = 'fa fa-thumbs-up post-liked';
              }
            });
          }
        });
    });
  }

  clickLike() {
    if (this.currentuser) {
      if (!this.isLiked) {
        this.likeStyle = 'fa fa-thumbs-up post-liked';
        this.likeService.addLike(this.pid, this.currentuser.uid);
        this.isLiked = true;
      } else {
        this.likeStyle = 'fa fa-thumbs-o-up';
        this.likeService.removeLike(this.pid, this.currentuser.uid);
        this.isLiked = false;
      }
    }
  }


delete() {
   // this.postService.deletePost(this.pid);
  }

 

  retrieveDate(date, type?) {
    if (date) {
      if (type === 'long') {
        return this.dateFormat.transform(date, type);
      } else {
        const prevDate = date;
        const newDate = new Date();
        const ms = newDate.getTime() - prevDate.getTime();
        const min = Math.trunc(ms / 60000);
        let hours;
        if (min < 59) {
          if (min < 1) {
            return 'just now';
          }
          return min + 'm';
        } else {
          hours = Math.trunc(min / 60);
          if (hours >= 1 && hours < 24) {
            return hours + 'h';
          } else {
            return this.dateFormat.transform(prevDate);
          }
        }
      }
    }
  }





}
