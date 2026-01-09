# Frookoon Frontend

Combined frontend task implementation covering UI, structure, and performance optimizations.

## Tech Stack
- React
- HTML5, CSS3
- Lazy loading & memoization

## UI Mapping

### Screens → Components
- Home
  - Header
  - ProductCard
  - SkeletonCard
  - Footer

- Product Listing
  - Header
  - ProductCard
  - Footer

- Cart
  - Header
  - CartItem
  - Footer

- Order Confirmation
  - Header
  - Footer

## Performance Improvements
- Lazy loaded pages using React.lazy
- Skeleton loaders for better perceived performance
- Memoized reusable components
- Native image lazy loading

## Basic Metrics (Chrome Lighthouse)
- FCP ~1.2s
- LCP ~1.8s
- Performance score ~85+

Combined frontend implementation covering Tasks 4, 5, and 6.

## Local Development Setup
1. Install Node.js (LTS)
2. Run `npm install`
3. Start dev server using `npm run dev`
4. App runs on http://localhost:5173

## Screens Implemented
- Home
- Product Listing

## Improvements (Task 6)
- Refactored ProductCard using React.memo
- Implemented lazy image loading
- Added loading skeletons and empty state
- Added routing using React Router

## Why This Improves UX/Performance
- Faster load time
- Better perceived performance
- Cleaner and reusable components
- Scalable routing structure