import { shallow } from 'enzyme';
import ListItem from './ListItem';
import { findByTestAttr } from '../../../utils';

const setup = (props = {}) => {
    const wrapper = shallow(<ListItem {...props} />);
    return wrapper;
};

describe('ListItem Component', () => {
    let component;
    beforeEach(() => {
        component = setup();
    });
    // assertions
    it('Should render without failing', () => {
        const listItemComponent = findByTestAttr(component, 'ListItem');
        expect(listItemComponent.length).toBe(1);
    });

    it('Should render title', () => {
        const title = findByTestAttr(component, 'title');
        expect(title.length).toBe(1);
    });

    it('Should render description', () => {
        const description = findByTestAttr(component, 'description');
        expect(description.length).toBe(1);
    });
});
