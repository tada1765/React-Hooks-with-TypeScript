import React, { ReactNode } from 'react'

export interface HeadingProps {
  title: string;
}

export const Heading = ({ title }: HeadingProps) => {
  return <h4>{title}</h4>
}

/* // hmm... error: List JXS Element cant use 
export type ListComponent = <ListItem>({
  items,
  render,
}: {
  items: ListItem[]
  render: (item: ListItem) => ReactNode
}) => ReactNode | null

export const List: ListComponent = ({ items, render}) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  )
} 
*/

export function List<ListItem>({ 
  items, // input
  render // input
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}){
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  )
}

export default function TestComponent() {
  return (
    <div>
      <Heading title="hello!!!" />
      <List 
        items={["a","b","c", "d",1,null]} 
        render={(item) => <strong>{item}</strong>}
      />
    </div>
  )
}
