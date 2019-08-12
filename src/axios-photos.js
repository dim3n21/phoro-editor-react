import axios from 'axios';

const key = '080c38213e39dad3d8ad53aca3dffe7f13ad187a26e43ff5a00c74cd3b187519';

const instance = axios.create({
      baseURL: `https://api.unsplash.com/search/photos?page=1&query=office&client_id=${key}`
})

export default instance