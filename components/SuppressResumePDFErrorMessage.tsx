"use client";

/**
 * Suppress ResumePDF development errors.
 * See ResumePDF doc string for context.
 */
if (typeof window !== "undefined" && window.location.hostname === "localhost") {
  const consoleError = console.error;
  const SUPPRESSED_WARNINGS = ["DOCUMENT", "PAGE", "TEXT", "VIEW"];
  console.error = function filterWarnings(msg, ...args) {
    const firstArg = args[0];

    if (typeof firstArg === "string")
    {
      if (!SUPPRESSED_WARNINGS.some(entry => firstArg.includes(entry))) {
        consoleError(msg, ...args);
      }
    }
  };
}

export const SuppressResumePDFErrorMessage = () => {
  return <></>;
};
