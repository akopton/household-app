type Options = RequestInit & {
  params?: Record<string, string | number | undefined>
}

export const apiPost = async <T>(
  url: string,
  options: Options = {}
): Promise<T> => {
  const { body, ...fetchOptions } = options

  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    credentials: "include",
    ...fetchOptions,
  })

  if (!res.ok) {
    throw new Error(await res.text())
  }

  return res.json()
}
