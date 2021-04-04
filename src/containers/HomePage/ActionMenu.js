import React, { useState } from 'react';

const cn = c => c;
const id = 'id';

export default function ActionMenu(props) {
  const { items } = props;
  const [showContextMenu, setShowContextMenu] = useState(false);

  const renderItems = () => {
    return items.map((item, index) => {
      console.log(`items`, items);
      console.log(`item`, item);
      return (
        <li key={index} className="context-menu-item">
          {item.isDivider ? <hr /> : item.label}
        </li>
      );
    });
  };

  return (
    <div id={id}>
      <button
        style={{ width: '1rem', height: '2rem', background: 'red' }}
        title="Action"
        icon="action"
        classNames="icon-action"
        onClick={() => {
          setShowContextMenu(!showContextMenu);
        }}
      />
      <nav className={cn('context-menu', { 'show-context': showContextMenu })}>
        <ul className="context-menu-group">{renderItems()}</ul>
      </nav>
    </div>
  );
}
