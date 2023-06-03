import { TestBed } from '@angular/core/testing';

import { NotifiicacaoService } from './notifiicacao.service';

describe('NotifiicacaoService', () => {
  let service: NotifiicacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotifiicacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
