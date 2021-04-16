import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import CardBody from './CardBody';

configure({ adapter: new Adapter() });

describe('CardBody testing', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CardBody />);
    });

    it('should contain textarea if editMode is true', () => {
        wrapper.setProps({ editMode: true });
        expect(wrapper.find('textarea')).toHaveLength(1);
    });

    it('should contain p if editMode is false', () => {
        wrapper.setProps({ editMode: false });
        expect(wrapper.find('p')).toHaveLength(1);
    });
});
