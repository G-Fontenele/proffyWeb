import React from 'react';

import wppIcon from '../../assets/images/icons/whatsapp.svg';

// import { Container } from './styles';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
        <article className='teacher-item'>
            <header>
            <img src='https://avatars1.githubusercontent.com/u/54777894?s=460&u=593935bf87ddc04cfd871a2402daeb9c1104a190&v=4' alt='user' />
            <div>
                <strong>
                Gonçalo Fontenele
                </strong>
                <span>
                Matemática
                </span>

                <p>
                Proffy mais louco.
                <br /><br />
                Professor é o membro do Magistério que exerce atividade docente, oportunizando a educação do aluno, cujas atribuições do cargo encontram-se elencadas no Decreto Nº 23.354, de 11 de outubro de 1974,os deveres relacionados no artigo 120, da Lei 6.672/74, as incumbências
                </p>

                <footer>
                <p>
                    Monitor
                    <strong>
                    Voluntário
                    </strong>
                </p>
                <button type='button'>
                    <img src={wppIcon} alt='Whatsapp Icon' />
                    Call Proffy
                </button>
                </footer>
            </div>
        </header>

    </article>
  )
}

export default TeacherItem;