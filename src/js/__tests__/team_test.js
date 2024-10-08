import Team from '../team';

const char1 = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const char2 = {
  name: 'Зомби',
  type: 'Zombie',
  health: 60,
  level: 2,
  attack: 30,
  defence: 20,
};

test('testing add method', () => {
  const team = new Team();
  team.add(char1);
  expect(team.members).toEqual([char1]);
});

test('testing iteration', () => {
  const team = new Team();
  team.add(char1);
  team.add(char2);
  const teamArray = [...team];
  expect(teamArray).toEqual([char1, char2]);
});
