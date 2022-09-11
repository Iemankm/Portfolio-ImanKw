import React from "react";
import { gql } from "@apollo/client";
import client from "../apolloClient";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Projects from "../components/Projects/Projects"
import Head from 'next/head'
import Hero from "../components/Hero/Hero";
import Contact from "../components/Contact/Contact";
import {motion} from "framer-motion"

       
export default function Home({ aboutMes, hero, projects, contact }) {
  console.log(projects);
  return (
    <motion.div initial="hidden" amimate="show">
      <Head>
        <title>Iman Al Wahaibi</title>
        <meta property="og:title" content="Iman Al Wahaibi" key="title" />
      </Head>
      <Hero hero={hero} />
      <About aboutMes={aboutMes} />
      <Projects projects={projects} />
      <Contact contact={contact} />
      {/* 
      <Footer /> */}
    </motion.div>
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

