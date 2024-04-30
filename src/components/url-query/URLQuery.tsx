"use client";
import { useState } from "react";
import { handleUrlSubmit } from "./actions/submit-url";
import { SubmitResponse } from "@/types/types";
import SubmitButton from "./_components/SubmitButton";
import InputUrl from "./_components/InputUrl";
import MultiSelect from "./_components/MultiSelect";
import Response from "./_components/Response";

export default function URLQuery() {
  const [response, setResponse] = useState<SubmitResponse>();

  const handleSubmit = async (formData: FormData) => {
    const result = await handleUrlSubmit(formData);
    setResponse(result);
  };

  return (
    <div className="max-w-2xl w-full justify-center items-center">
      <label
        htmlFor="price"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        URL Status Checker
      </label>
      <form
        action={handleSubmit}
        className="w-full flex justify-center items-center gap-3"
      >
        <div className="relative rounded-md shadow-sm flex w-full">
          <InputUrl />
          <MultiSelect />
        </div>
        <SubmitButton />
      </form>
      {response && (
        <Response
          data={response.data}
          error={response.error}
          status={response.status}
        />
      )}
    </div>
  );
}
