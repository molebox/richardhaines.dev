/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { Code } from './src/components/site/blog/code'
import LinearGradientText from './posts/posts-components/linear-gradient-text'
import ContentLayout from './src/components/site/blog/content-layout';
import TableOfContents from './src/components/site/copy-paste/toc';
import Glitch from './src/components/common/glitch';
import H1 from './src/components/common/h1';

const components = {
  'p.inlineCode': props => (
    <code {...props} style={{ backgroundColor: 'lightgrey' }}></code>
  ),
  pre: ({ children: { props } }) => {
    if (props.mdxType === 'code') {
      return (
        <div style={{ position: 'relative' }}>
        <Code
          codeString={props.children.trim()}
          language={
            props.className &&
            props.className.replace('language-', '')
          }
          {...props}
        />
        </div>
      )
    }
  },
  wrapper: ({children, ...props}) => {
    console.log({props})
    return (
      <ContentLayout>
        <Box sx={{gridColumn: [1, 2], gridRow: 1, marginTop: 100}}>
          <TableOfContents slug={props.slug} headings={props.headings}/>
        </Box>
        <Box sx={{gridColumn: 1, gridRow: 1}}>
          {children}
        </Box>
    </ContentLayout>

    )
  },
  LinearGradientText,
  Glitch,
  H1
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)