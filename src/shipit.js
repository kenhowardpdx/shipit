(() => {
  const search = /!shipit/gi
  const getShipitImage = () => {
    const squirrels = [
      'http://shipitsquirrel.github.io/images/ship%20it%20squirrel.png',
      'https://64.media.tumblr.com/tumblr_lybw63nzPp1r5bvcto1_500.jpg',
      'http://i.imgur.com/DPVM1.png',
      'http://d2f8dzk2mhcqts.cloudfront.net/0772_PEW_Roundup/09_Squirrel.jpg',
      'http://www.cybersalt.org/images/funnypictures/s/supersquirrel.jpg',
      'http://www.zmescience.com/wp-content/uploads/2010/09/squirrel.jpg',
      'http://1.bp.blogspot.com/_v0neUj-VDa4/TFBEbqFQcII/AAAAAAAAFBU/E8kPNmF1h1E/s640/squirrelbacca-thumb.jpg'
    ]

    const random = Math.floor(Math.random() * Math.floor(squirrels.length - 1))
    return squirrels[random]
  }
  window.addEventListener('keyup', () => {
    const markdownImg = `![SHIPIT](${getShipitImage()})`
    const textAreas = document.getElementsByTagName('textarea')
    for (const t of textAreas) {
      const v = t.value
      if (v.match(search)) {
        t.value = v.replace(search, markdownImg)
      }
    }
  })
})()
