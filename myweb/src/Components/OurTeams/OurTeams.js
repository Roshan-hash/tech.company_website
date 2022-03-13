import React from 'react'
import './OurTeams.css';

const data = [
    {
      id: 1,
      name: "Rushikesh Gaikwad",
      title: "Graphic Designer & UI/UX Developer",
      img:'assets/team/rushikesh image.jpg',
      icon: "",
      desc:
        "I create visual text and imagery concepts, by hand or using computer software, to communicate ideas that inspire, inform, or captivate consumers. We also develop the overall layout and production design for advertisements, brochures, magazines, and corporate reports.",
    },
    {
      id: 2,
      name: "Bhawana Pangarkar",
      title: "Manager & HR Head",
      img:'assets/team/Bhawana_image.jpg',
      icon: "",
      desc:
        "Good HR managers are driven, organized individuals who want to help organizations achieve their goals and employees reach their potential. I should possess human relations skills much more than other managerial skills. ",
      featured: true,
    },
    {
      id: 3,
      name: "Roshan Sail",
      title: "Web Developer & Web Designer",
      img:'assets/team/roshan_image.png',
      icon: "",
      desc:
        "I am a programmer and a coder who specializes in or is specifically engaged in, the development of World Wide Web applications using a client-server model. creating webpage layouts, writing code, editing website content and making adjustments based on client feedback.",
        featured: true,
    },
    {
        id: 4,
        name: "Divya Navatkke ",
        title: "Content Writer & Copy Writer",
        img:'assets/team/Divya_image.jpg',
        icon: "",
        desc:
          "I'm a Content Writer to creates engaging blog posts, white papers, product descriptions, social media content, and web copy. We expand our digital footprint and create more value through our online content.",
      },
  ];




const OurTeams = () => {
  return (
    <div className='testimonials' id='team'>
            <h1>Our Team</h1>
            <p className='productlist-desc'>
            Our next generation developers converts your website into powerful business channel.
           </p>
            <div className='testcontainer'>
                {data.map((item) => (
                    <div className={item.featured ? "card featured" : "card"}>
                        <div className='top'>
                            <img src={item.img} className="user1" alt="user" />
                            <img className='right' src={item.icon} alt="" />
                        </div>
                        <div className='center'>
                            {item.desc}
                        </div>
                        <div className='bottom'>
                            <h3> {item.name} </h3>
                            <h4> {item.title} </h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default OurTeams