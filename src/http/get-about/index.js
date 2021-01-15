const Layout = require('@architect/views/layout.js')


exports.handler = async function About (req) {

  

  let body = Layout({ 
    content: 
    `<div class="wrapper">
        <div class="m-auto block-lg text-center mt1">
          <h1>About</h1> 
         
        </div>
    </div>
    ` 
  })

  
  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body
    
  }
}