import type { H3Event, SessionConfig } from 'h3'
import crypto from 'uncrypto'

const sessionConfig: SessionConfig = useRuntimeConfig().auth || {}
type company= {
  vatNo: string
  branchId: number
  branchName: string
  financialYear: number
  fromDate: Date
  toDate: Date
  companyName: string
  line1: string
  line2: string
  line3: string
  line4: string
}
export type AuthSession = {
  sessionId: string
  userId: string
  userName: string
  displayName: string
  language: string
  userTypeId: number
  groupId: number
  mobileNo: string
  email: string
  isAdmin: boolean
  otherId: number
  jwtToken: string
  company: company
}

export const useAuthSession = async (event: H3Event) => {
  const session = await useSession<AuthSession>(event, sessionConfig)
  return session
}

export const requireAuthSession = async (event: H3Event) => {
  const session = await useAuthSession(event)
  // console.log(session);
  if (!session.data.userName) {
    throw createError({
      message: 'Not Authorized',
      statusCode: 401,
    })
  }
  return session
}

// export async function hash(str: string) {
//   const msgUint8 = new TextEncoder().encode(str)
//   const hashBuffer = await crypto.subtle.digest('SHA-512', msgUint8)
//   const hashArray = Array.from(new Uint8Array(hashBuffer))
//   const hashHex = hashArray
//     .map(b => b.toString(16).padStart(2, '0'))
//     .join('')
//   return hashHex
// }
