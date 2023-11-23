import React, { useState } from "react";
import "./App.css";

import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import TextBox from "./components/TextBox";
import Form from "./components/Form";

function App() {
  // const [alertVisible, setAlertVisibility] = useState(false);
  // let [state, setState] = useState(false);
  // const items = ["New York", "Paris", "Los-Angeles"];
  //
  // const [cart, setCart] = useState({
  //   discount: 1,
  //   items: [
  //     { id: 1, title: "Prod 1", quantity: 1 },
  //     { id: 2, title: "Prod 2", quantity: 1 },
  //   ],
  // });
  //
  // const handleSelectItems = (item: string) => {
  //   console.log(item);
  // };
  //
  // const showAlert = () => {
  //   return (
  //     <Alert onClose={() => setAlertVisibility(false)}>
  //       Button has been clicked
  //     </Alert>
  //   );
  // };
  //
  // const handleLikeClick = (state: boolean) => {
  //   const items = cart.items.map((el)=> el.id === 1 ? {...el,quantity: 2} : el);
  //   setCart({...cart, items })
  // };

  // const fullText = 'Lorem ipsum dolor sit amet,consectetur adipisicing elit. A aliquid animi, aperiam assumenda autem, corporis deleniti, distinctio doloremque enim et illum in iusto labore mollitia officiis quidem repellat temporibus voluptate.';
  //
  //
  // const [config, setConfig] = useState({
  //   showMore: true,
  //   text: fullText
  // });
  //
  // const handleClick = (state: boolean, count: number) => {
  //   const shortText = config.text.substring(0,10);
  //   const text = state ? fullText : shortText;
  //   setConfig({
  //     text,
  //     showMore: !config.showMore,
  //   })
  // }

  return (
    <div className="App">
      <>
        <Form />
        {/*<TextBox showMore={ config.showMore } onClick={ handleClick }>*/}
        {/*  {config.showMore ? fullText : `${config.text}...`}*/}
        {/*</TextBox>*/}
        {/*<Like isActive={true} onClick={handleLikeClick} />*/}
        {/*{alertVisible && showAlert()}*/}
        {/*<Button  onCLick={() => setAlertVisibility(true)}>Primary</Button>*/}
        {/*<ListGroup items={items} title="Cities"  onSelectItem={ handleSelectItems }/>*/}
      </>
    </div>
  );
}

export default App;
