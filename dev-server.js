#!/usr/bin/env node
const { execSync } = require('child_process');

// Simply run next dev with hostname - ignore any extra args from Tempo
try {
  execSync('npx next dev -H 0.0.0.0', {
    stdio: 'inherit',
    env: { ...process.env }
  });
} catch (e) {
  process.exit(e.status || 1);
}
