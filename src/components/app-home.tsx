import Brand from "./app-home-brand";
import { FilePath, filePaths } from "./filePaths";
import { useMemo } from "react";
import QuickNavButton from "./app-quick-nav-button";

export default function AppHome() {
  const current: FilePath = useMemo(() => {
    const currentAt = localStorage.getItem('currentAt');
    if (!currentAt) return { ...filePaths[0], files: [filePaths[0].files[0]] };

    const [parentPath, path] = currentAt.split('/');
    const parent = filePaths.find(({ path}) => path === parentPath);
    const child = parent?.files.find(f => f.path === path);

    if (parent && child) {
      return { ...parent, files: [child] };
    } else {
      return { ...filePaths[0], files: [filePaths[0].files[0]] };
    }
  }, []);

  return <div className="w-full h-full">
    <Brand className="self-center" />
    <QuickNavButton
      type="forward"
      navigateTo={current}
      className="fixed bottom-0 right-0 mx-2 my-16 h-fit"
    />
  </div>
}
