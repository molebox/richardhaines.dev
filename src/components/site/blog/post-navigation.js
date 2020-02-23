/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

const PostNavigation = props => (
  <Link
    sx={{
      gridArea: "header"
    }}
    to={props.destination}
  >
    {props.children}
  </Link>
);

export default PostNavigation;
