import './App.css'
import { Workspace } from './screens/Workspace'
import { useAppTheme } from 'app/data/context'
import { Auth } from 'screens/Auth'
import { useAuth } from 'app/data'
import { base, beta, build, testbuild, testing } from 'app/api'
import { pdfjs } from 'react-pdf'
import { useAccessToken } from '@jivasoft/jivasoft-lib/dist/app/data/context/AccessTokenContext'

function App () {
  const [authState] = useAuth()
  const { coreAccessToken } = useAccessToken()
  // console.log('coreAccessToken', coreAccessToken)
  // TODO: test if this works defined here, want to use the accesstokenprovider to give access tokens
  // Core.setLicenseKey(coreAccessToken)
  pdfjs.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js' // replace x.x.x with the appropriate version

  let BetaMessage = () => {
    return (
      <div
      className='xd2-version-counter'
        onClick={e => {
          e.stopPropagation()
        }}
        style={{
          background: 'grey',
          opacity: 0.6,
          fontWeight: 'bold',
          color: 'white',
          padding: 5,
          borderRadius: 5,
          zIndex: 999,
          position: 'absolute',
          bottom: 10,
          right: 10
        }}
      >
        {base === testing && 't-'}
        {base === beta && 'b-'}
        {base === testing ? testbuild : build}
      </div>
    )
  }

  return (
    <>
      {authState.token ? <Workspace /> : <Auth />}
      <BetaMessage />
    </>
  )
}

export default App
