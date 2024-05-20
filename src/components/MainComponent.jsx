import React, { useEffect, useState } from 'react';
import { createComponent, getComponent, updateComponent } from '../services/ComponentService';
import { useNavigate, useParams } from 'react-router-dom';
import './styles.css'; // Import your CSS file

const MainComponent = () => {
  const [type, setType] = useState('');
  const [inventory_number, setInventoryNumber] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [single, setSingle] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();
  const [errors, setErrors] = useState({
    type: '',
    inventory_number: '',
    manufacturer: '',
    single: ''
  });

  useEffect(() => {
    if (id) {
      getComponent(id).then((response) => {
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

  function saveOrUpdateComponent(e) {
    e.preventDefault();

    if (validateForm()) {
      const component = { type, inventory_number, manufacturer, single };
      console.log(component);

      if (id) {
        updateComponent(id, component).then((response) => {
          console.log(response.data);
          navigate('/components');
        }).catch(error => {
          console.error(error);
        });
      } else {
        createComponent(component).then((response) => {
          console.log(response.data);
          navigate('/components');
        }).catch(error => {
          console.error(error);
        });
      }
    }
  }

function goBack(e) {
    e.preventDefault();
    navigate('/components');
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

    setErrors(errorsCopy);
    return valid;
  }

  function pageTitle() {
    if (id) {
      return <h2 className='form-title'>Оновити компоненту</h2>;
    } else {
      return <h2 className='form-title'>Додати компоненту</h2>;
    }
  }

  return (
    <div className='container'>
      {pageTitle()}
      <form onSubmit={saveOrUpdateComponent}>
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
          <label className='form-label'>Вільний:</label>
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
        <button type='submit' className='btn-submit'>Підтвердити</button>
        <br/><br/>
        <button className='btn btn-primary mb-2' onClick={goBack}>Повернутись назад</button>
      </form>
    </div>
  );
};

export default MainComponent;
