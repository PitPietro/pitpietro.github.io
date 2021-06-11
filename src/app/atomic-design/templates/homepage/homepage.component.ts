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
      icon: 'code'
    },
    {
      label: 'OS',
      icon: 'laptop'
    },
    {
      label: 'Repos',
      icon: 'folder'
    },
    {
      label: 'About Me',
      icon: 'lightbulb'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
