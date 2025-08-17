import { create } from "zustand";

interface Store {
  open: boolean;
  setOpen: (open: boolean) => void;
  emailOpen: boolean;
  setEmailOpen: (open: boolean) => void;
  templateOpen: boolean;
  setTemplateOpen: (open: boolean) => void;
}

const useToastStore = create<Store>((set) => ({
  open: false,
  setOpen: (open: boolean) => set({ open }),
  emailOpen: false,
  setEmailOpen: (emailOpen: boolean) => set({ emailOpen }),
  templateOpen: false,
  setTemplateOpen: (templateOpen: boolean) => set({ templateOpen }),
}));

export default useToastStore;
