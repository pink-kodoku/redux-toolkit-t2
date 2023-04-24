import { Outlet } from "react-router-dom"
import { Header } from "@shared/components"


export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}