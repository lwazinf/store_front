import { url } from 'inspector'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

interface Layout_Props {
  children: JSX.Element
}

const Layout_ = ({ children }: Layout_Props) => {
  return (
    <div>
    <Head>
        <title>Dev Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`flex flex-col w-full h-full`}>
      {children}
      </div>


</div>
  )
}

export default Layout_
