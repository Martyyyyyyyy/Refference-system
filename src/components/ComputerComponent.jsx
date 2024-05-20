import React, { useEffect, useState } from 'react';
import { createComputer, getComputer, updateComputer } from '../services/ComputerService';
import { useNavigate, useParams } from 'react-router-dom';
import './styles.css'; // Import your CSS file

const ComputerComponent = () => {
  const [type, setType] = useState('');
  const [inventory_number, setInventoryNumber] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [single, setSingle] = useState('');
  const [computer_name, setComputerName] = useState('');
  const [errors, setErrors] = useState({
    type: '',
    inventory_number: '',
    manufacturer: '',
    single: '',
    computer_name: ''
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getComputer(id).then((response) => {
        setType(response.data.type);
        setInventoryNumber(response.data.inventory_number);
        setManufacturer(response.data.manufacturer);
        setSingle(response.data.single);
      }).catch(error => {
        console.error(error);
      });
    }
  }, [id]);

  function handleType(e) {
    setType(e.target.value);
  }

  function handleInventoryNumber(e) {
    setInventoryNumber(e.target.value);
  }

  function handleManufacturer(e) {
    setManufacturer(e.target.value);
  }

  function handleSingle(e) {
    setSingle(e.target.value);
  }

  function handleComputerName(e) {
    setComputerName(e.target.value);
  }

  function saveOrUpdateComputer(e) {
    e.preventDefault();

    if (validateForm()) {
      const computer = { type, inventory_number, manufacturer, single, computer_name };
      console.log(computer);

      if (id) {
        updateComputer(id, computer).then((response) => {
          console.log(response.data);
          navigate('/componentsInComputer');
        }).catch(error => {
          console.error(error);
        });
      } else {
        createComputer(computer).then((response) => {
          console.log(response.data);
          navigate('/componentsInComputer');
        }).catch(error => {
          console.error(error);
        });
      }
    }
  }

  function goBack(e) {
    e.preventDefault();
    navigate('/componentsInComputer');
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    if (type.trim()) {
      errorsCopy.type = '';
    } else {
      errorsCopy.type = "Поле є обов'язковим";
      valid = false;
    }

    if (inventory_number.trim()) {
      errorsCopy.inventory_number = '';
    } else {
      errorsCopy.inventory_number = "Поле є обов'язковим";
      valid = false;
    }

    if (manufacturer.trim()) {
      errorsCopy.manufacturer = '';
    } else {
      errorsCopy.manufacturer = "Поле є обов'язковим";
      valid = false;
    }

    if (single.trim()) {
      errorsCopy.single = '';
    } else {
      errorsCopy.single = "Поле є обов'язковим";
      valid = false;
    }

    if (computer_name.trim()) {
      errorsCopy.computer_name = '';
    } else {
      errorsCopy.computer_name = "Поле є обов'язковим";
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  return (
    <div className='container'>
      <div className='form-title'>
        {id ? 'Оновити компоненту у комп\'ютері' : 'Додати компоненту у комп\'ютер'}
      </div>
      <form onSubmit={saveOrUpdateComputer}>
        <div className='form-group'>
          <label className='form-label'>Вид:</label>
          <input
            type='text'
            placeholder='Введіть вид'
            name='type'
            value={type}
            className={`form-control ${errors.type ? 'is-invalid' : ''}`}
            onChange={handleType}
          />
          {errors.type && <div className='invalid-feedback'> {errors.type} </div>}
        </div>
        <div className='form-group'>
          <label className='form-label'>Інвентарний номер:</label>
          <input
            type='text'
            placeholder='Введіть інвентарний номер'
            name='inventory_number'
            value={inventory_number}
            className={`form-control ${errors.inventory_number ? 'is-invalid' : ''}`}
            onChange={handleInventoryNumber}
          />
          {errors.inventory_number && <div className='invalid-feedback'> {errors.inventory_number} </div>}
        </div>
        <div className='form-group'>
          <label className='form-label'>Виробник:</label>
          <input
            type='text'
            placeholder='Введіть виробника'
            name='manufacturer'
            value={manufacturer}
            className={`form-control ${errors.manufacturer ? 'is-invalid' : ''}`}
            onChange={handleManufacturer}
          />
          {errors.manufacturer && <div className='invalid-feedback'> {errors.manufacturer} </div>}
        </div>
        <div className='form-group'>
          <label className='form-label'>Належить одному комп'ютеру:</label>
          <input
            type='text'
            placeholder='Введіть так або ні'
            name='single'
            value={single}
            className={`form-control ${errors.single ? 'is-invalid' : ''}`}
            onChange={handleSingle}
          />
          {errors.single && <div className='invalid-feedback'> {errors.single} </div>}
        </div>
        <div className='form-group'>
          <label className='form-label'>Назва комп'ютера:</label>
          <input
            type='text'
            placeholder="Введіть назву комп'ютера"
            name='computer_name'
            value={computer_name}
            className={`form-control ${errors.computer_name ? 'is-invalid' : ''}`}
            onChange={handleComputerName}
          />
          {errors.computer_name && <div className='invalid-feedback'> {errors.computer_name} </div>}
        </div>
        <button type='submit' className='btn-submit'>Підтвердити</button>
        <br/><br/>
        <button className='btn btn-primary mb-2' onClick={goBack}>Повернутись назад</button>
      </form>
    </div>
  );
}

export default ComputerComponent;
