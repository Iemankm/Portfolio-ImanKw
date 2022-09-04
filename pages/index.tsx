import React from "react";
import { gql } from "@apollo/client";
import client from "../apolloClient";
import { Header } from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Projects from "../components/projects/Projects";
import Achievements from "../components/achievements/Achievements";

export default function Home({ aboutMes, achievements, projects }) {
  console.log(aboutMes);
  return (
    <div>
      <title>Iman Al Wahaibi</title>
      <Header aboutMes={aboutMes} />

      <Achievements achievements={achievements} />
      <Projects projects={projects} />
      
      <Footer />
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
  const { aboutMes, awards, projects, achievements } = data;
  return {
    props: {
      aboutMes,
      awards,
      projects,
      achievements,
    },
  };
}
