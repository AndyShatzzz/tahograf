"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";

export const useLayoutClickClose = () => {
  const router = useRouter();
  const ref = useRef();

  const layoutClickClose = () => {
    const checkIfClickedOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        router.push("/articles");
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  };
  return [layoutClickClose, ref];
};
