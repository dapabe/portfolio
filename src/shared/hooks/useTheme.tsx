import { useEffect } from 'react'
import { useClientStore } from '../zustand/useClientStore'

export const useTheme = () => {
  const { theme, getTheme, switchTheme } = useClientStore()

  useEffect(getTheme, [])

  return {
    theme,
    switchTheme
  }
}
