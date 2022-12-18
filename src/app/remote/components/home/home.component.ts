import { Component, OnInit } from '@angular/core';
import { Subject, skipWhile, takeUntil } from 'rxjs';
import { BundleloaderService } from 'src/app/services/bundleloader.service';
import { environment } from 'src/environments/environment';
import { select, Store } from '@ngrx/store';
import { UserState } from '../../../store/user.reducer';
import { userProfile } from '../../../store/user.selectors';
import { User } from '../../interfaces/User.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(
    private _bundleLoaderService: BundleloaderService,
    private store: Store<UserState>
  ) {}

  ngOnInit(): void {
    this.loadUserProfile();
    this.loadComponentBundle();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  loadComponentBundle() {
    if (environment?.appConfig?.webComponents?.sharedWebComponents) {
      environment.appConfig.webComponents.sharedWebComponents.forEach(
        (url: string) => {
          this._bundleLoaderService.loadBundle(url);
        }
      );
    }
  }

  private loadUserProfile() {
    this.store
      .pipe(
        select(userProfile),
        skipWhile((data) => !Object.keys(data).length),
        takeUntil(this.onDestroy$)
      )
      .subscribe((data: User) => {
        console.log(data);
      });
  }
}
