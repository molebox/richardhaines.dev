import { wrapRootElement as wrap } from './root-wrapper';
const React = require("react");
export const onRenderBody = ({setHeadComponents}) => {
    setHeadComponents([<link rel="stylesheet" href="https://indestructibletype.com/fonts/Jost.css" type="text/css" charset="utf-8" />])
  }

export const wrapRootElement = wrap