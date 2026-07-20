# VPS deployment

Mediheart is exported as static files and deployed to:

`/srv/www/mediheart/releases/<commit-sha>`

Nginx serves `/srv/www/mediheart/current`. The workflow builds on GitHub,
uploads only `out/`, switches `current` atomically, and restores the previous
symlink if its local HTTP health check fails.

The `production` Environment requires:

- `VPS_HOST`
- `VPS_PORT`
- `VPS_USER`
- `VPS_SSH_KEY`
- `VPS_KNOWN_HOSTS`
- `DEPLOY_PATH`

Automatic deletion is intentionally disabled. Releases older than the newest
five are listed in the workflow log until destructive pruning is approved.

DNS and HTTPS remain outside this phase.
