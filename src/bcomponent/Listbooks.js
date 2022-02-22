import React, { memo } from 'react'
const Books=[
    {"id":1,"Nom":"book1","Author":"nader","Category":"adventure"},
    {"id":2,"Nom":"book2","Author":"jawher","Category":"fantasy"},
    {"id":3,"Nom":"book3","Author":"Aziz","Category":"Action"}
];
count=3
//Books.push({"id":4,"Nom":"book3","Author":"Aziz","Category":"Action"})
const Listbooks = () => {
    // console.log(List[1 ])
    const Listbooks = Books.map((Book) =>{
        console.log(Book);
     
    })
  
  return (
    <div ><table className="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">Name</th>
        <th scope="col">Author</th>
        <th scope="col">Category</th>
      </tr>
    </thead>
    <tbody>
{Books.map((Book)=>{

    return <tr key={Book.id}>
      <th scope="row">{Book.id}</th>
      <td>{Book.Nom}</td>
      <td>{Book.Author}</td>
      <td>{Book.Category}</td>
    </tr>
})}
 </tbody>
    </table>
    </div>
    
  )
}


    
    

export default Listbooks