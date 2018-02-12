import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public users: any;

  constructor() { }

  ngOnInit() {
    this.users = [{
      name: 'test'
    }];
  }

}
