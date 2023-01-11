"use client"
import useToggle from "$hooks/useToggle"

export const LandingPage = () => {
  const [bool, toggle] = useToggle()
  return (
    <>
      <div className="bg-blue-300 rounded-lg py-5 px-6 mb-4 text-base text-blue-700" role="alert">
        {JSON.stringify(bool)}
      </div>

      <button onClick={toggle}>
        alternar
      </button>
    </>
  )
}
