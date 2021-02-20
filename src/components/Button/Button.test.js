import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../utils';
import Button from './Button';

const setup = (props = {}) => {
    const wrapper = shallow(<Button {...props} />);
    return wrapper;
};

describe('Button Component', () => {
    let component;
    beforeEach(() => {
        component = setup();
    });
    it('Should render without failing', () => {
        // assertions
        const buttonComponent = findByTestAttr(component, 'Button');
        expect(buttonComponent.length).toEqual(1);
    });
});
