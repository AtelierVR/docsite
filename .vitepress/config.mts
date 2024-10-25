import { defineConfig } from "vitepress";
import { shared } from "./shared";
import { fr } from "./langs/fr";

export default defineConfig({
  ...shared,
  locales: {
    root: { label: 'Français', ...fr },
    fr: { label: 'Français', ...fr },
  }
});
