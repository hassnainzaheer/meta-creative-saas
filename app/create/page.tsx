import {AppShell} from "@/components/AppShell";
export default function Create(){return <AppShell>
  <div className="eyebrow">AI Strategist</div><h1 className="title">Create a new Meta ad batch</h1><p className="muted">V1 starts from strategy, not templates. Each output should represent a different advertising hypothesis.</p>
  <div className="two">
    <section className="card stack">
      <div className="field"><label>Business / brand</label><input placeholder="e.g. Study visa consultancy"/></div>
      <div className="field"><label>Product or service</label><input placeholder="What are we selling?"/></div>
      <div className="field"><label>Offer</label><input placeholder="e.g. Free consultation"/></div>
      <div className="field"><label>Target audience</label><textarea placeholder="Who should care, and what are they struggling with?"/></div>
      <div className="field"><label>Campaign objective</label><select defaultValue="leads"><option value="leads">Leads</option><option value="sales">Sales</option><option value="traffic">Traffic</option><option value="awareness">Awareness</option></select></div>
      <button className="button">Generate strategy</button>
    </section>
    <section className="card"><div className="row"><span className="pill">1. Personas</span><span className="pill">2. Angles</span><span className="pill">3. Copy</span><span className="pill">4. Creative briefs</span></div><h2>Output panel</h2><p className="muted">This starter intentionally leaves generation disconnected until your AI provider key and prompt engine are wired in.</p><div className="list"><div className="item"><span>Pain-point angle</span><span className="muted">Pending</span></div><div className="item"><span>Outcome angle</span><span className="muted">Pending</span></div><div className="item"><span>Proof angle</span><span className="muted">Pending</span></div></div></section>
  </div>
</AppShell>}
