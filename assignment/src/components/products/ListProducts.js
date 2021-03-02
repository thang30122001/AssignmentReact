import { useState } from "react";

function ListProducts({ ListSanPham,
  btnUpdateOnclick,
  btnOnClickDelete,
  prevPage, nextPage, page }) {
  const [filtername, setFilterName] = useState("");
  const onFilter = function (event) {
    const { name, value } = event.target;
    setFilterName(value);
  };
  return (
    <div className=" mt-5 d-flex justify-content-center row">

      <div className="col-2"></div>
      <table className="table table-striped col-8">
        <thead className="table-info">
          <tr>
            <td>ID</td>
            <td>Tên SP</td>
            <td>Giá SP</td>
            <td>Thao tác</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td><input type="text" name="filtername" className="form-control" onChange={onFilter}></input></td>
            <td><select name="gia_san_pham" className="form-control">
              <option value='0'>Tất cả</option>
              <option value='1'>{"0 => 10 triệu"}</option>
              <option value='2'>{"10 => 20 triệu"}</option>
            </select></td>
            <td></td>
          </tr>
          {


            ListSanPham.filter((val, idx) => {
              return val.ten_san_pham.toLowerCase().indexOf(filtername) !== -1;
            })
              .map(function (value, index) {
                return (
                  <tr key={index}>
                    <td>{value.id}</td>
                    <td>{value.ten_san_pham}</td>
                    <td>{value.gia_san_pham}</td>
                    <td>
                      <button onClick={function (event) {
                        btnUpdateOnclick(event, value, index);
                      }}
                        className="btn btn-primary">Cập nhật</button>
                      <button
                        className="btn btn-secondary ml-4"
                        onClick={function (event) {
                          btnOnClickDelete(event, value, index);
                        }}
                      >
                        Xóa</button>
                    </td>
                  </tr>
                )
              })}
        </tbody>

      </table>
      <div className="col-2"></div>
      <ul class="pagination ">
        <li
          class="page-item"
          onClick={prevPage}>
          <a class="page-link" href="#">Trang Trước</a>
        </li>
        <li
          class="page-item">
          <a class="page-link" href="#">{page}</a>
        </li>
        <li
          class="page-item"
          onClick={nextPage}>
          <a class="page-link" href="#">Trang Sau</a>
        </li>
      </ul>
    </div>

  );
}
export default ListProducts;