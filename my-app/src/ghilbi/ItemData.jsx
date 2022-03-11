function ItemData ({ data }) {
    return (
      <tr>
        <td>{data.title}</td>
        <td>{data.release_date}</td>
        <td>{data.director}</td>
        <td>{data.description}</td>
      </tr>
    );
  }
  
  export default ItemData;