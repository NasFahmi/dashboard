import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,

  async prerender(){
    return [
      '/dashboard/transaction',
      '/dashboard/account',
      '/dashboard/investment',
      '/dashboard/loan',
      '/dashboard/my-privileges',
    ]; // jika kita mau mendaftarkan hanya beberapa halaman yang ingin prerender maka bisa digunnaka disini
  }

} satisfies Config;
