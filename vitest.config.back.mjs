import { defineProject, mergeConfig } from "vitest/config";
import viteMainConfig from "./vite.main.config.mjs";

const frontend = defineProject({
    test: {
        include: ["tests/backend/**/*.{test,spec}.{js,ts}"],

    }
})

const vitestConfig = mergeConfig(viteMainConfig, defineProject(frontend));

export default vitestConfig;