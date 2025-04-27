# Boston Air Quality Project

This project provides a dashboard for tracking air quality in Boston communities, with a focus on environmental justice concerns in East Boston.

**Project [Link]**(https://hunterschep.github.io/chem-final-project/)

## Deployment

This project is configured to deploy to GitHub Pages. Follow these instructions to deploy successfully:

### Initial Setup

1. Make sure your `package.json` has the correct homepage URL:
   ```json
   "homepage": "https://hunterschep.github.io/chem-final-project",
   ```

2. Ensure you have the gh-pages package installed:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add deployment scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

### Deployment Process

To deploy the site to GitHub Pages:

```bash
cd my-app
npx gh-pages -d build --dotfiles --no-history
```

The command does the following:
- Builds your app using the predeploy script
- Uses `--dotfiles` to include any dotfiles
- Uses `--no-history` to create a fresh commit without history (helps avoid merge conflicts)
