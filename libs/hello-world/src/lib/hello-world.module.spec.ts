import { async, TestBed } from '@angular/core/testing';
import { HelloWorldModule } from './hello-world.module';

describe('HelloWorldModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HelloWorldModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(HelloWorldModule).toBeDefined();
  });
});
