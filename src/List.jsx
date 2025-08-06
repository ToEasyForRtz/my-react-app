import React from 'react';

const items = [
  {
    task: 'Learn React',
    id: 1,
    isCompleted: false,
  },
  {
    task: 'Learn JS',
    id: 2,
    isCompleted: true,
  },
  {
    task: 'Learn HTML and CSS',
    id: 3,
    isCompleted: false,
  },
];

export const List = () => {
  return (
    <div>
      {items.map((item, index) => {
        return (
          <section key={index} className={item.isCompleted ? 'completed' : ''}>
            <span>{item.id}</span>
            <h4>{item.task}</h4>
          </section>
        );
      })}
    </div>
  );
};
