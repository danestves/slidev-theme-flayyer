import { resolve } from "path";
import { mergeWindicssConfig, defineConfig } from "vite-plugin-windicss";
import BaseConfig from "@slidev/client/windi.config";

// extend the base config
export default mergeWindicssConfig(
  BaseConfig,
  defineConfig({
    extract: {
      include: [resolve(__dirname, "**/*.{vue,ts}")],
    },
    shortcuts: {
      // custom the default background
      "bg-main": "bg-white text-[#1c1e21] dark:(bg-[#18191a] text-[#f5f6f7])",
    },
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: "#4346DE",
            dark: "#262685",
            darker: "#1F2937",
            darkest: "#07193E",
            light: "#6866E8",
            lighter: "#9796E1",
            lightest: "#F6F0FF",
          },
        },
        // fonts can be replaced here, remember to update the web font links in `index.html`
        fontFamily: {
          sans: '"Inter var", "Nunito Sans", ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
          mono: '"Fira Code", monospace',
        },
      },
    },
  })
);
