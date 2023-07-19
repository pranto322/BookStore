import { Accordion } from "./Accordian";


export const Faq = () => {
    const faqs = [
        {
          "id": 1,
          "question": "Why should I use BookHouse?",
          "answer": "BookHouse offers a vast selection of books, competitive prices, fast shipping, and excellent customer service, making it a great choice for any book lover looking to buy books online."
        },
        {
          "id": 2,
          "question": "Can I access my eBook on mobile?",
          "answer": "yes, you can access BookHouse's website on your mobile device and read eBooks directly on the site without having to download the app. BookHouse's website is mobile-friendly and offers a seamless experience for browsing, purchasing, and reading eBooks on-the-go."
        },
        {
          "id": 3,
          "question": "Do you offer refunds?",
          "answer": "BookHouse offers refunds within a specified timeframe, usually 14 days, for most purchases. Contact customer service if you have questions or concerns."
        },
        {
          "id": 4,
          "question": "Do you support Internation payments?",
          "answer": "BookHouse accepts payments from customers all over the world, allowing them to purchase eBooks using a variety of payment methods. The payment methods available may vary depending on the customer's location, but BookHouse strives to provide a seamless payment experience for international customers."
        }
    ];

    return(
        <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">        
            <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Question in mind?</h1>    
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
              { faqs.map((faq) => (
                <Accordion key={faq.id} faq={faq} /> 
              )) }
            </div>
      </section>
    )
}
    
