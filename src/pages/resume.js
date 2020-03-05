/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Main from "../components/site/layout/main";
import Divider from "../components/common/divider";
import AnimatedH1 from "../components/common/animated-h1";
import ResumeLayout from "../components/resume/resume-layout";
import AboutMe from "../components/resume/about-me";
import Skills from "../components/resume/skills";
import Work from "../components/resume/work";
import Education from "../components/resume/education";
import Languages from "../components/resume/languages";
import Interests from "../components/resume/interests";
import MyProjects from "../components/resume/my-projects";
import { graphql, useStaticQuery } from "gatsby";

const Resume = () => {
  const data = useStaticQuery(query);
  const resume = data.allResumedataJson.edges;
  console.log({ resume });
  return (
    <Main>
      {/* <Divider />
      <AnimatedH1 string={resume} />
      <Divider /> */}
      <ResumeLayout>
        {resume.map(({ node, index }) => (
          <React.Fragment key={node.basics.name + index}>
            <AboutMe />
            <Skills skills={node.skills} />
            <MyProjects projects={node.projects} />
            <Work>Work</Work>
            <Education>Education</Education>
            <Languages>Languages</Languages>
            <Interests>Interests</Interests>
          </React.Fragment>
        ))}
      </ResumeLayout>
    </Main>
  );
};

export default Resume;

export const query = graphql`
  {
    allResumedataJson {
      edges {
        node {
          basics {
            name
            label
            email
            phone
            website
            github
            twitter {
              username
              url
            }
            summary
            location
          }
          projects {
            name
            summary
            stack
            github
            npm
            live
          }
          work {
            company
            position
            website
            startDate
            endDate
            summary
          }
          education {
            institution
            area
            qualification
            startDate
            endDate
          }
          skills {
            name
            keywords
          }
          languages {
            language
            fluency
          }
        }
      }
    }
  }
`;
