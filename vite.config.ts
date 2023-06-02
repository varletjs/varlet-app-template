import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      imports: ["vue", "vue-router", "pinia"],
      dts: "src/auto-import.d.ts",
      eslintrc: {
        enabled: false, // 1、改为true用于生成eslint配置。2、生成后改回false，避免重复生成消耗
        filepath: './.eslintrc-auto-import.json', // 解决eslint报错问题
        globalsPropValue: true
      },
    }),
    Components({
      dirs: ["src/components"], // 配置需要默认导入的自定义组件文件夹，该文件夹下的所有组件都会自动 import
      resolvers: [

      ],
    }),
  ],
});
