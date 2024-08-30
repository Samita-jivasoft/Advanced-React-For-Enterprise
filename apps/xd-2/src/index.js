import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { HashRouter as Router } from 'react-router-dom'
import {
  ViewPortProvider,
  AuthContextProvider,
  ThemeContextProvider,
  UIContextProvider
} from 'app/data/context'
import {
  authReducer,
  initalAuthState,
  initialThemeState,
  initialUIState,
  themeReducer,
  uiReducer
} from 'app/data/reducers'
import { WorkspaceContextAggregate } from 'app/data'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

// Required for ActiveReports.js support
import { Core } from '@grapecity/activereports'
// TODO: Move this Core access token and access it from the new AccessTokenProvider
Core.setLicenseKey(
  '*.extradutysolutions.com,346682574329986#B1PIA4axkjV65Ec0llVzp6aINXWIB5cnJkaYdTcvRFbuVlVKlHVkF4Y7kDW8kmTBplbhJkYXBFd05EdrlkaFFkU9RjZRZWW8pHWElkMGZ5TCZ5Lvt6caZTNNR6cvo5VLdHRxQGZq3STtlDSylnYGpEbaRDb5JHRol5Q8o6VyhGMudVSVNXRvYHeE5UMjRXMl3WYVZGdMh5bpNDMGVkRUhzRxVla5ZlW8UDWycjdKhGSlRDUIJ6T4NUd6sGbJ94Vyczb5BjTDNTaRRDNvdmQ8Y4LGpXMIlnSqplWhVkahdmTLtCWTlnRnVGbwFDcj5mN6R7TwF6UiojITJCLigTNzETO5QTNiojIIJCL6IDM6kzN6ATM0IicfJye&Qf35VfiQlRWllI0IyQiwiI4YFITpEdy3GclJVZ6lGdjFkI0IiTis7W0ICZyBlIsISO4QTN9ADI6ATOwMjMwIjI0ICdyNkIsISbvNmLz96bpRXds36c9RXdkFmc4hXZuoiI0IyctRkIsICdm36chZXaKJiOiEmTDJCLiYDO9kjMzQzN5IDO6YDNzIiOiQWSiwSfdtlOicGbmJCLlNHbhZmOiI7ckJye0ICbuFkI1pjIEJCLi4TPBVlcP3EdQBXdRp4TtV7TxVDW8c6Q9UEVO5GRyE5UuhXTwp5Y9YkdOZXRmhTZ8QXbylkdjR6Tz3UTwZWc8djUWR6c8xkeUd4MzpWM7MFSJR5V8hXVN9EMPhXUoZXdv2CnYrE'
)
// TODO: replace the above line with this:
// Core.setLicenseKey(process.env.CORE_ACCESS_TOKEN)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <AuthContextProvider initialState={initalAuthState} reducer={authReducer}>
    <ViewPortProvider>
      <UIContextProvider initialState={initialUIState} reducer={uiReducer}>
        <ThemeContextProvider initialState={initialThemeState} reducer={themeReducer}>
          <Router>
            <WorkspaceContextAggregate>
              <App />
            </WorkspaceContextAggregate>
          </Router>
        </ThemeContextProvider>
      </UIContextProvider>
    </ViewPortProvider>
  </AuthContextProvider>
)

serviceWorkerRegistration.register()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
