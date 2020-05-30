const body = document.querySelector('body')  
const page = document.createElement('zircel-page')         

// Configuration
page.pid = '5e75ecfbe7d08f0cab2e6c68'
page.path = '/webseite'

// When you release your page, set mode to 'production'
page.mode = 'production'

page.init()

body.appendChild(page)