import React from 'react'

export default function User({name, email}) {
  return (
    <div>
      {name} &lt;{email}&gt;
    </div>
  )
}

