import type { User } from 'oidc-client'
import { createOidcAuth, SignInType, LogLevel } from './vue-oidc-client'
import { useAuthStore } from "@/stores/auth";
const loco = window.location
const appRootUrl = `${loco.protocol}//${loco.host}${import.meta.env.BASE_URL}`
const idsrvAuth = createOidcAuth(
  'main',
  SignInType.Window,
  appRootUrl,
  {
    authority: import.meta.env.VITE_APP_SSO_URL,
    client_id: "getcar", // 'implicit.shortlived',
    response_type: "code",
    scope: "openid profile email phone roles",
    client_secret: "911564A5-E7FE-42CB-B10D-61EF6A8F3654",
    // test use
    prompt: "login",
  },
  console,
  LogLevel.Debug
)

// handle events
idsrvAuth.events.addAccessTokenExpiring(function() {
  // eslint-disable-next-line no-console
  console.log('access token expiring')
})

idsrvAuth.events.addAccessTokenExpired(function() {
  // eslint-disable-next-line no-console
  console.log('access token expired')
})

idsrvAuth.events.addSilentRenewError(function(err: Error) {
  // eslint-disable-next-line no-console
  console.error('silent renew error', err)
})

idsrvAuth.events.addUserLoaded(function(user: User) {
  // eslint-disable-next-line no-console
  console.log('user addUserLoaded', JSON.stringify(user));
  const store = useAuthStore();
  store.setAuthOIDC(user);
})

idsrvAuth.events.addUserUnloaded(function() {
  // eslint-disable-next-line no-console
  console.log('user unloaded')
})

idsrvAuth.events.addUserSignedOut(function() {
  // eslint-disable-next-line no-console
  console.log('user signed out')
})

idsrvAuth.events.addUserSessionChanged(function() {
  // eslint-disable-next-line no-console
  console.log('user session changed')
})

export default idsrvAuth
