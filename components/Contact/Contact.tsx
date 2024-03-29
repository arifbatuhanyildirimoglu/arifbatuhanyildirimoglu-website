import { FormEvent, useRef, useState } from 'react';
import styles from './Contact.module.css';
import axios from 'axios';

const Contact: React.FC = () => {
  const [error, setError] = useState<boolean>(false);
  const [pending, setPending] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    const formData = new FormData(formRef.current as HTMLFormElement);
    const data = Object.fromEntries(formData);

    if (!data.name || !data.email || !data.message) {
      setError(true);
      setPending(false);
      return;
    }

    const response = await axios.post('/api/contact', {
      data,
    });
    const resData = await response.data;
    if (!resData.success) {
      setError(true);
      setPending(false);
      return;
    }
    setError(false);
    setPending(false);
    formRef.current?.reset();
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contact</h2>
      {error && (
        <div className={styles.error}>
          <p>Something went wrong. Please try again later.</p>
        </div>
      )}
      <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
        <div className={styles.formField}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.formField}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formField}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required />
        </div>
        <button type="submit">
          {!pending ? (
            'Send'
          ) : (
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="24px"
                height="24px"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
              >
                <circle
                  cx="50"
                  cy="50"
                  fill="none"
                  stroke="#e1e2e2"
                  strokeWidth="10"
                  r="35"
                  strokeDasharray="164.93361431346415 56.97787143782138"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    dur="1s"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                  ></animateTransform>
                </circle>
              </svg>
            </div>
          )}
        </button>
      </form>
    </div>
  );
};

export default Contact;
