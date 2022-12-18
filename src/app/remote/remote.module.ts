import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoteRoutingModule } from './remote-routing.module';
import { HomeComponent } from './components/home/home.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '../store/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from '../store/user.effects';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RemoteRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RemoteModule {}
