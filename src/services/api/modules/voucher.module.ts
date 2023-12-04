import { Voucher } from "@/stores/slices/voucher.slice";
import axios from "axios";

export default {
    create: async function (data: any) {
        return await axios.post(import.meta.env.VITE_APP_SERVER_HOST_API + "vouchers", data, {
            headers: {
                authorization:`Bearer ${localStorage.getItem("access_token")}`,  
            }
        })
    },
    findMany: async function () {
        return await axios.get(import.meta.env.VITE_APP_SERVER_HOST_API + "vouchers/search",{
            headers: {
                authorization:`Bearer ${localStorage.getItem("access_token")}`,  
            }
        });
    },
    update: async function (voucher: Voucher) {
        return await axios.patch(import.meta.env.VITE_APP_SERVER_HOST_API + "vouchers/" + voucher.id, voucher, {
            headers: {
                authorization:`Bearer ${localStorage.getItem("access_token")}`,  
            }
        });
    },
    findAllPagination: async function (take: number, skip: number) {
        return await axios.get(`${import.meta.env.VITE_APP_SERVER_HOST_API}vouchers?take=${take}&skip=${skip}`,{
            headers: {
                authorization:`Bearer ${localStorage.getItem("access_token")}`,  
            }
        });
    },
    search: async (keysearch: string) => {
        return await axios.get(import.meta.env.VITE_APP_SERVER_HOST_API + `vouchers/search?search=${keysearch}`,{
            headers: {
                authorization:`Bearer ${localStorage.getItem("access_token")}`,  
            }
        })
    },
    getVoucher: async function (voucherCode: string) {
        return await axios.get(import.meta.env.VITE_APP_SERVER_HOST_API + `vouchers/getvoucher?getvoucher=${voucherCode}`);
    }
}