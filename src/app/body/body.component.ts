import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  public title = 'Home Page';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick() {
    this.router.navigateByUrl('/signup');
  }
}
