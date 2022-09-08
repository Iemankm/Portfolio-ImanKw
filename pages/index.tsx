import React from "react";
import { gql } from "@apollo/client";
import client from "../apolloClient";
// import { Header } from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Projects from "../components/Projects/Projects"
import About from "../components/About/About";
import Head from 'next/head'


export default function Home({ aboutMes, achievements, projects }) {
  console.log(projects);
  return (
    <div>
      <Head>
        <title>Iman Al Wahaibi</title>
        <meta property="og:title" content="Iman Al Wahaibi" key="title" />
      </Head>
      {/* <Header aboutMes={aboutMes} /> */}
      <About aboutMes={aboutMes} />
      <Projects projects={projects} />

      {/* 
      
      
      <Footer /> */}
    </div>
  );
}
export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        aboutMes {
          about
          profilepic {
            url
          }
          slug
        }
        awards {
          rank
          title
          place
          year
          slug
        }
        projects {
          projpic {
            url
          }
          title
          date
          description
          slug
        }
        achievements {
          title
          year
          slug
        }
      }
    `,
  });
  console.log(data);
  const { aboutMes, projects, achievements } = data;
  return {
    props: {
      aboutMes,
      projects,
      achievements,
    },
  };
}
