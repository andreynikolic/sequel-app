import * as sapper from '@sapper/app'
import './routes/_utils/serviceWorkerClient'
import './routes/_utils/historyEvents'
import './routes/_utils/loadingMask'
import './routes/_utils/forceOnline'
import { mark, stop } from './routes/_utils/marks'
import { loadPolyfills } from './routes/_utils/polyfills/loadPolyfills'
import { loadNonCriticalPolyfills } from './routes/_utils/polyfills/loadNonCriticalPolyfills'
import idbReady from 'safari-14-idb-fix/dist/esm'

Promise.all([idbReady(), loadPolyfills()]).then(() => {
  mark('sapperStart')
  sapper.start({
    target: document.querySelector('#sapper')
  })
  stop('sapperStart')
  /* no await */ loadNonCriticalPolyfills()
})

console.log('process.env.NODE_ENV', process.env.NODE_ENV)
