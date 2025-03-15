# Devvit + Vue.js Starter Template

This is a template project that integrates Vue.js with Devvit (Reddit's developer platform) to build interactive Reddit experiences.

## What's Included

- **Devvit Integration**: Server-side code for Reddit functionality
- **Vue.js Frontend**: Client-side interface using Vue 3 Composition API
- **TypeScript Support**: Strongly typed codebase for better developer experience
- **Vite Build System**: Fast development and optimized production builds

## Project Structure

- `src/` - Devvit server-side code
  - `main.tsx` - Main Devvit application entry point
  - `createPost.tsx` - Post creation functionality
  - `message.ts` - Messaging functionality

- `web-src/` - Vue.js client-side code
  - `App.vue` - Main Vue component
  - `components/` - Reusable Vue components
  - `assets/` - Static resources
  - `main.ts` - Vue application entry point

- `webroot/` - Static web content

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v22.2.0+)
- [Devvit CLI](https://developers.reddit.com/docs/devvit-cli)
- A [test subreddit](https://mods.reddithelp.com/hc/en-us/articles/360001766991-How-to-create-a-subreddit) that you moderate (with less than 200 members)

### Installation

1. Install the Devvit CLI:
   ```
   npm install -g devvit
   ```

2. Log in to Reddit:
   ```
   devvit login
   ```

3. Clone this template repository

4. Install dependencies:
   ```
   npm install
   ```
   or with bun:
   ```
   bun install
   ```

### Development

1. Start the development server:
   ```
   npm run dev
   ```
   or with bun:
   ```
   bun dev
   ```

2. For the Vue.js frontend:
   ```
   cd web-src
   npm run dev
   ```
   or with bun:
   ```
   cd web-src
   bun dev
   ```

3. Upload your app to Reddit:
   ```
   devvit upload
   ```

4. Test your app with playtest:
   ```
   devvit playtest <your-test-subreddit>
   ```

5. Visit your subreddit to see your app in action. Refresh the page to see changes you make to the code.

## Side Note
If you are primarily using bun you might what to install npm as devvit stuff calls for npm  

## Documentation

- [Devvit Documentation](https://developers.reddit.com/docs)
- [Vue.js Documentation](https://vuejs.org/guide/introduction.html)

## License

[MIT License](LICENSE)
