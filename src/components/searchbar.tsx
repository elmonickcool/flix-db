export default function SearchBar() {
    return (
      <>
      <form>
        <input type="text" className="form-input px-4 py-3 rounded-full text-black border" placeholder="Search a Movie" />
        <input type="submit" className="rounded-full"/>
      </form>
      </>
    );
  }
  