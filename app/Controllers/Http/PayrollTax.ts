import Application from '@ioc:Adonis/Core/Application'
import { cuid } from '@ioc:Adonis/Core/Helpers'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ResponseBuilder from 'App/ResponseBuilder/ResponseBuilder'

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
}
