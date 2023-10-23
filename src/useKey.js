// This is a custom hook. In this hook we ain't returning nothing.

import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", callback);

      // This is a cleanup function
      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}
