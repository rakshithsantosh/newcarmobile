"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black text-white p-8">
      <h2 className="text-3xl font-bold text-red-500 mb-4">Something went wrong!</h2>
      <pre className="text-sm bg-gray-900 p-4 rounded text-left overflow-auto max-w-4xl border border-red-900 mb-6 font-mono text-red-400">
        {error.message}
        {"\n"}
        {error.stack}
      </pre>
      <button
        className="px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
