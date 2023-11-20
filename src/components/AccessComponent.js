import React from 'react';

function Access({ header, sidebar}) {
  return (
    <div>
      <header>{header}</header>
      <aside>{sidebar}</aside>
    </div>
  );
}

export default Access;