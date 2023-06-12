import React from 'react';
import '../ForWhom/forWhom.css';

export default function ForWhom(){

    const persons=[
        {title:'Рекламные агентства и партнеры',
            text: 'которым нужно работать с большим количеством клиентов и рекламных аккаунтов',
            img: require('../../icons/group.png') },
        {title: 'IT-компании,',
            text:'которым нужна гибкость и оперативность в работе с рекламными бюджетами',
            img: require('../../icons/computer.png')},
        {title: 'Крупные рекламодатели',
            text:'которым нужен надежный и стабильный digital-партнер и высокий уровень сервиса',
            img: require('../../icons/grow.png')}
    ]

    return(
        <section className='for-whom'>
            <h2 className='banner__title'>Мы сделали NAME <p>для Вас!</p></h2>
            <div className='for-whom__block'>
            {persons.map((e, index)=>(<article className='for-whom__block-article' key={index}>
                <img className='for-whom__block-icon' src={e.img} alt="img" />
                <h3 className='for-whom__block-title'>{e.title}</h3>
                <p className='for-whom__block-content'>{e.text}</p>
            </article>))}
            </div>
        </section>
    )
}