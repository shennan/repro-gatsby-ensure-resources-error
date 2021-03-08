import * as React from "react"
import {RedocStandalone} from 'redoc'
import Json from './swagger.json'

// markup
const IndexPage = () => {

  return (
    <main>
      <title>Redoc Test</title>
      <RedocStandalone
        spec={Json}
        options={{
          hideDownloadButton: false,
          pathInMiddlePanel: false,
          noAutoAuth: true
        }}
      />

    </main>
  )
}

export default IndexPage
