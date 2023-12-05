import { Component } from '@angular/core';
import { AdminService } from 'src/app/services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {

  constructor(public admin: AdminService) { }
}
