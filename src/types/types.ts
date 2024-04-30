export interface SubmitProps {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
}

export interface SubmitResponse {
  status?: number;
  error?: string;
  data: SubmitProps;
}
