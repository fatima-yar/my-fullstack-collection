import { addEvent, editEvent, getEventById } from './events'

test('addEvent', () => {
  const consume = () => Promise.resolve({
    body: {
      id: 1,
      title: 'testevent'
    }
  })
  return addEvent({}, consume)
    .then((event) => {
      expect(event.id).toBe(1)
      return null
    })
})

test('editEvent', () => {
  const consume = () => Promise.resolve({
    body: {
      id: 1,
      title: 'title',
      date: '01/12/2020',
      description: 'this is the description',
      volunteers_needed: 9

    }
  })
  return editEvent({}, consume)
    .then((event) => {
      expect(event.id).toBe(1)
      return null
    })
})

test('getEventById return a id', () => {
  const consume = () => Promise.resolve({
    body: {
      id: 1,
      title: 'Patrick'
    }
  })
  const id = consume.id
  return getEventById(id, consume)
    .then((event) => {
      expect(event.id).toBe(1)
      expect(event.title).toBe('Patrick')
      return null
    })
})
