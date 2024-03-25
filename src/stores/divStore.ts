import { defineStore } from 'pinia';
import axios from '../axios.config';
import { log } from 'console';

const baseUrl = import.meta.env.VITE_APP_BASE_API;

interface Data {
    list: any
    parameter: {
        per_page: number
        search: string | null
        page: number
    }
    pagination: any,
    showModal: boolean,
    id: any,
    createUser: {
        nm_anggota: string | null,
        email: string | null,
        alamat: string | null,
        no_tlp: string | null,
        tgl_lahir: string | null,
        tgl_bergabung: string | null,
        id_divisi: string | null,
        id_jabatan: string | null,
    }
}

export const useDivStore = defineStore('divStore', {
    state: (): Data => ({
        list: [],
        parameter: {
          per_page: 10,
          search: null,
          page: 1,
        },   
        pagination: [],
        showModal: false,
        id: null,
        createUser: {
            nm_anggota: null,
            email: null,
            alamat: null,
            no_tlp: null,
            tgl_lahir: null,
            tgl_bergabung: null,
            id_divisi: null,
            id_jabatan: null
        },
    }),

    actions: {
        getData() {
            return new Promise((resolve, reject) => {
                
                const { per_page, search, page } = this.parameter;
                
                axios.get( baseUrl + 'getanggota', {
                    params: {per_page, search, page}
            })
            .then((res) => {
                resolve(res.data.data.data)
            })
            .catch((err) => {
                reject(err)
            })
        })
    },
    postData() {
        return new Promise((resolve, reject) => {
            const { per_page, search, page } = this.parameter;
            const { nm_anggota, email, alamat, no_tlp, tgl_lahir, tgl_bergabung, id_divisi, id_jabatan } = this.createUser;
            axios.post( baseUrl + 'createanggota', {per_page, search, page, nm_anggota, email, alamat, no_tlp, tgl_lahir, tgl_bergabung, id_divisi, id_jabatan})
            .then((res) => {
                resolve(res.data.data);
            })
            .catch((err) => {
                reject(err)
            })         
        }) 
    },
    putData() {
        return new Promise((resolve, reject) => {
            const { per_page, search, page } = this.parameter
            const { user } = this.createUser;
            const id = 2
            axios.put( baseUrl + id , {per_page, search, page, user})
            .then((res) => {
              resolve(res.data.data)
            })
            .catch((err) => {
              reject(err)
            })
          })
        },
    deleteData(id) {
        return new Promise((resolve,reject)=>{
            axios.delete(`${baseUrl}destroyanggota/${ id }`)
            .then(()=>{
                resolve('Delete Success')
            }).catch((err)=> {
                reject(err)
            })
        })
    },
    toggleModal() {
        this.showModal = !this.showModal;
        console.log("clicked");
        
    },

    },
})
