export function getQuery(url: string) {
  const searchParams = new URLSearchParams(url.slice(url.indexOf('?')))

  return Object.fromEntries(searchParams.entries())
}
