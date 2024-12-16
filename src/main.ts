import { database } from "../firebaseConfig";
import { get, ref } from "firebase/database";

export async function getMemoList(userId: string) {
  const snapshot = await get(ref(database, `memo/${userId}`));
  return snapshot.val();
}
