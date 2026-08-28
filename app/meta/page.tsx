import {AppShell} from "@/components/AppShell";
export default function Meta(){return <AppShell>
  <div className="eyebrow">Integration</div><h1 className="title">Connect Meta Ads</h1><p className="muted">The MVP should begin read-first: import account structure, creatives and performance, then add publishing after the intelligence loop is stable.</p>
  <section className="card" style={{maxWidth:760,marginTop:22}}><h2 style={{marginTop:0}}>Meta Marketing API</h2><p className="muted">Add your Meta App ID, App Secret and redirect URI in the environment file. Store access tokens server-side only.</p><button className="button">Connect Meta account</button></section>
</AppShell>}
