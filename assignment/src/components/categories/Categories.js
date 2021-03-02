
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
function Categories() {
    const formDataInit = { id: '', ten_sp: '', so_luong: '', trang_thai: '' };
    const [formData, setFormData] = useState(formDataInit);
    const [clickRow, setClickRow] = useState(-1);
    const urlParams = new URLSearchParams(window.location.search);
    let pageInit = urlParams.get('page') != null ? parseInt(urlParams.get('page')) : 1;
    const [page, setPage] = useState(pageInit);
    const limit = 10;
    const [ListDanhMuc, setListDanhMuc] = useState([]);
    const urlDanhmuc = "https://601246c684695f0017779f0a.mockapi.io/Categories?limit=" + limit + "&page=" + page;
    useEffect(() => {
        axios.get(urlDanhmuc)
            .then(function (response) {
                const { data } = response;
                setListDanhMuc(data);
            })
            .catch((error) => {
                console.log(error, error.response);
            });
    }, [
        page,
    ]);
    const url = "https://601246c684695f0017779f0a.mockapi.io/Categories/";
    const onCreate = function () {
        if (formData.ten_sp === "") {
            alert("Thông tin không hợp lệ");
            return;
        }
        else {
            axios.post(url, formData)
                .then(function (response) {
                    const { data } = response;
                    setListDanhMuc([
                        ...ListDanhMuc,
                        data,
                    ]);
                    setFormData(formDataInit);
                })
                .catch(function (error) {
                    console.log(error);
                })
            alert("Lưu thành công");
        }
    }
    const onUpdate = function () {
        if (formData.ten_sp === "") {
            alert("Thông tin không hợp lệ");
            return;
        }
        else {
            const url = "https://601246c684695f0017779f0a.mockapi.io/Categories/" + formData.id;
            axios.put(url, formData)
                .then(function (response) {
                    const { data } = response;
                    const list = ListDanhMuc.map(function (val, idx) {
                        if (idx === clickRow) { return data; console.log(data); }
                        else { return val; }
                    });
                    setListDanhMuc(list);
                    setClickRow(-1);
                    setFormData(formDataInit);
                })
                .catch(function (error) {
                    console.log(error);
                })
            alert("Cập nhật thành công");
        }

    }
    const onSubmitHandler = function (event) {
        event.preventDefault();
        if (clickRow === -1) {
            onCreate();
        } else { onUpdate(); }
    }
    const formInputOnchange = function (event) {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    const btnOnClickDelete = function (event, value, index) {
        axios.delete(url + value.id)
            .then(function (response) {
                const list = ListDanhMuc.filter(function (val, idx) {
                    return idx === index ? false : true;
                });
                setListDanhMuc(list);
                alert("Xóa thành công");
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    const btnXoaFormOnClick = function (event) {
        event.preventDefault();
        setFormData(formDataInit);
        setClickRow(-1);
    }
    const btnUpdateOnclick = function (event, value, index) {
        setFormData(value);
        console.log(value);
        setClickRow(index);
    }

    const nextPage = function (evevt) {
        setPage(page + 1);
        console.log(page);
    }
    const prevPage = function (event) {
        if (page == 1) { return; }
        setPage(page - 1);
    }
    const [filtername, setFilterName] = useState("");
    const onFilter = function (event) {
        const { name, value } = event.target;
        setFilterName(value);
    };
    const [loai_sp, setCbxGia] = useState("0");
    const onCbx = function (event) {
        const { name, value } = event.target;
        setCbxGia(value);
    }
    return (
        <div>
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
                            <input value={formData.ten_sp} onChange={formInputOnchange} type="text" name="ten_sp" className="form-control"></input>
                        </div>
                    </div>

                    {/* <div className="form-group row">
                        <label className="col-2 col-form-label">Số lượng</label>
                        <div className="col-10">
                            <input value={formData.so_luong} onChange={formInputOnchange} type="number" name="so_luong" className="form-control"></input>
                        </div>
                    </div> */}
                    <div className="form-group row">
                        <label className="col-2 col-form-label">Trạng thái</label>
                        <div className="col-10">
                            {/* <input value={formData.trang_thai} onChange={formInputOnchange} type="text" name="trang_thai" className="form-control"></input> */}
                            <select name="trang_thai" value={formData.trang_thai} className="form-control" aria-label="Default select example" onChange={formInputOnchange}>
                                <option value='true'>Đang bán</option>
                                <option value='false'>Ngừng bán</option>
                            </select>
                        </div>

                    </div>
                    <div className="mb-3 d-flex justify-content-center">
                        <button className="btn btn-primary">Lưu</button>
                        <button onClick={btnXoaFormOnClick} type="reset" className="btn btn-primary ml-4">Xóa Form</button>
                    </div>
                </form>
            </div>
            <div className=" mt-6 d-flex justify-content-center row">
                <div className="col-2"></div>
                <table className="table table-striped col-8">

                    <thead className="table-info">
                        <tr>
                            <td>Id</td>
                            <td>Tên SP</td>
                            {/* <td>Số lượng</td> */}
                            <td>Trạng thái</td>
                            <td>Thao tác</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td><input type="text" name="filtername" className="form-control" onChange={onFilter}></input></td>
                            <td><select name="loai_sp" className="form-control" onChange={onCbx}>
                                <option value='0'>Tất cả</option>
                                <option value='1'>Iphone</option>
                                <option value='2'>Samsung</option>
                                <option value='3'>Oppo</option>
                            </select></td>
                            <td></td>
                        </tr>{
                            ListDanhMuc.filter((val, idx) => {
                                return val.ten_sp.toLowerCase().indexOf(filtername) !== -1;
                            })
                                .filter((val, idx) => {
                                    if (loai_sp === "0") { return true; }
                                    else if (loai_sp === "1") { return val.ten_sp.toLowerCase().indexOf("iphone") !== -1; }
                                    else if (loai_sp === "2") { return val.ten_sp.toLowerCase().indexOf("samsung") !== -1; }
                                    else if (loai_sp === "3") { return val.ten_sp.toLowerCase().indexOf("oppo") !== -1; }
                                })
                                .map(function (value, index) {
                                    return (
                                        <tr key={index}>
                                            <td>{value.id}</td>
                                            <td>{value.ten_sp}</td>
                                            {/* <td>{value.so_luong}</td> */}
                                            <td>{value.trang_thai == "true" ? "Đang bán" : "Ngừng bán"}</td>
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
                <ul className="pagination d-flex justify-content-center">
                    <li
                        className="page-item"
                        onClick={prevPage}>
                        <a className="page-link" href="#">Trang Trước</a>
                    </li>
                    <li
                        className="page-item">
                        <a className="page-link" href="#">{page}</a>
                    </li>
                    <li
                        className="page-item"
                        onClick={nextPage}>
                        <a class="page-link" href="#">Trang Sau</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Categories;