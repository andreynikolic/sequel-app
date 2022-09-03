// NOTE: routes are copied from __sapper__/build/service-worker.js. It contains a reference to 'self',
// hence if we load it directly, Vercel file generation will fail. This list needs to be updated
// every time we add a new pattern. Awkward!
export const routes = [
  { pattern: /^\/$/ },
  { pattern: /^\/notifications\/?$/ },
  { pattern: /^\/notifications\/mentions\/?$/ },
  { pattern: /^\/subscriptions\/?$/ },
  { pattern: /^\/subscriptions\/exclusive\/?$/ },
  { pattern: /^\/subscriptions\/manage\/?$/ },
  { pattern: /^\/assets\/?$/ },
  { pattern: /^\/marketplace\/?$/ },
  { pattern: /^\/marketplace\/([^/]+?)\/?$/ },
  { pattern: /^\/marketplace\/history\/?$/ },
  { pattern: /^\/marketplace\/releases\/?$/ },
  { pattern: /^\/marketplace\/releases\/([^/]+?)\/?$/ },
  { pattern: /^\/studio\/digital-art\/?$/ },
  { pattern: /^\/studio\/digital-art\/([^/]+?)\/?$/ },
  { pattern: /^\/tokens\/digital-art\/([^/]+?)\/?$/ },
  { pattern: /^\/bookmarks\/?$/ },
  { pattern: /^\/community\/?$/ },
  { pattern: /^\/requests\/?$/ },
  { pattern: /^\/settings\/?$/ },
  { pattern: /^\/settings\/instances\/?$/ },
  { pattern: /^\/settings\/instances\/register\/?$/ },
  { pattern: /^\/settings\/instances\/visit\/?$/ },
  { pattern: /^\/settings\/instances\/add\/?$/ },
  { pattern: /^\/settings\/instances\/([^/]+?)\/?$/ },
  { pattern: /^\/settings\/wellness\/?$/ },
  { pattern: /^\/settings\/general\/?$/ },
  { pattern: /^\/settings\/hotkeys\/?$/ },
  { pattern: /^\/settings\/about\/?$/ },
  { pattern: /^\/settings\/flow\/?$/ },
  { pattern: /^\/blocked\/?$/ },
  { pattern: /^\/bubbles\/?$/ },
  { pattern: /^\/bubbles\/bookmarks\/?$/ },
  { pattern: /^\/bubbles\/explore\/?$/ },
  { pattern: /^\/bubbles\/new\/?$/ },
  { pattern: /^\/bubbles\/([^/]+?)\/?$/ },
  { pattern: /^\/bubbles\/([^/]+?)\/with_comments\/?$/ },
  { pattern: /^\/bubbles\/([^/]+?)\/members\/?$/ },
  { pattern: /^\/bubbles\/([^/]+?)\/edit\/?$/ },
  { pattern: /^\/pinned\/?$/ },
  { pattern: /^\/search\/?$/ },
  { pattern: /^\/sparks\/?$/ },
  { pattern: /^\/sparks\/bookmarks\/?$/ },
  { pattern: /^\/sparks\/explore\/?$/ },
  { pattern: /^\/sparks\/new\/?$/ },
  { pattern: /^\/sparks\/([^/]+?)\/?$/ },
  { pattern: /^\/sparks\/([^/]+?)\/with_comments\/?$/ },
  { pattern: /^\/sparks\/([^/]+?)\/subscribers\/?$/ },
  { pattern: /^\/sparks\/([^/]+?)\/bubbles\/?$/ },
  { pattern: /^\/sparks\/([^/]+?)\/media\/?$/ },
  { pattern: /^\/sparks\/([^/]+?)\/edit\/?$/ },
  { pattern: /^\/switch\/?$/ },
  { pattern: /^\/worlds\/?$/ },
  { pattern: /^\/worlds\/explore\/?$/ },
  { pattern: /^\/worlds\/new\/?$/ },
  { pattern: /^\/worlds\/([^/]+?)\/?$/ },
  { pattern: /^\/worlds\/([^/]+?)\/with_comments\/?$/ },
  { pattern: /^\/worlds\/([^/]+?)\/bubbles\/?$/ },
  { pattern: /^\/worlds\/([^/]+?)\/members\/?$/ },
  { pattern: /^\/worlds\/([^/]+?)\/edit\/?$/ },
  { pattern: /^\/lists\/([^/]+?)\/?$/ },
  { pattern: /^\/muted\/?$/ },
  { pattern: /^\/posts\/([^/]+?)\/?$/ },
  { pattern: /^\/posts\/([^/]+?)\/tmm\/?$/ },
  { pattern: /^\/tags\/([^/]+?)\/?$/ },
  { pattern: /^\/go\/?$/ }
]