import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)'])

export default clerkMiddleware(async (auth, request) => {
  console.log('Request URL:', request.url) // Add logging for debugging
  if (!isPublicRoute(request)) {
    await auth.protect()
  }
})
