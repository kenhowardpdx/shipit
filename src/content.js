const injectScript = (src, node) => {
  const [container] = document.getElementsByTagName(node)
  const script = document.createElement('script')
  script.setAttribute('type', 'text/javascript')
  script.id = 'shipit'
  script.src = src
  container.appendChild(script)
}
injectScript(browser.extension.getURL('src/shipit.js'), 'body')
