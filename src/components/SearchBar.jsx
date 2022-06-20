function Searchbar(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onTextSubmit();
    }

    const handleChange = (e) => {
        props.onTextChange(e.target.value);
    }

    return ( 
        <form className="search-cont" onSubmit={handleSubmit}>
            <input
                type="text"
                className="inp"
                placeholder="search pokemon..."
                value={props.text}
                onChange={handleChange}
            />
        </form>
     );
}

export default Searchbar;