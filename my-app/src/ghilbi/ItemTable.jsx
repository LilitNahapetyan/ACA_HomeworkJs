import ItemData from "./ItemData";
function ItemTable({data}){
    return(
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Release Date</th>
              <th>Director</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => 
              <ItemData
                key={item.id}
                data={item}
              />
            )}
          </tbody>
        </table>     
    )
}

export default ItemTable;