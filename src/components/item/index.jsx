import { Item_style } from "./itemstyles";

export const Item = ({ name, age }) => {
  return (
    <Item_style>
      <div>{name}</div>
      <div>{age}</div>
    </Item_style>
  );
};
