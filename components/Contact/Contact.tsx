import { FormEvent, useRef, useState } from 'react';
import styles from './Contact.module.css';
import axios from 'axios';
import { useTranslations } from 'next-intl';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const t = useTranslations('Contact');

  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [pending, setPending] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSuccessEvent(bool: boolean) {
    setSuccess(bool);
    setInterval(() => {
      setSuccess(false);
    }, 3000);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    const formData = new FormData(formRef.current as HTMLFormElement);
    const data = Object.fromEntries(formData);

    if (!data.from_name || !data.from_email || !data.message) {
      setError(true);
      setPending(false);
      return;
    }

    emailjs
      .sendForm('service_z0e4k1c', 'template_2ofh73h', formRef.current as HTMLFormElement, 'WjZtpnDYGxMzSOG1g')
      .then(
        () => {
          console.log('SUCCESS!');
          setError(false);
          setPending(false);
          handleSuccessEvent(true);
          formRef.current?.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setError(true);
          setPending(false);
          return;
        },
      );

    //const response = await axios.post('/api/contact', {
    //  data,
    //});
    //const resData = await response.data;
    //if (!resData.success) {
    //  setError(true);
    //  setPending(false);
    //  return;
    //}
    //setError(false);
    //setPending(false);
    //handleSuccessEvent(true);
    //formRef.current?.reset();
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t('title')}</h2>
      {error && (
        <div className={styles.error}>
          <p>{t('error')}</p>
        </div>
      )}
      {success && (
        <div className={styles.success}>
          <p>{t('success')}</p>
        </div>
      )}
      <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
        <div className={styles.formField}>
          <label htmlFor="from_name">{t('form.name')}</label>
          <input type="text" id="from_name" name="from_name" required />
        </div>
        <div className={styles.formField}>
          <label htmlFor="from_email">{t('form.email')}</label>
          <input type="from_email" id="from_email" name="from_email" required />
        </div>
        <div className={styles.formField}>
          <label htmlFor="message">{t('form.message')}</label>
          <textarea id="message" name="message" required />
        </div>
        <button type="submit">
          {!pending ? (
            t('form.submit')
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
