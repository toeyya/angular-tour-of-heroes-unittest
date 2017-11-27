import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { HeroService } from './hero.service';
import { MessageService } from './message.service';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [HeroService, MessageService]
    });
  });

  it('should be created', inject([HeroService, MessageService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
});
