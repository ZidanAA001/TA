import { defineStore } from 'pinia';
import router from '../router/router';
import axios from 'axios';

const baseUrl = import.meta.env.VITE_APP_BASE_API;

export const useAuthStore = defineStore("auth", {
  state: () => ({
    res: JSON.parse(localStorage.getItem('res')),
    loginImage: null,
    showPassword: false,
    password: '',
    name: '',
    showModal: false,
    loading: false,
    error: '',
  }),
  getters: {

  },
  actions: {
    async login(name: string, password: string) {
      // Validasi username dan password
      if (!this.name || !this.password) {
        alert('Masukkan username dan password!');
        return;
      }
      this.loading = true;

      try {
        const res = await axios.post( baseUrl + 'auth/login', {
          name: this.name,
          password: this.password,
        });

        if (res.status === 200) {
        //token user disimpan di local storage
        localStorage.setItem('token', res.data.token.replace(/"/g, ''));

          // Reset input
          name = '';
          password = '';
          router.push('/dashboard');
          this.loading = false;
          alert('Login Berhasil!');
        } else {
          console.error('Login gagal');
          this.loading = false;
          throw new Error('Login gagal, Silahkan coba lagi.');
        }
      } catch (error) {
        console.error('Terjadi kesalahan saat login', error);
        this.error = 'Username atau Password salah, silahkan coba lagi';
        this.loading = false;
        throw error;
      }
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    logout() {
      this.res = null;
      localStorage.removeItem('res');
      router.push('/login');
    },
    
  },
});


