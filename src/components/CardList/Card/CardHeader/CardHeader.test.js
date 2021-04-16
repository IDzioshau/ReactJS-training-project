import React from 'react';
import { shallow } from 'enzyme';
import CardHeader from './CardHeader';
import { MdModeEdit } from 'react-icons/md';
import { BiSave } from 'react-icons/bi';
import { RiArrowGoBackLine } from 'react-icons/ri';

describe('CardHeader testing', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CardHeader />);
    });

    it('should contain BiSave if editMode is true', () => {
        wrapper.setProps({ editMode: true });
        expect(wrapper.contains(<BiSave />)).toEqual(true);
    });

    it('should contain RiArrowGoBackLine if editMode is true', () => {
        wrapper.setProps({ editMode: true });
        expect(wrapper.contains(<RiArrowGoBackLine />)).toEqual(true);
    });

    it('h1 should contain caption from props if editMode is false', () => {
        wrapper.setProps({ editMode: false, caption: '12345' });
        expect(wrapper.find('h1').text()).toEqual('12345');
    });

    it('should contain MdModeEdit if editMode is false and readOnlyMode is false', () => {
        wrapper.setProps({ editMode: false, readOnlyMode: false });
        expect(wrapper.contains(<MdModeEdit />)).toEqual(true);
    });
});
