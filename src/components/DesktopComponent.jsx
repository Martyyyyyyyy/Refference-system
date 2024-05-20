import React, { useEffect, useState } from 'react';
import { createDesktop, getDesktop, updateDesktop } from '../services/DesktopService';
import { useNavigate, useParams } from 'react-router-dom';
import './styles.css'; // Import your CSS file

const DesktopComponent = () => {
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    organization: '',
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getDesktop(id).then((response) => {
        setName(response.data.name);
        setOrganization(response.data.organization);
      }).catch(error => {
        console.error(error);
      });
    }
  }, [id]);

  function handleName(e) {
    setName(e.target.value);
  }

  function handleOrganization(e) {
    setOrganization(e.target.value);
  }

  function saveOrUpdateDesktop(e) {
    e.preventDefault(); 

    if (validateForm()) {
      const desktop = { name, organization };
      console.log(desktop);

      if (id) {
        updateDesktop(id, desktop).then((response) => {
          console.log(response.data);
          navigate('/desktops');
        }).catch(error => {
          console.error(error);
        });
      } else {
        createDesktop(desktop).then((response) => {
          console.log(response.data);
          navigate('/desktops');
        }).catch(error => {
          console.error(error);
        });
      }
    }
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    if (name.trim()) {
      errorsCopy.name = '';
    } else {
      errorsCopy.name = "Поле є обов'язковим";
      valid = false;
    }

    if (organization.trim()) {
      errorsCopy.organization = '';
    } else {
      errorsCopy.organization = "Поле є обов'язковим";
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  function pageTitle() {
    if (id) {
      return <h2 className='text-center'>Оновити комп'ютер</h2>;
    } else {
      return <h2 className='text-center'>Додати комп'ютер</h2>;
    }
  }

  function goBack(e) {
    e.preventDefault();
    navigate('/desktops');
  }

  return (
    <div className='container'>
      <div className='form-title'>
        {pageTitle()}
      </div>
      <form onSubmit={saveOrUpdateDesktop}>
        <div className='form-group'>
          <label className='form-label'>Назва комп'ютера:</label>
          <input
            type='text'
            placeholder="Введіть назву комп'ютера"
            name='name'
            value={name}
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            onChange={handleName}
          />
          {errors.name && <div className='invalid-feedback'> {errors.name} </div>}
        </div>
        <div className='form-group'>
          <label className='form-label'>Організація:</label>
          <input
            type='text'
            placeholder='Введіть організацію'
            name='organization'
            value={organization}
            className={`form-control ${errors.organization ? 'is-invalid' : ''}`}
            onChange={handleOrganization}
          />
          {errors.organization && <div className='invalid-feedback'> {errors.organization} </div>}
        </div>
        <button type='submit' className='btn-submit'>Підтвердити</button>
        <br/><br/>
        <button className='btn btn-primary mb-2' onClick={goBack}>Повернутись назад</button>
      </form>
    </div>
  );
}

export default DesktopComponent;
