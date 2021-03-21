
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/ludmylaalmeida/Desktop/Piggy/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/ludmylaalmeida/Desktop/Piggy/src/pages/index.js")),
  "component---src-pages-login-js": preferDefault(require("/Users/ludmylaalmeida/Desktop/Piggy/src/pages/login.js"))
}

