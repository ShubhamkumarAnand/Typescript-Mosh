function render(document: any)
{
  document.run()
  document.write()
  document.whateverWeWantToRender()
}

// unknown Type in TypeScript
function voiceChange(document: unknown)
{
  // Narrowing
  if (type document === 'string')
    return document.toString()
  document.explain()
  document.wellWritten()
}

// It is preferred to use unknown type over any type because it forces us to type check for the value
