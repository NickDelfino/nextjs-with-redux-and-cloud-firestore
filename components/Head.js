import NextHead from 'next/head'

const defaultDescription = '';
const defaultOGURL = '';
const defaultOGImage = '';

const Head = (props) => (
  <NextHead>
    <meta charset="UTF-8" />
    <title>{props.title || ''}</title>
    <meta name="description" content={props.description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/static/favicon.ico" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ''} />
    <meta property="og:description" content={props.description || defaultDescription} />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
  </NextHead>
);

export default Head
