import { AgePipe } from './age.pipe';

describe(AgePipe.name, () => {
  const pipe = new AgePipe();

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
