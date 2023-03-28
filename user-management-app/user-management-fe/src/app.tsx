import {QueryClient, QueryClientProvider} from 'react-query'
import {CssBaseline} from '@mui/material'

import {LoginPage} from 'pages/login-page/login-page'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <LoginPage />
    </QueryClientProvider>
  )
}

export default App
