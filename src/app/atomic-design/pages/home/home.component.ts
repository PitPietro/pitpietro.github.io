import {Component, OnDestroy, OnInit} from '@angular/core';
import {ScullyRoute, ScullyRoutesService} from '@scullyio/ng-lib';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  links$: Observable<ScullyRoute[]> = this.scully.available$;
  private unsubscribe$ = new Subject();

  constructor(private scully: ScullyRoutesService) {
  }

  ngOnInit(): void {
    this.links$
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe(links => {
        console.log(`home page debug:`);
        links.forEach(l => console.log(l));

        // add a filter to avoid showing '/blog' and '/' routes
        // links.filter(link => {
        //   // const filterCondition = link.route.startsWith('/blog/') || link.route.startsWith('/home') || link.sourceFile?.endsWith('.md');
        //
        //   const filterCondition = link.sourceFile?.endsWith('.md');
        //   // returns true if the filters are satisfied
        //   if (filterCondition) {
        //     console.log(link);
        //   }
        // });
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
