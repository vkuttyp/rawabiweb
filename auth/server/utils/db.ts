import { randomUUID } from 'uncrypto'
import { useAuth } from '../../composables/auth';

export interface User {  
  userName: string
  password: string
}

// export async function findUserByEmail(email: string): Promise<User> {
//   const result= $fetch<Record<string,any>>("http://localhost:5200/user/RegisterTest",{
//     method: 'POST',
//     body: user
//   })
//   console.log(result)
//   return result;
//   // const storage = useStorage()
//   // const key = getUserKey(email!)
//   // return await storage.getItem(key)
// }

export async function createUser(user: Partial<User>) {
  const config = useRuntimeConfig();
  var url=config.public.apiBase+"/user/RegisterTest";
 const result= $fetch<Record<string,any>>(url,{
    method: 'POST',
    body: user
  })
  // console.log(result)
  return result;
  // const storage = useStorage()
  // const key = getUserKey(user.email!)
  // if (await storage.hasItem(key)) {
  //   throw createError({ message: 'Email already exists!', statusCode: 409 })
  // }
  // return await storage.setItem(key, {
  //   id: randomUUID(),
  //   ...user,
  // })
}
export async function validateUser(user: Partial<User>) {
  const config = useRuntimeConfig();
  var url=config.public.apiBase+"/user/Login";
  const result= $fetch<Record<string,any>>(url,{
     method: 'POST',
     body: user
   })
  //  console.log(result)
   return result;
   // const storage = useStorage()
   // const key = getUserKey(user.email!)
   // if (await storage.hasItem(key)) {
   //   throw createError({ message: 'Email already exists!', statusCode: 409 })
   // }
   // return await storage.setItem(key, {
   //   id: randomUUID(),
   //   ...user,
   // })
 }

// export async function updateUserByEmail(email: string, updates: Partial<User>) {
//   const storage = useStorage()
//   const user = await findUserByEmail(email)
//   const key = getUserKey(user.email!)
//   return await storage.setItem(key, {
//     ...user,
//     ...updates,
//   })
// }

// function getUserKey(email: string) {
//   return `db:auth:users:${encodeURIComponent(email)}`
// }
