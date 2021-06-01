import Application from '@ioc:Adonis/Core/Application'
import { cuid } from '@ioc:Adonis/Core/Helpers'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PayrollTax {
  public async index({ request }: HttpContextContract) {
    console.log(request.qs())
    console.log(request.params())
    return { hello: 'World' }
  }

  public async upload({ request }: HttpContextContract) {
    const image = request.file('image')
    const requestBody = request.body()

    if (!image) {
      return
    }

    const fileName = `${requestBody.filename}.${image.extname}`

    await image.move(Application.tmpPath('uploads'), {
      name: fileName,
    })

    return { error: false, message: 'File uploaded successfully' }
  }
}
