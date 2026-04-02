# Junko Hub - Copilot Instructions

> **Project**: Junko Hub - A script hub platform for game automation and key generation  
> **Stack**: React 19 + TypeScript + Vite + Express.js + Tailwind CSS  
> **Deployment**: Netlify  
> **Language**: Portuguese (UI) with bilingual code comments

## Quick Start

### Development
```bash
npm run dev          # Start Vite dev server + Express backend
npm run build        # Compile for production
npm run lint         # Check TypeScript types
npm start            # Run production server (Node)
```

### Environment Setup
Create a `.env` file in the root with:
```
GEMINI_API_KEY=your_key_here
JUNKIE_API_KEY=your_key_here
```

## Project Structure

```
JunkoHubSITE/
├── src/
│   ├── App.tsx           # Main React component (single-file architecture)
│   ├── main.tsx          # React entry point
│   └── index.css         # Global styles (Tailwind + custom CSS)
├── server.ts             # Express backend with API routes
├── netlify/functions/    # Netlify serverless functions
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Dependencies & scripts
└── index.html            # HTML entry point
```

## Architecture & Key Patterns

### Frontend (React)
- **Single Component Architecture**: All UI logic is in `App.tsx`
  - State management via `useState` hooks
  - Component uses `motion` library for animations
  - Responsive design with Tailwind CSS classes
  - Mobile menu toggle with state management

- **Key Features**:
  - Tab-based navigation (home, features, about, etc.)
  - Copy-to-clipboard functionality
  - Filter/sorting for script lists (executor platform, key type, UNC requirements)
  - External links and discord integration
  - Lucide React icons throughout

- **Styling**: Tailwind CSS with custom animations
  - Motion animations for transitions
  - Responsive grid layouts (`lg:grid-cols-2`, `sm:px-6`)
  - Lucide icons from `lucide-react`

### Backend (Express + Node.js)
- **API Routes**: 
  - `POST /api/get-key` - Generate Junkie API key
  - `POST /.netlify/functions/get-link` - Same endpoint for Netlify
  
- **Key Responsibilities**:
  - Forward requests to Junkie API (`https://jnkie.com/api/v1/generate`)
  - Handle authentication via `JUNKIE_API_KEY`
  - Error handling with proper HTTP status codes and JSON responses
  - Security: Bearer token, User-Agent headers, Cloudflare block detection

- **Error Handling**:
  - Missing API keys return 500 errors with clear messages
  - API failures logged to console with response details
  - Cloudflare blocks are detected and reported appropriately

### Build & Deployment
- **Vite Configuration**:
  - HMR disabled when `DISABLE_HMR=true` (AI Studio mode)
  - Path alias: `@` maps to project root
  - Gemini API key injected via `process.env.GEMINI_API_KEY`
  
- **Netlify Deployment**:
  - Functions in `netlify/functions/` for serverless endpoints
  - Dual route support: `/api/get-key` and `/.netlify/functions/get-link`

## Development Conventions

### TypeScript
- Target: ES2022
- Module: ESNext
- Strict mode enforced
- React 19 types included

### Component Guidelines
- Keep component logic in `App.tsx` for now
- Use `motion` from `motion/react` for animations
- Use `lucide-react` for all icons
- Tailwind classes for all styling
- No CSS modules or styled-components

### API Development
- Use Express for all backend routes
- Always set `Content-Type: application/json` headers
- Include proper error messages in JSON responses
- Log errors to console for debugging

### Code Style
- Portuguese variable/function names in UI logic (matching existing code)
- English for technical implementation
- Comments in Portuguese for business logic, English for technical details
- Use ES6+ syntax (const/let, arrow functions, async/await)

## Common Tasks

### Add a New Route
1. Add `app.post()` or `app.get()` in `server.ts`
2. Handle errors with proper status codes
3. Always use async/await for API calls
4. Test with `npm run dev`

### Add UI Component/Feature
1. Modify `App.tsx` with new state and JSX
2. Use `motion` for animations if needed
3. Style with Tailwind classes
4. Use Lucide icons from the existing imports
5. Test responsive design at different breakpoints

### Update Environment Variables
1. Add to `.env` file (never commit)
2. Update `vite.config.ts` if frontend needs access
3. Use `process.env.VARIABLE_NAME` in backend
4. Restart dev server after changes

## Important Notes

- **Attribution**: Credit "LeviMods" in any derivative works (see README.md)
- **Security**: Never commit `.env` files or API keys
- **Mobile First**: Always test responsive design (mobile menu works with hamburger icon)
- **API Integration**: Junkie API uses Bearer token auth and User-Agent headers
- **HMR**: Only disabled in AI Studio mode - local dev should keep it enabled

## Debugging Tips

- Check console logs in server.ts for API errors
- Use browser DevTools for frontend state inspection
- Test API routes with `curl` or Postman
- Verify `.env` file has all required variables
- Check that Cloudflare isn't blocking Junkie API calls

## Related Documentation

- [Vite Documentation](https://vitejs.dev/)
- [React 19 Docs](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Express.js Guide](https://expressjs.com/)
- [Motion Library](https://motion.dev/)
- [Lucide Icons](https://lucide.dev/)
