import React, {useEffect, useState} from 'react'
import { deleteComponent, listComponents } from '../services/ComponentService'
import { useNavigate } from 'react-router-dom'

const ListMainComponent = () => {

   const [components, setComponents] = useState([])

   const navigator = useNavigate();
      getAllComponents();
   useEffect(() => {

   }, [])

   function getAllComponents(){
      listComponents().then((response) => {
         setComponents(response.data);
      }).catch(error => {
            console.error(error);
      })

}

   function addNewComponent(){
      navigator("/add-component")
   }

   function updateComponent(id){
      navigator(`/edit-component/${id}`)
   }

   function removeComponent(id){
      console.log(id);

      deleteComponent(id).then((response) =>{

      }).catch(error => {
         console.error(error);
      })
   }

  return (
    <div className='container'>
      <h2 className='text-center'>Список компонентів</h2>
      <button className='btn btn-primary mb-2' onClick={addNewComponent}>Додати компоненту</button>
      <table className='table table-striped table-bordered'>
         <thead>
            <tr>
               <th>Вид</th>
               <th>Інвентарний номер</th>
               <th>Виробник</th>
               <th>Вільний</th>
               <th>Дії</th>
            </tr>
         </thead>
         <tbody>
            {
               components.map(component =>
                  <tr key={component.id}>
                      <td>{component.type}</td>
                      <td>{component.inventory_number}</td>
                      <td>{component.manufacturer}</td>
                      <td>{component.single}</td>
                      <td>
                        <button className='btn btn-info' 
                        onClick={() => updateComponent(component.id)}>Оновити компоненту</button>
                        <button className='btn btn-danger' 
                        onClick={() => removeComponent(component.id)}
                           style={{marginLeft: '10px'}}
                        >Видалити компоненту</button>
                      </td>
                  </tr>
               )
            }
         </tbody>
      </table>
    </div>
  )
}

export default ListMainComponent