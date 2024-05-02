/**
 * An array of routes that are public
 * These routes are accessible without authentication
 * @type {string[]}
 */

export const publicRoutes = ["/"];

/**
 * An array of routes that require authentication
 * These routes are only accessible with a valid session
 * @type {string[]}
 */

export const authRoutes = ["/login", "/register"];

/**
 * The prefix for the API routes
 * routes that start with this prefix are treated as API routes
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";