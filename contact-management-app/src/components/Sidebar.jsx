import React from "react";

const Sidebar = ({ setSelected }) => {
  const tab = [
    { id: 1, label: "contact", name: "contact" },
    { id: 2, label: "charts", name: "Charts and Maps" },
  ];
  return (
    <div>
      {tab?.map((el) => (
        <div key={el.id} onClick={() => setSelected(el.label)}>
          {el.name}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
