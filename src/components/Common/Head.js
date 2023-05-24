import Head from 'next/head'
const CommonHead = ({
  title,
  ogtitle,
  description,
  keywords,
  ogdescription,
  other,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta name="og:description" content={ogdescription} />
      <meta property="og:title" content={ogtitle} />
      {process.env.NEXT_PUBLIC_APP_ENV === 'production' ? (
        <meta name="robots" content="index,follow" />
      ) : (
        <meta name="robots" content="noindex, nofollow" />
      )}
      {/* <meta name="robots" content="all"></meta> */}
      <meta name="Author" content={process.env.NEXT_PUBLIC_AUTHOR} />
      <meta name="Copyright" content="Copyright ADMASTER Inc." />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="canonical" href={process.env.NEXT_PUBLIC_APP_URL} />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_APP_URL}/images/fbthumbnail.png`}
      />
      <meta
        property="og:site_name"
        content="アドマスター内緒のノウハウ大公開中"
      />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_APP_URL} />
      {other}
    </Head>
  )
}
export default CommonHead
