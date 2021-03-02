
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ListProducts from './ListProducts';
import FormProducts from './FormProducts';
function Products(){
    const formDataInit={id:'',ten_san_pham:'',gia_san_pham:''};
    const [ListSanPham, setListSanPham] = useState([]);
    const [formData, setFormData]= useState(formDataInit);
    const [clickRow, setClickRow]= useState(-1);
    const urlParams = new URLSearchParams(window.location.search);
    let pageInit = urlParams.get('page') != null ? parseInt(urlParams.get('page')) : 1;
    const [page, setPage] = useState(pageInit);
    const limit = 10;
    const urlPage = "https://601246c684695f0017779f0a.mockapi.io/my-products?limit=" + limit + "&page=" + page;
    useEffect(() => {
        axios.get(urlPage)
        .then(function (response) {
          const { data } = response;
          setListSanPham(data);
        })
            .catch((error) => {
                console.log(error, error.response);
            });
    }, [
        page,
    ]);
    const url = "https://601246c684695f0017779f0a.mockapi.io/my-products/";
    // useEffect(function () {
    //   axios.get(url)
    //     .then(function (response) {
    //       const { data } = response;
    //       setListSanPham(data);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // }, []);
     const onCreate =function(){
      axios.post(url,formData)
      .then(function (response){
          const {data}=response;
          setListSanPham([
            ...ListSanPham,
            data,
          ]);
          setFormData(formDataInit);
      })
      .catch(function (error){
        console.log(error);
      })
     }
     const onUpdate= function(){
        const url = "https://601246c684695f0017779f0a.mockapi.io/my-products/"+formData.id;
       axios.put(url,formData)
       .then(function (response){
        const {data}=response;
        const list=ListSanPham.map(function(val,idx){
           if(idx === clickRow){return data;}
           else{ return val;}
        });
        setListSanPham(list);
        setClickRow(-1);
        setFormData(formDataInit);
    })
    .catch(function (error){
      console.log(error);
    })
     }
    const onSubmitHandler= function(event){
      event.preventDefault();
     if(clickRow=== -1){
      onCreate();
     } else {onUpdate();}
    }
     
    const formInputOnchange=function(event){
      const {name, value}=event.target;
         setFormData({
           ...formData,
           [name]: value,
         })
    }
    const btnOnClickDelete =function(event,value, index){
      axios.delete(url+ value.id)
      .then(function (response){
        const list= ListSanPham.filter(function (val,idx){
            return idx=== index ? false : true;  
         });
         setListSanPham(list);
      })
      .catch(function (error){
        console.log(error);
      })
    } 
    const btnXoaFormOnClick= function (event){
      event.preventDefault();
      setFormData(formDataInit);
      setClickRow(-1);
    }
    const btnUpdateOnclick= function (event,value,index){
       setFormData(value);
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
    return (
        
      <div className="App">
          
           <FormProducts
             onCreate={onCreate}
             onSubmitHandler={onSubmitHandler}
             formData={formData}
             formInputOnchange={formInputOnchange}
             btnXoaFormOnClick={btnXoaFormOnClick}
           />
           <ListProducts
           ListSanPham= {ListSanPham}
           btnUpdateOnclick={btnUpdateOnclick}
           btnOnClickDelete={btnOnClickDelete}
           prevPage={prevPage}
           nextPage={nextPage}
           page={page}
           />
          
      </div>
    );
}
export default Products;