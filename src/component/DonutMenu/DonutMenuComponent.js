import React from 'react';

function DonutMenu(props) {
  console.log(props.donuts);
  return (
    <div>
      {props.donuts.map((donut) => (
        <li key={donut.id}>
          {donut.name}, {donut.price}
        </li>
      ))}
    </div>
  );
}

export default DonutMenu;
