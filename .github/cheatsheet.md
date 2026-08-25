# GitHub Copilot Chat Cheatsheet (VS Code)

> Quick reference for the most useful **slash commands** (`/...`) and **@participants** (`@...`) in GitHub Copilot Chat for Visual Studio Code.
> Built-in commands only. To see the authoritative, always-up-to-date list in your environment, type `/` or `@` in the Copilot Chat input box.

## Slash Commands

Use slash commands to avoid writing complex prompts for common scenarios. Type `/` followed by the command name.

| Command                     | Description                                                            | Example                                                  |
| --------------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------- |
| `/init`                     | Generate or update agent instructions and customization files.         | `/init`                                                  |
| `/new`                      | Create a new project from a description.                               | `/new create a Next.js app with TypeScript and Tailwind` |
| `/project-setup-info-local` | Scaffold a complete project structure with dependencies and config.    | `/project-setup-info-local`                              |
| `/chronicle standup`        | Generate a standup/daily summary from recent sessions.                 | `/chronicle standup`                                     |
| `/chronicle tips`           | Personalized workflow tips based on your usage patterns.               | `/chronicle tips`                                        |
| `/chronicle cost-tips`      | Personalized tips to reduce token usage and Copilot cost.              | `/chronicle cost-tips`                                   |
| `/chronicle improve`        | Improve agent instructions based on session history.                   | `/chronicle improve`                                     |
| `/chronicle search`         | Search past sessions by keyword, file, or PR/issue.                    | `/chronicle search auth bug`                             |
| `/chronicle reindex`        | Rebuild the local session index and sync to the cloud.                 | `/chronicle reindex`                                     |
| `/clear`                    | Start a new chat session (clears the current conversation).            | `/clear`                                                 |
| `/compact`                  | Compact the conversation to reduce token usage by summarizing history. | `/compact`                                               |
| `/explain`                  | Explain how the code in your active editor works.                      | `/explain the auth middleware`                           |
| `/fix`                      | Propose a fix for problems in the selected code.                       | Select buggy code, then `/fix`                           |
| `/fixTestFailure`           | Find and fix a failing test.                                           | `/fixTestFailure`                                        |
| `/suggest-fix-issue`        | Suggest a fix for a given GitHub issue based on its details.           | `/suggest-fix-issue`                                     |
| `/tests`                    | Generate unit tests for the selected code.                             | Select a function, then `/tests`                         |
| `/help`                     | Quick reference and basics of using GitHub Copilot.                    | `/help`                                                  |

> Available slash commands may vary by environment and chat context. Type `/` in the chat box to see all currently available commands.

## @ Participants

Use `@` participants to scope your question to a specific domain or tool. Type `@` followed by the participant name.

| Participant  | Description                                                         | Example                                    |
| ------------ | ------------------------------------------------------------------- | ------------------------------------------ |
| `@workspace` | Ask questions about your workspace; finds and reads relevant code.  | `@workspace where is the auth middleware?` |
| `@vscode`    | Ask questions about VS Code features, settings, and commands.       | `@vscode how do I change the color theme?` |
| `@github`    | Ask about GitHub issues, PRs, and code; needs the GitHub extension. | `@github summarize pull request #123`      |
| `@terminal`  | Agent mode: run and discuss commands in the integrated terminal.    | `@terminal list files modified today`      |
| `@edit`      | Agent mode: make edits across multiple files in your project.       | `@edit rename the User class to Account`   |

> Available participants may vary by installed extensions. Type `@` in the chat box to see all currently available participants.
