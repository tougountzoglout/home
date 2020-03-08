import axios from 'axios';

class GetHomeService {

    // const axios = require('axios');

    // Make a request for a user with a given ID
    getHomes(url) {
        axios.get(url)
            
    }



}

export default new GetHomeService()