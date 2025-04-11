import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientPersonelPage } from './client-personel.page';

describe('ClientPersonelPage', () => {
  let component: ClientPersonelPage;
  let fixture: ComponentFixture<ClientPersonelPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPersonelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
