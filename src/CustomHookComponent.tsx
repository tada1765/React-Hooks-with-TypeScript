import React, { useEffect, useMemo, useState } from 'react'

export interface Beverage {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: number;
  ibu: number;
  logo: string;
  level: number;
}

function useFetchData<payload>(url: string):{
  data: payload | null; // return value TS
  done: boolean;
} {
  const [data, dataSet] = useState<payload | null>(null)
  const [done, doneSet] = useState(false)

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((d: payload) => {
        dataSet(d)
        doneSet(true)
      })
  }, [url])
  return {data, done}
}

// export default function CustomHookComponent() {
//   const { data, done } = useFetchData<Beverage[]>("/hv-taplist.json") // not /public/hv-taplist.json
  
//   return (
//     <div>
//       {done && <img src={data![1].logo} alt="Beverage logo" />}
//     </div>
//   )
// }


// useMemo:
export default function CustomHookComponent() {
  const { data } = useFetchData<Beverage[]>("/hv-taplist.json") // not /public/hv-taplist.json
  const portlandTaps = useMemo(
    () => (data || []).filter( //array take "Portland" only
      (bev) => bev.producerLocation.includes("Portland")
    ),[data]
  )
  
  return (
    <div>
      {portlandTaps.length && <img src={portlandTaps![1].logo} alt="Beverage logo" />}
    </div>
  )
}
