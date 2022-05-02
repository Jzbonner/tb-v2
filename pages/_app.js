import { ChakraProvider } from "@chakra-ui/react"
import { blogTheme } from "../styles/blogTheme"

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={blogTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
