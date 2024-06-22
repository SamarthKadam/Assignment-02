import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-circle-1":
          "conic-gradient(from 0deg, #ff7c7c, #ff3d3d, #ff7c7c)",
        "gradient-circle-2":
          "conic-gradient(from 0deg, #7c7cff, #3d3dff, #7c7cff)",
        "gradient-circle-3":
          "conic-gradient(from 0deg, #7cff7c, #3dff3d, #7cff7c)",
      },
    },
  },
  plugins: [],
};
export default config;
