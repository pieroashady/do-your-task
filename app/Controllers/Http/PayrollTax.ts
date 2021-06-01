import Application from '@ioc:Adonis/Core/Application'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PayrollTax {
  public async index({ request }: HttpContextContract) {
    console.log(request.qs())
    console.log(request.params())
    return { hello: 'World' }
  }

  public async upload({ request }: HttpContextContract) {
    const image = request.file('image')

    if (image) {
      await image.move(Application.tmpPath('uploads'))
    }
  }
}
