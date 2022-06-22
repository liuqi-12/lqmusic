import React, { memo,Suspense } from 'react'
import { HashRouter, useRoutes } from 'react-router-dom'
import { store } from './store'
import { Provider } from 'react-redux'

import routes from '@/router'

import LQAppFooter from './components/app-footer'
import LQAppHeader from './components/app-header'
import PlayBar from './pages/paly-bar'

function RouteElement() {
  const element = useRoutes(routes)
  return element
}

const App = memo(() => {
  return (
    <Provider store={store}>
      <HashRouter>
        <LQAppHeader />
        <Suspense fallback={<div>Loading...</div>}>
          <RouteElement />
        </Suspense>
        <LQAppFooter /> 
        <PlayBar/>
      </HashRouter>
    </Provider>
    
  )
})

export default App


