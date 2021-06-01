import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tasks extends BaseSchema {
  protected tableName = 'tasks'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.bigInteger('user_id').notNullable().index()
      table.bigInteger('company_id').notNullable().index()
      table.bigInteger('assigned_from').notNullable().index()
      table.string('title')
      table.text('description')
      table.integer('state')
      table.timestamp('accepted_at', { useTz: true }).nullable()
      table.timestamp('done_at', { useTz: true }).nullable()
      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).nullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
