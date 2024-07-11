import React from 'react';
import { shallow } from 'enzyme';
import AreaChartComponent from '../../app/components/AreaChart';

describe('AreaChartComponent', () => {
  it('renders without crashing', () => {
    shallow(<AreaChartComponent />);
  });

  it('renders with correct props', () => {
    const wrapper = shallow(<AreaChartComponent />);
    expect(wrapper.find('AreaChart').prop('data')).toEqual([
      { month: 'January', amount: 1000 },
      { month: 'February', amount: 1500 },
      // Include more data points as needed
    ]);
  });

  it('renders the correct number of Axis components', () => {
    const wrapper = shallow(<AreaChartComponent />);
    expect(wrapper.find('XAxis').length).toEqual(1);
    expect(wrapper.find('YAxis').length).toEqual(1);
  });

  it('renders the correct number of Tooltip and Legend components', () => {
    const wrapper = shallow(<AreaChartComponent />);
    expect(wrapper.find('Tooltip').length).toEqual(1);
    expect(wrapper.find('Legend').length).toEqual(1);
  });

  it('renders the correct number of Area components', () => {
    const wrapper = shallow(<AreaChartComponent />);
    expect(wrapper.find('Area').length).toEqual(1);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<AreaChartComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});