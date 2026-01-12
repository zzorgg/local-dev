import { FirebaseUIProvider } from "@firebase-oss/ui-react"
import { ui } from "../init"
import { Route, Routes } from "react-router"
import LoginPage from "./pages/login"
import SignupPage from "./pages/signup"
import SuccessPage from "./pages/success"
import NotFound from "./pages/404"
import { ThemeProvider } from "./components/theme-provider"

function App() {

  return (
    <>
      <FirebaseUIProvider ui={ui}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Routes>
            <Route index element={<LoginPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="success" element={<SuccessPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </FirebaseUIProvider>
    </>
  )
}

export default App
