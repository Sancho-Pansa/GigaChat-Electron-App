import { defineProject, mergeConfig } from "vitest/config";
import viteRendererConfig from "./renderer.vite.config.mjs";

const frontend = defineProject({
    root: "./",
    test: {
        environment: "jsdom",
        include: ["tests/frontend/**/*.{test,spec}.{js,ts}"],
    }
})

const vitestConfig = mergeConfig(viteRendererConfig, defineProject(frontend));

export default vitestConfig;