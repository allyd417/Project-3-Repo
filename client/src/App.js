import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './components/homepage';
import Navbar from './components/navbar';
import Signup from './components/signup';
import Login from './components/login';
import Adopt from './components/adopt';

const App = () => {
  // Construct our main GraphQL API endpoint
  const httpLink = createHttpLink({
    uri: '/graphql',
  });

  // Construct request middleware that will attach the JWT token to every request as an `authorization` header
  const authLink = setContext((_, { headers }) => {
    // Get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token');
    // Return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '', // If there is no token, return an empty string
      },
    };
  });

  const client = new ApolloClient({
    // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <div>
      <ApolloProvider client={client}>
        <Router>
          <Navbar />
          {/* Render the Login component if the user is not logged in */}
          <Signup />
          <Login />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/adopt" element={<Adopt />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </div>
  );
};

export default App;
