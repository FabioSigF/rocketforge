import Container from '../../components/Container'
import Title from '../../components/Title'

import blog1 from '../../assets/blog1.png';
import blog2 from '../../assets/blog2.png';
import blog3 from '../../assets/blog3.png';

const Blog = () => {

  const blogContent = [
    {
      title: "Acessibilidade: A importância de construir sites sem barreiras para antigas e novas gerações",
      tags: ["Acessibilidade", "Web"],
      image: blog1,
      link: ""
    },
    {
      title: "Como deixar o seu site atrativo para o google?",
      tags: ["Acessibilidade", "Web"],
      image: blog2,
      link: ""
    },
    {
      title: "Responsividade e adaptação de sites em dispositivos diferentes",
      tags: ["Acessibilidade", "Web"],
      image: blog3,
      link: ""
    },
  ]

  return (
    <div>
      <Container>
        <div className='flex flex-col gap-8 max-sm:px-4'>
          <Title 
            title="Artigos e notícias"
            section="Blog"
            position='center'
          />
          <ul className='max-sm:flex max-sm:flex-col sm:grid sm:grid-cols-3 sm:gap-8 gap-10'>
            {blogContent.map((item, key) => (
              <article className='flex flex-col gap-4' key={key}>
                <img src={item.image} alt={item.title} className='rounded-lg'/>
                <div className='flex gap-4'>
                  {item.tags.map((tagsItem, key) => (
                    <span key={key} className='border border-gray-50 rounded-lg px-4 py-2 text-xs text-gray-50'>{tagsItem}</span>
                  ))}
                </div>
                <h4 className='text-xl'>{item.title}</h4>
              </article>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default Blog