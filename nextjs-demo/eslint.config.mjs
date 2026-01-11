import nextConfig from "eslint-config-next";

const config = [
  {
    ignores: ["storybook-static/**", ".storybook/**"]
  },
  ...nextConfig
];

export default config;
