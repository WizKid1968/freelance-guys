// vite.config.ts
import react from "@vitejs/plugin-react";
import "file:///Users/rudylefranc/.yarn/berry/cache/dotenv-npm-16.4.5-bcb20eb95d-10c0.zip/node_modules/dotenv/config.js";
import path from "node:path";
import { defineConfig, splitVendorChunkPlugin } from "file:///Users/rudylefranc/Desktop/freelance-guys-pro-fix/frontend/.yarn/__virtual__/vite-virtual-690a96132e/4/.yarn/berry/cache/vite-npm-4.4.5-860d8f7335-10c0.zip/node_modules/vite/dist/node/index.js";
import injectHTML from "file:///Users/rudylefranc/.yarn/berry/cache/vite-plugin-html-inject-npm-1.1.2-2096ce14cb-10c0.zip/node_modules/vite-plugin-html-inject/dist/index.mjs";
import tsConfigPaths from "file:///Users/rudylefranc/Desktop/freelance-guys-pro-fix/frontend/.yarn/__virtual__/vite-tsconfig-paths-virtual-41f3f5611c/4/.yarn/berry/cache/vite-tsconfig-paths-npm-4.2.2-70ab93af89-10c0.zip/node_modules/vite-tsconfig-paths/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/rudylefranc/Desktop/freelance-guys-pro-fix/frontend";
var listExtensions = () => {
  if (process.env.DATABUTTON_EXTENSIONS) {
    try {
      return JSON.parse(process.env.DATABUTTON_EXTENSIONS);
    } catch (err) {
      console.error("Error parsing DATABUTTON_EXTENSIONS", err);
      console.error(process.env.DATABUTTON_EXTENSIONS);
      return [];
    }
  }
  return [];
};
var extensions = listExtensions();
var getExtensionConfig = (name) => {
  const extension = extensions.find((it) => it.name === name);
  if (!extension) {
    console.warn(`Extension ${name} not found`);
  }
  return JSON.stringify(extension == null ? void 0 : extension.config);
};
var buildVariables = () => {
  const appId = process.env.DATABUTTON_PROJECT_ID;
  const defines = {
    __APP_ID__: JSON.stringify(appId),
    __API_PATH__: JSON.stringify(""),
    __API_URL__: JSON.stringify("http://localhost:8000"),
    __WS_API_URL__: JSON.stringify("ws://localhost:8000"),
    __APP_BASE_PATH__: JSON.stringify("/"),
    __APP_TITLE__: JSON.stringify("Databutton"),
    __APP_FAVICON_LIGHT__: JSON.stringify("/favicon-light.svg"),
    __APP_FAVICON_DARK__: JSON.stringify("/favicon-dark.svg"),
    __APP_DEPLOY_USERNAME__: JSON.stringify(""),
    __APP_DEPLOY_APPNAME__: JSON.stringify(""),
    __APP_DEPLOY_CUSTOM_DOMAIN__: JSON.stringify(""),
    __FIREBASE_CONFIG__: JSON.stringify(
      getExtensionConfig("firebase-auth" /* FIREBASE_AUTH */)
    )
  };
  return defines;
};
var vite_config_default = defineConfig({
  define: buildVariables(),
  plugins: [react(), splitVendorChunkPlugin(), tsConfigPaths(), injectHTML()],
  server: {
    proxy: {
      "/routes": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true
      }
    }
  },
  resolve: {
    alias: {
      resolve: {
        alias: {
          "@": path.resolve(__vite_injected_original_dirname, "./src")
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcnVkeWxlZnJhbmMvRGVza3RvcC9mcmVlbGFuY2UtZ3V5cy1wcm8tZml4L2Zyb250ZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvcnVkeWxlZnJhbmMvRGVza3RvcC9mcmVlbGFuY2UtZ3V5cy1wcm8tZml4L2Zyb250ZW5kL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9ydWR5bGVmcmFuYy9EZXNrdG9wL2ZyZWVsYW5jZS1ndXlzLXByby1maXgvZnJvbnRlbmQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgXCJkb3RlbnYvY29uZmlnXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwibm9kZTpwYXRoXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIHNwbGl0VmVuZG9yQ2h1bmtQbHVnaW4gfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IGluamVjdEhUTUwgZnJvbSBcInZpdGUtcGx1Z2luLWh0bWwtaW5qZWN0XCI7XG5pbXBvcnQgdHNDb25maWdQYXRocyBmcm9tIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiO1xuXG50eXBlIEV4dGVuc2lvbiA9IHtcblx0bmFtZTogc3RyaW5nO1xuXHR2ZXJzaW9uOiBzdHJpbmc7XG5cdGNvbmZpZzogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG59O1xuXG5lbnVtIEV4dGVuc2lvbk5hbWUge1xuXHRGSVJFQkFTRV9BVVRIID0gXCJmaXJlYmFzZS1hdXRoXCIsXG59XG5cbmNvbnN0IGxpc3RFeHRlbnNpb25zID0gKCk6IEV4dGVuc2lvbltdID0+IHtcblx0aWYgKHByb2Nlc3MuZW52LkRBVEFCVVRUT05fRVhURU5TSU9OUykge1xuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gSlNPTi5wYXJzZShwcm9jZXNzLmVudi5EQVRBQlVUVE9OX0VYVEVOU0lPTlMpIGFzIEV4dGVuc2lvbltdO1xuXHRcdH0gY2F0Y2ggKGVycjogdW5rbm93bikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIHBhcnNpbmcgREFUQUJVVFRPTl9FWFRFTlNJT05TXCIsIGVycik7XG5cdFx0XHRjb25zb2xlLmVycm9yKHByb2Nlc3MuZW52LkRBVEFCVVRUT05fRVhURU5TSU9OUyk7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIFtdO1xufTtcblxuY29uc3QgZXh0ZW5zaW9ucyA9IGxpc3RFeHRlbnNpb25zKCk7XG5cbmNvbnN0IGdldEV4dGVuc2lvbkNvbmZpZyA9IChuYW1lOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRjb25zdCBleHRlbnNpb24gPSBleHRlbnNpb25zLmZpbmQoKGl0KSA9PiBpdC5uYW1lID09PSBuYW1lKTtcblxuXHRpZiAoIWV4dGVuc2lvbikge1xuXHRcdGNvbnNvbGUud2FybihgRXh0ZW5zaW9uICR7bmFtZX0gbm90IGZvdW5kYCk7XG5cdH1cblxuXHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoZXh0ZW5zaW9uPy5jb25maWcpO1xufTtcblxuY29uc3QgYnVpbGRWYXJpYWJsZXMgPSAoKSA9PiB7XG5cdGNvbnN0IGFwcElkID0gcHJvY2Vzcy5lbnYuREFUQUJVVFRPTl9QUk9KRUNUX0lEO1xuXG5cdGNvbnN0IGRlZmluZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG5cdFx0X19BUFBfSURfXzogSlNPTi5zdHJpbmdpZnkoYXBwSWQpLFxuXHRcdF9fQVBJX1BBVEhfXzogSlNPTi5zdHJpbmdpZnkoXCJcIiksXG5cdFx0X19BUElfVVJMX186IEpTT04uc3RyaW5naWZ5KFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwXCIpLFxuXHRcdF9fV1NfQVBJX1VSTF9fOiBKU09OLnN0cmluZ2lmeShcIndzOi8vbG9jYWxob3N0OjgwMDBcIiksXG5cdFx0X19BUFBfQkFTRV9QQVRIX186IEpTT04uc3RyaW5naWZ5KFwiL1wiKSxcblx0XHRfX0FQUF9USVRMRV9fOiBKU09OLnN0cmluZ2lmeShcIkRhdGFidXR0b25cIiksXG5cdFx0X19BUFBfRkFWSUNPTl9MSUdIVF9fOiBKU09OLnN0cmluZ2lmeShcIi9mYXZpY29uLWxpZ2h0LnN2Z1wiKSxcblx0XHRfX0FQUF9GQVZJQ09OX0RBUktfXzogSlNPTi5zdHJpbmdpZnkoXCIvZmF2aWNvbi1kYXJrLnN2Z1wiKSxcblx0XHRfX0FQUF9ERVBMT1lfVVNFUk5BTUVfXzogSlNPTi5zdHJpbmdpZnkoXCJcIiksXG5cdFx0X19BUFBfREVQTE9ZX0FQUE5BTUVfXzogSlNPTi5zdHJpbmdpZnkoXCJcIiksXG5cdFx0X19BUFBfREVQTE9ZX0NVU1RPTV9ET01BSU5fXzogSlNPTi5zdHJpbmdpZnkoXCJcIiksXG5cdFx0X19GSVJFQkFTRV9DT05GSUdfXzogSlNPTi5zdHJpbmdpZnkoXG5cdFx0XHRnZXRFeHRlbnNpb25Db25maWcoRXh0ZW5zaW9uTmFtZS5GSVJFQkFTRV9BVVRIKSxcblx0XHQpLFxuXHR9O1xuXG5cdHJldHVybiBkZWZpbmVzO1xufTtcblxuLy8gaHR0cHM6Ly92aXRlLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuXHRkZWZpbmU6IGJ1aWxkVmFyaWFibGVzKCksXG5cdHBsdWdpbnM6IFtyZWFjdCgpLCBzcGxpdFZlbmRvckNodW5rUGx1Z2luKCksIHRzQ29uZmlnUGF0aHMoKSwgaW5qZWN0SFRNTCgpXSxcblx0c2VydmVyOiB7XG5cdFx0cHJveHk6IHtcblx0XHRcdFwiL3JvdXRlc1wiOiB7XG5cdFx0XHRcdHRhcmdldDogXCJodHRwOi8vMTI3LjAuMC4xOjgwMDBcIixcblx0XHRcdFx0Y2hhbmdlT3JpZ2luOiB0cnVlLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9LFxuXHRyZXNvbHZlOiB7XG5cdFx0YWxpYXM6IHtcblx0XHRcdHJlc29sdmU6IHtcblx0XHRcdFx0YWxpYXM6IHtcblx0XHRcdFx0XHRcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnVyxPQUFPLFdBQVc7QUFDbFgsT0FBTztBQUNQLE9BQU8sVUFBVTtBQUNqQixTQUFTLGNBQWMsOEJBQThCO0FBQ3JELE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sbUJBQW1CO0FBTDFCLElBQU0sbUNBQW1DO0FBaUJ6QyxJQUFNLGlCQUFpQixNQUFtQjtBQUN6QyxNQUFJLFFBQVEsSUFBSSx1QkFBdUI7QUFDdEMsUUFBSTtBQUNILGFBQU8sS0FBSyxNQUFNLFFBQVEsSUFBSSxxQkFBcUI7QUFBQSxJQUNwRCxTQUFTLEtBQWM7QUFDdEIsY0FBUSxNQUFNLHVDQUF1QyxHQUFHO0FBQ3hELGNBQVEsTUFBTSxRQUFRLElBQUkscUJBQXFCO0FBQy9DLGFBQU8sQ0FBQztBQUFBLElBQ1Q7QUFBQSxFQUNEO0FBRUEsU0FBTyxDQUFDO0FBQ1Q7QUFFQSxJQUFNLGFBQWEsZUFBZTtBQUVsQyxJQUFNLHFCQUFxQixDQUFDLFNBQXlCO0FBQ3BELFFBQU0sWUFBWSxXQUFXLEtBQUssQ0FBQyxPQUFPLEdBQUcsU0FBUyxJQUFJO0FBRTFELE1BQUksQ0FBQyxXQUFXO0FBQ2YsWUFBUSxLQUFLLGFBQWEsSUFBSSxZQUFZO0FBQUEsRUFDM0M7QUFFQSxTQUFPLEtBQUssVUFBVSx1Q0FBVyxNQUFNO0FBQ3hDO0FBRUEsSUFBTSxpQkFBaUIsTUFBTTtBQUM1QixRQUFNLFFBQVEsUUFBUSxJQUFJO0FBRTFCLFFBQU0sVUFBa0M7QUFBQSxJQUN2QyxZQUFZLEtBQUssVUFBVSxLQUFLO0FBQUEsSUFDaEMsY0FBYyxLQUFLLFVBQVUsRUFBRTtBQUFBLElBQy9CLGFBQWEsS0FBSyxVQUFVLHVCQUF1QjtBQUFBLElBQ25ELGdCQUFnQixLQUFLLFVBQVUscUJBQXFCO0FBQUEsSUFDcEQsbUJBQW1CLEtBQUssVUFBVSxHQUFHO0FBQUEsSUFDckMsZUFBZSxLQUFLLFVBQVUsWUFBWTtBQUFBLElBQzFDLHVCQUF1QixLQUFLLFVBQVUsb0JBQW9CO0FBQUEsSUFDMUQsc0JBQXNCLEtBQUssVUFBVSxtQkFBbUI7QUFBQSxJQUN4RCx5QkFBeUIsS0FBSyxVQUFVLEVBQUU7QUFBQSxJQUMxQyx3QkFBd0IsS0FBSyxVQUFVLEVBQUU7QUFBQSxJQUN6Qyw4QkFBOEIsS0FBSyxVQUFVLEVBQUU7QUFBQSxJQUMvQyxxQkFBcUIsS0FBSztBQUFBLE1BQ3pCLG1CQUFtQixtQ0FBMkI7QUFBQSxJQUMvQztBQUFBLEVBQ0Q7QUFFQSxTQUFPO0FBQ1I7QUFHQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixRQUFRLGVBQWU7QUFBQSxFQUN2QixTQUFTLENBQUMsTUFBTSxHQUFHLHVCQUF1QixHQUFHLGNBQWMsR0FBRyxXQUFXLENBQUM7QUFBQSxFQUMxRSxRQUFRO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTixXQUFXO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUEsTUFDZjtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUixPQUFPO0FBQUEsTUFDTixTQUFTO0FBQUEsUUFDUixPQUFPO0FBQUEsVUFDTixLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsUUFDckM7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
