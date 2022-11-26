import { doc } from 'prettier'
import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const useDocument = (collection, id) => {
  const error = ref('')
  const isPending = ref(false)

  let docRef = projectFirestore.collection(collection).doc(id)

  const deleteDoc = async () => {
    isPending.value = true
    error.value = ''

    try {
      const res = await docRef.delete()
      isPending.value = false
      return res
    } catch (err) {
      console.log(err.message)
      isPending.value = false
      error.value = 'Could not delete the document'
    }
  }

  return { error, isPending, deleteDoc }
}

export default useDocument
