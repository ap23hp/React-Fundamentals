export default function SearchInput({value,onChange}){
    return (
        <>
          <input
        type="text"
        name="name"
        value={value}
        onChange={onChange}
        placeholder="Search users..."
      />
        </>
    )
}