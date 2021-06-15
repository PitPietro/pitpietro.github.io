import {Component, OnInit} from '@angular/core';
import {ScullyRoute, ScullyRoutesService} from '@scullyio/ng-lib';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  links$: Observable<ScullyRoute[]> = this.scully.available$;

  blogPost = this.links$.pipe(
    map(routes =>
      routes.filter(
        route =>
          route.route.startsWith('/blog/') && route.sourceFile?.endsWith('.md')
      )
    )
  );

  constructor(private scully: ScullyRoutesService) {
  }

  ngOnInit(): void {
  }

}
