"use server";
import { httpMethods } from "@/common/http-methods";
import { SubmitProps, SubmitResponse } from "@/types/types";
import axios, { AxiosError, AxiosResponse } from "axios";

export async function handleUrlSubmit(
  formData: FormData
): Promise<SubmitResponse> {
  const url = formData.get("url") as SubmitProps["url"];
  const method = formData.get("method") as SubmitProps["method"];

  const data = {
    url,
    method,
  };

  if (!httpMethods.includes(method)) {
    return {
      error:
        "Invalid method type. Supported methods: 'GET', 'POST', 'PUT', 'DELETE'",
      data,
    };
  }

  if (!url.trim()) {
    return { error: "Enter a valid URL", data };
  }

  try {
    const response: AxiosResponse = await axios({
      method: method,
      url: url,
    });

    return { status: response.status, data };
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.response) {
      return {
        status: axiosError.response.status,
        error: axiosError.message,
        data,
      };
    } else {
      return { error: "No response received from the server", data };
    }
  }
}
