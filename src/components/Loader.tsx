"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="loader" className={hidden ? "hidden" : ""}>
      <div className="loader-name">Praroop Anand</div>
      <div className="loader-bar" />
    </div>
  );
}
