# Contributing

Small, git-focused guide for working on `frontend-next`. Only two people use this at the moment, so keep it simple.

## Git workflow

### 1. Create a branch from `main`

Always start from an up-to-date `main`, never work directly on it.

```bash
git switch main
git pull origin main
git switch -c feat/stock-chart-tooltip
```

Branch name format: `<type>/<short-kebab-description>`.

```text
feat/stock-chart-tooltip
fix/sidebar-scroll-on-mobile
refactor/extract-chart-config
```

### 2. Commit your changes

Stage and commit as you go. See [Commit messages](#commit-messages) for the format.

```bash
git add src/components/charts/ChartUiApi.tsx
git commit -m "feat: add tooltip to stock chart"
```

### 3. Rebase onto `main`

Do this before asking for a PR so your branch sits on top of the latest `main`.

```bash
git switch main
git pull
git switch <your-branch>
git rebase main
```

If a conflict shows up, resolve the files, then:

```bash
git add <resolved-files>
git rebase --continue
```

To bail out of a rebase:

```bash
git rebase --abort
```

### 4. Push your branch to the remote

First push:

```bash
git push -u origin feat/stock-chart-tooltip
```

After a rebase, the history is rewritten, so force-push **with lease**:

```bash
git push --force-with-lease
```

### 5. Ask for a pull request (PR)

```bash
gh pr create --base main --head feat/stock-chart-tooltip --title "feat: add tooltip to stock chart" --body "Closes #12"
```

Or push the branch and open the PR from the GitHub UI.

### 6. Delete your branch after the PR is accepted

```bash
git switch main
git pull origin main
git branch -d feat/stock-chart-tooltip          # local
git push origin --delete feat/stock-chart-tooltip  # remote
```

## Commit messages

Format:

```text
<type>: <short description>
```

Rules:

- **One type per commit.** Pick from the list below.
- **Lowercase after the colon**, imperative mood ("add", not "added" / "adds").
- **No trailing period.** Keep the subject under ~72 characters.
- **One logical change per commit** — don't mix a refactor with a feature.

Types:

| Type       | Use for                                 |
| ---------- | --------------------------------------- |
| `feat`     | New feature or UI                       |
| `fix`      | Bug fix                                 |
| `refactor` | Code change that isn't a feature or fix |
| `style`    | Formatting / Tailwind class reordering  |
| `docs`     | Docs, comments, `README.md`             |
| `chore`    | Config, deps, tooling                   |
| `test`     | Tests (E2E / Playwright)                |
| `perf`     | Performance improvement                 |

Examples:

```text
feat: add language dropdown to desktop header
fix: prevent horizontal overflow on mobile sidebar
refactor: extract chart config into config.ts
style: reorder tailwind classes in SectionCard
docs: document git workflow
chore: bump next to 16.4.0
test: add e2e spec for locale cookie
```

## Before you open a PR

Run these and make sure they pass:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Handy commands

```bash
git status                # what's changed
git diff                  # unstaged changes
git log --oneline -10     # recent commits
git stash                 # park work temporarily
git switch main           # back to main
```
