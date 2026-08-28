export type CampaignObjective='leads'|'sales'|'traffic'|'awareness';
export type CampaignBrief={brand:string;product:string;offer:string;audience:string;objective:CampaignObjective};
export type AdHypothesis={id:string;angle:string;persona:string;hook:string;primaryText:string;headline:string;cta:string;creativeBrief:string};
