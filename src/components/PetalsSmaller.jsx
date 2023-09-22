import React from 'react'

function PetalsSmaller(props) {
  return (
    <>
        <div className={`flower-alt${props.variante}`}>
      <div className={`petal-alt${props.variante}`}></div>
    </div>
    </>
  )
}

export default PetalsSmaller