import { Product } from '@/app/store/product/product.types'
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  writeBatch,
} from 'firebase/firestore'

export const db = getFirestore()

export const insertProductsData = async <T extends Product>(
  collectionKey: string,
  productItems: T[],
) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)
  productItems.forEach((product) => {
    const docRef = doc(collectionRef)
    batch.set(docRef, product)
  })
  await batch.commit()
}

export const fetchProductsData = async <T extends Product>(
  collectionKey: string,
) => {
  const collectionRef = collection(db, collectionKey)
  const queryRef = query(collectionRef)
  const querySnapshot = await getDocs(queryRef)
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data())
}
