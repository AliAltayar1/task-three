import styles from "./Footer.module.css";
import { HashLink as Link } from "react-router-hash-link";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <h2>{t("logo")}</h2>
        <p>{t("footer-desc")} </p>
      </div>

      <div className={styles.links}>
        <h2>{t("footer-links")}</h2>
        <div>
          <Link to={"/landing#home"}>{t("home")}</Link>
          <Link to={"/landing#products"}>{t("products")}</Link>
          <Link to={"/landing#aboutUs"}>{t("aboutUs")} </Link>
          <Link to={"/landing#services"}>{t("services")}</Link>
          <Link to={"/landing#contactUs"}>{t("contactUs")}</Link>
        </div>
      </div>

      <div className={styles.contactUs}>
        <h2>{t("contact")}</h2>
        <div>
          <div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.48303 0.793297C3.70003 -0.416703 5.70403 -0.201703 6.72303 1.1603L7.98503 2.8443C8.81503 3.9523 8.74103 5.5003 7.75603 6.4793L7.51803 6.7173C7.49115 6.81722 7.48841 6.9221 7.51003 7.0233C7.57303 7.4313 7.91403 8.2953 9.34203 9.7153C10.77 11.1353 11.64 11.4753 12.054 11.5393C12.1582 11.5615 12.2662 11.5584 12.369 11.5303L12.777 11.1243C13.653 10.2543 14.997 10.0913 16.081 10.6803L17.991 11.7203C19.628 12.6083 20.041 14.8323 18.701 16.1653L17.28 17.5773C16.832 18.0223 16.23 18.3933 15.496 18.4623C13.686 18.6313 9.46903 18.4153 5.03603 14.0083C0.899027 9.8943 0.105027 6.3063 0.00402701 4.5383C-0.045973 3.6443 0.376027 2.8883 0.914027 2.3543L2.48303 0.793297ZM5.52303 2.0593C5.01603 1.3823 4.07203 1.3283 3.54003 1.8573L1.97003 3.4173C1.64003 3.7453 1.48203 4.1073 1.50203 4.4533C1.58203 5.8583 2.22203 9.0953 6.09403 12.9453C10.156 16.9833 13.907 17.1043 15.357 16.9683C15.653 16.9413 15.947 16.7873 16.222 16.5143L17.642 15.1013C18.22 14.5273 18.093 13.4813 17.275 13.0373L15.365 11.9983C14.837 11.7123 14.219 11.8063 13.835 12.1883L13.38 12.6413L12.85 12.1093C13.38 12.6413 13.378 12.6423 13.378 12.6423L13.377 12.6443L13.374 12.6473L13.367 12.6533L13.352 12.6673C13.3095 12.7061 13.264 12.7415 13.216 12.7733C13.136 12.8263 13.03 12.8853 12.897 12.9343C12.627 13.0353 12.269 13.0893 11.827 13.0213C10.96 12.8883 9.81103 12.2973 8.28403 10.7793C6.75803 9.2613 6.16203 8.1193 6.02803 7.2533C5.95903 6.8113 6.01403 6.4533 6.11603 6.1833C6.17259 6.03156 6.25293 5.88979 6.35403 5.7633L6.38603 5.7283L6.40003 5.7133L6.40603 5.7073L6.40903 5.7043L6.41103 5.7023L6.69903 5.4163C7.12703 4.9893 7.18703 4.2823 6.78403 3.7433L5.52303 2.0593Z"
                  fill="#D6EFD8"
                />
              </svg>
            </span>
            <span>{t("footer-conNumber")}</span>
          </div>
          <div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M2.75 16.5V6.25H3H3.25V16.5H2.75ZM20.75 16.5V6.25H21H21.25V16.5H20.75ZM20.6775 17.5H21.1937C21.1003 17.9099 20.893 18.289 20.591 18.591C20.289 18.893 19.9099 19.1003 19.5 19.1937V18.6775C20.0643 18.5094 20.5094 18.0643 20.6775 17.5ZM18.5 18.75V19.25H5.5V18.75H18.5ZM4.5 18.6775V19.1937C4.09009 19.1003 3.71104 18.893 3.40901 18.591C3.10698 18.289 2.89969 17.9099 2.80625 17.5H3.32254C3.4906 18.0643 3.93575 18.5094 4.5 18.6775ZM19.75 5V5.25H4.25V5V4.75H19.75V5Z"
                  fill="#D6EFD8"
                  stroke="#D6EFD8"
                />
                <path d="M3 5L12 14L21 5" fill="#D6EFD8" />
                <path
                  d="M3 5L12 14L21 5"
                  stroke="#D6EFD8"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span>{t("footer-email")}</span>
          </div>
        </div>
      </div>

      <div className={styles.social}>
        <h2>{t("footer-social")}</h2>
        <div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M11.5753 0.997972C10.9165 0.93109 10.2544 0.898542 9.59195 0.900472C7.3957 0.900472 6.0308 2.23922 6.0308 4.39422V5.85735H4.18591C4.0993 5.85735 4.01625 5.89027 3.95501 5.94888C3.89378 6.00748 3.85938 6.08697 3.85938 6.16985V8.5761C3.85938 8.65898 3.89378 8.73846 3.95501 8.79707C4.01625 8.85567 4.0993 8.8886 4.18591 8.8886H6.0308V13.7136C6.0308 13.7965 6.06521 13.876 6.12644 13.9346C6.18768 13.9932 6.27073 14.0261 6.35733 14.0261H8.95521C9.04181 14.0261 9.12487 13.9932 9.1861 13.9346C9.24734 13.876 9.28174 13.7965 9.28174 13.7136V8.8886H11.1208C11.2 8.88863 11.2766 8.86107 11.3362 8.81104C11.3958 8.76102 11.4344 8.69195 11.4447 8.61672L11.7693 6.21047C11.7753 6.16637 11.7714 6.12154 11.7579 6.07898C11.7444 6.03642 11.7215 5.99711 11.6909 5.96368C11.6602 5.93025 11.6225 5.90348 11.5801 5.88514C11.5378 5.8668 11.4918 5.85733 11.4453 5.85735H9.28174V4.63297C9.28174 4.02672 9.40909 3.7736 10.2013 3.7736H11.5328C11.6194 3.7736 11.7025 3.74067 11.7637 3.68207C11.825 3.62346 11.8594 3.54398 11.8594 3.4611V1.30797C11.8594 1.2321 11.8306 1.15881 11.7783 1.10177C11.7261 1.04473 11.6539 1.00783 11.5753 0.997972ZM11.2063 3.14797L10.2006 3.1486C8.79195 3.1486 8.62868 3.9961 8.62868 4.63297V6.17047C8.62868 6.25324 8.66299 6.33263 8.72409 6.39122C8.78518 6.44981 8.86807 6.48281 8.95456 6.48297H11.0744L10.8334 8.26422H8.95521C8.86861 8.26422 8.78556 8.29715 8.72432 8.35575C8.66308 8.41436 8.62868 8.49384 8.62868 8.57672V13.4005H6.68386V8.57672C6.68386 8.49384 6.64946 8.41436 6.58823 8.35575C6.52699 8.29715 6.44394 8.26422 6.35733 8.26422H4.51309V6.48297H6.35733C6.44394 6.48297 6.52699 6.45005 6.58823 6.39144C6.64946 6.33284 6.68386 6.25335 6.68386 6.17047V4.39422C6.68386 2.59797 7.77121 1.52547 9.59195 1.52547C10.2509 1.52547 10.8458 1.55985 11.2063 1.58985V3.14797Z"
                fill="#D6EFD8"
              />
            </svg>
          </span>

          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2476 2476"
              id="Instagram"
            >
              <path
                d="M825.4 1238c0-227.9 184.7-412.7 412.6-412.7 227.9 0 412.7 184.8 412.7 412.7 0 227.9-184.8 412.7-412.7 412.7-227.9 0-412.6-184.8-412.6-412.7m-223.1 0c0 351.1 284.6 635.7 635.7 635.7s635.7-284.6 635.7-635.7-284.6-635.7-635.7-635.7S602.3 886.9 602.3 1238m1148-660.9c0 82 66.5 148.6 148.6 148.6 82 0 148.6-66.6 148.6-148.6s-66.5-148.5-148.6-148.5-148.6 66.5-148.6 148.5M737.8 2245.7c-120.7-5.5-186.3-25.6-229.9-42.6-57.8-22.5-99-49.3-142.4-92.6-43.3-43.3-70.2-84.5-92.6-142.3-17-43.6-37.1-109.2-42.6-229.9-6-130.5-7.2-169.7-7.2-500.3s1.3-369.7 7.2-500.3c5.5-120.7 25.7-186.2 42.6-229.9 22.5-57.8 49.3-99 92.6-142.4 43.3-43.3 84.5-70.2 142.4-92.6 43.6-17 109.2-37.1 229.9-42.6 130.5-6 169.7-7.2 500.2-7.2 330.6 0 369.7 1.3 500.3 7.2 120.7 5.5 186.2 25.7 229.9 42.6 57.8 22.4 99 49.3 142.4 92.6 43.3 43.3 70.1 84.6 92.6 142.4 17 43.6 37.1 109.2 42.6 229.9 6 130.6 7.2 169.7 7.2 500.3 0 330.5-1.2 369.7-7.2 500.3-5.5 120.7-25.7 186.3-42.6 229.9-22.5 57.8-49.3 99-92.6 142.3-43.3 43.3-84.6 70.1-142.4 92.6-43.6 17-109.2 37.1-229.9 42.6-130.5 6-169.7 7.2-500.3 7.2-330.5 0-369.7-1.2-500.2-7.2M727.6 7.5c-131.8 6-221.8 26.9-300.5 57.5-81.4 31.6-150.4 74-219.3 142.8C139 276.6 96.6 345.6 65 427.1 34.4 505.8 13.5 595.8 7.5 727.6 1.4 859.6 0 901.8 0 1238s1.4 378.4 7.5 510.4c6 131.8 26.9 221.8 57.5 300.5 31.6 81.4 73.9 150.5 142.8 219.3 68.8 68.8 137.8 111.1 219.3 142.8 78.8 30.6 168.7 51.5 300.5 57.5 132.1 6 174.2 7.5 510.4 7.5 336.3 0 378.4-1.4 510.4-7.5 131.8-6 221.8-26.9 300.5-57.5 81.4-31.7 150.4-74 219.3-142.8 68.8-68.8 111.1-137.9 142.8-219.3 30.6-78.7 51.6-168.7 57.5-300.5 6-132.1 7.4-174.2 7.4-510.4s-1.4-378.4-7.4-510.4c-6-131.8-26.9-221.8-57.5-300.5-31.7-81.4-74-150.4-142.8-219.3C2199.4 139 2130.3 96.6 2049 65c-78.8-30.6-168.8-51.6-300.5-57.5-132-6-174.2-7.5-510.4-7.5-336.3 0-378.4 1.4-510.5 7.5"
                fill="#ffffff"
                class="color000000 svgShape"
              ></path>
            </svg>
          </span>

          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="512"
              height="512"
              enable-background="new 0 0 512 512"
              viewBox="0 0 512 512"
              id="x"
            >
              <path
                fill="none"
                d="M486,392.599C486,443.97,443.97,486,392.599,486H119.401C68.03,486,26,443.97,26,392.599V119.401
		C26,68.031,68.03,26,119.401,26h273.198C443.97,26,486,68.031,486,119.401V392.599z"
              ></path>
              <path
                fill="#F0F0F1"
                d="M290.425,233.064l110.65-137.91h-32.05l-94.62,117.94l-94.63-117.94H74.125l147.45,183.78l-110.66,137.92
		h32.05l94.63-117.95l94.64,117.95h105.65L290.425,233.064z M126.225,120.153h41.55l218,271.7h-41.55L126.225,120.153z"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
