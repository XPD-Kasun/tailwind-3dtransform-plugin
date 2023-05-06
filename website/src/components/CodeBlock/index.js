import React from "react"

function CodeBlock({children, className}) {
       return (
              <div className={className}>
                     {children}
              </div>
       )
}

export default CodeBlock;