import React from 'react'

export default function Slider({ children }) {
  return (
    <div className="min-h-full min-w-[20rem] bg-red-400">
      <ul className='w-full'>
        {
          !Array.isArray(children)
            ? <li>{children}</li>
            : children.map(slide => (
              <li>
                {slide}
              </li>
            ))
        }
      </ul>
      <div>

      </div>

    </div>
  )
}
