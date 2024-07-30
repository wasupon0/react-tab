import React, { useState } from "react";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    console.log(`tab click ${index}`);
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <div
          onClick={() => toggleTab(1)}
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
        >
          Tab 1
        </div>
        <div
          onClick={() => toggleTab(2)}
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
        >
          Tab 2
        </div>
        <div
          onClick={() => toggleTab(3)}
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
        >
          Tab 3
        </div>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <h2>Content 1</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            nostrum ad nobis eligendi atque, laboriosam repellat dolores
            distinctio odit blanditiis porro delectus quas magni expedita iusto
            voluptas tempora dolorem dolorum?
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            nostrum ad nobis eligendi atque, laboriosam repellat dolores
            distinctio odit blanditiis porro delectus quas magni expedita iusto
            voluptas tempora dolorem dolorum?
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            nostrum ad nobis eligendi atque, laboriosam repellat dolores
            distinctio odit blanditiis porro delectus quas magni expedita iusto
            voluptas tempora dolorem dolorum?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
