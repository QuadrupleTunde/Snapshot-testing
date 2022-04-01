import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer'
import GitHubCard from './GitHubCard';


test('renders a GitHub', () => {
   const GitHub= renderer.create(<GitHubCard/>).toJSON()
   expect(GitHub).toMatchSnapshot();
});
