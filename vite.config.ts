import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  if (mode  == 'serve'){ 
  return {
    define: {
      'process.env.SUPABASE_URL': JSON.stringify(env.SUPABASE_URL),
      'process.env.SUPABASE_TOKEN': JSON.stringify(env.SUPABASE_TOKEN)
    },
    plugins: [react()],
    base: "/"
  }
  }
  if (mode  !== 'serve') {
    return {
      define: {
        'process.env.SUPABASE_URL': JSON.stringify(env.SUPABASE_URL),
        'process.env.SUPABASE_TOKEN': JSON.stringify(env.SUPABASE_TOKEN)
      },
      plugins: [react()],
      base: "/CC_website/"
    }
  }
})