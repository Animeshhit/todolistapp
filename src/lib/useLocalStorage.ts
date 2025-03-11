import { useEffect, useState } from "react";

function useLocalStorageListener(key: string) {
  const [value, setValue] = useState(localStorage.getItem(key));

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key) {
        setValue(event.newValue);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // For changes made in the same tab
    const handleSameTabChange = () => {
      setValue(localStorage.getItem(key));
    };

    window.addEventListener("local-storage-change", handleSameTabChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("local-storage-change", handleSameTabChange);
    };
  }, [key]);

  return value;
}

export default useLocalStorageListener;
