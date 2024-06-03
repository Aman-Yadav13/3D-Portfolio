import { create } from "zustand";

type LightStore = {
  lights: boolean;
  globalLights: boolean;
  globalLightsOn: () => void;
  globalLightsOff: () => void;
  lightsOn: () => void;
  lightsOff: () => void;
};

export const useLights = create<LightStore>((set) => ({
  globalLights: false,
  lights: false,
  globalLightsOn: () => set({ globalLights: true }),
  globalLightsOff: () => set({ globalLights: false }),
  lightsOn: () => set({ lights: true }),
  lightsOff: () => set({ lights: false }),
}));
