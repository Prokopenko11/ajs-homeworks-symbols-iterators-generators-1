export default class Team {
  constructor() {
    this.members = [];
  }

  add(character) {
    this.members.push(character);
  }

  [Symbol.iterator]() {
    let current = 0;
    const members = this.members;

    return {
      next() {
        if (current < members.length) {
          return {
            value: members[current++],
            done: false,
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
