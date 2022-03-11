import { init } from 'commandbar'
import 'nextra-theme-docs/style.css'
import React, { useEffect } from 'react'
import { _CommandBarOrgId_ } from '../common/const'

export default function Nextra({ Component, pageProps }) {
  const loggedInUserIdd = '12345'

  useEffect(() => {
    init(_CommandBarOrgId_)
    window.CommandBar.boot(loggedInUserIdd)
  }, [loggedInUserIdd])
  return <Component {...pageProps} />
}
