import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './Card';
import CardBody from './CardBody';
import CardHeader from './CardHeader';

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

    it('should change styleFlag state', () => {
        wrapper.setProps({ onSelectHandler: () => {} });
        wrapper.instance().switchStyle();
        expect(wrapper.state('styleFlag')).toEqual(true);
    });

    it('should change editMode state', () => {
        const spy = jest
            .spyOn(wrapper.instance(), 'switchStyle')
            .mockImplementation(() => {});
        wrapper.setState({ styleFlag: true });
        wrapper.instance().switchEditMode();
        expect(wrapper.state('editMode')).toEqual(true);
        expect(spy).toHaveBeenCalled();
    });

    it('should change caption and text from new strings', () => {
        wrapper.setProps({ onEditHandler: () => {} });
        wrapper.setState({ newCaption: '123456', newText: 'text123' });
        wrapper.instance().saveData();
        expect(wrapper.state('caption')).toEqual('123456');
        expect(wrapper.state('text')).toEqual('text123');
    });

    it('should undo all changes and exit edit mode', () => {
        wrapper.setProps({ onSelectHandler: () => {} });
        wrapper.instance().switchEditMode();
        wrapper.instance().cancelData();
        expect(wrapper.state('editMode')).toEqual(false);
    });

    it('should change caption state', () => {
        wrapper.instance().captionChangedHandler({target: {value: '123'}});
        expect(wrapper.state('newCaption')).toEqual('123');
    });

    it('should change text state', () => {
        wrapper.instance().textChangedHandler({target: {value: '123'}});
        expect(wrapper.state('newText')).toEqual('123');
    });

    it('should call cancelData in componentDidUpdate', () => {
        const spy = jest.spyOn(wrapper.instance(), 'cancelData');
        wrapper.setState({ editMode: true });
        wrapper.setProps({ readOnlyMode: true });
        expect(spy).toBeCalledTimes(1);
    });
});
