import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { HomeResolver } from './home.resolver';
import { PostComponent } from '../comps/post/post.component';
import { CommentsComponent } from '../comments/comments.component';
import { UserfolowersComponent } from '../comps/userfolowers/userfolowers.component';
import { UserfowlowComponent } from '../comps/userfowlow/userfowlow.component';
const routes: Routes = [
  {
    path: '',
    component: HomePage,
    resolve: {
      data: HomeResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports: [CommentsComponent,UserfolowersComponent,UserfowlowComponent,PostComponent],
  declarations: [HomePage , CommentsComponent,UserfolowersComponent,UserfowlowComponent,PostComponent],
  entryComponents: [CommentsComponent,UserfolowersComponent,UserfowlowComponent,],
  providers: [
    HomeResolver
  ]
})
export class HomePageModule {}
