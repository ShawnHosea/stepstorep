const Layout = require('@architect/views/layout.js')
const arc = require('@architect/functions')


exports.handler = async function Index (req) {

  // let heroimg = arc.static('heroimg.png')

  let body = Layout({ 
    content: 
    `<div class="wrapper">
        <div class="m-auto block-lg text-center mt1">
          <h1>Steps to Reproduce</h1> 
          <form action="/results" method="POST">
                <div class="m1">
                    <label for="expected behavior"><b>Expected behavior:</b></label>
                    <br>
                    <textarea id="expected behavior" class="border-solid border1 border-g3" type="text" required name="expected behavior" rows="4" cols="50" placeholder="A clear and concise description of what you expected to happen."></textarea>
                </div>

                <div class="m1">
                    <label for="Description of bug"><b>Description of bug:</b></label>
                    <br>
                    <textarea id="Description of bug" class="border-solid border1 border-g3" type="text" required name="Description of bug" rows="4" cols="50" placeholder="A clear and concise description of what the bug is."></textarea>
                </div>

                

                <div>
                    <button 
                    class="uppercase no-underline bg-p0 pt-1 pb-1 pr2 pl2 text-g0 radius0 cursor-pointer bg-h0 text-h2 bg-d1 m1" 
                    type="submit">Print</button>
                </div>

        </form>
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