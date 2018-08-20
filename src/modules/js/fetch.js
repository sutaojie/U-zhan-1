import axios from 'axios'
import url from 'js/api'
import { resolve } from 'path';

function fetch(url,data){
    return new Promise((resolve,reject)=>{
        axios.post(url,data).then(res=>{
            if(res.data.status === 200){
                resolve(res)
            }else{
                //....
            }
        }).catch(error =>{
            reject(error)
        })
    })
}
export default fetch
