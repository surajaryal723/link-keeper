interface headingProps{
size:'lg'|'md'|'sm',
color:'white'|'black'
title:string
}

const headingSize={
    'lg':'text-[2.5rem] font-medium',
    'md':'text-[2rem] font-medium',
    'sm':'text-[1rem] font-medium',
}

const headingColors={
    'white':'text-white',
    'black':'text-black'
}


export const Heading = (props:headingProps) => {
  return (
    <h2 className={`${headingSize[props.size]} ${headingColors[props.color]}`}>{props.title}</h2>
  )
}
