import axios from 'axios';

const authFetch = axios.create({
  baseURL: 'https://course-api.com',
});

authFetch.interceptors.request.use(
  (request) => {
    request.headers.common['Accept'] = 'application/json';
    console.log('requesxt send', request);
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authFetch.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error.responses);
    if (error.response.status == 404) {
      console.log('404');
    }
  }
);

export default authFetch;
