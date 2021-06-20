import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from '../../../components/Button';

describe('test button successfully', () => {
  it('should render the button', () => {
    const buttonText = 'Login';
    const { container } = render(<Button label={buttonText } />);

    const button = screen.getByRole('button', {name: buttonText})
    
    expect(button).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  })

  it('should call onClick function successfully', () => {
    const buttonText = 'Login';
    const onClick = jest.fn();

    render(<Button label={buttonText } onClick={onClick} />);

    const button = screen.getByRole('button', {name: buttonText})
    
    userEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  })
})