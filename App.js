import React from 'react';
import AppContainer from './app/Navigation';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo'

// const networkInterface = createNetworkInterface({ uri: "https://api.graph.cool/simple/v1/cjot7k0uiikr10143o567mbsx" })
const client = new ApolloClient({ uri: "https://api.graph.cool/simple/v1/cjot7k0uiikr10143o567mbsx" })
// const client = new ApolloClient({
//   uri: "https://api.graph.cool/simple/v1/cjot7k0uiikr10143o567mbsx"
// });

export default class App extends React.Component {
  // componentDidMount() {
  //   if (localStorage.getItem('graphcoolToken')) {
  //     req.options.headers.authorization = `Bearer ${localStorage.getItem('graphcoolToken')}`
  //   }
  //   next()
  //   },
  // }

  render() {
    return (
      <ApolloProvider client={client}>
        <AppContainer />
      </ApolloProvider>
    )
  }
}
