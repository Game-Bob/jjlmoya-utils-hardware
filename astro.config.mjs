import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
    output: "static",
    site: "https://www.gamebob.dev",
    integrations: [icon()],
    trailingSlash: "always",
    build: {
        assets: "_utilities/hardware",
    },
    server: {
        port: 3037,
        host: true
    },
    vite: {
        server: {
            watch: {
                usePolling: true,
                interval: 1000,
            }
        }
    }
});
