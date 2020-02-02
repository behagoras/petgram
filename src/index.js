import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import * as serviceWorker from './serviceWorker';
// eslint-disable-next-line import/no-named-as-default
import Context from './Context';
import App from './App';

const client = new ApolloClient({
  uri: 'https://petgram-server.behagoras.now.sh/graphql',
  request: (operation) => {
    const token = window.sessionStorage.getItem('token');
    const authorization = token ? `Bearer ${token}`:'';
    operation.setContext({
      headers:{
        authorization,
      }
    })
  },
  onError: error=>{
    const {networkError}=error
    if(networkError && networkError.result.code==='invalid_token')
    {
      window.sessionStorage.removeItem('token')
      window.location.href='/'
    }
    console.log(error)
  },
});

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
