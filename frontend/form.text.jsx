import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test } from 'vitest';
import MyForm from './MyForm';

test('should update input value on change', () => {
  render(<MyForm />);
  const input = screen.getByLabelText(/student name/i);
  fireEvent.change(input, { target: { value: 'Himangi' } });
  expect(input.value).toBe('Himangi');
});