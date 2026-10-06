# Wat!? — GitHub Pages setup

This package is ready for GitHub Pages.

## Repository structure

```
wat-pages/
├── index.html
├── assets/
│   ├── styles.css
│   └── app.js
├── privacy/
│   └── index.html
└── support/
    └── index.html
```

## Before publishing

1. Delete the current blank root files named `privacy` and `support`. Git cannot have a file and a folder with the same name.
2. Copy the folders/files from this package into the repository root.
3. In `support/index.html`, replace `YOUR_SUPPORT_EMAIL` with the real support email address.
4. Confirm that the production app really processes voice recordings only on-device. If Wat!? later adds analytics, ads, accounts, a backend, or cloud audio processing, update the Privacy Policy accordingly.
5. In GitHub: Settings → Pages → Deploy from a branch → `main` / root.

Expected URLs:
- `https://xavi6zb.github.io/wat-pages/privacy/`
- `https://xavi6zb.github.io/wat-pages/support/`

The design uses the Wat!? visual language: dark navy outlines, cream background, yellow/coral/blue/lilac accents, organic shapes, rounded cards, strong shadows, and Apple-system typography.
