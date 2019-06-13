import React from 'react'
import Chess from 'components/chess'
import 'stylesheets/app.scss'

function App() {
  return (
    <div className="app">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <Chess/>
    </div>
  );
}

export default App
