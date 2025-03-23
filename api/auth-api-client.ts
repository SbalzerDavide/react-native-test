import Cookies from 'js-cookie';
import axios from 'axios';


const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  // withCredentials: true, // ensures that Axios sends cookies with requests
 });

 api.interceptors.response.use(
  async response => {
   const setCookieHeader =
    response.headers['set-cookie'] || response.headers['Set-Cookie'];
   if (setCookieHeader?.[0]) {
    console.log('Setting cookie:', setCookieHeader[0]);
    
    // await CookieManager.setFromResponse(config.baseURL, setCookieHeader[0]);
   }
   return response;
  },
  error => {
   return Promise.reject(error);
  },
 );

export async function loginRequest (email: string, password: string) {
  const response = await fetch(`http://127.0.0.1:8000/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
  if (!response.ok) {
    throw new Error('Login failed');
  }
  const data = await response.json();
  return data;
}


// export async function _login(email: string, password: string) {
//   console.log('try');
  
//   try {
//     const response = await api.post('/login', {
//       email: email,
//       password: password,
//     }, {
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: '*/*',
//         Origin: 'http://localhost:8081'
//       },
//     });
//     console.log(response);
//     if(response){
//       const setCookieHeader = response.headers['set-cookie'] || response.headers['Set-Cookie'];
//       console.log(setCookieHeader);
//     }

    
//     return response.data; // Restituisce i dati della risposta
//   } catch (error) {
//     console.error('Login failed:', error);
//     throw error; // Rilancia l'errore per gestirlo a livello superiore
//   }
// }

export async function getUser(){
  const jwt = Cookies.get('jwt');
  console.log(jwt);
  

  return fetch(`http://127.0.0.1:8000/api/me`, {
    method: 'GET',
    // credentials: 'include',
    headers: {
      'accept': 'text/html; q=1.0, */*',
      // 'Cookie': `jwt`,
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    
  })

}