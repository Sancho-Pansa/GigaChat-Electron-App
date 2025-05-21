import { defineProject, mergeConfig } from "vitest/config";
import viteMainConfig from "./main.vite.config.mjs";

const frontend = defineProject({
    test: {
        include: ["tests/backend/**/*.{test,spec}.{js,ts}"],

    }
})

const vitestConfig = mergeConfig(viteMainConfig, defineProject(frontend));

export default vitestConfig;