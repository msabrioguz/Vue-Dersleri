<template>
  <div class="home">
    <h2>Firebase</h2>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { getFirestore, collection, getDocs, get, addDoc, doc, deleteDoc, updateDoc, query, where, onSnapshot} from 'firebase/firestore';
import { FireBase } from '../firebase/config.js';

export default {
  name: 'HomeView',
  components: {
  },
  setup(){
    onMounted(async () => {
      const db = getFirestore(FireBase);
      const fbRef = collection(db, "books");
      const fbDocs = await getDocs(fbRef);
      const data = fbDocs.docs.map((doc) => doc.data());
      const docID = fbDocs.docs.map((doc) => doc.id);
      
      console.log(docID);
      console.log(data);
      // addDoc(fbRef, {name:'Sherlock Holmes', author: 'Conan Doyle', pageCount: 300});
      // addDoc(fbRef, {name:'Pinokyo', author: 'Disney', pageCount: 100});
      // addDoc(fbRef, {name:'Dune', author: 'Frank albert', pageCount: 650});
      // const docRef = doc(db, 'books', '62COT7BmtuhvWJe4QHfF');
      // deleteDoc(docRef);
      const q = query(fbRef, where('pageCount', '==', 100));
      onSnapshot(q, (snapShot) => {
        let books = [];
        snapShot.docs.forEach(doc => {
          books.push({...doc.data(), id:doc.id});
        });
        console.log(books);
      });

      const docRef = doc(db, 'books', 'ApDNxqmLdmJUUrOHreLt');
      updateDoc(docRef, {pageCount:100});

      return data;
    })
  },
}
</script>
