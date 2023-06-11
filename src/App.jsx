import './App.css'
import { Layout } from './components/layout'
import { ThemeProvider } from './context/theme'

function App() {
  return (
    <>
     <ThemeProvider>
      <Layout/>
     </ThemeProvider>
    </>
  )
}

export default App
