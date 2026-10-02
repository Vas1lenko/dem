import { createFileRoute } from '@tanstack/react-router'
import { registerUser } from '../register-server'

export const Route = createFileRoute('/register')({
  component: Register,
})

function Register() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = new FormData(event.currentTarget)

    await registerUser({
      data: {
        login: form.get('login') as string,
        password: form.get('password') as string,
        fullname: form.get('fullname') as string,
        phone: form.get('phone') as string,
        email: form.get('email') as string,
      },
    })

    alert('Пользователь зарегистрирован')
  }

  return (
    <div>
      <h1>Регистрация</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="login"
          placeholder="Логин"
          minLength={6}
          pattern="[A-Za-z0-9]+"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Пароль"
          minLength={8}
          required
        />

        <input
          type="text"
          name="fullname"
          placeholder="ФИО"
          pattern="[А-Яа-яЁё ]+"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="8(999)123-45-67"
          pattern="8\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
        />

        <button type="submit">
          Создать пользователя
        </button>
      </form>
    </div>
  )
}