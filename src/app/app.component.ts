import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { USER_LOAD_ACTION } from './store/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'shell';

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(USER_LOAD_ACTION());
  }
}
