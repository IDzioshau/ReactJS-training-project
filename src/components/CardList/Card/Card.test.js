import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import { Card } from './Card';
import CardBody from './CardBody';
import CardHeader from './CardHeader';

configure({ adapter: new Adapter() });

describe('Card testing', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Card />);
    });

    it('should contain CardHeader', () => {
        expect(wrapper.find(CardHeader)).toHaveLength(1);
    });

    it('should contain CardBody', () => {
        expect(wrapper.find(CardBody)).toHaveLength(1);
    });

    it('should contain class card2 if styleFlag is true', () => {
        wrapper.setState({ styleFlag: true });
        expect(wrapper.find('.card2')).toHaveLength(1);
    });

    it('should contain class card if styleFlag is false', () => {
        expect(wrapper.find('.card')).toHaveLength(1);
    });
});
