import React from 'react'

const CustomerInput = (props) => {
  const{type,name,placeholder,classname} = props;
  return (
      <div className="">
        <input type={type} name={name} placeholder={placeholder} className={`'form-control' ${classname}`} />
      </div>
  )
}

export default CustomerInput