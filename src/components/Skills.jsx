// eslint-disable-next-line no-unused-vars
import React from 'react'
import { DiMongodb } from "react-icons/di";


const Skills = () => {
  const skills =[
    {
      logo: 'logo-html5',
      level: 'Avançado',
      count: 100,
      name: 'HTML5',
    },
    {
      logo: 'logo-css3',
      level: 'Avançado',
      count: 100,
      name: 'CSS3',
    },
    {
      logo: 'logo-javascript',
      level: 'Intermediario',
      count: 100,
      name: 'JavaScript',
    },
    {
      logo: 'logo-react',
      level: 'Intermediario',
      count: 100,
      name: 'React',
    },
    {
      logo: 'logo-firebase',
      level: 'intermediario',
      count: 100,
      name: 'Firebase'
    },
    {
      logo: <DiMongodb />,
      level: 'Intermediario',
      count: 100,
      name: 'MongoDB'
    },
    {
      logo: 'logo-nodejs',
      level: 'intermediario',
      count: 100,
      name: 'NodeJs'
    },
    {
      logo: 'logo-typescript',
      level: 'Basico',
      count: 100,
      name: 'TypeScript'
    },
    {
      logo: 'logo-angular',
      level: 'Basico',
      count: 100,
      name: 'Angular'
    },
    {
      logo: 'logo-python',
      level: 'Basico',
      count: 50,
      name: 'Python',
    },
    {
      logo: 'logo-express',
      level: 'Basico',
      count: 50,
      name: 'Expressjs',
    },
  ]

  return (
    <section id='skills' className='py-10 bg-gray-800 relative'>
      <div className='mt-8 text-center text-white items-center'>
        <h3 className='text-4xl font-semibold'>
          Minhas
          <br />
          <span className='text-blue-800'>
            Habilidades
          </span>
        </h3>
        <p className='text-gray-400 mt-3 text-lg'>Meus Conheimentos</p>
        <div className='flex items-center justify-center mt-12 gap-10 flex-wrap'>
          {
            skills?.map((skill,i)=> (
              <div
              key={i} 
              className='border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gra-900 p-10 rounded-xl'>
                <div
                style={{
                  background : `conic-gradient(rgb(108, 6, 192) ${skill.count}%,  #ddd ${skill.count}%)`,
                }}
                className='w-32 h-32 flex items-center justify-center rounded-full'
                >
                  <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-violet-700'>
                    <ion-icon name={skill.logo}></ion-icon>
                  </div>
                </div>
                <p className='text-xl mt-3 font-semibold text-violet-700'>{skill.name}</p>
                <br />
                
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Skills