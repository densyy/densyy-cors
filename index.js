/* ---- Methods ---- */

function densyyCors (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PUT,DELETE,PATCH')
  res.header('Access-Control-Allow-Headers', 'Content-Type, x-access-token')

  if (req.method === 'OPTIONS') return res.sendStatus(204)

  next()
}

module.exports = densyyCors
