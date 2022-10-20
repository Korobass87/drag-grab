import React from "react";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import Draggable from "react-draggable";
import "./App.css"


const layouts = {
  xs: [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 1, y: 0, w: 1, h: 2, minW: 1, maxW: 4 },
    { i: "c", x: 2, y: 0, w: 1, h: 2 }
  ],
  sm: [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 1, y: 0, w: 3, h: 4, minW: 1, maxW: 4 },
    { i: "c", x: 2, y: 0, w: 1, h: 2 }
  ]
};


export default function App() {

  const handleStart = (e, data) => {
    console.log(e, data);
  };
  const handleDrag = (e, data) => {
    console.log(e, data);
  };
  const handleStop = (e, data) => {
    console.log(e, data);
  };
  return (
      <>
      <ResponsiveGridLayout
          className="layout"
          layouts={layouts}
          cols={{ sm: 12, xs: 12 }}
          breakpoints={{ sm: 768, xs: 480 }}
          rowHeight={30}
          width={window.innerWidth}
      >
        <div className={"box"} key="a">1</div>
        <div className={"box"} key="b">2</div>
        <div className={"box"} key="c">3</div>
      </ResponsiveGridLayout>

      <Draggable
          axis="both"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          grid={[25, 25]}
          scale={1}
          onStart={handleStart}
          onDrag={handleDrag}
          onStop={handleStop}
      >
        <div>
          <div className="handle">Drag from here</div>
          <div>Drag me.</div>
        </div>
      </Draggable>
      </>
        );
}