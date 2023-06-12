import React from 'react';
import './header.css';


const navs=[
    {name:'Для кого'},
    {name:'О сервисе'},
    {name:'Возможности'},
    {name:'С чего начать'}];

function ClickOn(index){
    switch (index){
        case 0:
            const el = document.getElementById('elOne');
            el.scrollIntoView({behavior: "smooth"});
            break;
        case 1:
            const element = document.getElementById('elTwo');
            element.scrollIntoView({behavior: "smooth"});
            break;
        case 2:
            const elements = document.getElementById('elThree');
            elements.scrollIntoView({behavior: "smooth"});
            break;
        case 3:
            window.location='/Beggining';
    }
}

export default function Header(){
    return(
        <section className='navigation'>
            <div className='navigation__logo'>NAME</div>
            <nav className='navigation__links'>
            {navs.map((e,index)=>(<ul key={index}>
                <li className='navigation__link' onClick={()=>ClickOn(index)}>{e.name}</li>
            </ul>))}
            </nav>
        </section>
    )
}
