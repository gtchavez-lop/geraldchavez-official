import Navbar from '../components/Navbar'
import '../styles/globals.css'

import { useState, useEffect } from 'react'
import Page_Home from '../components/page/Page_Home'

function MyApp({ Component, pageProps }) {

  const [_SelectedTab, _SetSelectedTab] = useState(1)

  return (
    <section className='overflow-x-hidden'>
      <Navbar tabChange={_SetSelectedTab} selectedTab={_SelectedTab} />
      {/* <Component {...pageProps} /> */}

      {_SelectedTab === 1 && <Page_Home />}
    </section>
  )
}

export default MyApp
