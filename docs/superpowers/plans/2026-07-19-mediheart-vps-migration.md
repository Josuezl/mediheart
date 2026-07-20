# Mediheart VPS migration plan

1. Confirm the project is a static-compatible Next.js site and identify Vercel dependencies.
2. Replace the obsolete lint command, remove Vercel Analytics, set production metadata, and enable static export.
3. Verify the deployment contract, lint, TypeScript/build, and generated `out/index.html`.
4. Create an isolated SSH credential for this repository and grant `deploy` access only to `/srv/www/mediheart`.
5. Publish an initial SHA release and an independent Nginx server block for `medihearthn.com`.
6. Create the protected GitHub `production` Environment and the atomic deployment workflow.
7. Run a controlled deployment, verify HTTP and VPS resources, and keep DNS/HTTPS unchanged.

Rollback always repoints `/srv/www/mediheart/current` to its previous release.
