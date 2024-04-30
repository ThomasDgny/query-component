import { httpMethods } from "@/common/http-methods";
import React from "react";

export default function MultiSelect() {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center">
      <select
        id="method"
        name="method"
        className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
      >
        {httpMethods.map((item, id) => (
          <option key={id} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
