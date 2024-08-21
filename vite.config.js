import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from "vite";



// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return defineConfig({
    define: {
      "process.env": env,
    },
    plugins: [react()],
    
  });
};