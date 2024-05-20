import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteComputer, listComputers } from '../services/ComputerService';
import './Computer.css'; // Import the CSS file

const ListComputerComponent = () => {
  const [computers, setComputers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllComputers();
  }, []);

  function getAllComputers() {
    listComputers()
      .then((response) => {
        setComputers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewComputer() {
    navigate('/add-computer');
  }

  function updateComputer(id) {
    navigate(`/edit-computer/${id}`);
  }

  function removeComputer(id) {
    console.log(id);

    deleteComputer(id)
      .then((response) => {
        // Update the state after successful deletion
        setComputers(computers.filter((computer) => computer.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className='container'>
      <h2>Список компонентів в комп'ютері</h2>
      <button className='btn btn-primary mb-2' onClick={addNewComputer}>
      Додати компоненту
      </button>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
               <th>Вид</th>
               <th>Інвентарний номер</th>
               <th>Виробник</th>
               <th>Належить одному комп'ютеру</th>
               <th>Назва комп'ютера</th>
               <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {computers.map((computer) => (
            <tr key={computer.id}>
              <td>{computer.type}</td>
              <td>{computer.inventory_number}</td>
              <td>{computer.manufacturer}</td>
              <td>{computer.single}</td>
              <td>{computer.computer_name}</td>
              <td>
                <button className='btn btn-info' onClick={() => updateComputer(computer.id)}>
                  Оновити компоненту
                </button>
                <button className='btn btn-danger' onClick={() => removeComputer(computer.id)}>
                  Видалити компоненту
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListComputerComponent;
