import { useSwipeable } from "react-swipeable";
import { useLocationSibilings } from "./use-location-sibilings";
import { useNavigate } from "react-router";
import { flushSync } from "react-dom";

export function useScreenSwipe() {
  const navigate = useNavigate();
  const { previous, next } = useLocationSibilings();

  return useSwipeable({
    onSwipedRight: () => {
      if (!previous) return;
      const destination = previous.routePath;
      localStorage.setItem("currentAt", destination);

      if (!document.startViewTransition) {
        navigate(destination);
        return;
      }
      document.startViewTransition(() => {
        flushSync(() => {
          navigate(destination);
        });
      });
    },
    onSwipedLeft: () => {
      if (!next) return;
      const destination = next.routePath;
      localStorage.setItem("currentAt", destination);
      if (!document.startViewTransition) {
        navigate(destination);
        return;
      }
      document.startViewTransition(() => {
        flushSync(() => {
          navigate(destination);
        });
      });
    },
  });
}
