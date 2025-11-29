# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based personal website/portfolio for Steve Goulet, hosted on GitHub Pages. The site showcases professional experience in healthcare technology and includes integration with Airia AI chat functionality for support demonstrations.

## Repository Structure

This Public/ directory is a **separate git repository** nested within a larger Obsidian vault:

- **This repo**: `https://github.com/stevegoulet/stevegoulet.github.io` (GitHub Pages site)
- **Parent vault**: `https://github.com/stevegoulet/obsidian.git` (private Obsidian vault)
- **Parent vault .gitignore**: Excludes `/Public/` so this nested repo is independent

### Working with This Repo

When working in the Public/ directory:
```bash
cd /Users/stevegoulet/Obsidian\ Vault/Public
git status  # Shows status of the Public repo only
git push origin main  # Pushes to stevegoulet.github.io
```

The parent Obsidian vault tracks all other content but ignores this directory entirely.

## Development Commands

### Building and Serving
- **Build**: `jekyll build --destination ./_site` (run from Public/ directory)
- **Local development**: `jekyll serve` (if Jekyll is installed locally)
- **Ruby setup**: `gem install bundler && gem install jekyll`

### Deployment
- Automatic deployment via GitHub Pages built-in Jekyll processing
- Pushes to `main` branch automatically trigger GitHub Pages build
- Site is published to `stevegoulet.github.io`

## Architecture

### Site Structure
- **Jekyll Configuration**: `_config.yml` defines theme (minimal), title, and permalink structure
- **Layout System**: Custom default layout in `_layouts/default.html` extends Jekyll minimal theme
- **Content Pages**:
  - `index.md`: Main homepage with professional bio
  - `test.md`: Testing page for Airia AI chat integration
- **Static Assets**: `images/` directory contains headshots, logos, and test images

### AI Chat Integration
The site includes Airia AI chat functionality for testing/demo purposes:
- **Implementation**: ES6 module import from `https://chat.airia.ai/api/get-chat-embed`
- **Configuration**: Uses pipeline ID, API key, and custom styling
- **Responsive Design**: Custom CSS ensures chat widget works on mobile devices
- **Integration Points**: Both `test.md` and `zd_poc.html` contain chat implementations

### Styling and Responsive Design
- Uses Jekyll minimal theme as base
- Custom CSS for chat widget mobile responsiveness
- Favicon integration through `/favicon.ico`
- Image optimization for various screen sizes

## File Purposes

- `zd_poc.html`: Standalone HTML file for ZenDesk proof-of-concept chat integration
- `test.md`: Jekyll page for testing chat functionality with additional mobile-specific CSS
- `CLAUDE.md`: This file - provides context about the repository structure and workflow
- `images/`: Contains professional headshots and company logos used throughout the site
- `.gitignore`: Excludes system files (.DS_Store) and IDE files (.idea/) from this repo