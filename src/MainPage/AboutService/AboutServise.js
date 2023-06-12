import React from 'react';
import './AboutServise.css'
import pages from './pages.jpg'

const services=[
    {title:'Удобный личный кабинет сервиса', content:'Вы сможете мгновенно пополнять свой кошелек и с легкостью управлять бюджетами всех аккаунтов всех рекламных систем из одного интерфейса',
    img:require('../../icons/profile.png') },
    {title:'Поддержка профессионалов', content:'Вы получите помощь нашей команды экпертов по ведению ваших рекламных кампаний',
        img:require('../../icons/circle.png') },
    {title:'Зачисление без ограничений по бюджетам, дневным тратам и количеству аккаунтов', content:'Создавайте и моментально пополняйте аккаунты на любые суммы, расходуйте бюджет с любой скоростью и без ограничений',
        img:require("../../icons/money.png") },
    {title:'Помощь с прохождением модерации и whitelisting', content:'Наши специалисты проконсультируют и помогут с премодерацией рекламных материалов, прохождением процедуры whitelisting',
        img:require('../../icons/lock.png') },
    {title:'Сквозные отчеты по вашим рекламным кампаниям', content:'Благодаря разработанному модулю отчетов, вы сможете получать сквозную аналитику по вашим рекламным кампаниям в различных рекламных сервисах',
        img: require('../../icons/grow.png')},
    {title:'Сервис дает реальную выгоду', content:'Благодаря нашему сервису и его автоматическим рекомендациям, вы сможете получать больше конверсий по меньшей стоимости',
        img: require('../../icons/percent.png')},

]
export default function AboutServise(){
    return(
        <section className='service'>
            <h2 className='banner__title'>Как NAME помогает делать <p>запуск рекламы комфортным?</p></h2>
            <div className='service__information'>
            <div className='service__content'>
                {services.map((e,index)=>(<article className='service__article' key={index}>
                    <img className='service__icon' src={e.img} alt='icon'/>
                    <h2>{e.title}</h2>
                    <p>{e.content}</p>
                </article>))}
            </div>
            <img className='service__img' src={pages} alt='pages-image'/>
            </div>
        </section>

    )
}