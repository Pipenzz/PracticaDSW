//
// use heroclash4geeks

//insert data
db.tipojuego.insertOne({
   nombre: 'loldb',
   descripcion: 'mejor juego db',
   id: '12345',
  })
  

  
  // query
  db.tipojuego.find()
  db.tipojuego.find({ tipojuegonombre: 'loldb' })
  db.tipojuego.find({ tipojuegodescripcion: 'mejor juego db' })
  db.tipojuego.find({ tipojuegoid: '12345' }) //change the id according to the autogenerated value
  
  //update
  db.tipojuego.updateOne({ nombre: 'loldb' }, {$set: {descripcion:'cambiadito'}})
  
  //delete
  db.tipojuego.deleteOne({ tipojuegonombre: 'loldb' })