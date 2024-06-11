export function up(knex) {
  return knex.schema.createTable('books', (table) => {
    table.increments('id')
    table.string('title')
    table.string('author')
    table.integer('pages')
    table.boolean('completed')
  })
}

export function down(knex) {
  return knex.schema.dropTable('books')
}
