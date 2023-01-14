import { Header } from './components/Header'
import { SplineRoom } from './components/SplineRoom'
import { DefaultThemes } from './constants/client'
import { useTheme } from '$hooks/useTheme'

export function RootApp() {
  const { theme, switchTheme } = useTheme()

  return (
    <div id="appContainer" data-theme={theme}>
      <Header />

      <SplineRoom />

      <button onClick={switchTheme}>
        Light
      </button>
      <button onClick={switchTheme}>
        Dark
      </button>
    </div>
  )
}
