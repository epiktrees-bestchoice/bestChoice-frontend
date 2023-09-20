import { collection, doc, getDocs, query, onSnapshot } from 'firebase/firestore'
import { db } from '@/app/api/firebase'

export async function getCatagoryCollection() {
    const querySnapshot = await getDocs(collection(db, 'roomCatagory'))
    const data = querySnapshot.docs.map((doc) => doc.data())
    return data
}

export async function getCatagoryDoc(value) {
    const querySnapshot = await getDocs(collection(db, 'roomCatagory'))
    const data = querySnapshot.docs
        .map((doc) => doc.data())
        .filter((item) => item.id == value)
    return data
}

// export default getRoomCatagory
