import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-userfolowers',
  templateUrl: './userfolowers.component.html',
  styleUrls: ['./userfolowers.component.scss'],
})
export class UserfolowersComponent implements OnInit {
    

@Input() users: any;


  constructor() { }

  ngOnInit() {}

}
