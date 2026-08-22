import { spawn } from "node:child_process";

const args = process.argv.slice(2);

function readFlag(...names) {
  for (const name of names) {
    const index = args.indexOf(name);
    if (index !== -1 && args[index + 1]) {
      return args[index + 1];
    }
  }

  return undefined;
}

const hostname = readFlag("--host", "--hostname") ?? "0.0.0.0";
const port = readFlag("--port") ?? "3000";

const child = spawn(
  process.execPath,
  ["node_modules/next/dist/bin/next", "dev", "--hostname", hostname, "--port", port],
  { stdio: "inherit", env: process.env },
);

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => child.kill(signal));
}

child.on("exit", (code) => process.exit(code ?? 0));
