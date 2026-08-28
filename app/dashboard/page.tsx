import {AppShell} from "@/components/AppShell";
const metrics=[['Spend','PKR 0'],['CTR','—'],['CPA','—'],['ROAS','—']];
export default function Dashboard(){return <AppShell>
  <div className="eyebrow">Workspace</div><h1 className="title">Creative performance cockpit</h1><p className="muted">Once Meta is connected, this screen becomes the feedback loop between performance and your next creative batch.</p>
  <div className="grid">{metrics.map(([k,v])=><div className="card" key={k}><div className="muted">{k}</div><div className="metric">{v}</div></div>)}</div>
  <div className="two">
    <section className="card"><div className="row" style={{justifyContent:'space-between'}}><h2 style={{margin:0}}>AI insights</h2><span className="pill">Learning engine</span></div><div className="list"><div className="item"><span>No performance data yet</span><span className="muted">Connect Meta</span></div><div className="item"><span>Winning-pattern detection</span><span className="muted">Ready after sync</span></div><div className="item"><span>Creative-fatigue alerts</span><span className="muted">Phase 2</span></div></div></section>
    <section className="card"><h2 style={{marginTop:0}}>Next action</h2><p className="muted">Start with a business brief. The strategist will turn it into hypotheses, copy and creative directions.</p><a className="button" href="/create">Generate ad batch</a></section>
  </div>
</AppShell>}
