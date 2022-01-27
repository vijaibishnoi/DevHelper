const domain = document.getElementById('toolinputdomain);

const generator = document.getElementById('generator');
const backlinks = document.getElementById('tooloutput');

generator.addEventListener('submit', () => {
    backlinks.innerHTML = `<div class="aadi"><div class="ubi-9"><p>https://www.similarsites.com/site/${name.value}</p></div><div class="ubi-3"><a class="btn btn-success" href="https://www.similarsites.com/site/${name.value}" target="blank">Check</a></div></div><div class="aadi"><div class="ubi-9"><p>https://www.alexa.com/siteinfo/${name.value}</p></div><div class="ubi-3"><a class="btn btn-success" href="https://www.alexa.com/siteinfo/${name.value}" target="blank">Check</a></div></div><div class="aadi"><div class="ubi-9"><p>https://www.builtwith.com/${name.value}</p></div><div class="ubi-3"><a class="btn btn-success" href="https://www.builtwith.com/${name.value}" target="blank">Check</a></div></div><div class="aadi"><div class="ubi-9"><p>https://www.who.is/whois/${name.value}</p></div><div class="ubi-3"><a class="btn btn-success" href="https://www.who.is/whois/${name.value}" target="blank">Check</a></div></div>`
});
