import { SubmitResponse } from "@/types/types";
import React from "react";

export default function Response({ data, error, status }: SubmitResponse) {
  return (
    <div>
      {status  && (
        <>
          <p>Status: {status}</p>
          <p>Method: {data?.method}</p>
          <p>URL: {data?.url}</p>
        </>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
}
