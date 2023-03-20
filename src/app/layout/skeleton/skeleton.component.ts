import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.css'],
})
export class SkeletonComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {
    this._router.navigateByUrl('/dashboard');
  }
}
