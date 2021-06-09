import { Component, OnInit } from '@angular/core';
import {MenuItemInterface} from "../../../shared/models";


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  menuItems: MenuItemInterface[] = [
    {
      label: 'Dev',
      icon: 'login'
    },
    {
      label: 'OS',
      icon: 'help'
    },
    {
      label: 'Repos',
      icon: 'attach_money'
    },
    {
      label: 'About Me',
      icon: 'notes'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
