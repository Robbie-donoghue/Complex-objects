
let samInfo = {
    name: 'sam',
    age: 24,
    occupation: 'js teacher',
    books: ['american pyscho', 'three body problem', 'human acts'],
    mycollection: {
        one: 1,
        two: 2,
        three: 3,
        four: {
            fourObj: 4
        }
    },
    listBooks: function() {
        for (let book of samInfo.books) {
            console.log(book)
        }
    }

}


console.log(samInfo.mycollection.three) // 3
console.log(samInfo.books[1])
console.log(samInfo.mycollection.four.fourObj)//

samInfo.listBooks()

// strech goal - how would we loop through this?
let items = [
    {
        name: 'microwave',
        price: 10
    },
    {
        name: 'hello',
        price: 20
    },
    
]
for ( let i = items[0]; i <= items.length ; i ++ )
{
    console.log(items[i.name, i.price])
}


