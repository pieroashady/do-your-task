import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Task extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public companyId: number

  @column()
  public assignedFrom: number

  @column()
  public title: string

  @column()
  public description: string

  @column()
  public state: number

  @column.dateTime()
  public acceptedAt: DateTime

  @column.dateTime()
  public doneAt: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
