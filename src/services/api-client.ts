import axios from "axios";

export default axios.create({

    baseURL:'https://api.rawg.io/api',
    params:{
        key:'23bdb7b1489b4ca09621f44c09b70025'
    }
})