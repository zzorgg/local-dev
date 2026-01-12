import HeroSection from "./components/home/hero-section"
import AboutSection from "./components/about/about"
import CreditsSection from "./components/credits/credits"
import DashboardLayout from "./components/dashboard/dashboard-layout"
import DashboardHome from "./components/dashboard/dashboard-home"
import FirebaseStatus from "./components/dashboard/firebase-status"
import Footer from "./components/footer"
import { HeroHeader } from "./components/header"
import { ThemeProvider } from "./components/theme-provider"

import { SignedIn, RedirectToSignIn } from "@clerk/clerk-react"
import { Route, Routes } from "react-router"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroHeader />
              <HeroSection />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<><HeroHeader /><AboutSection /><Footer /></>} />
        <Route path="/credits" element={<><HeroHeader /><CreditsSection /><Footer /></>} />
        <Route
          path="/dashboard"
          element={
            <SignedIn>
              <DashboardLayout />
            </SignedIn>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="firebase/*" element={<FirebaseStatus />} />
        </Route>
        <Route path="/dashboard/*" element={<RedirectToSignIn />} />
      </Routes>
    </ThemeProvider >
  )
}

export default App
