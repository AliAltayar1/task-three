import styles from "./SpecialPlants.module.css";
import { useTranslation } from "react-i18next";

const SpecialPlants = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.specialPlants}>
      <h1>{t("offerPg-desc")}</h1>

      <div className={styles.cardsContanier}>
        <div>
          <div className={styles.imgContanier}>
            <img src={`${process.env.PUBLIC_URL}/offer1.png`} alt="plant" />
          </div>
          <div className={styles.info}>
            <span>{t("offerPg-lav")}</span>
            <div className={styles.rate}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill=""
              >
                <path
                  d="M6.87878 0.322266L8.33813 4.81365H13.0607L9.24005 7.58949L10.6994 12.0809L6.87878 9.30505L3.05818 12.0809L4.51752 7.58949L0.696917 4.81365H5.41944L6.87878 0.322266Z"
                  fill=""
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill=""
              >
                <path
                  d="M6.87878 0.322266L8.33813 4.81365H13.0607L9.24005 7.58949L10.6994 12.0809L6.87878 9.30505L3.05818 12.0809L4.51752 7.58949L0.696917 4.81365H5.41944L6.87878 0.322266Z"
                  fill=""
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill=""
              >
                <path
                  d="M6.87878 0.322266L8.33813 4.81365H13.0607L9.24005 7.58949L10.6994 12.0809L6.87878 9.30505L3.05818 12.0809L4.51752 7.58949L0.696917 4.81365H5.41944L6.87878 0.322266Z"
                  fill=""
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill=""
              >
                <path
                  d="M6.87878 0.322266L8.33813 4.81365H13.0607L9.24005 7.58949L10.6994 12.0809L6.87878 9.30505L3.05818 12.0809L4.51752 7.58949L0.696917 4.81365H5.41944L6.87878 0.322266Z"
                  fill="white"
                />
              </svg>
            </div>
            <span className={styles.favorite}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="49"
                height="46"
                viewBox="0 0 49 46"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.5478 15.0534C15.764 15.8419 14.4576 17.7186 14.4576 19.9562C14.4576 22.2417 15.4253 24.0039 16.8102 25.5144C17.9531 26.7585 19.3359 27.7905 20.6842 28.7954C21.0046 29.0346 21.3229 29.2729 21.6358 29.5111C22.2014 29.9428 22.7057 30.3204 23.1927 30.5961C23.6787 30.8707 24.0701 30.9966 24.4034 30.9966C24.7368 30.9966 25.1281 30.8718 25.6142 30.5961C26.1012 30.3204 26.6055 29.9428 27.1711 29.5111C27.4829 29.2718 27.8022 29.0346 28.1227 28.7964C29.471 27.7894 30.8537 26.7585 31.9967 25.5144C33.3827 24.0039 34.3493 22.2417 34.3493 19.9562C34.3493 17.7196 33.0429 15.8419 31.2591 15.0534C29.5258 14.2867 27.1969 14.4896 24.9841 16.7147C24.9088 16.7902 24.8187 16.8503 24.7189 16.8913C24.6191 16.9323 24.5118 16.9535 24.4034 16.9535C24.295 16.9535 24.1878 16.9323 24.088 16.8913C23.9882 16.8503 23.898 16.7902 23.8228 16.7147C21.61 14.4896 19.281 14.2867 17.5478 15.0534ZM24.4034 15.0909C21.9175 12.9375 19.1337 12.6358 16.8768 13.6334C14.4963 14.6893 12.8447 17.136 12.8447 19.9573C12.8447 22.7296 14.0382 24.8455 15.6048 26.5515C16.8586 27.9174 18.3929 29.0607 19.7488 30.0697C20.0563 30.2986 20.3541 30.5212 20.6369 30.7376C21.1885 31.1578 21.7799 31.6052 22.3788 31.9443C22.9777 32.2824 23.6615 32.558 24.4034 32.558C25.1454 32.558 25.8292 32.2824 26.4281 31.9443C27.0281 31.6052 27.6184 31.1578 28.17 30.7376C28.4645 30.513 28.7605 30.2904 29.0581 30.0697C30.4129 29.0607 31.9483 27.9164 33.202 26.5515C34.7687 24.8455 35.9622 22.7296 35.9622 19.9573C35.9622 17.136 34.3117 14.6893 31.93 13.6355C29.6731 12.6369 26.8894 12.9385 24.4034 15.0909Z"
                  fill="#7C8761"
                />
              </svg>
            </span>
          </div>
          <span>{t("offerPg-plantDesc")}</span>
          <div className={styles.priceInfo}>
            <span className={styles.previousPrice}>35.00$</span>
            <span className={styles.currentPrice}>20.00$</span>
            <span className={styles.cart}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="19"
                viewBox="0 0 25 19"
                fill="none"
              >
                <path
                  d="M4.95295 3.56799H23.6023L21.2711 11.6632H7.28412M21.2711 14.1541H8.06117L4.17589 1.07715H1.84473"
                  stroke="#7C8761"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.717 17.8903C20.5753 17.8903 21.2711 17.3327 21.2711 16.6448C21.2711 15.957 20.5753 15.3994 19.717 15.3994C18.8586 15.3994 18.1628 15.957 18.1628 16.6448C18.1628 17.3327 18.8586 17.8903 19.717 17.8903Z"
                  stroke="#7C8761"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.61526 17.8903C10.4736 17.8903 11.1694 17.3327 11.1694 16.6448C11.1694 15.957 10.4736 15.3994 9.61526 15.3994C8.75695 15.3994 8.06116 15.957 8.06116 16.6448C8.06116 17.3327 8.75695 17.8903 9.61526 17.8903Z"
                  stroke="#7C8761"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
        <div>
          <div className={styles.imgContanier}>
            <img src={`${process.env.PUBLIC_URL}/offer2.png`} alt="plant" />
          </div>
          <div className={styles.info}>
            <span>{t("offerPg-lav")}</span>
            <div className={styles.rate}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill=""
              >
                <path
                  d="M6.87878 0.322266L8.33813 4.81365H13.0607L9.24005 7.58949L10.6994 12.0809L6.87878 9.30505L3.05818 12.0809L4.51752 7.58949L0.696917 4.81365H5.41944L6.87878 0.322266Z"
                  fill=""
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill=""
              >
                <path
                  d="M6.87878 0.322266L8.33813 4.81365H13.0607L9.24005 7.58949L10.6994 12.0809L6.87878 9.30505L3.05818 12.0809L4.51752 7.58949L0.696917 4.81365H5.41944L6.87878 0.322266Z"
                  fill=""
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill=""
              >
                <path
                  d="M6.87878 0.322266L8.33813 4.81365H13.0607L9.24005 7.58949L10.6994 12.0809L6.87878 9.30505L3.05818 12.0809L4.51752 7.58949L0.696917 4.81365H5.41944L6.87878 0.322266Z"
                  fill=""
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill=""
              >
                <path
                  d="M6.87878 0.322266L8.33813 4.81365H13.0607L9.24005 7.58949L10.6994 12.0809L6.87878 9.30505L3.05818 12.0809L4.51752 7.58949L0.696917 4.81365H5.41944L6.87878 0.322266Z"
                  fill="white"
                />
              </svg>
            </div>
            <span className={styles.favorite}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="49"
                height="46"
                viewBox="0 0 49 46"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.5478 15.0534C15.764 15.8419 14.4576 17.7186 14.4576 19.9562C14.4576 22.2417 15.4253 24.0039 16.8102 25.5144C17.9531 26.7585 19.3359 27.7905 20.6842 28.7954C21.0046 29.0346 21.3229 29.2729 21.6358 29.5111C22.2014 29.9428 22.7057 30.3204 23.1927 30.5961C23.6787 30.8707 24.0701 30.9966 24.4034 30.9966C24.7368 30.9966 25.1281 30.8718 25.6142 30.5961C26.1012 30.3204 26.6055 29.9428 27.1711 29.5111C27.4829 29.2718 27.8022 29.0346 28.1227 28.7964C29.471 27.7894 30.8537 26.7585 31.9967 25.5144C33.3827 24.0039 34.3493 22.2417 34.3493 19.9562C34.3493 17.7196 33.0429 15.8419 31.2591 15.0534C29.5258 14.2867 27.1969 14.4896 24.9841 16.7147C24.9088 16.7902 24.8187 16.8503 24.7189 16.8913C24.6191 16.9323 24.5118 16.9535 24.4034 16.9535C24.295 16.9535 24.1878 16.9323 24.088 16.8913C23.9882 16.8503 23.898 16.7902 23.8228 16.7147C21.61 14.4896 19.281 14.2867 17.5478 15.0534ZM24.4034 15.0909C21.9175 12.9375 19.1337 12.6358 16.8768 13.6334C14.4963 14.6893 12.8447 17.136 12.8447 19.9573C12.8447 22.7296 14.0382 24.8455 15.6048 26.5515C16.8586 27.9174 18.3929 29.0607 19.7488 30.0697C20.0563 30.2986 20.3541 30.5212 20.6369 30.7376C21.1885 31.1578 21.7799 31.6052 22.3788 31.9443C22.9777 32.2824 23.6615 32.558 24.4034 32.558C25.1454 32.558 25.8292 32.2824 26.4281 31.9443C27.0281 31.6052 27.6184 31.1578 28.17 30.7376C28.4645 30.513 28.7605 30.2904 29.0581 30.0697C30.4129 29.0607 31.9483 27.9164 33.202 26.5515C34.7687 24.8455 35.9622 22.7296 35.9622 19.9573C35.9622 17.136 34.3117 14.6893 31.93 13.6355C29.6731 12.6369 26.8894 12.9385 24.4034 15.0909Z"
                  fill="#7C8761"
                />
              </svg>
            </span>
          </div>
          <span>{t("offerPg-plantDesc")}</span>
          <div className={styles.priceInfo}>
            <span className={styles.previousPrice}>35.00$</span>
            <span className={styles.currentPrice}>20.00$</span>
            <span className={styles.cart}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="19"
                viewBox="0 0 25 19"
                fill="none"
              >
                <path
                  d="M4.95295 3.56799H23.6023L21.2711 11.6632H7.28412M21.2711 14.1541H8.06117L4.17589 1.07715H1.84473"
                  stroke="#7C8761"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.717 17.8903C20.5753 17.8903 21.2711 17.3327 21.2711 16.6448C21.2711 15.957 20.5753 15.3994 19.717 15.3994C18.8586 15.3994 18.1628 15.957 18.1628 16.6448C18.1628 17.3327 18.8586 17.8903 19.717 17.8903Z"
                  stroke="#7C8761"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.61526 17.8903C10.4736 17.8903 11.1694 17.3327 11.1694 16.6448C11.1694 15.957 10.4736 15.3994 9.61526 15.3994C8.75695 15.3994 8.06116 15.957 8.06116 16.6448C8.06116 17.3327 8.75695 17.8903 9.61526 17.8903Z"
                  stroke="#7C8761"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
        <div>
          <div className={styles.imgContanier}>
            <img src={`${process.env.PUBLIC_URL}/offer3.png`} alt="plant" />
          </div>
          <div className={styles.info}>
            <span>{t("offerPg-lav")}</span>
            <div className={styles.rate}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill=""
              >
                <path
                  d="M6.87878 0.322266L8.33813 4.81365H13.0607L9.24005 7.58949L10.6994 12.0809L6.87878 9.30505L3.05818 12.0809L4.51752 7.58949L0.696917 4.81365H5.41944L6.87878 0.322266Z"
                  fill=""
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill=""
              >
                <path
                  d="M6.87878 0.322266L8.33813 4.81365H13.0607L9.24005 7.58949L10.6994 12.0809L6.87878 9.30505L3.05818 12.0809L4.51752 7.58949L0.696917 4.81365H5.41944L6.87878 0.322266Z"
                  fill=""
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill=""
              >
                <path
                  d="M6.87878 0.322266L8.33813 4.81365H13.0607L9.24005 7.58949L10.6994 12.0809L6.87878 9.30505L3.05818 12.0809L4.51752 7.58949L0.696917 4.81365H5.41944L6.87878 0.322266Z"
                  fill=""
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill=""
              >
                <path
                  d="M6.87878 0.322266L8.33813 4.81365H13.0607L9.24005 7.58949L10.6994 12.0809L6.87878 9.30505L3.05818 12.0809L4.51752 7.58949L0.696917 4.81365H5.41944L6.87878 0.322266Z"
                  fill="white"
                />
              </svg>
            </div>
            <span className={styles.favorite}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="49"
                height="46"
                viewBox="0 0 49 46"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.5478 15.0534C15.764 15.8419 14.4576 17.7186 14.4576 19.9562C14.4576 22.2417 15.4253 24.0039 16.8102 25.5144C17.9531 26.7585 19.3359 27.7905 20.6842 28.7954C21.0046 29.0346 21.3229 29.2729 21.6358 29.5111C22.2014 29.9428 22.7057 30.3204 23.1927 30.5961C23.6787 30.8707 24.0701 30.9966 24.4034 30.9966C24.7368 30.9966 25.1281 30.8718 25.6142 30.5961C26.1012 30.3204 26.6055 29.9428 27.1711 29.5111C27.4829 29.2718 27.8022 29.0346 28.1227 28.7964C29.471 27.7894 30.8537 26.7585 31.9967 25.5144C33.3827 24.0039 34.3493 22.2417 34.3493 19.9562C34.3493 17.7196 33.0429 15.8419 31.2591 15.0534C29.5258 14.2867 27.1969 14.4896 24.9841 16.7147C24.9088 16.7902 24.8187 16.8503 24.7189 16.8913C24.6191 16.9323 24.5118 16.9535 24.4034 16.9535C24.295 16.9535 24.1878 16.9323 24.088 16.8913C23.9882 16.8503 23.898 16.7902 23.8228 16.7147C21.61 14.4896 19.281 14.2867 17.5478 15.0534ZM24.4034 15.0909C21.9175 12.9375 19.1337 12.6358 16.8768 13.6334C14.4963 14.6893 12.8447 17.136 12.8447 19.9573C12.8447 22.7296 14.0382 24.8455 15.6048 26.5515C16.8586 27.9174 18.3929 29.0607 19.7488 30.0697C20.0563 30.2986 20.3541 30.5212 20.6369 30.7376C21.1885 31.1578 21.7799 31.6052 22.3788 31.9443C22.9777 32.2824 23.6615 32.558 24.4034 32.558C25.1454 32.558 25.8292 32.2824 26.4281 31.9443C27.0281 31.6052 27.6184 31.1578 28.17 30.7376C28.4645 30.513 28.7605 30.2904 29.0581 30.0697C30.4129 29.0607 31.9483 27.9164 33.202 26.5515C34.7687 24.8455 35.9622 22.7296 35.9622 19.9573C35.9622 17.136 34.3117 14.6893 31.93 13.6355C29.6731 12.6369 26.8894 12.9385 24.4034 15.0909Z"
                  fill="#7C8761"
                />
              </svg>
            </span>
          </div>
          <span>{t("offerPg-plantDesc")}</span>
          <div className={styles.priceInfo}>
            <span className={styles.previousPrice}>35.00$</span>
            <span className={styles.currentPrice}>20.00$</span>
            <span className={styles.cart}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="19"
                viewBox="0 0 25 19"
                fill="none"
              >
                <path
                  d="M4.95295 3.56799H23.6023L21.2711 11.6632H7.28412M21.2711 14.1541H8.06117L4.17589 1.07715H1.84473"
                  stroke="#7C8761"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.717 17.8903C20.5753 17.8903 21.2711 17.3327 21.2711 16.6448C21.2711 15.957 20.5753 15.3994 19.717 15.3994C18.8586 15.3994 18.1628 15.957 18.1628 16.6448C18.1628 17.3327 18.8586 17.8903 19.717 17.8903Z"
                  stroke="#7C8761"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.61526 17.8903C10.4736 17.8903 11.1694 17.3327 11.1694 16.6448C11.1694 15.957 10.4736 15.3994 9.61526 15.3994C8.75695 15.3994 8.06116 15.957 8.06116 16.6448C8.06116 17.3327 8.75695 17.8903 9.61526 17.8903Z"
                  stroke="#7C8761"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
        <div>
          <div className={styles.imgContanier}>
            <img src={`${process.env.PUBLIC_URL}/offer3.png`} alt="plant" />
          </div>
          <div className={styles.info}>
            <span>{t("offerPg-lav")}</span>
            <div className={styles.rate}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill=""
              >
                <path
                  d="M6.87878 0.322266L8.33813 4.81365H13.0607L9.24005 7.58949L10.6994 12.0809L6.87878 9.30505L3.05818 12.0809L4.51752 7.58949L0.696917 4.81365H5.41944L6.87878 0.322266Z"
                  fill=""
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill=""
              >
                <path
                  d="M6.87878 0.322266L8.33813 4.81365H13.0607L9.24005 7.58949L10.6994 12.0809L6.87878 9.30505L3.05818 12.0809L4.51752 7.58949L0.696917 4.81365H5.41944L6.87878 0.322266Z"
                  fill=""
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill=""
              >
                <path
                  d="M6.87878 0.322266L8.33813 4.81365H13.0607L9.24005 7.58949L10.6994 12.0809L6.87878 9.30505L3.05818 12.0809L4.51752 7.58949L0.696917 4.81365H5.41944L6.87878 0.322266Z"
                  fill=""
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill=""
              >
                <path
                  d="M6.87878 0.322266L8.33813 4.81365H13.0607L9.24005 7.58949L10.6994 12.0809L6.87878 9.30505L3.05818 12.0809L4.51752 7.58949L0.696917 4.81365H5.41944L6.87878 0.322266Z"
                  fill="white"
                />
              </svg>
            </div>
            <span className={styles.favorite}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="49"
                height="46"
                viewBox="0 0 49 46"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.5478 15.0534C15.764 15.8419 14.4576 17.7186 14.4576 19.9562C14.4576 22.2417 15.4253 24.0039 16.8102 25.5144C17.9531 26.7585 19.3359 27.7905 20.6842 28.7954C21.0046 29.0346 21.3229 29.2729 21.6358 29.5111C22.2014 29.9428 22.7057 30.3204 23.1927 30.5961C23.6787 30.8707 24.0701 30.9966 24.4034 30.9966C24.7368 30.9966 25.1281 30.8718 25.6142 30.5961C26.1012 30.3204 26.6055 29.9428 27.1711 29.5111C27.4829 29.2718 27.8022 29.0346 28.1227 28.7964C29.471 27.7894 30.8537 26.7585 31.9967 25.5144C33.3827 24.0039 34.3493 22.2417 34.3493 19.9562C34.3493 17.7196 33.0429 15.8419 31.2591 15.0534C29.5258 14.2867 27.1969 14.4896 24.9841 16.7147C24.9088 16.7902 24.8187 16.8503 24.7189 16.8913C24.6191 16.9323 24.5118 16.9535 24.4034 16.9535C24.295 16.9535 24.1878 16.9323 24.088 16.8913C23.9882 16.8503 23.898 16.7902 23.8228 16.7147C21.61 14.4896 19.281 14.2867 17.5478 15.0534ZM24.4034 15.0909C21.9175 12.9375 19.1337 12.6358 16.8768 13.6334C14.4963 14.6893 12.8447 17.136 12.8447 19.9573C12.8447 22.7296 14.0382 24.8455 15.6048 26.5515C16.8586 27.9174 18.3929 29.0607 19.7488 30.0697C20.0563 30.2986 20.3541 30.5212 20.6369 30.7376C21.1885 31.1578 21.7799 31.6052 22.3788 31.9443C22.9777 32.2824 23.6615 32.558 24.4034 32.558C25.1454 32.558 25.8292 32.2824 26.4281 31.9443C27.0281 31.6052 27.6184 31.1578 28.17 30.7376C28.4645 30.513 28.7605 30.2904 29.0581 30.0697C30.4129 29.0607 31.9483 27.9164 33.202 26.5515C34.7687 24.8455 35.9622 22.7296 35.9622 19.9573C35.9622 17.136 34.3117 14.6893 31.93 13.6355C29.6731 12.6369 26.8894 12.9385 24.4034 15.0909Z"
                  fill="#7C8761"
                />
              </svg>
            </span>
          </div>
          <span>{t("offerPg-plantDesc")}</span>
          <div className={styles.priceInfo}>
            <span className={styles.previousPrice}>35.00$</span>
            <span className={styles.currentPrice}>20.00$</span>
            <span className={styles.cart}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="19"
                viewBox="0 0 25 19"
                fill="none"
              >
                <path
                  d="M4.95295 3.56799H23.6023L21.2711 11.6632H7.28412M21.2711 14.1541H8.06117L4.17589 1.07715H1.84473"
                  stroke="#7C8761"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.717 17.8903C20.5753 17.8903 21.2711 17.3327 21.2711 16.6448C21.2711 15.957 20.5753 15.3994 19.717 15.3994C18.8586 15.3994 18.1628 15.957 18.1628 16.6448C18.1628 17.3327 18.8586 17.8903 19.717 17.8903Z"
                  stroke="#7C8761"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.61526 17.8903C10.4736 17.8903 11.1694 17.3327 11.1694 16.6448C11.1694 15.957 10.4736 15.3994 9.61526 15.3994C8.75695 15.3994 8.06116 15.957 8.06116 16.6448C8.06116 17.3327 8.75695 17.8903 9.61526 17.8903Z"
                  stroke="#7C8761"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
        <div>
          <div className={styles.imgContanier}>
            <img src={`${process.env.PUBLIC_URL}/offer3.png`} alt="plant" />
          </div>
          <div className={styles.info}>
            <span>{t("offerPg-lav")}</span>
            <div className={styles.rate}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill=""
              >
                <path
                  d="M6.87878 0.322266L8.33813 4.81365H13.0607L9.24005 7.58949L10.6994 12.0809L6.87878 9.30505L3.05818 12.0809L4.51752 7.58949L0.696917 4.81365H5.41944L6.87878 0.322266Z"
                  fill=""
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill=""
              >
                <path
                  d="M6.87878 0.322266L8.33813 4.81365H13.0607L9.24005 7.58949L10.6994 12.0809L6.87878 9.30505L3.05818 12.0809L4.51752 7.58949L0.696917 4.81365H5.41944L6.87878 0.322266Z"
                  fill=""
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill=""
              >
                <path
                  d="M6.87878 0.322266L8.33813 4.81365H13.0607L9.24005 7.58949L10.6994 12.0809L6.87878 9.30505L3.05818 12.0809L4.51752 7.58949L0.696917 4.81365H5.41944L6.87878 0.322266Z"
                  fill=""
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill=""
              >
                <path
                  d="M6.87878 0.322266L8.33813 4.81365H13.0607L9.24005 7.58949L10.6994 12.0809L6.87878 9.30505L3.05818 12.0809L4.51752 7.58949L0.696917 4.81365H5.41944L6.87878 0.322266Z"
                  fill="white"
                />
              </svg>
            </div>
            <span className={styles.favorite}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="49"
                height="46"
                viewBox="0 0 49 46"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.5478 15.0534C15.764 15.8419 14.4576 17.7186 14.4576 19.9562C14.4576 22.2417 15.4253 24.0039 16.8102 25.5144C17.9531 26.7585 19.3359 27.7905 20.6842 28.7954C21.0046 29.0346 21.3229 29.2729 21.6358 29.5111C22.2014 29.9428 22.7057 30.3204 23.1927 30.5961C23.6787 30.8707 24.0701 30.9966 24.4034 30.9966C24.7368 30.9966 25.1281 30.8718 25.6142 30.5961C26.1012 30.3204 26.6055 29.9428 27.1711 29.5111C27.4829 29.2718 27.8022 29.0346 28.1227 28.7964C29.471 27.7894 30.8537 26.7585 31.9967 25.5144C33.3827 24.0039 34.3493 22.2417 34.3493 19.9562C34.3493 17.7196 33.0429 15.8419 31.2591 15.0534C29.5258 14.2867 27.1969 14.4896 24.9841 16.7147C24.9088 16.7902 24.8187 16.8503 24.7189 16.8913C24.6191 16.9323 24.5118 16.9535 24.4034 16.9535C24.295 16.9535 24.1878 16.9323 24.088 16.8913C23.9882 16.8503 23.898 16.7902 23.8228 16.7147C21.61 14.4896 19.281 14.2867 17.5478 15.0534ZM24.4034 15.0909C21.9175 12.9375 19.1337 12.6358 16.8768 13.6334C14.4963 14.6893 12.8447 17.136 12.8447 19.9573C12.8447 22.7296 14.0382 24.8455 15.6048 26.5515C16.8586 27.9174 18.3929 29.0607 19.7488 30.0697C20.0563 30.2986 20.3541 30.5212 20.6369 30.7376C21.1885 31.1578 21.7799 31.6052 22.3788 31.9443C22.9777 32.2824 23.6615 32.558 24.4034 32.558C25.1454 32.558 25.8292 32.2824 26.4281 31.9443C27.0281 31.6052 27.6184 31.1578 28.17 30.7376C28.4645 30.513 28.7605 30.2904 29.0581 30.0697C30.4129 29.0607 31.9483 27.9164 33.202 26.5515C34.7687 24.8455 35.9622 22.7296 35.9622 19.9573C35.9622 17.136 34.3117 14.6893 31.93 13.6355C29.6731 12.6369 26.8894 12.9385 24.4034 15.0909Z"
                  fill="#7C8761"
                />
              </svg>
            </span>
          </div>
          <span>{t("offerPg-plantDesc")}</span>
          <div className={styles.priceInfo}>
            <span className={styles.previousPrice}>35.00$</span>
            <span className={styles.currentPrice}>20.00$</span>
            <span className={styles.cart}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="19"
                viewBox="0 0 25 19"
                fill="none"
              >
                <path
                  d="M4.95295 3.56799H23.6023L21.2711 11.6632H7.28412M21.2711 14.1541H8.06117L4.17589 1.07715H1.84473"
                  stroke="#7C8761"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.717 17.8903C20.5753 17.8903 21.2711 17.3327 21.2711 16.6448C21.2711 15.957 20.5753 15.3994 19.717 15.3994C18.8586 15.3994 18.1628 15.957 18.1628 16.6448C18.1628 17.3327 18.8586 17.8903 19.717 17.8903Z"
                  stroke="#7C8761"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.61526 17.8903C10.4736 17.8903 11.1694 17.3327 11.1694 16.6448C11.1694 15.957 10.4736 15.3994 9.61526 15.3994C8.75695 15.3994 8.06116 15.957 8.06116 16.6448C8.06116 17.3327 8.75695 17.8903 9.61526 17.8903Z"
                  stroke="#7C8761"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
        <div>
          <div className={styles.imgContanier}>
            <img src={`${process.env.PUBLIC_URL}/offer3.png`} alt="plant" />
          </div>
          <div className={styles.info}>
            <span>{t("offerPg-lav")}</span>
            <div className={styles.rate}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill=""
              >
                <path
                  d="M6.87878 0.322266L8.33813 4.81365H13.0607L9.24005 7.58949L10.6994 12.0809L6.87878 9.30505L3.05818 12.0809L4.51752 7.58949L0.696917 4.81365H5.41944L6.87878 0.322266Z"
                  fill=""
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill=""
              >
                <path
                  d="M6.87878 0.322266L8.33813 4.81365H13.0607L9.24005 7.58949L10.6994 12.0809L6.87878 9.30505L3.05818 12.0809L4.51752 7.58949L0.696917 4.81365H5.41944L6.87878 0.322266Z"
                  fill=""
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill=""
              >
                <path
                  d="M6.87878 0.322266L8.33813 4.81365H13.0607L9.24005 7.58949L10.6994 12.0809L6.87878 9.30505L3.05818 12.0809L4.51752 7.58949L0.696917 4.81365H5.41944L6.87878 0.322266Z"
                  fill=""
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill=""
              >
                <path
                  d="M6.87878 0.322266L8.33813 4.81365H13.0607L9.24005 7.58949L10.6994 12.0809L6.87878 9.30505L3.05818 12.0809L4.51752 7.58949L0.696917 4.81365H5.41944L6.87878 0.322266Z"
                  fill="white"
                />
              </svg>
            </div>
            <span className={styles.favorite}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="49"
                height="46"
                viewBox="0 0 49 46"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.5478 15.0534C15.764 15.8419 14.4576 17.7186 14.4576 19.9562C14.4576 22.2417 15.4253 24.0039 16.8102 25.5144C17.9531 26.7585 19.3359 27.7905 20.6842 28.7954C21.0046 29.0346 21.3229 29.2729 21.6358 29.5111C22.2014 29.9428 22.7057 30.3204 23.1927 30.5961C23.6787 30.8707 24.0701 30.9966 24.4034 30.9966C24.7368 30.9966 25.1281 30.8718 25.6142 30.5961C26.1012 30.3204 26.6055 29.9428 27.1711 29.5111C27.4829 29.2718 27.8022 29.0346 28.1227 28.7964C29.471 27.7894 30.8537 26.7585 31.9967 25.5144C33.3827 24.0039 34.3493 22.2417 34.3493 19.9562C34.3493 17.7196 33.0429 15.8419 31.2591 15.0534C29.5258 14.2867 27.1969 14.4896 24.9841 16.7147C24.9088 16.7902 24.8187 16.8503 24.7189 16.8913C24.6191 16.9323 24.5118 16.9535 24.4034 16.9535C24.295 16.9535 24.1878 16.9323 24.088 16.8913C23.9882 16.8503 23.898 16.7902 23.8228 16.7147C21.61 14.4896 19.281 14.2867 17.5478 15.0534ZM24.4034 15.0909C21.9175 12.9375 19.1337 12.6358 16.8768 13.6334C14.4963 14.6893 12.8447 17.136 12.8447 19.9573C12.8447 22.7296 14.0382 24.8455 15.6048 26.5515C16.8586 27.9174 18.3929 29.0607 19.7488 30.0697C20.0563 30.2986 20.3541 30.5212 20.6369 30.7376C21.1885 31.1578 21.7799 31.6052 22.3788 31.9443C22.9777 32.2824 23.6615 32.558 24.4034 32.558C25.1454 32.558 25.8292 32.2824 26.4281 31.9443C27.0281 31.6052 27.6184 31.1578 28.17 30.7376C28.4645 30.513 28.7605 30.2904 29.0581 30.0697C30.4129 29.0607 31.9483 27.9164 33.202 26.5515C34.7687 24.8455 35.9622 22.7296 35.9622 19.9573C35.9622 17.136 34.3117 14.6893 31.93 13.6355C29.6731 12.6369 26.8894 12.9385 24.4034 15.0909Z"
                  fill="#7C8761"
                />
              </svg>
            </span>
          </div>
          <span>{t("offerPg-plantDesc")}</span>
          <div className={styles.priceInfo}>
            <span className={styles.previousPrice}>35.00$</span>
            <span className={styles.currentPrice}>20.00$</span>
            <span className={styles.cart}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="19"
                viewBox="0 0 25 19"
                fill="none"
              >
                <path
                  d="M4.95295 3.56799H23.6023L21.2711 11.6632H7.28412M21.2711 14.1541H8.06117L4.17589 1.07715H1.84473"
                  stroke="#7C8761"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.717 17.8903C20.5753 17.8903 21.2711 17.3327 21.2711 16.6448C21.2711 15.957 20.5753 15.3994 19.717 15.3994C18.8586 15.3994 18.1628 15.957 18.1628 16.6448C18.1628 17.3327 18.8586 17.8903 19.717 17.8903Z"
                  stroke="#7C8761"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.61526 17.8903C10.4736 17.8903 11.1694 17.3327 11.1694 16.6448C11.1694 15.957 10.4736 15.3994 9.61526 15.3994C8.75695 15.3994 8.06116 15.957 8.06116 16.6448C8.06116 17.3327 8.75695 17.8903 9.61526 17.8903Z"
                  stroke="#7C8761"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialPlants;
