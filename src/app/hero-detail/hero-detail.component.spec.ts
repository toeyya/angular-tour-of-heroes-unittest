import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }    from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { HttpClientModule } from '@angular/common/http';
import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule],
      declarations: [ HeroDetailComponent ],
      providers: [
        HeroService,
        MessageService,
        Location,
        { provide: LocationStrategy, useClass: HashLocationStrategy},
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              url: ['detail/']
            }
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
