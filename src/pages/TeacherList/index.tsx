import React, { useState, FormEvent } from 'react';

import TeacherItem, { Teacher } from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';

// import { Container } from './styles';


import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

import './styles.css';


function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');


  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject, week_day, time,
      },
    });

    setTeachers(response.data);
  }


  return  (
    <div id="page-teacher-list" className="container" >
      <PageHeader title={'Esses são os nossos proffys.'}>
        <form action="" id="search-teachers" onSubmit={searchTeachers}>
          <Select 
            name='subject'
            label='Disciplina'
            value={subject}
            onChange={(e) => { setSubject(e.target.value) }} 
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Circuitos Lógicos', label: 'Circuitos Lógicos' },
              { value: 'programação', label: 'Programação' },
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
            label='Dia da Semana' 
            value={week_day}
            onChange={(e) => { setWeekDay(e.target.value) }} 
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda' },
              { value: '2', label: 'Terça' },
              { value: '3', label: 'Quarta' },
              { value: '4', label: 'Quinta' },
              { value: '5', label: 'Sexta' },
              { value: '6', label: 'Sábado' },
            ]}
          />
          <Input 
            type='time' 
            name='time' 
            label='Horário Disponível'
            value={time}
            onChange={(e) => { 
              setTime(e.target.value)
            }} 
          />

          <button type='submit'>
            Buscar
          </button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
    )
}

export default TeacherList;