import { useSwipeable } from "react-swipeable";
import { useLocationSibilings } from "./use-location-sibilings";
import { useNavigate } from "react-router";

export function useScreenSwipe() {
  const navigate = useNavigate();
  const { previous, next } = useLocationSibilings();

  return  useSwipeable({
    onSwipedRight: () => {
      if (previous) {
        const destination = `${previous.path}/${previous.files[0].path}`;
        navigate(destination);
        localStorage.setItem('currentAt', destination);
      }
    },
    onSwipedLeft: () => {
      if (next) {
        const destination = `${next.path}/${next.files[0].path}`;
        navigate(destination);
        localStorage.setItem('currentAt', destination);
      }
    },
  });
}