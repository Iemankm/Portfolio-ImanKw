import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/cl3bjf6k42d5401xi3weqflkl/master",
  cache: new InMemoryCache(),
});

export default client;
