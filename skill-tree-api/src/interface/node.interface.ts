export interface Node {
  width: Number;
  height: Number;
  id: String;
  data: {
    label: String;
  };
  position: {
    x: Number;
    y: Number;
  };
  selected: Boolean;
  positionAbsolute: {
    x: Number;
    y: Number;
  };
  dragging: Boolean;
}
