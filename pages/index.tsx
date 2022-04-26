import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRecoilState } from 'recoil'
import { textState } from '../components/atoms/AtomTemp_'

const Home: NextPage = () => {
  const [text, setText] = useRecoilState(textState);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Dev Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='w-[80px] h-[40px] flex items-center justify-center bg-blue-200 rounded-md mb-4' onClick={() => {
          setText('well done')
        }}>
        { text }
        </div>
      </main>
    </div>
  )
}

export default Home
