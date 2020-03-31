import React, { Component } from 'react';  
import ReactTable from "react-table";  
import {
    useTable
    
    } from 'react-table'
  
class Table extends Component {  
  render() {  
      
     const data = [{  
        name: 'Anuj',  
        age: 26  
        },{  
         name: 'Atul',  
         age: 22  
         },{  
         name: 'vipul',  
         age: 40      
         },{  
         name: 'sumit',  
         age: 30  
         },{  
         name: 'Rohit',  
         age: 32  
         },{  
         name: 'vinod',  
         age: 37  
         }]  
     const columns = [{  
       Header: 'Name',  
       accessor: 'name'  
       },{  
       Header: 'Age',  
       accessor: 'age'  
       }]  
    return (  
          <div>  
              <ReactTable  
                  data={data}  
                  columns={columns}  
                  defaultPageSize = {2}  
                  pageSizeOptions = {[2,4, 6]}  
              />  
          </div>        
    )  
  }  
}  
export default Table;  