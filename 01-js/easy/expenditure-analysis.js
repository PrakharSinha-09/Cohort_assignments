/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let list=[];
  let obj={}

  for(let i=0;i<transactions.length;i++)
  {
    let category=transactions[i].category;

    if(obj[category]==undefined)
    {
      obj[category]=transactions[i].price;
    }
    else{
      obj[category]+=transactions[i].price;
    }
  }

  for(let key in obj)
  {
    let objCat={
      category: key,
      totalSpent: obj[key]
    }
    list.push(objCat)
  }
  return list;
}

let transactions=[

  {
    itemName: "Refrigerator",
    category: "electronics",
    price: 10000,
  },
  {
    itemName: "Laptop",
    category: "electronics",
    price: 50000,
  },
  {
    itemName: "Books",
    category: "stationery",
    price: 500,
  },

]

const ans=calculateTotalSpentByCategory(transactions);
console.log(ans);

module.exports = calculateTotalSpentByCategory;
