export function AppTools({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row items-center gap-2 fixed z-10 bottom-0 md:top-0 right-0 m-2 mb-6 h-fit">
      { children }
    </div>
  )
}