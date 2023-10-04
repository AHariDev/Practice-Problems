class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
    _hash(key) { //Hashing Function can implement hashing algorithm as we choose
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
    set(key, value){
        let memAdd = this._hash(key); 
        if(!this.data[memAdd]) this.data[memAdd] = [key, value]; 
    }
    get(key){
        let memAdd = this._hash(key); 
        return this.data[memAdd][1] ? this.data[memAdd][1] : 'Not a valid key'; 
    }
  }
  
  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 10000); 
  myHashTable.get('grapes'); 
  myHashTable.set('apples', 9);
  console.log(myHashTable.get('grapes')); 