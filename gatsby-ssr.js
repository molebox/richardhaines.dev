import { wrapRootElement as wrap } from './root-wrapper';
const React = require("react");
export const onRenderBody = ({setHeadComponents, setPostBodyComponents}) => {
    setHeadComponents([<link rel="stylesheet" href="https://indestructibletype.com/fonts/Jost.css" type="text/css" charset="utf-8" />]);
    setPostBodyComponents([
      <script src="three.min.js"></script>,
      <script src="TweenMax.min.js"></script>
  ]);
}

export const wrapRootElement = wrap