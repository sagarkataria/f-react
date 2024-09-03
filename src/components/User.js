import { useState } from "react"

const User = ({name}) => {
    const {count1} = useState(0)
    const {count2} = useState(1)
    return (
          <div>
           
            <h1>Count1: {count1}</h1>
            <h1>Count2: {count2}</h1>
            <h1>{name}</h1>
            <h1>This is Namste React Series</h1>
          </div>
    )
}

export default User