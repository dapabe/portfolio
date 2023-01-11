import { useEffect, useState } from 'react'
import { Header } from './components/Header'

export function RootApp() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const htmlTag = document.getElementsByTagName("html")

  }, [])

  return (
    <>
      <Header />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
