import {
    collection,
    doc,
    getDocs,
    query,
    onSnapshot,
    getDoc,
} from 'firebase/firestore'
import { db } from '@/app/api/firebase'

export async function getCatagoryCollection() {
    const querySnapshot = await getDocs(collection(db, 'roomCatagory'))
    const data = querySnapshot.docs.map((doc) => doc.data())
    return data
}

export async function getCatagoryDoc() {
    const querySnapshot = await getDocs(collection(db, 'roomCatagory'))
    const data = querySnapshot.docs.map((doc) => doc.data())
    return data
}

export async function getRoomList() {
    const querySnapshot = await getDocs(collection(db, 'roomList'))
    const data = querySnapshot.docs.map((doc) => doc.data())
    return data
}

export async function getRoomDetail(id) {
    const roomDetailRef = doc(db, 'roomList', id)
    const roomDetailSnap = await getDoc(roomDetailRef)
    const data = roomDetailSnap.data()
    return data
}
// export default getRoomCatagory
