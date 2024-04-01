import { useState } from 'react';
import toast from 'react-hot-toast';
import Spinner from '../components/Spinner';

const CongratulationTable = () => {
  return (
    <div className='max-w-md mx-auto mt-8 p-2 pb-8 bg-green-700 rounded-md shadow-md '>
      <h2 className='text-3xl font-semibold mb-9 mt-9 text-white text-center'>
        Congratulations!
      </h2>
      <div className=' text-white  text-center'>
        <p>Your form has been submitted successfully.</p>
        <br></br>
        <p>Soon we will contact you and will answer to all your questions.</p>
        <br></br>
        <p>Thank you for reaching us out!</p>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [name, setName] = useState('');
  const [orderId, setOrderId] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name,
      orderId,
      subject,
      message,
      clientEmail,
    };

    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        setName('');
        setOrderId('');
        setSubject('');
        setMessage('');
        setClientEmail('');

        toast.success('Form submitted successfully!', {
          duration: 3000,
          position: 'top-center',
        });
        setFormSubmitted(true);
      } else {
        console.error('Failed to submit form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {formSubmitted ? (
        <CongratulationTable />
      ) : (
        <div className='shadow-2xl max-w-md mx-auto mt-8 p-6 border-4 border-primary bg-third rounded-md '>
          <h2 className='text-2xl font-semibold mb-6 text-gray-300'>
            Have a question? Feel free to contact us!
          </h2>
          {loading ? <Spinner /> : null}
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-300'
              >
                Name:
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='mt-1 p-2 w-full border rounded-md'
                required
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='orderId'
                className='block text-sm font-medium text-gray-300'
              >
                Order id (optional):
              </label>
              <input
                type='text'
                id='orderId'
                name='orderId'
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className='mt-1 p-2 w-full border rounded-md'
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='subject'
                className='block text-sm font-medium text-gray-300'
              >
                Subject:
              </label>
              <input
                type='text'
                id='subject'
                name='subject'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className='mt-1 p-2 w-full border rounded-md'
                required
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='clientEmail'
                className='block text-sm font-medium text-gray-300'
              >
                Your Email:
              </label>
              <input
                type='email'
                id='clientEmail'
                name='clientEmail'
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                className='mt-1 p-2 w-full border rounded-md'
                required
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-gray-300'
              >
                Message:
              </label>
              <textarea
                id='message'
                name='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows='4'
                className='mt-1 p-2 w-full border rounded-md'
                required
              ></textarea>
            </div>
            <div className='mt-6'>
              <button
                type='submit'
                className='px-4 py-2 bg-green-700 hover:bg-green-600 text-gray-300 rounded-md  focus:outline-none focus:ring focus:border-blue-300'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
