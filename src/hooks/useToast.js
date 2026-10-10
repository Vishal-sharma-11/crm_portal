import { useEffect, useState } from "react";

export function useToast(duration = 2600) {
  const [notice, setNotice] = useState("");

  useEffect(() => {
    if (!notice) return undefined;
    const timeout = window.setTimeout(() => setNotice(""), duration);
    return () => window.clearTimeout(timeout);
  }, [notice, duration]);

  return { notice, showNotice: setNotice };
}
