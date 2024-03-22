import React from 'react';
import "../dupeStyles.css"

export default function Menu(props) {
  return (
    <div className={props.styling}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-chevron-right"><circle cx="12" cy="12" r="10"/><path d="m10 8 4 4-4 4"/></svg>
    </div>
  )
}
