import { Component, OnInit , ViewChild } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { LoadingController } from "@ionic/angular";
import { Router, ActivatedRoute } from "@angular/router";

import { Animation, AnimationController  } from '@ionic/angular';

import { IonInfiniteScroll } from '@ionic/angular';

import { Observable } from "rxjs";

import { map } from "rxjs/operators";


import { FirebaseService } from "../services/firebase.service";

@Component({
  selector: 'app-maincourse',
  templateUrl: './maincourse.page.html',
  styleUrls: ['./maincourse.page.scss'],
})
export class MaincoursePage implements OnInit {

  constructor(public loadingCtrl: LoadingController,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private firebaseService: FirebaseService,
    private animationCtrl: AnimationController) { }

  ngOnInit() {
  }

}
