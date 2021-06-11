import {Component, OnInit} from '@angular/core';
import {ScullyRoute, ScullyRoutesService} from '@scullyio/ng-lib';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  links$: Observable<ScullyRoute[]> = this.scully.available$;

  constructor(private scully: ScullyRoutesService) {
  }

  ngOnInit(): void {
    this.links$.subscribe(links => {
      console.log(`home page debug:`);
      // links.forEach(l => console.log(l));

      // add a filter to avoid showing '/blog' and '/' routes
      links.filter(link => {
        const filterCondition = link.route.startsWith('/blog/') || link.route.startsWith('/home') || link.sourceFile?.endsWith('.md');

        // returns true if the filters are satisfied
        if (filterCondition) {
          console.log(link);
        }
      });
    });
  }

}
