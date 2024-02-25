import app from './app.js'

app.listen(app.get('port'), () => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`Server running on http://localhost:${app.get('port')}`)
    return
  }
  console.log('Node server running...')
})