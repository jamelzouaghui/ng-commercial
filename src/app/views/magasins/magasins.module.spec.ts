import { MagasinsModule } from './magasins.module';

describe('MagasinsModule', () => {
  let magasinsModule: MagasinsModule;

  beforeEach(() => {
    magasinsModule = new MagasinsModule();
  });

  it('should create an instance', () => {
    expect(magasinsModule).toBeTruthy();
  });
});
