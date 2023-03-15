import { useCallback, useState } from 'react'

/**
 * Simple hook para alternar el valor Boolean inicial.
 * @param init ``false`` por defecto.
 * @returns El Boolean pasado por args y el callback que lo invierte.
 */
export const useToggle = (init: boolean = false): [boolean, () => void] => {
  const [bool, setBool] = useState(Boolean(init));
  const tog = useCallback(() => setBool(x => !x), [])
  return [bool, tog]
}
