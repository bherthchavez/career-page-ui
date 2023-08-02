
import Header from "./components/Header"
import Head from "./components/Head"
import Careers from "./components/Careers"
import { Analytics } from '@vercel/analytics/react';

function App() {

  return (
    <>
      <Header />
      <Head />
      <Careers />
      <Analytics />
    </>
  )
}

export default App
