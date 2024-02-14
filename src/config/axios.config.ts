import axios from "axios";
export const AXIOS = axios.create({
  timeout: 20000,
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization:
      "Bearer " +
      "e1c4c11307baf1e52970d0e190cbce9fce0b048f58c9834907df338c7067c63e8a2de5582516da452f2e5b387e526c2230c90925808ef0954f8d4ce0024a2cf12d43c94129ca69f913d75bd0021c6ba7bbce7ffad80861911ad161b906dadc76817fdac049bf73e43160a89a9cf22b6c1fae06083d0897cad68a4587113b394d",
    "Content-Type" :  'application/json'
  },
});
