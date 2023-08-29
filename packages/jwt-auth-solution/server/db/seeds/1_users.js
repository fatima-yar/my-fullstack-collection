export async function seed(knex) {
  await knex('users').insert([
    { auth0_id: 'auth0|123', username: 'banana_llama', icon: '🍌' },
    { auth0_id: 'auth0|456', username: 'grape_gatsby', icon: '🍇' },
  ])
}