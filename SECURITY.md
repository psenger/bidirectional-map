# Security Policy

## Supported versions

Only the latest published version receives security fixes.

| Version | Supported |
| ------- | --------- |
| Latest  | Yes       |
| Older   | No        |

## Reporting a vulnerability

Please **do not** open a public GitHub issue for security vulnerabilities.

Use GitHub's private vulnerability reporting instead:

1. Go to the [Security tab](https://github.com/psenger/bidirectional-map/security)
2. Click **"Report a vulnerability"**
3. Fill in the details — affected version, reproduction steps, and potential impact

You can expect an acknowledgement within **72 hours** and a resolution or mitigation plan within **14 days** for confirmed vulnerabilities.

## Scope

This package is a pure data structure with no network I/O, filesystem access, or cryptography. The most likely source of vulnerabilities is transitive dependencies. If you find a vulnerable dependency, please report it so a dependency update can be released promptly.
