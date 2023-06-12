import React from "react";
import './posibilities.css';


const pluses=[
    {names:'Неограниченное количество аккаунтов во всех системах'},
    {names:'Зачисление без ограничений по бюджетам и дневным тратам'},
    {names:'Помощь с прохождением модерации и whitelisting'},
    {names:'Удобная сквозная отчетность по всем рекламным сервисам'}
]

export default function Possibilities(){


    return(
        <section className='possibilities'>
            {pluses.map((e, index)=><article className='possibilities__article' key={index}>
                <h2 className='banner__title banner__title--small'>{e.names}</h2>
            </article>)}
        </section>
    )
}