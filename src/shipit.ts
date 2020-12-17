(() => {
  const search = /!shipit/gi
  let nextImageId = 0
  const getShipitImage = (imageId: number): string => {
    const squirrels = [
      'https://shipitsquirrel.github.io/images/ship%20it%20squirrel.png',
      'https://64.media.tumblr.com/tumblr_lybw63nzPp1r5bvcto1_500.jpg',
      'https://i.imgur.com/DPVM1.png',
      'https://d2f8dzk2mhcqts.cloudfront.net/0772_PEW_Roundup/09_Squirrel.jpg',
      'https://www.cybersalt.org/images/funnypictures/s/supersquirrel.jpg',
      'https://www.zmescience.com/wp-content/uploads/2010/09/squirrel.jpg',
      'https://1.bp.blogspot.com/_v0neUj-VDa4/TFBEbqFQcII/AAAAAAAAFBU/E8kPNmF1h1E/s640/squirrelbacca-thumb.jpg',
      'https://media.giphy.com/media/10vk5L8tHKN1UQ/giphy.gif',
      'https://media.giphy.com/media/19uUmES4K72KI/giphy.gif',
    ]

    if (squirrels[imageId + 1] !== undefined) {
      nextImageId = imageId + 1
    } else {
      nextImageId = 0
    }
    return squirrels[imageId]
  }
  window.addEventListener('keyup', () => {
    const markdownImg = `![SHIPIT](${getShipitImage(nextImageId)})`
    const textAreas = document.getElementsByTagName('textarea')
    for (const t of textAreas) {
      const v = t.value
      if (Array.isArray(v.match(search))) {
        t.value = v.replace(search, markdownImg)
      }
    }
  })
})()
