import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import LoginForm from './index';
import * as MockHooks from './hooks';
import * as TypedSelectorHook from '../../app/hooks/useTypedSelector';

describe('test Login Form', () => {
  function mockHooks(actions: any) {
    const mockActionsSpy = jest.spyOn(MockHooks, 'useAuthorizeActions');
    mockActionsSpy.mockReturnValue(actions);

    const mockStateLoadingSpy = jest.spyOn(MockHooks, 'useHandleLoginStateChange');
    mockStateLoadingSpy.mockReturnValue(null);

    const mockTypedSelectorSpy = jest.spyOn(TypedSelectorHook, 'useTypedSelector');
    mockTypedSelectorSpy.mockReturnValue({
      isLogin: true, loading: false,
    });
  }

  it('should show tile', async () => {
    const mockActions = {
      doLogin: jest.fn(),
    };
    mockHooks(mockActions);

    const wrapper = render(<LoginForm />);

    const tittleBox = wrapper.getByText('你好，');
    expect(tittleBox).toBeInTheDocument();
    expect(tittleBox).toContainHTML('<h3 class="login-layout-title">你好，</h3>');
  });

  it('should do login when click button given validated username & pass', async () => {

  });
});
