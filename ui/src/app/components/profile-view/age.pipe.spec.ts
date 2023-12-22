import { AgePipe } from './age.pipe';

describe(AgePipe.name, () => {
  const pipe = new AgePipe();
  const MOCK_DATE = new Date(2022, 0, 1);

  beforeEach(() => {
    jasmine.clock().install();
    jasmine.clock().mockDate(MOCK_DATE);
  });

  afterEach(() => jasmine.clock().uninstall());

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return \'\' when no value provided', () => {
    const result = pipe.transform();

    expect(result).toBe('');
  });

  it('should return age in years when ignoring the month when value is provided', () => {
    const date = new Date(2020, 2, 1);

    const result = pipe.transform(date);

    expect(result).toBe('2');
  });
});
