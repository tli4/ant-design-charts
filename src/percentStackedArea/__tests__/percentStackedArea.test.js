import React from 'react';
import { mount } from 'enzyme';
import PercentStackedArea from '../';

// TODO: PercentStackedArea-spec
describe('PercentStackedArea  plot', () => {
  const data = [{"country":"Asia","year":"1750","value":502},{"country":"Asia","year":"1800","value":635},{"country":"Asia","year":"1850","value":809},{"country":"Asia","year":"1900","value":947},{"country":"Asia","year":"1950","value":1402},{"country":"Asia","year":"1999","value":3634},{"country":"Asia","year":"2050","value":5268},{"country":"Africa","year":"1750","value":106},{"country":"Africa","year":"1800","value":107},{"country":"Africa","year":"1850","value":111},{"country":"Africa","year":"1900","value":133},{"country":"Africa","year":"1950","value":221},{"country":"Africa","year":"1999","value":767},{"country":"Africa","year":"2050","value":1766},{"country":"Europe","year":"1750","value":163},{"country":"Europe","year":"1800","value":203},{"country":"Europe","year":"1850","value":276},{"country":"Europe","year":"1900","value":408},{"country":"Europe","year":"1950","value":547},{"country":"Europe","year":"1999","value":729},{"country":"Europe","year":"2050","value":628}];

  it('初始化以及销毁', () => {
    const config = {"title":{"visible":true,"text":"百分比堆叠面积图"},data,"meta":{"year":{"range":[0,1]}},"xField":"year","yField":"value","stackField":"country"};
    const ref = React.createRef();
    mount(<PercentStackedArea {...config} chartRef={ref} />);
    expect(ref.current).not.toBeNull();
    const canvas = ref.current.getCanvas();
    expect(canvas.destroyed).toBe(false);
    ref.current.destroy();
    expect(canvas.destroyed).toBe(true);
  });
});
