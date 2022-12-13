import {db} from '../indexedDB';

export async function saveDataInIndexDB(data: {}) {
  if (data) {
    if (db.userData) db.userData.clear();
    db.userData.add({name: "lendSqr", data});
  }
}
