
export function getUsers(): Promise<Array<{name: string, group: number}>> {
  return Promise.resolve([
    { "name": "Erik", "group": 1 },
    { "name": "Lisa", "group": 2 },
    { "name": "Hampus", "group": 2 },
    { "name": "Linda", "group": 3 },
    { "name": "Eva", "group": 1 },
    { "name": "Anna", "group": 3 }
  ]);
}

export function getGroups(): Promise<Array<{id: number, groupName: string}>> {
  return Promise.resolve([
    { "id": 1, "groupName": "The Sharks" },
    { "id": 2, "groupName": "The Whales" },
    { "id": 3, "groupName": "The Zebras" }
  ]);
}
