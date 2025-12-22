type Options = RequestInit & {
  params?: Record<string, string | number | undefined>
}

export const apiGet = async <T>(
  url: string,
  options: Options = {}
): Promise<T> => {
  const { params, ...fetchOptions } = options

  const query = params
    ? "?" +
      new URLSearchParams(
        Object.entries(params)
          .filter(([, v]) => v !== undefined)
          .map(([k, v]) => [k, String(v)])
      )
    : ""

  const res = await fetch(url + query, {
    credentials: "include",
    ...fetchOptions,
  })

  if (!res.ok) {
    throw new Error(await res.text())
  }

  return res.json()
}
