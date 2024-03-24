<template>
    <div class="grid grid-cols-2 bg-[#FFFFFF] items-center p-10">
        <div class="p-[10%]">
            <img :src="loginImage" alt="">
        </div>
        <div class="flex flex-row">
            <div class="space-y-5">
                <div class="border-b-2 border-primary">
                    <div class="mb-3 py-1 font-bold text-left text-lg sm:text-4xl">
                        Hai, Selamat Datang Kembali
                    </div>    
                </div>   
                <div class="text-left text-primary text-sm">
                    Login Akun Kamu
                </div>
                    <label for="">Username</label>
                    <input type="text" v-model="store.name" text="Username" class="input" styling="text-base" placeholder="Masukkan Username Kamu" :Id="'usernameInput'" />
                <div class="border-b-2 border-primary">
                    <label for="">Password</label>
                    <input type="password" v-model="store.password" text="Password" class="input" styling="text-base" placeholder="Masukkan Password Kamu" :Id="'passwordInput'"> 
                        <Button class="button">
                            <span class="icon is-small is-right" @click="toggleShow">
                                <i :class="{ 'far fa-eye-slash': showPassword, 'far fa-eye': !showPassword }"></i>
                            </span>
                        </Button>
                    </input>
                    <div class="text-start mr-56">
                        <Button @click="toggleModal" text="Lupa Password??" styling="text-xs text-primary border border-transparent" />
                        <!-- Modal component -->
                        <Modal v-if="showModal">
                            <!-- Content of your modal -->
                            <div class="space-y-5">
                                <h2>Kamu Lupa Password?</h2>
                                <input title="text-xs" text="Password Baru" />
                                <input title="text-xs" text="Konfirmasi Password Baru" />
                                <Button @click="toggleModal" text="Close" />
                            </div>
                        </Modal>
                    </div>  
                    <Button @click="login" :disabled="loading" text="Login" styling="border border-solid box-border w-[100%] mb-3 bg-primary text-white" />
                </div>
                <div class="text-start text-sm text-primary"> 
                    Belum punya akun? Minta bantuan Admin untuk registrasi akun milikmu!
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Modal from '../components/Modal.vue';
import Button from '../components/Button.vue';
import { useAuthStore } from '../stores/authStore';
import { defineComponent, ref } from 'vue';
import { login as loginImage } from '../assets';
import { Interface } from 'readline';

// export default defineComponent({
//         components: {
//             Button,
//             Modal
//         },
//         data() {
//             return {
//                 loginImage,
//                 showPassword: false,
//                 password: '',
//                 name: '',
//                 showModal: false,
//                 loading: false,
//                 error: '',
//                 };
//             },
//         computed: {
//             buttonLabel() {
//             return (this.showPassword) ? "Hide" : "Show";
//             },
//             api() {
//                 return import.meta.env.VITE_APP_BASE_API
//             }
//         },
//         methods: {
//             login() {
//                 // Validasi username dan password
//                 if (!this.name || !this.password) {
//                     alert('masukan username dan passwordnya dulu!');
//                     return;
//                 }
//                 this.loading = true;
//                 console.log(this.name)
//                 console.log(this.password)
    
//                 return new Promise((resolve, reject) => {
//                     axios.post(this.api + 'auth/login',{
//                         name: this.name,
//                         password: this.password
//                     })
//                     .then (res => {
//                         if (res.status === 200) {
//                             localStorage.setItem('authToken', res.data.token);
//                             localStorage.setItem('user', JSON.stringify(res.data.user));
    
//                             //reset input
//                             this.name = '';
//                             this.password = '';
//                             this.$router.push('/dashboard');
//                             this.loading = false;
//                             alert('Login Berhasil!');
//                             resolve(undefined);
    
//                             } else {
//                                 console.error("Login gagal");
//                                 this.loading = false;
    
//                                 reject('Login gagal, Silahkan coba lagi.');
//                             }
//                     })
//                     .catch(error => {
//                         console.error('Terjadi kesalahan saat login', error);
//                         this.error = 'Username atau Password salah, silahkan coba lagi';
//                         this.loading = false;
    
//                         reject(error);
//                     })
//         })
//             },

//             toggleModal() {
//                 this.showModal = !this.showModal;
//             },

//             toggleShow() {
//                 this.showPassword = !this.showPassword;
//             }
//         }
// });

export default defineComponent ({
  components: {
    Button,
    Modal
  },
  data() {
    return {
        store: useAuthStore(),
    }
  },
  methods : {
    login(name:any, password:any) {
        if (name.length && password.length === 0) {
            return
        }
        this.store.login(name, password)
        name.value = ''
        password.value = ''
    }
  },
  setup() {
    const { showModal, showPassword, loading, login, toggleModal, toggleShow } = useAuthStore();
    const name = ref('')
    const password = ref('')

    return {
      name,
      password,
      showModal,
      showPassword,
      loading,
      login,
      toggleModal,
      toggleShow,
      loginImage
    };
},
});
</script>



<style scoped>

</style>