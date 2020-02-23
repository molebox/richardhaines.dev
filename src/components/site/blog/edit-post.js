/** @jsx jsx */
import { jsx } from "theme-ui";

const EditPost = props => (
  <a sx={{}} target="_blank" rel="noopener noreferrer" href={props.editLink}>
    {props.children}
  </a>
);

export default EditPost;
