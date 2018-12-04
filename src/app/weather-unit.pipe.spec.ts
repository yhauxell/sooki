import { WeatherUnitPipe } from './weather-unit.pipe';

describe('WeatherMetricPipe', () => {
  it('create an instance', () => {
    const pipe = new WeatherUnitPipe();
    expect(pipe).toBeTruthy();
  });
});
