import '../shipit'

describe('shipit', (): void => {
  test('replace "!shipit" in textarea with markdown image on "keyup" event', (): void => {
    expect.assertions(1)
    const want = expect.stringMatching(/^!\[SHIPIT\]\(.*\) because it the best/)
    document.body.innerHTML = '<textarea id="test">!shipit because it the best</textarea>'

    global.dispatchEvent(new KeyboardEvent('keyup'))

    const got = (document.getElementById('test') as HTMLTextAreaElement)?.value
    expect(got).toStrictEqual(want)
  })
})
