import vue from '@vitejs/plugin-vue'
import vike from 'vike/plugin'
import { UserConfig } from 'vite'
import legacy from "@vitejs/plugin-legacy";

const config: UserConfig = {
  plugins: [vue(), vike(), legacy()]
}

export default config
