export default function Layout ({ children }) {
  const links = ['', 'cat', 'dog', 'duck']
  return (
    <>
      {links.map(link => (
        <>
          <a href={`/${link}`}>{link === '' ? 'index' : link}</a> |{' '}
          <a href={`/${link}?amp=1`}>{link === '' ? 'index' : link} (AMP)</a> |{' '}
        </>
      ))}
      {children}
      <style jsx global>{`
        body {
          font-family: Roboto, sans-serif;
          padding: 30px;
          color: #444;
        }
      `}</style>
    </>
  )
}
