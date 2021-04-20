import React from 'react';
import { shallow } from 'enzyme';
import CardBody from './CardBody';

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
