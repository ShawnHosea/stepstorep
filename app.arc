@app
begin-app

@static

@http
get /
get /about

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
