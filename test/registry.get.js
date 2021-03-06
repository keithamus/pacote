'use strict'

var test = require('tap').test

test('basic streaming uri request')
test('basic callback-based uri request')
test('concurrent callback requests inflighted')
test('reads from cache on hit')
test('reads from registry on cache miss')
test('resumes cache read on 304')
test('sends both If-None-Match and If-Modified-Since headers')
test('retries registry requests on req error')
// ECONNRESET is a %#$%@$ -- this should allow recovery
test('retries registry requests on mid-transfer error')
test('emits reset events on request retries')
test('emits reset event when switching from cache to registry')
test('emits reset event when switching from registry to cache')
test('falls back to registry on stale cache')
test('falls back to registry on cache read error')
test('falls back to registry if opts.cache missing')
test('falls back to stale cache on request failure')
test('errors entirely if both cache and registry reads fail')
test('successful registry requests write to cache')
test('registry cache includes ETag and Last-Modified in metadata')
test('registry request failures do not write to cache')
test('closes dangling cache stream on stale cache + registry request')
test('request closes normally on 304')
test('handles 100+ concurrent requests')
test('supports request authentication')
test('supports opts.timeout for controlling request timeout time')
test('supports following redirects on registry requests')
test('supports streaming JSON objects')
test('supports proxy configurations')
test('reads from stale cache on opts.offline')
test('reads from stale cache on opts.preferOffline')
test('reads from stale cache on opts.maxAge is falsy')
test('errors on cache miss if using opts.offline')
test('falls back to registry on cache miss if using opts.preferOffline')
test('opts.offline trumps opts.preferOffline')
