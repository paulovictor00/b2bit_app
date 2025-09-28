import React from 'react'

export default function Logo({ className = '' }: { className?: string }){
return (
<div className={`flex items-center justify-center ${className}`} aria-label="b2bit logo">
{/* Use a imagem local se preferir: <img src="/src/assets/b2bit-logo.png" .../> */}
  <span className="text-5xl font-black tracking-tight">
    <span className="text-[#022744]">b2b</span>
    <span className="text-[#FDCF00]">it</span>
  </span>
</div>
)
}
