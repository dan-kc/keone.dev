import create from "zustand";

interface WindowDimensions {
  width: number;
  height: number;
}
interface Store {
  windowDimensions: WindowDimensions;
  setWindowDimensions: (windowDimensions: WindowDimensions) => void;
}

const useWindowDimensionsStore = create<Store>((set) => ({
  windowDimensions: { width: 0, height: 0 },
  setWindowDimensions: (windowDimensions: WindowDimensions) =>
    set({ windowDimensions }),
}));

export default useWindowDimensionsStore;
