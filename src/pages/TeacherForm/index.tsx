import React, { useState, FormEvent } from 'react';

import { useHistory } from 'react-router-dom';


import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

// import { Container } from './styles';

import warningIcon from '../../assets/images/icons/warning.svg';

import api from '../../services/api';

import './styles.css';


function TeacherForm() {
  const history = useHistory();

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: '0', from: '', to: '' }
  ]);

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: '0', from: '', to: '' }
    ])
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }
  
  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems,
    }).then(() => {
      alert('Cadastro realizado com sucesso!');

      history.push('/');
    }).catch(() => {
      alert('Erro no Cadastro!');
    })

    console.log({
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      scheduleItems,
    })
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title={'Amazing you want to be a proffy!'}
        description={'First step: Fill the application form!' }
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>About You</legend>

            <Input
              name="name"
              label="Fullname"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={e => setAvatar(e.target.value)}
            />
            <Input
              name="whatsapp"
              label="Whatsapp"
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
            />
            <Textarea
              name="bio"
              label="Bio"
              value={bio}
              onChange={e => setBio(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>About your classes</legend>

            <Select
              name="subject"
              label="Subject"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              options={[
                { value: 'Artes', label: 'Artes' },
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
            <Input
              name="cost"
              label="Cost"
              value={cost}
              onChange={e => setCost(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>
              Available Schedule
              <button type="button" onClick={addNewScheduleItem}>
                + New Schedule
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Week Day"
                    onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                    value={scheduleItem.week_day}
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
                  <Input
                    name="from"
                    label="From"
                    type="time"
                    onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                    value={scheduleItem.from}
                  />
                  <Input
                    name="to"
                    label="To"
                    type="time"
                    onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                    value={scheduleItem.to}
                  />
                </div>
              )
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Disclaimer"/>
              Disclaimer! <br />
              Fill All data!
            </p>
            <button type="submit">Join</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;