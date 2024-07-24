export async function seed(knex) {
  await knex('books').del()
  await knex('books').insert([
    {
      id: 1,
      title: 'Poor Folk',
      author: 'Dostoevsky',
      pages: 152,
      name: 'Ava',
      completed: true,
    },
    {
      id: 2,
      title: 'The Midnight Library',
      author: 'Matt Haig',
      pages: 304,
      name: 'Mary',
      completed: true,
    },
    {
      id: 3,
      title: '1984',
      author: 'George Orwell',
      pages: 328,
      name: 'Anne',
      completed: true,
    },
    {
      id: 4,
      title: 'Friends, Lovers, The Big Terrible Thing',
      author: 'Matthew Perry',
      pages: 272,
      name: 'Rob',
      completed: false,
    },
    {
      id: 5,
      title: 'Kafka on the shore',
      author: 'Haruki Murakami',
      pages: 505,
      name: 'Sarah',
      completed: true,
    },
  ])
}
