# Web Programming Lab Project

A collection of web programming experiments and assignments.

---

## How to Use GitHub Copilot Pro in VS Code

GitHub Copilot Pro is an AI-powered code assistant. Follow these steps to set it up and use it in Visual Studio Code.

### Prerequisites

- A GitHub account with an active **Copilot Pro** subscription.
- [Visual Studio Code](https://code.visualstudio.com/) installed.

---

### Step 1 – Install the GitHub Copilot Extension

1. Open VS Code.
2. Click the **Extensions** icon in the Activity Bar (or press `Ctrl+Shift+X` / `Cmd+Shift+X`).
3. Search for **"GitHub Copilot"**.
4. Click **Install** on the extension published by GitHub.

> **Tip:** Also install the **"GitHub Copilot Chat"** extension to access the inline chat and sidebar chat features included with Copilot Pro.

---

### Step 2 – Sign In to Your GitHub Account

1. After installation, a prompt will appear asking you to sign in.
2. Click **Sign in to GitHub**.
3. Your browser will open. Authorize VS Code to access your GitHub account.
4. Once authorized, return to VS Code — Copilot will activate automatically.

You can verify the sign-in status in the bottom-left corner of VS Code (look for the GitHub account icon).

---

### Step 3 – Start Using Copilot Code Completions

Copilot suggests code as you type:

- Open any supported file (e.g., `.html`, `.js`, `.css`, `.py`, etc.).
- Start typing a comment or a line of code.
- A **grey ghost-text suggestion** will appear.
  - Press **`Tab`** to accept the suggestion.
  - Press **`Esc`** to dismiss it.
  - Press **`Alt+]`** / **`Option+]`** to cycle through alternative suggestions.

---

### Step 4 – Use Copilot Chat (Pro Feature)

Copilot Pro includes **Copilot Chat**, which lets you have a conversation with the AI about your code.

#### Inline Chat
1. Select a block of code in the editor.
2. Press **`Ctrl+I`** (Windows/Linux) or **`Cmd+I`** (Mac).
3. Type a question or instruction (e.g., *"Explain this function"* or *"Refactor this to use async/await"*).
4. Press **Enter** and review the response inline.

#### Sidebar Chat
1. Click the **Copilot Chat** icon in the Activity Bar (speech bubble icon).
2. Type your question in the chat panel.
3. You can ask general coding questions, request code snippets, debug errors, or ask it to explain concepts.

---

### Step 5 – Useful Copilot Commands in Chat

| Command | Description |
|---------|-------------|
| `/explain` | Explains the selected code |
| `/fix` | Suggests a fix for a bug in the selected code |
| `/tests` | Generates unit tests for the selected code |
| `/doc` | Generates documentation comments |
| `/simplify` | Simplifies the selected code |

---

### Step 6 – Keyboard Shortcuts Reference

| Action | Windows / Linux | Mac |
|--------|----------------|-----|
| Accept suggestion | `Tab` | `Tab` |
| Dismiss suggestion | `Esc` | `Esc` |
| Next suggestion | `Alt+]` | `Option+]` |
| Previous suggestion | `Alt+[` | `Option+[` |
| Open inline chat | `Ctrl+I` | `Cmd+I` |
| Open Copilot Chat panel | `Ctrl+Alt+I` | `Ctrl+Cmd+I` |

---

### Troubleshooting

- **Copilot is not suggesting anything:** Make sure you are signed in (check the account icon in the bottom-left). Also verify your Copilot Pro subscription is active at [github.com/settings/copilot](https://github.com/settings/copilot).
- **Extension not found:** Ensure you are searching for the extension by GitHub (publisher: `GitHub`).
- **Suggestions are off:** Go to VS Code Settings (`Ctrl+,`), search for `Copilot`, and confirm that **"Enable"** is checked for your file types.

---

### Additional Resources

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [VS Code Copilot Guide](https://code.visualstudio.com/docs/copilot/overview)
- [GitHub Copilot Pro Plan Details](https://github.com/features/copilot)
