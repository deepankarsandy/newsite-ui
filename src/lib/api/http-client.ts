export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type RequestConfig = {
  body?: BodyInit | null;
  credentials?: RequestCredentials;
  headers?: HeadersInit;
  method?: HttpMethod;
  query?: Record<string, string | number | boolean | undefined>;
  signal?: AbortSignal;
};

export class ApiError extends Error {
  readonly response: Response;

  constructor(message: string, response: Response) {
    super(message);
    this.name = "ApiError";
    this.response = response;
  }
}

type HttpClientOptions = {
  baseUrl: string;
  credentials?: RequestCredentials;
  defaultHeaders?: HeadersInit;
  resolveHeaders?: () => HeadersInit | undefined | Promise<HeadersInit | undefined>;
};

const mergeHeaders = (...headersInit: Array<HeadersInit | undefined>) => {
  const headers = new Headers();

  for (const init of headersInit) {
    if (!init) {
      continue;
    }

    const nextHeaders = new Headers(init);
    for (const [key, value] of nextHeaders.entries()) {
      headers.set(key, value);
    }
  }

  return headers;
};

export const createHttpClient = ({
  baseUrl,
  credentials,
  defaultHeaders,
  resolveHeaders,
}: HttpClientOptions) => {
  const normalizedBaseUrl = baseUrl.replace(/\/+$/, "");

  return async <TResponse>(path: string, config: RequestConfig = {}): Promise<TResponse> => {
    const url = new URL(`${normalizedBaseUrl}${path}`);

    if (config.query) {
      for (const [key, value] of Object.entries(config.query)) {
        if (value === undefined) {
          continue;
        }

        url.searchParams.set(key, String(value));
      }
    }

    const resolvedHeaders = resolveHeaders ? await resolveHeaders() : undefined;

    const response = await fetch(url, {
      body: config.body,
      credentials: config.credentials ?? credentials,
      headers: mergeHeaders(defaultHeaders, resolvedHeaders, config.headers),
      method: config.method ?? "GET",
      signal: config.signal,
    });

    if (!response.ok) {
      throw new ApiError(`Request failed with status ${response.status}`, response);
    }

    if (response.status === 204) {
      return undefined as TResponse;
    }

    const responseContentType = response.headers.get("content-type") ?? "";
    if (responseContentType.includes("application/json")) {
      return (await response.json()) as TResponse;
    }

    return (await response.text()) as TResponse;
  };
};
