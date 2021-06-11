import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router, ROUTES} from '@angular/router';

declare var ng: any;

@Component({
  selector: 'app-os',
  templateUrl: './os.component.html',
  styleUrls: ['./os.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class OsComponent implements OnInit {
  ngOnInit() {}

  constructor(private router: Router, private route: ActivatedRoute) {
  }
}
