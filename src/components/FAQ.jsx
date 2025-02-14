import Accordion from './AccordionIdea';
const FAQ = () => {
  const faqItemsData = [
    {
      title: 'What services do you offer?',
      content:
        'We offer a range of software development services including website design and development, mobile app creation, custom software solutions, and UI/UX design.',
    },
    {
      title: 'What technologies do you specialize in?',
      content:
        'Our team specializes in React, Node.js, Python, Java, and various database technologies. We are always learning and adapting to new technologies to provide the best solutions.',
    },
    {
      title: 'How do I get a quote for my project?',
      content:
        "To get a quote, please visit our 'Contact Us' page and fill out the project inquiry form. Provide as much detail as possible about your project requirements, and we'll get back to you promptly.",
    },
    {
      title: 'What is your development process?',
      content:
        'Our development process typically involves initial consultation, project scoping, design and prototyping, development, testing and quality assurance, deployment, and ongoing maintenance and support. We follow agile methodologies to ensure flexibility and client collaboration.',
    },
    {
      title: 'Do you offer ongoing support after project completion?',
      content:
        'Yes, we offer various support and maintenance packages to ensure your software continues to run smoothly and meets your evolving needs. We can discuss support options during the project scoping phase.',
    },
  ];
  console.log(faqItemsData);

  return (
    <div className='py-10 flex justify-center items-center flex-col'>
        <h1 className='font-semibold text-3xl font-serif text-gray-850'>Most asked questions</h1>
      <Accordion faqItems={faqItemsData} />
    </div>
  );
};
export default FAQ;
