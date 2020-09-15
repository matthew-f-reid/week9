module.exports = {
  addData: async function(db){
    const collection = db.collection('products');
    await collection.insertMany(
      [{
        "name": "bread",
        "description": "white bread",
        "price": 3.5,
        "units": 10
      },
      {
        "name": "butter",
        "description": "yellow butter",
        "price": 4.4,
        "units": 5
      },
      {
        "name": "tomato",
        "description": "truss tomato",
        "price": 6.6,
        "units": 8
      }]
    );
    let res = await collection.find().toArray();
    return await collection.find().toArray();
  }
}
