#Workflow

## Create DB

pscale db create og-ballerz

## Connect to DB

pscale connect platforms main --port 3309

## Push schema.prisma initial schema (different terminal)

npx prisma db push

## Promote branch to production

pscale branch promote og-ballerz main

If schema.prisma is modified

## Create new dev branch

pscale branch create og-ballerz add-team-to-players

## Connect to new dev branch (disconnect from main)

pscale connect og-ballerz add-team-to-players --port 3309

## In the prisma/schema.prisma file, update the Player model

## Update schema in PlanetScale DB (other terminal)

npx prisma db push

## Open deploy-request to main

pscale deploy-request create og-ballerz add-team-to-players

## Merge deploy-request to main

pscale deploy-request deploy og-ballerz 1

## See results in main branch

pscale shell og-ballez main

describe Player;

## Add or edit DB records

npx prisma studio
