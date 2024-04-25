## Reproduction

How to reproduce:

- Make sure you have Docker running (i.e. through docker for desktop) -- the issue only reproduces when running through Docker
- Open the project in VS Code
- Run `docker-compose up`
- Open the debugger tab in VS Code and click the play icon for `Docker Nextjs Debug`, this attaches the VS Code debugger to the running Docker container
- Open http://localhost:3000/chat/2
- Observe the errors like `ENOENT: no such file or directory, open '/Users/timneutkens/projects/sandbox/nextjs-turbo-broken-dynamic-page-hot-reload-and-vscode-debugger/nextjs/.next/server/chunks/ssr/node_modules_d5ad6d._.js.map'` in the `Debug Console` in VS Code
