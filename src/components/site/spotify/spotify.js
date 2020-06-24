/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Music } from "../../common/icons";
import H3 from "./../../common/h3";
import { motion } from "framer-motion";
import MusicalNotes from "./../../common/musical-notes";
import gsap from "gsap";

const container = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: {
      delay: 0.8
    }
  }
};

const Spotify = () => {
  const data = useStaticQuery(query);
  const playlist = data.allSpotifyPlaylist.edges;

  React.useEffect(() => {
    gsap.fromTo(
      ".spotify",
      { opacity: 0, x: 200 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        delay: 4,
        stagger: {
          amount: 0.3
        }
      }
    );
  }, []);

  return (
    <section>
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: ["3em", "3em", "5em"]
        }}
        className="spotify"
      >
        <h3
          sx={{
            color: "text",
            fontFamily: "heading",
            fontWeight: "heading",
            fontSize: ["0.9em", "1em", "1.2em"],
            margin: "1em auto",
            textTransform: "uppercase",
            letterSpacing: "text"
          }}
          className="spotify"
        >
          Coding Tunes
        </h3>
      </div>

      <section
        sx={{
          display: "grid",
          gridTemplateColumns: ["1fr", "1fr 1fr"],
          justifyContent: "center",
          alignItems: "center",
          justifyItems: "center",
          marginBottom: "3em"
        }}
      >
        <div
          sx={{
            justifySelf: ["center", "center"]
          }}
          className="spotify"
        >
          <MusicalNotes>
            <Music />
          </MusicalNotes>
        </div>

        <ul
          sx={{
            justifySelf: ["center", "start"],
            marginTop: "2em"
          }}
        >
          {playlist.map(list => (
            <motion.li
              sx={{
                marginBottom: "1em"
              }}
              key={list.node.spotifyId}
              className="spotify"
            >
              <a
                sx={{
                  color: "text",
                  fontFamily: "heading",
                  fontWeight: "body",
                  fontSize: ["0.9em", "1.1em", "1.2em"],
                  textDecoration: "none",
                  ":hover": {
                    color: "accent"
                  }
                }}
                href={list.node.external_urls.spotify}
              >
                <span className="spotify">{list.node.name}</span>
              </a>
            </motion.li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Spotify;

export const query = graphql`
  query MyPlaylistQuery {
    allSpotifyPlaylist(
      filter: { name: { in: ["Big Glasses & Jumpers", "All Good HipHop/RnB", "Rawkus Presents Soundbombing II"] } }
    ) {
      edges {
        node {
          name
          tracks {
            total
          }
          image {
            localFile {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
          external_urls {
            spotify
          }
          spotifyId
        }
      }
    }
  }
`;
