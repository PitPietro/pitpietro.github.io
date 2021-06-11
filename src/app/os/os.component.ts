import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {ScullyRoute, ScullyRoutesService} from "@scullyio/ng-lib";
import {ScullyRouteInterface} from "../shared/models";
import {map} from "rxjs/operators";


@Component({
  selector: 'app-os',
  templateUrl: './os.component.html',
  styleUrls: ['./os.component.scss'],
})
export class OsComponent implements OnInit, OnDestroy {
  links$: Observable<ScullyRoute[]> = this.scully.available$;
  // osPostObservable$!: Observable<ScullyRoute[]>;
  osPosts!: ScullyRoute[];
  private unsubscribe$ = new Subject();

  constructor(
    private scully: ScullyRoutesService
  ) {
  }

  ngOnInit(): void {
    this.links$
      .pipe(
        map(routes =>
          routes.filter(
            route => route.route.startsWith('/os/') && route.sourceFile?.endsWith('.md')
          )
        )
      )
      .subscribe({
        next: data => {
          this.osPosts = data;
          console.log(`|OsComponent| links$ ~ next `, data);
          console.log(`|OsComponent| links$ ~ 1st post tags: `, this.osPosts[0].tags);
        },
        error: err => {
          console.log(`|OsComponent| links$ ~ error: `, err);
        },
        complete: () => {
          console.log(`|OsComponent| links$ ~ complete `);
        }
      })
  }

  ngOnDestroy(): void {
    console.log(`|OsComponent| ngOnDestroy()`);
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    console.log(`|OsComponent| ngOnDestroy() ~ unsubscribed all`);
  }
}
