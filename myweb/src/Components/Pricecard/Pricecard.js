import React from 'react'
import './Pricecard.css';

const data = [
    {
      id: 1,
      Price: "₹ 15,000 + 5,000",
      Plan: "Basic Plan",
      Support: "3 months",
      list1: "Responsive Web Design",
      list2: "Customized Website Development",
      list3: "eCommerce Website development",
      list4: "WordPress Customized Themes and Plugins",
      list5: "UI/UX Design",
      list6: "Digital Marketing",
      list7: "Create Social Account & Pages",
      list8: "Social Media Marketing",
      list9: "Logo Design",
      desc: "We have 5+ years experiance in market we develope best web product for our customers",
    },
    {
        id: 2,
        Price: "₹ 50,000",
        Plan: "Advanced Plan",
        Support: "1 year",
        list1: "Responsive Web Design",
        list2: "Customized Website Development",
        list3: "eCommerce Website development",
        list4: "WordPress Customized Themes and Plugins",
        list5: "UI/UX Design (Total all package)",
        list6: "Digital Marketing & SEO (Total all package)",
        list7: "Add Unlimited Products for E-commerce (Total All package)",
        list8: "Messenger / Whatsapp Integrtaion",
        list9: "Social Advertising Campaign / Social Media Promotion",
        list10: "Social Media Promotion",
        list11: "Security Plugin Integration",
        desc: "We offer end-to-end Desktop + Mobile Website development services that cover the entire development cycle.",
        featured: true,
    },
    {
        id: 3,
        Price: "₹ 40,000",
        Plan: "Premium Plan",
        Support: "1 year",
        list1: "Responsive Web Design",
        list2: "Customized Website Development",
        list3: "eCommerce Website development",
        list4: "WordPress Customized Themes and Plugins",
        list5: "UI/UX Design (Total all package)",
        list6: "Digital Marketing & SEO (Total all package)",
        list7: "Add Unlimited Products for E-commerce (Total All package)",
        list8: "User Friendly Ecommerce store",
        list9: "Messenger / Whatsapp Integrtaion",
        desc: "Our next generation developers converts your website into powerful business channel",
    },
  ];

const Pricecard = () => {
    return (
        <div className='PriceCards' id='pricing'>
            <h1>Our Plans</h1>
            <p>Awesome doesn’t have to be expensive</p>
            <div className='Pricecontainer'>
                {data.map((item) => (
                    <div className={item.featured ? "Pricecard featured" : "Pricecard"}>
                        <div className='top'>
                            <h5>{item.Price}</h5> / {item.Support}
                        </div>
                        <div className='center'>
                            <div className='Button'>
                                {item.Plan}
                            </div>
                            {item.desc}
                        </div>
                        <div className='bottom'>
                        <ul>
                                <li>{item.list1}</li>
                                <li>{item.list2}</li>
                                <li>{item.list3}</li>
                                <li>{item.list4}</li>
                                <li>{item.list5}</li>
                                <li>{item.list6}</li>
                                <li>{item.list7}</li>
                                <li>{item.list8}</li>
                                <li>{item.list9}</li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pricecard