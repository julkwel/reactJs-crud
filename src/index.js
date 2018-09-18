import React from 'react'
import {render} from 'react-dom'
import {ApolloProvider} from 'react-apollo'
import {ApolloClient} from 'apollo-client'
import {ApolloLink } from 'apollo-link'
import {  HttpLink } from 'apollo-link-http'
import {WebSocketLink } from 'apollo-link-ws'
import {getMainDefinition } from 'apollo-utilities'
import { InMemoryCache } from 'apollo-cache-inmemory'
import App from './containers/Homepage';
import './assets/index.css'

import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
  import { AnimatedSwitch } from "react-router-transition";
  

const httplink = new HttpLink({
   uri :'https://api.graph.cool/simple/v1/cjm52411r563401176ml4mlzd' 
})

const wsLink = new WebSocketLink({
    uri:'wss://subscriptions.graph.cool/v1/cjm52411r563401176ml4mlzd',
    options:{
        reconnect: true
    }
})

const link = ApolloLink.split(
    ({query}) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
    },
    wsLink,
    httplink,
);

const client = new ApolloClient({
    link:link,
    cache: new InMemoryCache()
})


render(
    <Router>
        <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
        >
            <ApolloProvider client={client}>
                <Route exact path="/" component={App} />
            </ApolloProvider> 
        </AnimatedSwitch>
    </Router>,
    document.getElementById("root")
)