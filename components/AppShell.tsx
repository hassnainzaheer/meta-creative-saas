import Link from "next/link";
export function AppShell({children}:{children:React.ReactNode}){
  return <div className="shell">
    <aside className="sidebar">
      <div className="brand">CreativeOS <span style={{color:"var(--accent)"}}>AI</span></div>
      <nav className="nav">
        <Link href="/dashboard">Overview</Link>
        <Link href="/create">Create ads</Link>
        <Link href="/meta">Meta connection</Link>
      </nav>
    </aside>
    <main className="main">{children}</main>
  </div>
}
