import React from 'react'
import ReactDOM from 'react-dom'
import './css/global.scss';

import Head from './components/base/header';
import Foot from './components/base/footer';
import Home from './views/home'

const init = (
    <>
      <div className="page-wrapper">
        <Head />
        <main className="theme-didk">
          <Home />
        </main>
        <Foot />
      </div>
    </>
)

ReactDOM.render(init, document.getElementById('root'))