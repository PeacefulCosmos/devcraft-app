"use client";

// import Error from "next/error";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <div>
        {error.message}
        <button onClick={reset}>Try again</button>
      </div>
    </>
  );
}
