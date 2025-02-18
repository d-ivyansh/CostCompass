import React from 'react'

const obj = [
    {
        type: "Expense",
        color:'rgb(255, 99, 132)',
        perceent:60
    },
    {
        type: "Saving",
        color:'#f9c74f',
        perceent:30
    },
    {
        type: "Investment",
        color:'rgb(54, 162, 235)',
        perceent:10
    },
    
]

export default function Labels() {
  return (
    <>
    {obj.map((v,i) => <LabelComponent key={i} data={v}></LabelComponent>)}
    {/* {LabelComponent()} */}
    </>
  )
}

function LabelComponent({data}){
    if(!data) return<></>;
    return(
        <div className='labels flex justify-between'>
            <div className="flex gap-2">
                <div className='w-2 h-2 rounded py-3' style={{background:data.color ?? ''}}></div>
                <h3 className='text-md'>{data.type ?? ''}</h3>
            </div>
            <h3 className="font-bold">{data.perceent ?? 0}%</h3>
        </div>
    )
}