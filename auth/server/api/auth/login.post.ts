import { validateUser } from "../../utils/db"

export default eventHandler(async (event) => {
  const session = await useAuthSession(event)
  const { userName, password } = await readBody(event)
  const user=await validateUser({userName, password});
  // const user = await findUserByEmail(email)
  if (!user) {
    throw createError({
      message: 'user name not found! Please register.',
      statusCode: 401,
    })
  }
  // if (!user.password || user.password !== (await hash(password))) {
  //   throw createError({
  //     message: 'Incorrect password!',
  //     statusCode: 401,
  //   })
  // }
  await session.update({  
    userName: user.userName,
    jwtToken: user.jwtToken,
    sessionId: user.sessionId,
    userId: user.userId,
    displayName: user.displayName,
    language: user.language,
    userTypeId: user.userTypeId,
    groupId: user.groupId,
    mobileNo: user.mobileNo,
    email: user.email,
    isAdmin: user.isAdmin,
    otherId: user.otherId,
    company: user.company
  })
  return session
})
