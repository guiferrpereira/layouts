import { Component, OnInit } from '@angular/core';
import { Router, Data, RoutesRecognized } from '@angular/router';
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

export enum Layouts {
  FooterOnly,
  Main
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Layouts = Layouts
  layout: Layouts;

  constructor(private router: Router) { }

  // We can't use `ActivatedRoute` here since we are not within a `router-outlet` context yet.
  ngOnInit() {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        console.log('++++++');
        console.log(data.state.root.firstChild.data);
        this.layout = data.state.root.firstChild.data.layout;
      }
    });
  }

}

