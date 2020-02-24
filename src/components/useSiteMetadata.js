import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query MySiteMetaDataQuery {
        site {
          siteMetadata {
            siteName
            intro
            description
            techStack
            siteUrl
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
