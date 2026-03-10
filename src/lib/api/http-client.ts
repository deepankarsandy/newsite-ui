export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type RequestConfig = {
  body?: BodyInit | null;
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
  defaultHeaders?: HeadersInit;
};

export const createHttpClient = ({ baseUrl, defaultHeaders }: HttpClientOptions) => {
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

    const response = await fetch(url, {
      body: config.body,
      headers: {
        ...defaultHeaders,
        ...config.headers,
      },
      method: config.method ?? "GET",
      signal: config.signal,
    });

    if (!response.ok) {
      throw new ApiError(`Request failed with status ${response.status}`, response);
    }

    return (await response.json()) as TResponse;
  };
};
