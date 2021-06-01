// import Factory from '@ioc:Adonis/Lucid/Factory'
import User from 'App/Models/User'
import Factory from '@ioc:Adonis/Lucid/Factory'
import { DateTime } from 'luxon'

export const UserFactory = Factory.define(User, ({ faker }) => {
  return {
    companyId: Math.floor(Math.random() * 1000) + 1,
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    roleId: Math.floor(Math.random() * 3) + 1,
    state: 1,
    createdAt: DateTime.now(),
    updatedAt: DateTime.now(),
  }
}).build()
