import { DemoDashboard } from './DemoDashboard'
import { useApp } from 'app/data/context/AppContext'
import { DemoMessageBoard } from './DemoMessageBoard'

export const Dashboard = ({ isLoading }) => {
  const [appState] = useApp()
  return isLoading ? (
    <div />
  ) : appState?.workflows?.length > 0 || appState?.workflows == undefined ? (
    <DemoDashboard />
  ) : (
    <DemoMessageBoard />
  )
}
