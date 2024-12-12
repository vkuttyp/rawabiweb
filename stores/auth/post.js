// import { useAuthStore as authStore } from '@/stores/auth.store'
// import { fetchWrapper } from '../../shared/fetchWrapper'

const machineName="addd";
const baseUrl = "http://localhost:5200";//`${import.meta.env.VITE_API_URL}/users`;
// const route = useRoute();
export const post = {
  async login(username, password) {
    const body={username, password};
    // console.log(body);
  //   const { data, error}=await useFetch('http://localhost:5200/user/login',{
  //   method: 'post',
  //   body
  // })  
    // const user = await fetchWrapper.post(`${baseUrl}/login`, { username, password, machineName });

    // update pinia state
  //   this.user = data;
  //  console.log(data)
  //  console.log(error);
  //   // store user details and jwt in local storage to keep user logged in between page refreshes
    
  //   if (data && typeof window !== 'undefined') {
  //     localStorage.setItem('user', JSON.stringify(user));
  // }

    // redirect to previous url or default to home page
  
    // route.push(this.returnUrl || '/ar/dashboard');
},
async logout() {
    await fetchWrapper.get(`${baseUrl}/logout`);
    this.user = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
  }
    
    // route.push('/ar/login');
}
}