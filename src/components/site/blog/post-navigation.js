/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

const PostNavigation = props => (
  <Link
    sx={{
      fontFamily: "body",
      color: "text",
      ":hover": {
        color: "accent"
      }
    }}
    to={props.destination}
  >
    {props.children}
  </Link>
);

export default PostNavigation;
