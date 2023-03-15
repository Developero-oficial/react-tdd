import React from 'react'
import {QueryClient, QueryClientProvider} from 'react-query'
import {render} from '@testing-library/react'

export const queryClient = new QueryClient()

export const renderWithProviders = (ui: React.ReactNode) =>
  render(<QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>)
