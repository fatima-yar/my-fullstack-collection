export async function seed(knex) {
  await knex('books').del()
  await knex('books').insert([
    {
      id: 1,
      title: 'Poor Folk',
      author: 'Dostoevsky',
      pages: 152,
      name: 'Fatima',
      completed: true,
    },
    {
      id: 2,
      title: 'The Midnight Library',
      author: 'Matt Haig',
      pages: 304,
      name: 'Fatima',
      completed: true,
    },
    {
      id: 3,
      title: '1984',
      author: 'George Orwell',
      pages: 328,
      name: 'Fatima',
      completed: true,
    },
    {
      id: 4,
      title: 'Friends, Lovers, The Big Terrible Thing',
      author: 'Matthew Perry',
      pages: 272,
      name: 'Fatima',
      completed: false,
    },
    {
      id: 5,
      title: 'Kafka on the shore',
      author: 'Haruki Murakami',
      pages: 505,
      name: 'Fatima',
      completed: true,
    },
  ])
}
