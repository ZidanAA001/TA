import { defineStore } from "pinia";
import axios from 'axios';

interface Data {
    list: any
    parameter: {
        size: number
        search: string | null
        page: number
    }
    pagination: any
    createUser: {
        user: string | null
    }
}

const baseUrl = import.meta.env.VITE_APP_BASE_API;

export const Datas = defineStore('datas', {
    state: (): Data => ({
        list: [],
        parameter: {
          size: 5,
          search: null,
          page: 1,
        },   
        pagination: [],
        createUser: {user:null},
    }),
    actions: {
        getData() {
            return new Promise((resolve, reject) => {
                const { size, search, page } = this.parameter;
                axios.get( baseUrl + '', {
                    params: {size, search, page}
            })
            .then((res) => {
                resolve(res.data.data)
            })
            .catch((err) => {
                reject(err)
            })
        })
    },
    postData() {
        return new Promise((resolve, reject) => {
            const { size, search, page } = this.parameter;
            const { user } = this.createUser;
            axios.post("", {size, search, page, user})
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
            const { size, search, page } = this.parameter
            const { user } = this.createUser;
            const id = 2
            axios.put("http://localhost:8000/api/master/" + id , {size, search, page, user})
            .then((res) => {
              resolve(res.data.data)
            })
            .catch((err) => {
              reject(err)
            })
          })
        },
    },
})
