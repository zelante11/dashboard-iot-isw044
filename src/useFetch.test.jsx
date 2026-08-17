import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi, test, expect } from 'vitest';
import PainelClima from './PainelClima';

global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        current: {
          temperature_2m: 25,
          relative_humidity_2m: 60,
          wind_speed_10m: 10,
        },
      }),
  })
);

test('exibe temperatura retornada pela API', async () => {
  render(<PainelClima />);

  await waitFor(() => {
    expect(screen.getByText(/25/)).toBeInTheDocument();
  });
});