import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
   const users = [
  { id: 11, alias: 'Mr. Nice', fname: 'Joe', lname: 'Nice', email: 'jn@test.net'},
  { id: 12, alias: 'Narco', fname: 'Steve', lname: 'Narco', email: 'sn@test.net'},
  { id: 13, alias: 'Bombasto', fname: 'Big', lname: 'Bomb', email: 'bb@test.net'},
  { id: 14, alias: 'Celeritas', fname: 'Mary', lname: 'Celery', email: 'mc@test.net'},
  { id: 15, alias: 'Magneta', fname: 'Henry', lname: 'Purple', email: 'hp@test.net'},
  { id: 16, alias: 'RubberMan', fname: 'Rich', lname: 'Stretch', email: 'rs@test.net'},
  { id: 17, alias: 'Dynama', fname: 'Dave', lname: 'Change', email: 'dc@test.net'},
  { id: 18, alias: 'Dr IQ', fname: 'Wicked', lname: 'Smaht', email: 'ws@test.net'},
  { id: 19, alias: 'Magma', fname: 'Roxy', lname: 'Hot', email: 'rh@test.net'},
  { id: 20, alias: 'Tornado', fname: 'Windy', lname: 'City', email: 'wc@test.net'}
];
    return {users};
  }
}
