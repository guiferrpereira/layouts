import { Component, OnInit, ElementRef} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _el: ElementRef) { }

  ngOnInit() {
  }

  search(event) {
  	console.log('trying to find me!', event.target.parentElement.querySelectorAll('div.findme'));
  }

}
