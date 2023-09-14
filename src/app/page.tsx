/* eslint-disable @next/next/no-img-element */
'use client'
import { useState } from 'react';
import Image from 'next/image'

type userType = {
    name: string;
    imageUrl: string;
    attributes: Array<string>
}

type personType = {
    id: number;
    name: string;
    profession: string;
    accomplishment: string;
    imageId: string;
}

const user: userType = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    attributes: ["Beautifully looking", "Calming countenance", "eloquent in speech"]
}

const people: Array<personType> = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71'
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
  }];
  

function getImageUrl(person: personType) {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      's.jpg'
    );
  }

function Button({text, onClick}: {text: string, onClick: () => void}) {
    return(
        <button className=" group transition-all w-56 h-16 py-4 px-6 rounded-full 
                            bg-gradient-to-r from-sky-500 to-indigo-500 shadow-lg shadow-sky-200
                            hover:bg-gradient-to-l hover:from-rose-500 hover:to-yellow-500
                            hover:shadow-2xl hover:shadow-pink-300
                            hover:-translate-y-1 hover:scale-110 duration-500 delay-50"
                            onClick={onClick}>
            <span className="font-sans font-bold text-white text-2xl">{text}</span>
            
        </button>
    )
}

function Heading({text}: {text: string}) {
    return(
        <div className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                {text}
        </div>
    )
}

function List() {
    const listItems: Array<any> = people.map(person =>
      <li key={person.id} className='flex gap-8 items-center'>
        <img
          src={getImageUrl(person)}
          alt={person.name}
          className='rounded-full'
        />
        <p>
          <b>{person.name}:</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
        </p>
      </li>
    );
    return (
      <ul className='flex flex-col gap-8'>{listItems}</ul>
    );
  }
  

function Profile({name, imageUrl, attributes}: userType) {

    const attributesList: Array<any> = attributes.map(attribute =>
            <li key = {attribute} >
                <h1 className='font-semibold'>{attribute}</h1>
            </li>

    )

    return (
        <div className='flex flex-row gap-8 items-center'>
            <img 
                src= {imageUrl}
                alt={`profile picture of ${name}`}
                className='w-40 h-40 rounded-full'
            />
            <ul className='list-disc'>
                {attributesList}
            </ul>
        </div>
    )
}

export default function Body({children}: any) {
    const [clicked, setClicked] = useState<boolean>(false);

    const backgroundColor: string = 'bg-white'; 

    return(
        <div className= {`transition-all ${clicked? 'bg-slate-700': 'bg-sky-200'} w-full h-fit flex flex-col items-center gap-8 p-8 duration-500 ease-linear`}>
            <Heading text = {user.name} />  
            <Profile name={user.name} imageUrl={user.imageUrl} attributes={user.attributes} />           
            <List />
            <Button text = "Click Me" onClick = {()=>setClicked(!clicked)}/> 
            {children}       
        </div>
    )
}