/* eslint-disable react/prop-types */


function Button(props) {
    const {text, color, type="button", onClick} = props
    return (
      // <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
      
      <button className={`h-10 px-4 mx-4 w-fit font-semibold rounded-md ${color} text-white my-4 `}
        type={type} 
        onClick={onClick}
      >
        {text} 
      </button>
    );
  }

export default Button