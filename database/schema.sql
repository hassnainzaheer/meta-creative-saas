create extension if not exists pgcrypto;

create table if not exists workspaces (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  created_at timestamptz not null default now()
);

create table if not exists brands (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references workspaces(id) on delete cascade,
  name text not null,
  website text,
  offer text,
  audience text,
  brand_context jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists meta_connections (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references workspaces(id) on delete cascade,
  meta_user_id text,
  encrypted_access_token text not null,
  token_expires_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists meta_ad_accounts (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references workspaces(id) on delete cascade,
  external_id text not null,
  name text,
  currency text,
  timezone_name text,
  unique(workspace_id, external_id)
);

create table if not exists campaign_briefs (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references workspaces(id) on delete cascade,
  brand_id uuid references brands(id) on delete set null,
  objective text not null,
  product text not null,
  offer text,
  audience text,
  status text not null default 'draft',
  created_at timestamptz not null default now()
);

create table if not exists ad_hypotheses (
  id uuid primary key default gen_random_uuid(),
  brief_id uuid not null references campaign_briefs(id) on delete cascade,
  persona text,
  angle text not null,
  hook text,
  reasoning jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists ad_copies (
  id uuid primary key default gen_random_uuid(),
  hypothesis_id uuid not null references ad_hypotheses(id) on delete cascade,
  primary_text text,
  headline text,
  description text,
  cta text,
  version int not null default 1,
  created_at timestamptz not null default now()
);

create table if not exists creatives (
  id uuid primary key default gen_random_uuid(),
  hypothesis_id uuid references ad_hypotheses(id) on delete set null,
  parent_creative_id uuid references creatives(id) on delete set null,
  asset_url text,
  format text,
  creative_brief jsonb not null default '{}'::jsonb,
  generation_metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists meta_ads (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references workspaces(id) on delete cascade,
  creative_id uuid references creatives(id) on delete set null,
  external_ad_id text not null,
  external_campaign_id text,
  external_adset_id text,
  ad_name text,
  status text,
  unique(workspace_id, external_ad_id)
);

create table if not exists performance_daily (
  id bigserial primary key,
  meta_ad_id uuid not null references meta_ads(id) on delete cascade,
  metric_date date not null,
  spend numeric(14,4) default 0,
  impressions bigint default 0,
  clicks bigint default 0,
  ctr numeric(12,6),
  cpc numeric(14,6),
  cpm numeric(14,6),
  leads numeric(14,4),
  purchases numeric(14,4),
  revenue numeric(14,4),
  cpa numeric(14,6),
  roas numeric(14,6),
  frequency numeric(12,6),
  raw jsonb not null default '{}'::jsonb,
  unique(meta_ad_id, metric_date)
);

create table if not exists creative_insights (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid not null references workspaces(id) on delete cascade,
  creative_id uuid references creatives(id) on delete cascade,
  insight_type text not null,
  insight text not null,
  evidence jsonb not null default '{}'::jsonb,
  confidence numeric(5,4),
  created_at timestamptz not null default now()
);
