import "./App.css";
import Card from "./Card";
import Example from "./Example";
import UseState from "./useState/UseState";
import UseEffect from "./useEffect/UseEffect";
import FetchData from "./useEffect/FetchData";
import PropsDrilling from "./propsDrilling/PropsDrilling";


function App() {
  // let title = 'My new title';
  // let views = '100k';
  // let another = 'New Title';
  // const myobj = {
  //   title: 'thord title',
  // }

  const data = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];
  return (
    <>
      <h1>Wellcome To My Card</h1>
      <div className="grid grid-cols-3 gap-4">
        {/* <Card title = {title} views = {views}/>
        <Card title ={another}/>
        <Card title = {myobj.title}/> */}

        {data.map((item) => {
        return <Card title={item.name} key={item.id} />
        })}
      </div>
      <Example>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, sit!</p>
      </Example>

      <UseState/>

      <UseEffect/>

      <FetchData/>

        <PropsDrilling/>

    </>
  );
}

export default App;
