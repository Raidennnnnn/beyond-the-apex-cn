import QuickNavButton from "./app-quick-nav-button";
import { useLocationSibilings } from '@/hooks/use-location-sibilings';

export default function QuickNav() {
  const { previous, next } = useLocationSibilings();

  return (
    <div className={`${!previous && !next ? 'hidden' : 'flex'} px-6 pt-2 pb-16 md:pb-4 flex justify-between items-center gap-2 w-full`}>
      <QuickNavButton type="back" navigateTo={previous} />
      <QuickNavButton type="forward" navigateTo={next} />
    </div>
  )
}