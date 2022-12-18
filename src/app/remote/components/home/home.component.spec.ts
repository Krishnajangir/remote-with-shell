(window as any).apiHost = {
  apiGateway: '',
};
(window as any).appConfig = {
  security: {
    clientId: '123456789',
  },
  api: {
    devApi: 'http://devapi.com',
  },
  urls: {},
  webComponents: {
    sharedWebComponents: ['http://localhost:5001/main.js'],
  },
};

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
