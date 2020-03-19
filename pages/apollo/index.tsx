import * as React from "react";
import Head from "next/head";
import Layout from "@container/Layout";
import { withApollo } from "@utils/withApollo";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

export const MY_COUNTRY = gql`
  query MY_COUNTRY($code: String!) {
    country(code: $code) {
      code
      name
      native
      currency
      phone
      languages {
        code
        name
        native
      }
      continent {
        code
        name
      }
    }
  }
`;

const Page = props => {
  const { loading, error, data } = useQuery(MY_COUNTRY, {
    variables: {
      code: "JP"
    },
    notifyOnNetworkStatusChange: true,
    ssr: true
  });

  if (error) {
    console.log(error);
    return <div>Error: Fetch Fail!</div>;
  }

  if (loading) return <div>Loading...</div>;

  const { country } = data;

  return (
    <div>
      <Head>
        <title>Apollo Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="page">
          <h1 className="title">Welcome to {country.native}!</h1>
          <div className="description">
            Phone Code: <span>{country.phone}</span>
            <br />
            Language:
            {country.languages.map(lang => {
              return <span key={lang.code}>&nbsp;{lang.native}</span>;
            })}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default withApollo(Page, { ssr: true });
