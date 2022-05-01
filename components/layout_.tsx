import Head from 'next/head'
import { useRecoilState } from 'recoil'
import { modalState } from './atoms/AtomTemp_'
interface Layout_Props {
  children: JSX.Element
}

const Layout_ = ({ children }: Layout_Props) => {
  const [modal_, setModal_] = useRecoilState(modalState)
  return (
    <div>
      <Head>
        <title>Dev Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`flex min-h-screen w-full flex-col items-center justify-center`}
      >
        {children}
      </main>
    </div>
  )
}

export default Layout_
