import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { POST_TYPES } from '../../../data';

import { TypePicker } from '..';

describe('<TypePicker />', () => {
  it('should render a button for every post type', () => {
    render(<TypePicker type="pre" onChange={() => {}} />);

    POST_TYPES.forEach((t) => {
      expect(screen.getByRole('button', { name: t.label })).toBeInTheDocument();
    });
  });

  it('should call onChange with the clicked type key', async () => {
    const onChange = jest.fn();
    render(<TypePicker type="pre" onChange={onChange} />);

    await userEvent.click(screen.getByRole('button', { name: 'Agenda' }));

    expect(onChange).toHaveBeenCalledWith('agenda');
  });
});
