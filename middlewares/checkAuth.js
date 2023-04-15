import expressJWT from 'express-jwt'

export const requiredSignin = expressJWT({
  secret: "123456",
  algorithms: ["HS256"],
  // requestProperty:"auth"
})