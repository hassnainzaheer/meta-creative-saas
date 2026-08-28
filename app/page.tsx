import Link from "next/link";
export default function Home(){return <main style={{maxWidth:900,margin:"0 auto",padding:"90px 26px"}}>
  <div className="eyebrow">Meta Ads Creative Intelligence</div>
  <h1 className="title" style={{fontSize:58}}>Create better ads from actual performance data.</h1>
  <p className="muted" style={{fontSize:19,lineHeight:1.6,maxWidth:700}}>Turn a business brief into personas, angles, ad copy and creative concepts. Connect Meta to learn what wins and generate the next batch from evidence.</p>
  <div className="row" style={{marginTop:28}}><Link className="button" href="/dashboard">Open MVP</Link><Link className="button secondary" href="/create">Create first batch</Link></div>
</main>}
