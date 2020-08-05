import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

// import { Container } from './styles';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';


function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container" >
      <PageHeader 
        title={'Amazing you want to be a proffy!'}
        description={'First step: Fill the application form!' }
        />
        <main>
          <fieldset>
            <legend>About you</legend>
              <Input name='name' label='Fullname' />
              <Input name='avatar' label='Avatar' />
              <Input name='whatsapp' label='Whatsapp' />
              <Textarea name='bio' label='Your bio'/>
          
          </fieldset>
          <fieldset>
            <legend>About your classes</legend>
              <Select 
                name='subject' 
                label='Subject' 
                options={[
                  { value: 'Circuitos Lógicos', label: 'Circuitos Lógicos' },
                  { value: 'Biologia', label: 'Biologia' },
                  { value: 'Ciências', label: 'Ciências' },
                  { value: 'Educação Física', label: 'Educação Física' },
                  { value: 'Física', label: 'Física' },
                  { value: 'Geografia', label: 'Geografia' },
                  { value: 'História', label: 'História' },
                  { value: 'Matemática', label: 'Matemática' },
                  { value: 'Português', label: 'Português' },
                  { value: 'Química', label: 'Química' },
                ]}
                
              />
              <Input name='cost' label='Cost' />
          </fieldset>

          <fieldset>
            <legend>
              Available schedule
              <button type='button'>
                New schedule
              </button>
            </legend>
            
            <div className='schedule-item'>      
                <Select 
                  name='week-day'
                  label='Week Day' 
                  options={[
                    { value: '0', label: 'Sunday' },
                    { value: '1', label: 'Monday' },
                    { value: '2', label: 'Tuesday' },
                    { value: '3', label: 'Wednesday' },
                    { value: '4', label: 'Thursday' },
                    { value: '5', label: 'Friday' },
                    { value: '6', label: 'Saturday' },
                  ]}
                />
                <Input name='from' label='from' type='time' />
                <Input name='to' label='to' type='time' />
            </div>
          </fieldset>


          <footer>
            <p>
              <img src={warningIcon} alt='Disclaimer' />
                Disclaimer! <br/>
                Fill all data
            </p>
            <button type='button' >
              Salvar Cadastro
            </button>
          </footer>
        </main>
    </div>
  )
}

export default TeacherForm;