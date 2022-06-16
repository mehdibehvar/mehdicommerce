import axios from "axios";

axios.defaults.baseURL="http://localhost:3000/"


// Important: If axios is used with multiple domains, the AUTH_TOKEN will be sent to all of them.
// See below for an example using Custom instance defaults instead.
//میتونیم وقتی کاربر لاگین کرد مقدار توکن را داخل لوکال استوریج قرار دهیم 
//  قرار دهیمauth-token و بعد از لوگال استوریج بخونیم و اینجا به جای  
// axios.defaults.headers.common['Authorization'] = "AUTH_TOKEN";

// axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';


export function get(url,config={}) {
    return axios.get(url,config)
    .then(response=>response.data)
    .catch(error=>console.log(error))
};
export function post(url,data,config) {
    return axios.post(url,data,config)
    .then(response=>response.data)
    .catch(error=>console.log(error))
}
export function del(url,config={}) {
    return axios.delete(url,config={})
}
export function put(url,data,config) {
    return axios.put(url,data,config)
    .then(response=>response.data)
    .catch(error=>console.log(error))
}
export function patch(url,data,config) {
    return axios.patch(url,data,config)
    .then(response=>response.data)
    .catch(error=>console.log(error))
}
