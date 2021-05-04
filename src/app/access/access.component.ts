import { Component, OnInit } from '@angular/core';
import {
  Router,
  RouterModule,
  ActivatedRoute,
  NavigationStart,
} from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss'],
})
export class AccessComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private global: GlobalService
  ) {}
  public id: any;

  ngOnInit() {}
}
