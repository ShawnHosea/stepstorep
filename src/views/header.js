const arc = require('@architect/functions')


module.exports = function Header(props) {
    
    let logo = arc.static('logo.svg')
   
return `
    <div class='Header'>
        <div class='HeaderGroup'>
            <a href="/"><img height='60px' alt='logo' src="${logo}"></a>
            <a class="uppercase no-underline" href="/about">About</a>
            <div class="headLogin">
            <a href="/login"><button class="uppercase no-underline bg-p0 pt-1 pb-1 pr2 pl2 text-g0 radius0 cursor-pointer bg-h0 text-h2 bg-d1 m1">Login</button></a>
            </div>
        </div>
    </div>
    `;
}
    