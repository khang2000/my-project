const Nav = () => {
  return (
    <div className="nav">
      <form>
        <label for="user">Hiển thị</label>
        <select id="user">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </form>
      <form>
        <label for="search">Search:</label>
        <input id="search"></input>
      </form>
    </div>
  );
};

export default Nav;
