import * as React from "react"
import Header from "./header"
import Footer from "./footer"
import Head from "./head"
import "../styles.css"

interface LayoutProps {
  title: string
  description?: string
  image?: { id: string; url: string }
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Head {...props} />
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
