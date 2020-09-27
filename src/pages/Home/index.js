import React from 'react'
import MouseMove from '../../components/MouseMove'
import Cat from '../../components/Cat'

export function Home () {
  return (
    <div>
      <h1>Render props example</h1>
      <MouseMove render={
        (mouse) => <Cat mouse={mouse} />
      }
      />
    </div>
  )
}
