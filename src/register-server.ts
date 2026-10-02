import { createServerFn } from '@tanstack/react-start'
import { prisma } from './db'

export const registerUser = createServerFn({ method: 'POST' })
  .inputValidator((data: {
    login: string
    password: string
    fullname: string
    phone: string
    email: string
  }) => data)
  .handler(async ({ data }) => {
    await prisma.user.create({
      data: {
        login: data.login,
        password: data.password,
        fullname: data.fullname,
        phone: data.phone,
        email: data.email,
      },
    })

    return { success: true }
  })