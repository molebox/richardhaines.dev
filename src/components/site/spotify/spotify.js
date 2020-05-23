/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql, useStaticQuery } from "gatsby";

const Spotify = () => {
  const data = useStaticQuery(query);
  console.log({ data });

  return <section>My Spotify playlists</section>;
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
            "Dance"
          ]
        }
      }
    ) {
      nodes {
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
      }
    }
  }
`;
