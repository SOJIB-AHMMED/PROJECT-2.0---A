# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Which versions are eligible for receiving such patches depends on the CVSS v3.0 Rating:

| Version | Supported          |
| ------- | ------------------ |
| 2.0.x   | :white_check_mark: |
| < 2.0   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability within this project, please follow these steps:

1. **Do Not** disclose the vulnerability publicly until it has been addressed.
2. Email the details to the repository maintainers (create an issue marked as security vulnerability or contact the owner).
3. Include the following information:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Any suggested fixes (optional)

## Response Timeline

- **Initial Response**: We aim to acknowledge receipt of your vulnerability report within 48 hours.
- **Status Updates**: We will send you regular updates about our progress.
- **Disclosure**: Once the vulnerability has been fixed, we will notify you and coordinate public disclosure.

## Security Best Practices

When using this project:

1. Always use the latest stable version
2. Keep all dependencies up to date
3. Follow the principle of least privilege
4. Regularly review security advisories
5. Use environment variables for sensitive data (never commit secrets)
6. Enable two-factor authentication on your accounts

## Security Features

This repository includes:

- Automated dependency scanning via Dependabot
- CodeQL security analysis
- Regular security updates

## Acknowledgments

We appreciate the security research community and will acknowledge contributors who help us improve the security of this project (with their permission).
