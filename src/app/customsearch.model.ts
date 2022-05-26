export class Search {
  context: Context;
  items: Result[];
  queries: Queries;
  searchInformation: SearchInformation;
}

export class Context {
  title: string;
  // Facets appear in a nested array with top level repeating.
  facets: Facet[][];
}

export class Facet {
  anchor: string;
  label: string;
  label_with_op: string;
}

export class Result {
  cacheId: string;
  displayLink: string;
  formattedUrl: string;
  snippet: string;
  title: string;
  htmlFormattedUrl: string;
  htmlSnippet: string;
  htmlTitle: string;
  link: string;
  pagemap: Pagemap;
}

export class Pagemap {
  cse_image: CSEImage[];
}

export class CSEImage {
  src: string;
}

export class Queries {
  request: QueryRequest[];
  nextPage: QueryRequest[];
  previousPage: QueryRequest[];
}

export class QueryRequest {
  count: number;
  cx: string;
  inputEncoding: string;
  outputEncoding: string;
  safe: string;
  searchTerms: string;
  startIndex: number;
  title: string;
  totalResults: string;
}

export class SearchInformation {
  searchTime: number;
  totalResults: string;
  formattedSearchTime: string;
  formattedTotalResults: string;
}