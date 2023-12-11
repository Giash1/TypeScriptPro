
import { getUsers, getGroups } from './async';

test('getUsers returns correct data', async () => {
  const users = await getUsers();
  expect(users).toEqual([
    { "name": "Erik", "group": 1 },
    { "name": "Lisa", "group": 2 },
    { "name": "Hampus", "group": 2 },
    { "name": "Linda", "group": 3 },
    { "name": "Eva", "group": 1 },
    { "name": "Anna", "group": 3 }
  ]);
});

test('getGroups returns correct data', async () => {
  const groups = await getGroups();
  expect(groups).toEqual([
    { "id": 1, "groupName": "The Sharks" },
    { "id": 2, "groupName": "The Whales" },
    { "id": 3, "groupName": "The Zebras" }
  ]);
});
