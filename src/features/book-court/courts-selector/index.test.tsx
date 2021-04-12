import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import CourtSelector from './index';

describe('test CourtSelector Component', () => {
  it('should render title', async () => {
    const wrapper = render(<CourtSelector />);

    const tittleBox = wrapper.getByText('选择场地');
    expect(tittleBox).toBeInTheDocument();
    expect(tittleBox).toContainHTML('<h4 class="title">选择场地</h4>');
  });
});
