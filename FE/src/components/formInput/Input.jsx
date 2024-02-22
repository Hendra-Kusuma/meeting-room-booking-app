const Input = (props) => {
const {type, id, placeholder, name} = props

    return (
        <input
              type= {type}
              id= {id}
              className="mt-1 px-4 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder={placeholder}
              name={name}
            />
    )
}

export default Input

