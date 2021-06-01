import Application from '@ioc:Adonis/Core/Application'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ResponseBuilder from 'App/Helpers/ResponseBuilder'
import User from 'App/Models/User'
import { UserFactory } from 'Database/factories'
import Hash from '@ioc:Adonis/Core/Hash'

export default class UserController {
  public async login({ request }: HttpContextContract) {
    const { email, password } = request.body()
    const user = await User.findBy('email', email)

    if (!user) {
      return { message: 'user not found' }
    }

    if (!(await Hash.verify(user.password, password))) {
      return { message: 'Wrong email or password' }
    }

    return { message: 'Welcome to the club' }
  }

  public async index({ request }: HttpContextContract) {
    const user = await User.find(54)
    if (user) {
      if (await Hash.verify(user.password, '12345')) {
        return { ok: 'ok' }
      }
    }

    return user
  }

  public async upload({ request }: HttpContextContract) {
    const image = request.file('image')
    const requestBody = request.body()

    if (!image) {
      const response = new ResponseBuilder()
      response.withError(true)
      response.withMessage('Please attach upload file')
      return response.showResponse()
    }

    const fileName = `${requestBody.filename}.${image.extname}`

    await image.move(Application.tmpPath('uploads'), {
      name: fileName,
    })

    const response = new ResponseBuilder()
    response.withError(false)
    response.withMessage('Successfully upload file')
    return response.showResponse()
  }

  public async generate() {
    const user = await UserFactory.createMany(50)
    return user
  }

  public async create({ request }: HttpContextContract) {
    const requestBody = request.body()
    return await User.create(requestBody)
  }
}
