import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ['/'],
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"], 
};

// import { authMiddleware } from "@clerk/nextjs";

// export default authMiddleware({
//     publicRoutes: ['/']
// });

// export const config = {
//     matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"], 
// };

// Advanced

// Ask Copilot
// RESULT
/* Here is the explanation for the code above:
1. The authMiddleware function takes an object with publicRoutes and optional sessionSecret properties.
2. The publicRoutes property is an array of routes that should not require authentication (in our case, we have just one route, the home route).
3. The config property is an object with a matcher property. The matcher property is an array of routes that should not require authentication (in our case, we have just one route, the home route).
4. The matcher property is an array of routes that should not require authentication (in our case, we have just one route, the home route).
5. The matcher property is an array of routes that should not require authentication (in our case, we have just one route, the home route).
6. The matcher property is an array of routes that should not require authentication (in our case, we have just one route, the home route).
7. The matcher property is an array of routes that should not require authentication (in our case, we have just one route, the home route).
8. The matcher property is an array of routes that should not require authentication (in our case, we have just one route, the home route).
9. The matcher property is an array of routes that should not require authentication (in our case, we have just one route, the home route).
10. The matcher property is an array of routes that should not require authentication (in our case, we have just one route, the home route).
11. The matcher property is an array of routes that should not require authentication (in our case, we have just one route, the home route).
12. The matcher property is an array of routes that should not require authentication (in our case, we have just one route, the home route).
13. The matcher property is an array of routes that should not require authentication (in our case, we have just one route, the home route).
14. The matcher property is an array of routes that should not require authentication (in our case, we have just one route, the home route).
15. The matcher property is an array of routes that should not require authentication (in our case, we have just one route, the home route).
16. The matcher property is an array of routes that should not require authentication (in our case, we have just one route, the home route).
17. The matcher property is an array of routes that should not require authentication (in our case, we have just one route, the home route).
18. The matcher property is an array of routes that should not require authentication (in our case, we have just one route, the home route).
19. The matcher property is an array of routes that should not require authentication (in our case, we have just one route, the home route).
20. The matcher property is an array of routes that should not require authentication (in our case, we have just one route, the home route). */



// Incorrect

// Unhelpful

// Great