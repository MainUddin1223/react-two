import React,{useEffect, useState} from 'react';
import './App.css';

function App() {
  const user=["Rahim","Karim","Kuddus","Rafiq","Alom "]
  const product1=[{name:"I-phone 7",price:"$450"},
  {name:'I-phone 8',price:'$550'},
  {name:'i-phone X',price : "$1000"}];

  const CarName=[
    {name:'Toyota',price:'$1500'},
{name:'Nissan',peice:'$5600'},
{name:'BMW',price:'$7500'}
];
const chipsBrand=[
  { name:'Pran Chips', price:'$10'},
  {name:'BD Chips', price:'$10'},
  {name:'Alooz Chips', price:'$10'}
]

const carNames=CarName.map(gaddi=><li>{gaddi.name}</li>);
  return (
    <div className="App">
      <header className="App-header">
        <ul>
         {
           user.map(person => <li>{person}</li>)
         }
         {
           CarName.map(gaddi=><li>{gaddi.name}</li>)
         }
        </ul>
        <Counter></Counter>
        <ol>
          {
            product1.map(productName =><li>{productName.name}</li>)
          }
        </ol>
        <Users></Users>
        <Counter1></Counter1>
           {/* method 1 */}
        <Product product={product1[0]}></Product>
        <Product product={product1[1]}></Product>
        <Product product={product1[2]}></Product>

           {/* method 2 */}
        <Phone user={user[0]} price={product1[2].name}></Phone>
           {/* method 3 */}
      <Car cars={CarName[0]}></Car>

        {/* method 4 */}
        {
          product1.map(oduct=><Product product={oduct}></Product>)
        }
        {
          chipsBrand.map(data=><Chips chipsDam={data}></Chips>)
        }

      </header>


    </div>
  );
}
function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'10px',
    backgroundColor:'lightgray',
    height:'250px',
    width:'200px',
    float:'left',
    margin:'5px'
  }
  const {name,price}=props.product;

  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>

    </div>
  )
}
function Phone(pro){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'10px',
    backgroundColor:'lightgray',
    height:'250px',
    width:'250px',
    float:'left',
    margin:'5px'
  }
  return(
    <div style={productStyle}>
      <h3>{pro.user}</h3>
      <h5>{pro.price}</h5>
      <button >Buy Now</button>

    </div>
  )

}

function Car(model){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'10px',
    backgroundColor:'lightgray',
    height:'250px',
    width:'250px',
    float:'left',
    margin:'5px'
  }
  return(
    <div style={productStyle} >
      <h2>{model.cars.name}</h2>
      <h2>{model.cars.price}</h2>

    </div>
  )

}
function Chips(alu){
  const aluStyle={
    border:'1px solid gray',
    borderRadius:'10px',
    backgroundColor:'lightgray',
    height:'150px',
    width:'150px',
    float:'left',
    margin:'5px'
  }
  const {name,price}=alu.chipsDam;
return(
  <div style={aluStyle}>
    <h3>{name}</h3>
    <h3>{price}</h3>

  </div>
)

}
// most used eventHandeler

function Counter(){
  const [count,setCount]=useState(0);
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}
// eventHandeler methord two
function Counter1(){
  const [count1,setCount]=useState(0);
  const handleIncrease=()=>{
    const newCount=count1+1;
    setCount(newCount);
  };
  const handleDecreace=()=>{
      const newCount1=count1-1;
      setCount(newCount1);
  }
  return(
    <div>
      <h1>Count:{count1}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecreace}>Decrease</button>

    </div>
  )
}

function Users(){
   const[names, setName]=useState([]);
   useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res=>res.json())
     .then(data=>setName(data))
   },[])
  return(
    <div>
      <h2>User Name:{names.length}</h2>
      <ul>
        {
          names.map(personName=><li>{personName.phone}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
