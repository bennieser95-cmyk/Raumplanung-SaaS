-- Dauerhafter Wächtertest: pgTAP ist verfügbar und jede Tabelle in `public`
-- hat Row Level Security aktiviert. `public` ist über die Data API erreichbar,
-- daher darf dort keine Tabelle ohne RLS existieren.
begin;

create extension if not exists pgtap with schema extensions;

select plan(3);

select has_extension('pgtap', 'Extension pgtap ist installiert');

select has_schema('public', 'Schema public existiert');

-- Leere Ergebnismenge = keine Tabelle (normal oder partitioniert) ohne RLS.
select is_empty(
  $$
    select format('%I.%I', n.nspname, c.relname)
      from pg_catalog.pg_class c
      join pg_catalog.pg_namespace n on n.oid = c.relnamespace
     where n.nspname = 'public'
       and c.relkind in ('r', 'p')
       and not c.relrowsecurity
     order by 1
  $$,
  'Alle Tabellen im Schema public haben RLS aktiviert'
);

select * from finish();
rollback;
