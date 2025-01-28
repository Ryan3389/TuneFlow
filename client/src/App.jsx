import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client"

import { setContext } from '@apollo/client/link/context';

import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import './App.css'

// Set up endpoint for graphQL mutations/queries
const httpLink = createHttpLink({
  uri: '/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token")
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})


function App() {
  return (

    <ApolloProvider client={client}>
      <Navbar />
      <Outlet />
      <Footer />
    </ApolloProvider>

  )
}

export default App
// import Navbar from "./components/Navbar"
// import { Outlet } from "react-router-dom"
// import Footer from "./components/Footer"
// import './App.css'

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </>
//   )
// }

// export default App