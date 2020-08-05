import React from 'react';

import TeacherItem from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';

// import { Container } from './styles';

import './styles.css';
import Input from '../../components/Input';
import Select from '../../components/Select';

function TeacherList() {
  return  (
    <div id="page-teacher-list" className="container" >
      <PageHeader title={'These are the available proffys.'}>
        <form action="" id="search-teachers">
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
          <Input type='time' name='time' label='Available time' />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
    )
}

export default TeacherList;