const Layout = require('@architect/views/layout.js')
const arc = require('@architect/functions')


exports.handler = async function Index (req) {

  // let heroimg = arc.static('heroimg.png')

  let body = Layout({ 
    content: 
    `<div class="wrapper">
        <div class="m-auto block-lg text-center mt1">
          <h1>Steps to Reproduce</h1> 
         
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