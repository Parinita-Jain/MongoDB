use('sample');
db.products.insertMany([
    {  
        item:'pen', 
        price: 20, 
        quantity: 2, 
        type: 'stationary', 
        colors: ['red', 'blue'],
        size: {w: 1, h: 30, unit: 'cm'}
    },
    {  
        item:'book', 
        price: 50, 
        quantity: 10, 
        type: 'stationary', 
        colors: ['brown', 'white'],
        size: {w: 6, h: 12, unit: 'in'}
    },
    {  
        item:'iphone', 
        price: 80000, 
        quantity: 15, 
        type: 'phone', 
        colors: ['silver', 'blue'],
        size: {w: 6, h: 12, unit: 'cm'}
    },
    {  
        item:'samsung galaxy', 
        price: 80000, 
        quantity: 20, 
        type: 'phone', 
        colors: ['black', 'blue', 'silver'],
        size: {w: 6, h: 12, unit: 'cm'}
    },
    {  
        item:'pencil', 
        price: 10, 
        quantity: 30, 
        type: 'stationary', 
        colors: ['red', 'blue','green'],
        size: {w: 1, h: 30, unit: 'cm'}
    },
    {  
        item:'pen', 
        price: 20, 
        quantity: 2, 
        type: 'stationary', 
        colors: ['red', 'blue'],
        size: {w: 1, h: 30, unit: 'cm'}
    },
    {  
        item:'crayons', 
        price: 200, 
        quantity: 12, 
        type: 'stationary', 
        colors: ['red', 'blue','green','yellow'],
        size: {w: 0.5, h: 2, unit: 'in'}
    }
])

use('sample');
db.products.find()

//select * from products where item='pen'
use('sample');
db.products.find({item:'pen'})

//select * from products where item like 'b%'
use('sample');
db.products.find({item:/^b/})

//select * from products where item like '%e'
use('sample');
db.products.find({item:/e$/})

//select * from products where item like '%a%'
use('sample');
db.products.find({item:/a/})

//select * from products where quantity in (20,15,2)
use('sample');
db.products.find({
    quantity: {
        $in: [20, 15, 2]
    }
})

//select * from products where quantity >= 15
use('sample');
db.products.find({
    quantity: {
        $gte: 15
    }
})

//$gt, $gte, $lt, $lte, $eq, $ne

use('sample');
db.products.find({
    'size.unit': 'in'
})

use('sample');
db.products.find({
    'size.w': {
        $lt: 5
    }
})

use('sample');
db.products.find({
    colors: 'red'
})

use('sample');
db.products.find({
    colors: {
        $in: ['silver','black']
    }
})

use('sample');
db.products.find({
    colors: {
        $all: ['red','blue']
    }
})

use('sample');
db.products.find({
    colors: {
        $size: 4
    }
})

//Projection 

//Inclusion ==> include particular fields of the document in the result
//for inclusion we use value 1
use('sample');
db.products.find({},{
    item: 1,
    price: 1
})

use('sample');
db.products.find({},{
    _id: 0,
    item: 1,
    price: 1
})

//Exclusion ==> exclude some fields of the document in the result
//for exclusion we use value 0

use('sample');
db.products.find({},{
    _id: 0,
    colors: 0
})

//count
use('sample');
db.products.find().count()

use('sample');
db.products.find({
    price:{
        $lt: 1000
    }
}).count()

//sort
//ascending: 1, descending: -1
use('sample');
db.products.find().sort({
    price: -1
})

use('sample');
db.products.find().sort({
    item: -1
})

//limit - starting documents
use('sample');
db.products.find().limit(4)

//skip - skip the starting documents and return the remaining documents
use('sample');
db.products.find().skip(4)

//pagination
use('sample');
// db.products.find().skip(0).limit(2)
// db.products.find().skip(2).limit(2)
// db.products.find().skip(4).limit(2)
db.products.find().skip(6).limit(2)

//Aggregation
//select sum(price) from products group by type
use('sample');
db.products.aggregate([
    {
        $match: {type: 'phone'}
    },
    {
        $group: {
          _id: '$type',
          totalPrice: {$sum: '$price'},
          maxPrice: {$max: '$price'},
          totalQuantity:{$sum: '$quantity'},
          avgPrice: {$avg: '$price'},
          firstPrice: {$first: '$price'}
        }
    }
])

