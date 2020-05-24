/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql, useStaticQuery } from "gatsby";
import { Music } from "../../common/icons";
import H3 from "./../../common/h3";
import { motion } from "framer-motion";
import MusicalNotes from "./../../common/musical-notes";

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

  return (
    <section>
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: ["3em", "3em", "5em"]
        }}
      >
        <H3>Coding Tunes</H3>
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
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          sx={{
            justifySelf: ["center", "center"]
          }}
        >
          <MusicalNotes>
            <Music />
          </MusicalNotes>
        </motion.div>

        <ul
          sx={{
            justifySelf: ["center", "start"],
            marginTop: "2em"
          }}
        >
          {playlist.map(list => (
            <motion.li
              variants={container}
              initial="hidden"
              animate="show"
              sx={{
                marginBottom: "1em"
              }}
              key={list.node.spotifyId}
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
                <span>{list.node.name}</span>
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
      filter: {
        name: {
          in: [
            "Big Glasses & Jumpers"
            "All Good HipHop/RnB"
            "Rawkus Presents Soundbombing II"
          ]
        }
      }
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
