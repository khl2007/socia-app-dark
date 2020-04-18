
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaincoursePage } from './Maincourse.page';

const routes: Routes = [
  {
    path: '',
    component: MaincoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaincoursePageRoutingModule {}
