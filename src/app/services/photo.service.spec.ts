import { TestBed } from '@angular/core/testing';

import { PhotoService } from './photo.service';

describe('PhotoService', () => {
  let service: PhotoService;

  beforeEach(() => { TestBed.configureTestingModule({});
    
  });

  it('should be created', () => {
    service = TestBed.inject(PhotoService);
    expect(service).toBeTruthy();
  });
});
