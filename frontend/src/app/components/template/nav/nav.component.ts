import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(
    private headerService: HeaderService
  ) { }

  get rotaTitle(): string {
    return this.headerService.headerData.title;
  }

}
