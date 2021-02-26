function ListProducts( {ListSanPham,
    btnUpdateOnclick,
    btnOnClickDelete}){
  return (
    <div className=" mt-5 d-flex justify-content-center">
    <table className="table table-striped col-8">
      <thead className="table-dark">
        <tr>
          <td>ID</td>
          <td>Tên SP</td>
          <td>Giá SP</td>
          <td>Thao tác</td>
        </tr>
      </thead>
      <tbody>{
        ListSanPham.map(function (value, index) {
          return (
            <tr key={index}>
              <td>{ value.id }</td>
              <td>{ value.ten_san_pham }</td>
              <td>{ value.gia_san_pham }</td>
              <td>
                <button onClick= {function(event){
                  btnUpdateOnclick(event,value,index);
                }}
                className="btn btn-primary">Update</button>
                <button
                 className="btn btn-secondary ml-4"
                 onClick={function (event){
                   btnOnClickDelete(event, value, index);
                 }}
                 >
                   Delete</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
  );
}
export default ListProducts;