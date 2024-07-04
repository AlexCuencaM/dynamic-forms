import React from 'react'
import ReactDOM from 'react-dom/client'
import { Theme } from './ui/theme/Theme'
import App from './App'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <App />
      </LocalizationProvider>
    </Theme>
  </React.StrictMode>,
)
