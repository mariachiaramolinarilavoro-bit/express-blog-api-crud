This repository is a small Express blog API prototype.

Project layout
- `app.js` is the application entry point.
- `routers/posts.js` defines the posts router and currently includes the in-memory post data.
- `public/` serves static files, including images used by the sample posts.
- `package.json` includes the runtime dependency on `express` and scripts: `npm start` and `npm run watch`.

What this agent should do
- Keep the project minimal and aligned with a learning milestone.
- Prefer small, easy-to-review changes rather than adding unnecessary libraries.
- Preserve the existing route structure and response semantics unless the task explicitly asks for JSON output.
- Base implementation on the current README milestones: move router logic into controllers, separate post data into a `data/` module, and implement JSON CRUD operations.

Important conventions
- Use CommonJS modules (`require` / `module.exports`) to match the current codebase.
- Add new source files under the repository root, not in `node_modules`.
- If you add a new folder, keep it simple: `controllers/` for request handlers and `data/` for sample data.
- Do not change the static asset paths in `public/` unless the task specifically requires it.

How to test changes
- Run `npm start` and use Postman or a browser to verify endpoints.
- `GET /posts` should return the posts list.
- `GET /posts/:id` should return a single post.
- `DELETE /posts/:id` should remove the post and return status `204` with no body.

When to ask for clarification
- If a requested feature would require persistent storage beyond the in-memory array.
- If the user wants tests added, because this repository currently has no test framework configured.
- If a route should support request body parsing, since `express.json()` is not currently enabled.
