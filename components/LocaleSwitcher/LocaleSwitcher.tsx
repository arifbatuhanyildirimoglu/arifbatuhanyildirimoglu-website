import { useState } from 'react';
import styles from './LocaleSwitcher.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LocaleSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { locale } = useRouter();
  const router = useRouter();

  return (
    <>
      <div
        className={styles.container}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {locale === 'en' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="24"
            height="12"
            viewBox="0 0 7410 3900"
          >
            <rect width="7410" height="3900" fill="#b22234" />
            <path
              d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0"
              stroke="#fff"
              strokeWidth="300"
            />
            <rect width="2964" height="2100" fill="#3c3b6e" />
            <g fill="#fff">
              <g id="s18">
                <g id="s9">
                  <g id="s5">
                    <g id="s4">
                      <path
                        id="s"
                        d="M247,90 317.534230,307.082039 132.873218,172.917961H361.126782L176.465770,307.082039z"
                      />
                      <use xlinkHref="#s" y="420" />
                      <use xlinkHref="#s" y="840" />
                      <use xlinkHref="#s" y="1260" />
                    </g>
                    <use xlinkHref="#s" y="1680" />
                  </g>
                  <use xlinkHref="#s4" x="247" y="210" />
                </g>
                <use xlinkHref="#s9" x="494" />
              </g>
              <use xlinkHref="#s18" x="988" />
              <use xlinkHref="#s9" x="1976" />
              <use xlinkHref="#s5" x="2470" />
            </g>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="15"
            viewBox="0 -30000 90000 60000"
          >
            <title>Flag of Turkey</title>
            <path fill="#e30a17" d="m0-30000h90000v60000H0z" />
            <path
              fill="#fff"
              d="m41750 0 13568-4408-8386 11541V-7133l8386 11541zm925 8021a15000 15000 0 1 1 0-16042 12000 12000 0 1 0 0 16042z"
            />
          </svg>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={18}
          height={18}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
        <div className={`${styles.options} ${isOpen ? '' : 'hidden'}`}>
          <Link
            href={router.route}
            locale={'en'}
            className={styles.option}
            onClick={() => (router.locale = 'en')}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="24"
                height="12"
                viewBox="0 0 7410 3900"
              >
                <rect width="7410" height="3900" fill="#b22234" />
                <path
                  d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0"
                  stroke="#fff"
                  strokeWidth="300"
                />
                <rect width="2964" height="2100" fill="#3c3b6e" />
                <g fill="#fff">
                  <g id="s18">
                    <g id="s9">
                      <g id="s5">
                        <g id="s4">
                          <path
                            id="s"
                            d="M247,90 317.534230,307.082039 132.873218,172.917961H361.126782L176.465770,307.082039z"
                          />
                          <use xlinkHref="#s" y="420" />
                          <use xlinkHref="#s" y="840" />
                          <use xlinkHref="#s" y="1260" />
                        </g>
                        <use xlinkHref="#s" y="1680" />
                      </g>
                      <use xlinkHref="#s4" x="247" y="210" />
                    </g>
                    <use xlinkHref="#s9" x="494" />
                  </g>
                  <use xlinkHref="#s18" x="988" />
                  <use xlinkHref="#s9" x="1976" />
                  <use xlinkHref="#s5" x="2470" />
                </g>
              </svg>
            </div>
            <p>English</p>
          </Link>
          <Link
            href={router.route}
            locale={'tr'}
            className={styles.option}
            onClick={() => (router.locale = 'tr')}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="15"
                viewBox="0 -30000 90000 60000"
              >
                <title>Flag of Turkey</title>
                <path fill="#e30a17" d="m0-30000h90000v60000H0z" />
                <path
                  fill="#fff"
                  d="m41750 0 13568-4408-8386 11541V-7133l8386 11541zm925 8021a15000 15000 0 1 1 0-16042 12000 12000 0 1 0 0 16042z"
                />
              </svg>
            </div>
            <p>Turkish</p>
          </Link>
        </div>
      </div>
      <div
        className={`${styles.panel} ${isOpen ? '' : 'hidden'}`}
        onClick={() => setIsOpen(false)}
      ></div>
    </>
  );
};

export default LocaleSwitcher;
