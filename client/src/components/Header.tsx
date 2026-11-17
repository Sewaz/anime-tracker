import { Link, useLocation } from 'react-router-dom'

function navLinkClass(active: boolean) {
  return [
    'flex items-center border-b-2 text-[15px] no-underline',
    active ? 'border-primary text-text font-bold' : 'border-transparent text-muted',
  ].join(' ')
}

function Header() {
  const { pathname } = useLocation()
  const isSearchActive = pathname === '/' || pathname.startsWith('/anime/')
  const isMyListActive = pathname === '/my-list'

  return (
    <header className="border-border border-b">
      <div className="grid h-16 grid-cols-[1fr_auto_1fr] items-stretch gap-4 px-6">
        <Link
          to="/"
          aria-label="Anime Tracker home"
          className="text-text flex items-center justify-self-start gap-3 no-underline"
        >
          <span
            aria-hidden="true"
            className="bg-primary text-on-primary font-display flex h-8 w-8 items-center justify-center rounded-[2px] text-lg font-bold"
          >
            鑑
          </span>
          <span className="font-display text-[19px] font-bold">Anime Tracker</span>
        </Link>

        <nav aria-label="Main" className="flex h-full items-stretch justify-self-center gap-6">
          <Link to="/" aria-current={isSearchActive ? 'page' : undefined} className={navLinkClass(isSearchActive)}>
            Search
          </Link>
          <Link
            to="/my-list"
            aria-current={isMyListActive ? 'page' : undefined}
            className={navLinkClass(isMyListActive)}
          >
            My list
          </Link>
        </nav>

        <div className="flex items-center justify-self-end gap-2">
          {/* Not wired up yet: theme switching and auth are separate tasks. */}
          <button
            type="button"
            disabled
            aria-label="Switch to light theme"
            title="Coming soon"
            className="border-border text-text flex h-10 w-10 items-center justify-center rounded-[2px] border disabled:cursor-not-allowed"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
          </button>
          <button
            type="button"
            disabled
            aria-haspopup="menu"
            title="Coming soon"
            className="border-border text-text flex h-10 items-center gap-2 rounded-[2px] border px-3 text-[15px] disabled:cursor-not-allowed"
          >
            username
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
