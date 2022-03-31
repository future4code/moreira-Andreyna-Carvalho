export type toDo = {
  userId: string,
  id: number,
  listToDo: any[]
}

export const afazeres: toDo[] = [
  {
    "userId": 'Andreyna',
    "id": 1,
    "listToDo": [
      {
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      }
    ]
  },
  {
    "userId": 'Maria',
    "id": 4,
    "listToDo": [{
      "id": 1,
      "title": "et porro tempora",
      "completed": true
    }]
  },
  {
    "userId": 'João',
    "id": 24,
    "listToDo": [{
      "id": 1,
      "title": "adipisci non ad dicta qui amet quaerat doloribus ea",
      "completed": false
    }]
  },
]