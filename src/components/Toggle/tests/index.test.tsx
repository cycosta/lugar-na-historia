import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Toggle } from '..';

describe('<Toggle />', () => {
  it('should render the label and reflect the checked state', () => {
    render(<Toggle label="Imagem" checked onChange={() => {}} />);

    expect(screen.getByText('Imagem')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('should call onChange with the new checked value on click', async () => {
    const onChange = jest.fn();
    render(<Toggle label="Imagem" checked={false} onChange={onChange} />);

    await userEvent.click(screen.getByRole('checkbox'));

    expect(onChange).toHaveBeenCalledWith(true);
  });
});
