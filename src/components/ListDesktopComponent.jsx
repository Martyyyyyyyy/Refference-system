import React, {useEffect, useState} from 'react'
import { deleteDesktop, listDesktops } from '../services/DesktopService'
import { useNavigate } from 'react-router-dom'

const ListDesktopComponent = () => {

   const [desktops, setDesktops] = useState([])

   const navigator = useNavigate();
      getAllDesktops();
   useEffect(() => {

   }, [])

   function getAllDesktops(){
      listDesktops().then((response) => {
         setDesktops(response.data);
      }).catch(error => {
            console.error(error);
      })

}

   function addNewDesktop(){
      navigator("/add-desktop")
   }

   function updateDesktop(id){
      navigator(`/edit-desktop/${id}`)
   }

   function removeDesktop(id){
      console.log(id);

      deleteDesktop(id).then((response) =>{

      }).catch(error => {
         console.error(error);
      })
   }

  return (
    <div className='container'>
      <h2 className='text-center'>Список комп'ютерів</h2>
      <button className='btn btn-primary mb-2' onClick={addNewDesktop}>Додати комп'ютер</button>
      <table className='table table-striped table-bordered'>
         <thead>
            <tr>
               <th>Назва комп'ютера</th>
               <th>Організація</th>
               <th>Дії</th>
            </tr>
         </thead>
         <tbody>
            {
               desktops.map(desktop =>
                  <tr key={desktop.id}>
                      <td>{desktop.name}</td>
                      <td>{desktop.organization}</td>
                      <td>
                        <button className='btn btn-info' 
                        onClick={() => updateDesktop(desktop.id)}>Оновити комп'ютер</button>
                        <button className='btn btn-danger' 
                        onClick={() => removeDesktop(desktop.id)}
                           style={{marginLeft: '10px'}}
                        >Видалити комп'ютер</button>
                      </td>
                  </tr>
               )
            }
         </tbody>
      </table>
    </div>
  )
}

export default ListDesktopComponent