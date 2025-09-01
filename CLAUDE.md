# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based personal website/portfolio for Steve Goulet, hosted on GitHub Pages. The site showcases professional experience in healthcare technology and includes integration with Airia AI chat functionality for support demonstrations.

## Development Commands

### Building and Serving
- **Build**: `jekyll build --source ./Public --destination ./_site`
- **Local development**: `jekyll serve` (if Jekyll is installed locally)
- **Ruby setup**: `gem install bundler && gem install jekyll`

### Deployment
- Automatic deployment via GitHub Actions on push to `main` branch
- Deployment workflow defined in `deploy.yml`
- Site builds from `./Public` directory and publishes to `gh-pages` branch

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
- `deploy.yml`: GitHub Actions workflow for automated deployment
- `images/`: Contains professional headshots and company logos used throughout the site