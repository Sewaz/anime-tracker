function Footer() {
  return (
    <footer className="border-border border-t">
      <div className="px-6 py-5 text-sm text-muted">
        Anime data from{' '}
        <a
          href="https://api.tenrai.org/documentation"
          target="_blank"
          rel="noreferrer"
          className="text-primary hover:text-primary/80"
        >
          Tenrai
        </a>
      </div>
    </footer>
  )
}

export default Footer
