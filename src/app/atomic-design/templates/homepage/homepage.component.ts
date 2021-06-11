import { Component, OnInit } from '@angular/core';
import {MenuItemInterface} from "../../../shared/models";
import {ScullyRoute, ScullyRoutesService} from "@scullyio/ng-lib";
import {Observable} from "rxjs";


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  links$: Observable<ScullyRoute[]> = this.scully.available$;

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

  constructor(private scully: ScullyRoutesService) { }

  ngOnInit(): void {
    this.links$.subscribe((links) => {
      console.log('|Homepage| ngOnInit() ~ links: ', links);
    });
  }
}
