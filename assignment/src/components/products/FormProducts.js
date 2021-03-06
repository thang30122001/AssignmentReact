
function FormProducts({onSubmitHandler,
    formData,
    formInputOnchange,
    btnXoaFormOnClick}){
    return(
        <div className="mt-5 d-flex justify-content-center">
        <form className="col-6" onSubmit={onSubmitHandler}>
          <div className="form-group row">
            <label className="col-2 col-form-label">ID</label>
            <div className="col-10">
              <input value={formData.id} onChange={formInputOnchange} disabled type="text" name="id" className="form-control"></input>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-2 col-form-label">Tên SP</label>
            <div className="col-10">
              <input value={formData.ten_san_pham} onChange={formInputOnchange} type="text" name="ten_san_pham" className="form-control"></input>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-2 col-form-label">Giá (VNĐ)</label>
            <div className="col-10">
              <input value={formData.gia_san_pham} onChange={formInputOnchange} type="number" name="gia_san_pham" className="form-control"></input>
            </div>
          </div>
          <div>
            <button className="btn btn-primary">Lưu</button>
            <button onClick={btnXoaFormOnClick} type="reset" className="btn btn-primary ml-4">Xóa Form</button>
          </div>
        </form>
      </div>
    );
}
export default FormProducts;