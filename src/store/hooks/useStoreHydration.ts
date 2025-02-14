import { useEffect, useState } from "react";
import { useLanguageStore } from "@/store/useLanguageStore";

export const useStoreHydration = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const unsubscribe = useLanguageStore.persist.onFinishHydration(() => {
      setIsHydrated(true);
    });
    
    setIsHydrated(useLanguageStore.persist.hasHydrated());
    return unsubscribe;
  }, []);

  return isHydrated;
};