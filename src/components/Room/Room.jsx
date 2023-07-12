import { useEffect, useState, useRef } from "react";
import { addBlurToElement, removeAllFilters } from "../../utils/blur";
import css from "./Room.module.css";

const Room = () => {
  const sofa = document.querySelectorAll("#sofa");
  const tv = document.querySelectorAll("#tv");
  const lamp = document.querySelectorAll("#lamp");
  const plant = document.querySelectorAll("#plant");
  const desk = document.querySelectorAll("#desk");
  const window = document.querySelectorAll("#window");
  const carpet = document.querySelectorAll("#carpet");
  const deskBtn = document.querySelectorAll("#desk-button");
  const tvBtn = document.querySelectorAll("#tv-button");
  const windowBtn = document.querySelectorAll("#window-button");
  const carpetBtn = document.querySelectorAll("#rug-button");
  const sofaBtn = document.querySelectorAll("#sofa-button");
  const deskDetails = document.querySelectorAll("#desk-details");
  const tvDetails = document.querySelectorAll("#tv-details");
  const windowDetails = document.querySelectorAll("#window-details");
  const carpetDetails = document.querySelectorAll("#carpet-details");
  const sofaDetails = document.querySelectorAll("#sofa-details");

  const [isSofaClick, setSofaClick] = useState(false);
  const [isDeskClick, setDeskClick] = useState(false);
  const [isTvClick, setTvClick] = useState(false);
  const [isWindowClick, setWindowClick] = useState(false);
  const [isCarpetClick, setCarpetClick] = useState(false);

  const svgRef = useRef(null);

  useEffect(() => {
    const resetOnBlur = (e) => {
      if (
        ![...e.target.classList].includes("click-area-rect") &&
        !e.target.id.includes("button")
      ) {
        if (
          isSofaClick ||
          isDeskClick ||
          isTvClick ||
          isWindowClick ||
          isCarpetClick
        ) {
          setSofaClick(false);
          setDeskClick(false);
          setTvClick(false);
          setWindowClick(false);
          setCarpetClick(false);
        }
      }
    };

    document.addEventListener("click", (e) => resetOnBlur(e));

    return () => document.removeEventListener("click", (e) => resetOnBlur(e));
  }, [isSofaClick, isDeskClick, isTvClick, isWindowClick, isCarpetClick]);

  useEffect(() => {
    const isSomethingClicked =
      isDeskClick || isTvClick || isWindowClick || isCarpetClick;

    if (isSofaClick && !isSomethingClicked) {
      tv.forEach((item) => addBlurToElement(svgRef, item, "tv"));
      lamp.forEach((item) => addBlurToElement(svgRef, item, "lamp"));
      plant.forEach((item) => addBlurToElement(svgRef, item, "plant"));
      desk.forEach((item) => addBlurToElement(svgRef, item, "desk"));
      window.forEach((item) => addBlurToElement(svgRef, item, "window"));
      carpet.forEach((item) => addBlurToElement(svgRef, item, "carpet"));

      sofaBtn.forEach((item) => (item.style.display = "none"));
      deskBtn.forEach((item) => (item.style.display = "none"));
      tvBtn.forEach((item) => (item.style.display = "none"));
      windowBtn.forEach((item) => (item.style.display = "none"));
      carpetBtn.forEach((item) => (item.style.display = "none"));
      sofaDetails.forEach((item) => (item.style.display = "block"));
    } else if (
      !isSofaClick &&
      !isCarpetClick &&
      !isDeskClick &&
      !isTvClick &&
      !isWindowClick
    ) {
      removeAllFilters();

      sofaBtn.forEach((item) => (item.style.display = "block"));
      deskBtn.forEach((item) => (item.style.display = "block"));
      tvBtn.forEach((item) => (item.style.display = "block"));
      windowBtn.forEach((item) => (item.style.display = "block"));
      carpetBtn.forEach((item) => (item.style.display = "block"));
      sofaDetails.forEach((item) => (item.style.display = "none"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCarpetClick, isDeskClick, isSofaClick, isTvClick, isWindowClick]);

  useEffect(() => {
    const isSomethingClicked =
      isSofaClick || isDeskClick || isTvClick || isCarpetClick;

    if (isWindowClick && !isSomethingClicked) {
      tv.forEach((item) => addBlurToElement(svgRef, item, "tv"));
      lamp.forEach((item) => addBlurToElement(svgRef, item, "lamp"));
      plant.forEach((item) => addBlurToElement(svgRef, item, "plant"));
      desk.forEach((item) => addBlurToElement(svgRef, item, "desk"));
      sofa.forEach((item) => addBlurToElement(svgRef, item, "sofa"));
      carpet.forEach((item) => addBlurToElement(svgRef, item, "carpet"));

      windowBtn.forEach((item) => (item.style.display = "none"));
      deskBtn.forEach((item) => (item.style.display = "none"));
      tvBtn.forEach((item) => (item.style.display = "none"));
      sofaBtn.forEach((item) => (item.style.display = "none"));
      carpetBtn.forEach((item) => (item.style.display = "none"));
      windowDetails.forEach((item) => (item.style.display = "block"));
    } else if (
      !isSofaClick &&
      !isCarpetClick &&
      !isDeskClick &&
      !isTvClick &&
      !isWindowClick
    ) {
      removeAllFilters();

      windowBtn.forEach((item) => (item.style.display = "block"));
      deskBtn.forEach((item) => (item.style.display = "block"));
      tvBtn.forEach((item) => (item.style.display = "block"));
      sofaBtn.forEach((item) => (item.style.display = "block"));
      carpetBtn.forEach((item) => (item.style.display = "block"));
      windowDetails.forEach((item) => (item.style.display = "none"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCarpetClick, isDeskClick, isSofaClick, isTvClick, isWindowClick]);

  useEffect(() => {
    const isSomethingClicked =
      isSofaClick || isTvClick || isWindowClick || isCarpetClick;

    if (isDeskClick && !isSomethingClicked) {
      tv.forEach((item) => addBlurToElement(svgRef, item, "tv"));
      lamp.forEach((item) => addBlurToElement(svgRef, item, "lamp"));
      plant.forEach((item) => addBlurToElement(svgRef, item, "plant"));
      window.forEach((item) => addBlurToElement(svgRef, item, "window"));
      sofa.forEach((item) => addBlurToElement(svgRef, item, "sofa"));
      carpet.forEach((item) => addBlurToElement(svgRef, item, "carpet"));

      deskBtn.forEach((item) => (item.style.display = "none"));
      windowBtn.forEach((item) => (item.style.display = "none"));
      tvBtn.forEach((item) => (item.style.display = "none"));
      sofaBtn.forEach((item) => (item.style.display = "none"));
      carpetBtn.forEach((item) => (item.style.display = "none"));
      deskDetails.forEach((item) => (item.style.display = "block"));
    } else if (
      !isSofaClick &&
      !isCarpetClick &&
      !isDeskClick &&
      !isTvClick &&
      !isWindowClick
    ) {
      removeAllFilters();

      deskBtn.forEach((item) => (item.style.display = "block"));
      windowBtn.forEach((item) => (item.style.display = "block"));
      tvBtn.forEach((item) => (item.style.display = "block"));
      sofaBtn.forEach((item) => (item.style.display = "block"));
      carpetBtn.forEach((item) => (item.style.display = "block"));
      deskDetails.forEach((item) => (item.style.display = "none"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCarpetClick, isDeskClick, isSofaClick, isTvClick, isWindowClick]);

  useEffect(() => {
    const isSomethingClicked =
      isSofaClick || isDeskClick || isTvClick || isWindowClick;

    if (isCarpetClick && !isSomethingClicked) {
      carpet.forEach((item) => (item.style.fill = "#407BFF"));

      tv.forEach((item) => addBlurToElement(svgRef, item, "tv"));
      lamp.forEach((item) => addBlurToElement(svgRef, item, "lamp"));
      plant.forEach((item) => addBlurToElement(svgRef, item, "plant"));
      window.forEach((item) => addBlurToElement(svgRef, item, "window"));
      sofa.forEach((item) => addBlurToElement(svgRef, item, "sofa"));
      desk.forEach((item) => addBlurToElement(svgRef, item, "desk"));

      carpetBtn.forEach((item) => (item.style.display = "none"));
      windowBtn.forEach((item) => (item.style.display = "none"));
      tvBtn.forEach((item) => (item.style.display = "none"));
      sofaBtn.forEach((item) => (item.style.display = "none"));
      deskBtn.forEach((item) => (item.style.display = "none"));
      carpetDetails.forEach((item) => (item.style.display = "block"));
    } else if (
      !isSofaClick &&
      !isCarpetClick &&
      !isDeskClick &&
      !isTvClick &&
      !isWindowClick
    ) {
      carpet.forEach((item) => (item.style.fill = "#B3CAFF"));

      removeAllFilters();

      carpetBtn.forEach((item) => (item.style.display = "block"));
      windowBtn.forEach((item) => (item.style.display = "block"));
      tvBtn.forEach((item) => (item.style.display = "block"));
      sofaBtn.forEach((item) => (item.style.display = "block"));
      deskBtn.forEach((item) => (item.style.display = "block"));
      carpetDetails.forEach((item) => (item.style.display = "none"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCarpetClick, isDeskClick, isSofaClick, isTvClick, isWindowClick]);

  useEffect(() => {
    const isSomethingClicked =
      isSofaClick || isDeskClick || isWindowClick || isCarpetClick;

    if (isTvClick && !isSomethingClicked) {
      carpet.forEach((item) => addBlurToElement(svgRef, item, "carpet"));
      lamp.forEach((item) => addBlurToElement(svgRef, item, "lamp"));
      plant.forEach((item) => addBlurToElement(svgRef, item, "plant"));
      window.forEach((item) => addBlurToElement(svgRef, item, "window"));
      sofa.forEach((item) => addBlurToElement(svgRef, item, "sofa"));
      desk.forEach((item) => addBlurToElement(svgRef, item, "desk"));

      tvBtn.forEach((item) => (item.style.display = "none"));
      windowBtn.forEach((item) => (item.style.display = "none"));
      carpetBtn.forEach((item) => (item.style.display = "none"));
      sofaBtn.forEach((item) => (item.style.display = "none"));
      deskBtn.forEach((item) => (item.style.display = "none"));
      tvDetails.forEach((item) => (item.style.display = "block"));
    } else if (
      !isSofaClick &&
      !isCarpetClick &&
      !isDeskClick &&
      !isTvClick &&
      !isWindowClick
    ) {
      removeAllFilters();

      tvBtn.forEach((item) => (item.style.display = "block"));
      windowBtn.forEach((item) => (item.style.display = "block"));
      carpetBtn.forEach((item) => (item.style.display = "block"));
      sofaBtn.forEach((item) => (item.style.display = "block"));
      deskBtn.forEach((item) => (item.style.display = "block"));
      tvDetails.forEach((item) => (item.style.display = "none"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCarpetClick, isDeskClick, isSofaClick, isTvClick, isWindowClick]);

  return (
    <>
      <h2 className={css.title}>Кімната</h2>
      <div className={css.wrap}>
        <div id="room" className={css.svgWrap}>
          <div
            id="sofa-details"
            className={`${css.details} ${css.sofaDetails}`}
          >
            Проводимо чищення диванів, матраців та подушок
          </div>
          <div id="tv-details" className={`${css.details} ${css.tvDetails}`}>
            Ретельно протираємо всі поверхні
          </div>
          <div
            id="desk-details"
            className={`${css.details} ${css.deskDetails}`}
          >
            Натираємо меблі до блиску
          </div>
          <div
            id="window-details"
            className={`${css.details} ${css.windowDetails}`}
          >
            При замовленні <span className="accent">додаткової послуги</span>,
            вимиваємо та натираємо вікна
          </div>
          <div
            id="carpet-details"
            className={`${css.details} ${css.carpetDetails}`}
          >
            При замовленні <span className="accent">додаткової послуги</span>,
            вичищаємо килим
          </div>
          <svg
            className={css.svg}
            ref={svgRef}
            viewBox="0 0 294 274"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M147 274L294 189.302L147 104.61L0 189.302L147 274Z"
              fill="#E0E0E0"
            />
            <path
              d="M147 261.622L278.831 185.668L147 109.714L15.1694 185.668L147 261.622Z"
              fill="#407BFF"
            />
            <g opacity="0.8">
              <path
                d="M147 261.621L278.831 185.667L147 109.714L15.1694 185.667L147 261.621Z"
                fill="white"
              />
            </g>
            <path
              d="M147 267.247V261.621L278.831 185.668V81.5795L283.711 78.7666V188.481L147 267.247Z"
              fill="#455A64"
            />
            <path
              d="M147 267.247V261.621L15.1694 185.668V81.5795L10.2832 78.7666V188.481L147 267.247Z"
              fill="#37474F"
            />
            <path
              d="M10.2832 78.7664L147 0V5.62575L15.1694 81.5793L10.2832 78.7664Z"
              fill="#455A64"
            />
            <path
              d="M147 5.62549V109.714L15.1694 185.667V81.579L147 5.62549Z"
              fill="white"
            />
            <path
              d="M283.711 78.7664L147 0V5.62575L278.831 81.5793L283.711 78.7664Z"
              fill="#37474F"
            />
            <path
              d="M147 109.714V5.62549L278.831 81.579V185.667L147 109.714Z"
              fill="#407BFF"
            />
            <path
              opacity="0.6"
              d="M147 109.714V5.62549L278.831 81.579V185.667L147 109.714Z"
              fill="white"
            />
            <path
              d="M278.831 185.667V180.227L147 104.274V109.714L278.831 185.667Z"
              fill="#FAFAFA"
            />
            <path
              id="window"
              d="M19.1962 177.93V173.3L142.985 101.964V106.595L19.1962 177.93Z"
              fill="#F0F0F0"
            />
            <path
              id="window"
              d="M138.97 104.28L142.985 106.595V13.374L138.964 15.6891L138.97 104.28Z"
              fill="#E0E0E0"
            />
            <path
              id="window"
              d="M108.421 55.3693V121.871L112.436 124.186V53.0542L108.421 55.3693ZM75.306 140.967L79.3267 143.282V72.1505L75.306 74.4656V140.967ZM44.3662 158.798L48.381 161.113V89.9814L44.3602 92.2965L44.3662 158.798Z"
              fill="#E0E0E0"
            />
            <path
              id="window"
              d="M19.1962 104.214V99.6014L138.965 30.5811L142.985 32.8781L19.1962 104.214Z"
              fill="#F0F0F0"
            />
            <path
              id="window"
              d="M108.421 33.2923V48.1603L112.436 50.4754V30.9712L108.421 33.2923ZM75.306 67.2566L79.3267 69.5717V50.0675L75.306 52.3886V67.2566ZM44.3662 85.0875L48.381 87.4266V67.8984L44.3602 70.2195L44.3662 85.0875Z"
              fill="#E0E0E0"
            />
            <path
              id="window"
              opacity="0.15"
              d="M142.985 106.595V13.374L19.1962 84.6854V177.93L142.985 106.595Z"
              fill="#407BFF"
            />
            <path
              id="window"
              opacity="0.5"
              d="M48.4832 161.053L69.8309 148.752L124.991 23.7437L103.637 36.0447L48.4832 161.053Z"
              fill="white"
            />
            <path
              id="window"
              opacity="0.5"
              d="M142.985 106.595V17.0269L89.9946 137.135L142.985 106.595Z"
              fill="white"
            />
            <path
              id="window"
              opacity="0.2"
              d="M101.834 101.821C100.837 104.178 99.839 106.535 98.9014 108.916L97.5011 112.514C97.0623 113.714 96.5936 114.913 96.1849 116.113C96.7859 114.973 97.3208 113.816 97.8917 112.67L99.5145 109.192C100.596 106.871 101.618 104.52 102.634 102.175C103.649 99.8295 104.629 97.4665 105.567 95.0794C106.504 92.6924 107.442 90.3173 108.283 87.8823C107.081 90.1674 106.023 92.4825 104.954 94.8095C103.884 97.1366 102.85 99.4637 101.834 101.821ZM89.0089 96.3869C90.0907 94.0658 91.1124 91.7208 92.1281 89.3757C93.1438 87.0307 94.1234 84.6616 95.061 82.2806C95.9986 79.8995 96.9361 77.5185 97.7775 75.0835C96.6056 77.3625 95.5178 79.6836 94.448 82.0047C93.3782 84.3258 92.3445 86.6708 91.3288 89.0219C90.313 91.3729 89.3334 93.73 88.3959 96.111L86.9955 99.7096C86.5568 100.909 86.088 102.109 85.6793 103.308C86.2803 102.175 86.8152 101.017 87.3862 99.8655L89.0089 96.3869ZM101.834 84.8835C103.355 81.159 104.839 77.4285 106.288 73.662C104.533 77.2606 102.868 80.9551 101.221 84.6196C99.5746 88.2842 97.9879 91.9907 96.3712 95.6732C94.7545 99.3557 93.2219 103.086 91.7014 106.811L89.4356 112.4C88.7084 114.278 87.9511 116.149 87.2539 118.032C88.1374 116.233 88.9668 114.392 89.8262 112.568L92.3204 107.075C93.9672 103.404 95.5478 99.7036 97.1705 96.0151C98.7932 92.3265 100.314 88.626 101.834 84.8715V84.8835ZM119.901 78.1122C120.982 75.7912 121.998 73.4461 123.02 71.0951C124.042 68.744 125.015 66.3869 125.947 63.9999C126.878 61.6129 127.822 59.2378 128.669 56.8028C127.497 59.0819 126.409 61.3969 125.334 63.724C124.258 66.0511 123.236 68.3901 122.214 70.7352C121.193 73.0803 120.219 75.4313 119.282 77.8304L117.881 81.4289C117.442 82.6284 116.98 83.8279 116.565 85.0275C117.166 83.8879 117.701 82.7304 118.272 81.5848L119.901 78.1122ZM135.839 76.5289C134.757 78.8499 133.742 81.195 132.72 83.5401C131.698 85.8851 130.725 88.2542 129.787 90.6352L128.387 94.2338C127.948 95.4333 127.485 96.6328 127.071 97.8323C127.672 96.6988 128.206 95.5353 128.777 94.3897L130.406 90.9111C131.488 88.59 132.504 86.245 133.519 83.8939C134.535 81.5429 135.521 79.1858 136.452 76.8048C137.384 74.4237 138.327 72.0427 139.175 69.6076C137.985 71.8747 136.915 74.1958 135.839 76.5169V76.5289ZM132.72 66.6088C134.247 62.8783 135.725 59.1478 137.173 55.3813C135.425 58.9799 133.76 62.6744 132.107 66.345C130.454 70.0155 128.88 73.716 127.257 77.3985C125.634 81.081 124.114 84.8056 122.593 88.5301L120.321 94.1258C119.594 96.0031 118.843 97.8683 118.14 99.7576C119.023 97.9583 119.858 96.111 120.718 94.2938L123.206 88.794C124.859 85.1234 126.44 81.4229 128.056 77.7404C129.673 74.0579 131.199 70.3214 132.72 66.5969V66.6088ZM38.302 121.613C39.8286 117.888 41.307 114.158 42.7555 110.391C41.0065 113.99 39.3418 117.684 37.689 121.355C36.0362 125.025 34.4616 128.732 32.8389 132.408C31.2162 136.085 29.6956 139.816 28.1751 143.54L25.9033 149.13C25.176 151.013 24.4248 152.878 23.7216 154.762C24.6051 152.962 25.4405 151.121 26.2999 149.298L28.7881 143.804C30.4409 140.133 32.0215 136.433 33.6382 132.744C35.2549 129.056 36.7815 125.349 38.302 121.613ZM38.302 138.55C37.3043 140.907 36.3067 143.264 35.3691 145.645L33.9688 149.244C33.53 150.443 33.0673 151.643 32.6526 152.842C33.2536 151.703 33.7885 150.545 34.3594 149.4L35.9881 145.921C37.0699 143.6 38.0856 141.249 39.1074 138.904C40.1291 136.559 41.1027 134.208 42.0343 131.809C42.9658 129.41 43.9094 127.047 44.7568 124.612C43.5848 126.891 42.497 129.206 41.4212 131.533C40.3454 133.86 39.3237 136.217 38.302 138.562V138.55ZM25.4826 133.128C26.5644 130.807 27.5801 128.462 28.6018 126.117C29.6235 123.772 30.5971 121.403 31.5287 119.022C32.4602 116.641 33.4038 114.26 34.2512 111.825C33.0793 114.11 31.9914 116.425 30.9156 118.746C29.8398 121.067 28.8181 123.418 27.7964 125.763C26.7747 128.108 25.8011 130.471 24.8635 132.852L23.4632 136.451C23.0244 137.65 22.5617 138.85 22.147 140.049C22.748 138.916 23.2829 137.758 23.8538 136.607L25.4826 133.128ZM69.1937 103.35C70.7142 99.6196 72.1987 95.8891 73.6472 92.1226C71.8922 95.7212 70.2274 99.4157 68.5807 103.086C66.9339 106.757 65.3473 110.457 63.7306 114.14C62.1139 117.822 60.5813 121.547 59.0607 125.271L56.795 130.867C56.0677 132.744 55.3105 134.61 54.6133 136.499C55.4968 134.7 56.3262 132.852 57.1856 131.035L59.6798 125.535C61.3265 121.865 62.9072 118.164 64.5299 114.482C66.1526 110.799 67.6672 107.075 69.1937 103.35ZM69.1937 120.287C68.196 122.638 67.1984 124.995 66.2608 127.376L64.8605 130.975C64.4217 132.175 63.9529 133.374 63.5443 134.574C64.1453 133.44 64.6802 132.277 65.2511 131.131L66.8738 127.652C67.9556 125.331 68.9773 122.986 69.993 120.635C71.0087 118.284 71.9884 115.927 72.926 113.546C73.8635 111.165 74.8011 108.784 75.6425 106.349C74.4405 108.628 73.3827 110.949 72.3129 113.27C71.2431 115.591 70.2094 117.936 69.1937 120.287ZM56.3682 114.854C57.4501 112.532 58.4718 110.187 59.4875 107.836C60.5032 105.485 61.4828 103.128 62.4204 100.741C63.3579 98.3541 64.2955 95.9791 65.1369 93.5441C63.9349 95.8231 62.8771 98.1382 61.8073 100.465C60.7376 102.792 59.7038 105.131 58.6881 107.476C57.6724 109.822 56.6928 112.191 55.7552 114.572L54.3549 118.17C53.9161 119.37 53.4474 120.569 53.0387 121.769C53.6397 120.629 54.1746 119.472 54.7455 118.326L56.3682 114.854Z"
              fill="#407BFF"
            />
            <path
              id="window"
              d="M112.442 124.186L104.713 128.642L112.442 124.186Z"
              fill="#FAFAFA"
            />
            <path
              id="window"
              d="M142.985 32.8785L114.209 49.4618V29.9517L112.442 30.9713V50.4814L81.0937 68.5522V49.03L79.3268 50.0496V69.5718L50.148 86.383V66.8609L48.381 67.8805V87.4026L19.1962 104.208V106.775L48.381 89.9696V161.113L50.148 160.094V88.95L79.3268 72.1388V143.282L81.0937 142.263V71.1192L112.442 53.0544V124.198L114.209 123.178V52.0408L142.985 35.4575V32.8785Z"
              fill="#FAFAFA"
            />
            <path
              id="window"
              d="M15.1814 81.5731V185.667L147 109.708V5.62549L15.1814 81.5731ZM142.985 106.619L19.2021 177.93V84.6858L143.009 13.3744L142.985 106.619Z"
              fill="#FAFAFA"
            />
            <path
              id="carpet"
              opacity="0.3"
              d="M36.6071 188.282L147.366 124.468L259.827 189.668L149.422 253.284L36.6071 188.282Z"
              fill="#407BFF"
            />
            <path
              id="carpet"
              d="M149.44 251.773L259.298 188.48L147.348 123.574L37.142 187.071L149.44 251.773Z"
              fill="#B3CAFF"
            />
            <path
              id="carpet"
              opacity="0.3"
              d="M84.6216 204.5L49.1622 184.066C49.0244 184.018 48.9048 183.929 48.8202 183.81C48.7356 183.691 48.6902 183.549 48.6902 183.403C48.6902 183.258 48.7356 183.116 48.8202 182.997C48.9048 182.878 49.0244 182.789 49.1622 182.741L125.658 138.7C126.015 138.52 126.409 138.426 126.809 138.426C127.209 138.426 127.603 138.52 127.96 138.7L163.419 159.134C163.557 159.182 163.677 159.272 163.762 159.39C163.846 159.509 163.892 159.651 163.892 159.797C163.892 159.943 163.846 160.085 163.762 160.204C163.677 160.322 163.557 160.412 163.419 160.46L86.8994 204.5C86.5457 204.676 86.1558 204.768 85.7605 204.768C85.3652 204.768 84.9753 204.676 84.6216 204.5Z"
              fill="#407BFF"
            />
            <path
              id="carpet"
              opacity="0.3"
              d="M148.256 242.309L112.797 221.875C112.659 221.827 112.539 221.737 112.455 221.619C112.37 221.5 112.325 221.358 112.325 221.212C112.325 221.066 112.37 220.924 112.455 220.806C112.539 220.687 112.659 220.597 112.797 220.549L189.293 176.509C189.649 176.329 190.044 176.235 190.444 176.235C190.843 176.235 191.238 176.329 191.595 176.509L227.054 196.943C227.192 196.991 227.311 197.08 227.396 197.199C227.48 197.318 227.526 197.46 227.526 197.606C227.526 197.751 227.48 197.893 227.396 198.012C227.311 198.131 227.192 198.22 227.054 198.268L150.558 242.309C150.201 242.489 149.807 242.583 149.407 242.583C149.007 242.583 148.613 242.489 148.256 242.309Z"
              fill="#407BFF"
            />
            <path
              id="carpet"
              opacity="0.3"
              d="M142.955 120.108C138.051 122.933 138.051 127.515 142.955 130.34C147.859 133.164 155.817 133.164 160.721 130.34C165.625 127.515 165.625 122.933 160.721 120.108C155.817 117.283 147.859 117.277 142.955 120.108Z"
              fill="#407BFF"
            />
            <path
              id="carpet"
              opacity="0.3"
              d="M46.3194 184.036C50.25 186.321 50.25 190.033 46.3194 192.318C42.3889 194.603 36.0302 194.609 32.1057 192.318C28.1811 190.027 28.1811 186.321 32.1057 184.036C36.0302 181.751 42.4249 181.751 46.3194 184.036Z"
              fill="#407BFF"
            />
            <path
              id="lamp"
              d="M160.318 124.066C160.318 122.813 159.495 121.559 157.836 120.606C154.524 118.699 149.145 118.699 145.816 120.606C144.157 121.559 143.334 122.813 143.334 124.066V125.211C143.334 126.447 144.181 127.676 145.822 128.618C149.133 130.531 154.512 130.531 157.842 128.618C159.483 127.676 160.312 126.447 160.33 125.211L160.318 124.066Z"
              fill="#263238"
            />
            <path
              id="lamp"
              d="M145.828 120.605C142.51 122.518 142.51 125.613 145.828 127.52C149.146 129.427 154.519 129.433 157.848 127.52C161.178 125.607 161.166 122.518 157.848 120.605C154.531 118.692 149.14 118.698 145.828 120.605Z"
              fill="#37474F"
            />
            <path
              id="lamp"
              d="M150.954 56.8931H152.757V123.149C152.763 123.234 152.742 123.32 152.696 123.393C152.651 123.466 152.584 123.523 152.505 123.556C152.309 123.654 152.093 123.705 151.874 123.705C151.655 123.705 151.439 123.654 151.243 123.556C151.163 123.523 151.095 123.466 151.049 123.393C151.003 123.32 150.98 123.235 150.985 123.149L150.954 56.8931Z"
              fill="#455A64"
            />
            <path
              id="lamp"
              d="M151.85 58.2123C157.184 58.2123 161.508 53.8972 161.508 48.5742C161.508 43.2512 157.184 38.936 151.85 38.936C146.516 38.936 142.192 43.2512 142.192 48.5742C142.192 53.8972 146.516 58.2123 151.85 58.2123Z"
              fill="#407BFF"
            />
            <g opacity="0.3">
              <path
                id="lamp"
                d="M151.85 58.2123C157.184 58.2123 161.508 53.8972 161.508 48.5742C161.508 43.2512 157.184 38.936 151.85 38.936C146.516 38.936 142.192 43.2512 142.192 48.5742C142.192 53.8972 146.516 58.2123 151.85 58.2123Z"
                fill="white"
              />
            </g>
            <path
              id="lamp"
              d="M154.741 43.8357C153.845 44.2913 152.853 44.5287 151.847 44.5287C150.841 44.5287 149.849 44.2913 148.953 43.8357C147.354 42.9182 147.354 41.4369 148.953 40.5013C149.85 40.0491 150.842 39.8135 151.847 39.8135C152.852 39.8135 153.844 40.0491 154.741 40.5013C156.34 41.4249 156.34 42.9182 154.741 43.8357Z"
              fill="#407BFF"
            />
            <g opacity="0.6">
              <path
                id="lamp"
                d="M154.741 43.8357C153.845 44.2913 152.853 44.5287 151.847 44.5287C150.841 44.5287 149.849 44.2913 148.953 43.8357C147.354 42.9182 147.354 41.4369 148.953 40.5013C149.85 40.0491 150.842 39.8135 151.847 39.8135C152.852 39.8135 153.844 40.0491 154.741 40.5013C156.34 41.4249 156.34 42.9182 154.741 43.8357Z"
                fill="white"
              />
            </g>
            <path
              id="lamp"
              d="M151.85 44.0575C152.772 44.0856 153.686 43.8793 154.506 43.4578C154.783 43.3832 155.028 43.2198 155.202 42.9926C155.376 42.7655 155.471 42.4874 155.471 42.2014C155.471 41.9153 155.376 41.6372 155.202 41.4101C155.028 41.183 154.783 41.0195 154.506 40.945C153.682 40.531 152.773 40.3154 151.85 40.3154C150.927 40.3154 150.018 40.531 149.194 40.945C148.917 41.0195 148.672 41.183 148.498 41.4101C148.324 41.6372 148.229 41.9153 148.229 42.2014C148.229 42.4874 148.324 42.7655 148.498 42.9926C148.672 43.2198 148.917 43.3832 149.194 43.4578C150.013 43.8805 150.928 44.087 151.85 44.0575Z"
              fill="#407BFF"
            />
            <path
              id="lamp"
              opacity="0.2"
              d="M161.232 50.8415C161.112 51.1414 157.025 56.1973 150.9 54.518C143.544 52.4968 142.751 45.4017 144.638 42.2109C143.664 43.3052 142.953 44.6066 142.559 46.0163C142.165 47.426 142.098 48.9068 142.363 50.3462C142.629 51.7856 143.219 53.1456 144.091 54.3228C144.962 55.5 146.091 56.4635 147.392 57.1399C148.692 57.8164 150.13 58.1879 151.596 58.2264C153.062 58.2649 154.518 57.9693 155.852 57.362C157.187 56.7548 158.365 55.8519 159.297 54.722C160.229 53.5921 160.891 52.2649 161.232 50.8415Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              d="M265.554 119.435L264.995 119.765L253.498 113.144L254.063 112.809L265.554 119.435Z"
              fill="#455A64"
            />
            <path
              id="tv"
              d="M254.063 112.808L264.996 119.106V89.5494L254.063 83.252V112.808Z"
              fill="white"
            />
            <path
              id="tv"
              d="M252.446 113.75L266.053 121.613V88.938L252.44 81.0991L252.446 113.75ZM253.498 82.9224L264.995 89.5198V119.736L253.498 113.138V82.9224Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              d="M253.498 113.144L254.062 112.808V83.2521L253.498 82.9282V113.144Z"
              fill="#37474F"
            />
            <path
              id="tv"
              d="M252.44 81.0992L253.011 80.7754L266.624 88.6136L266.053 88.9375L252.44 81.0992Z"
              fill="#455A64"
            />
            <path
              id="tv"
              d="M266.623 88.6143L266.053 88.9381V121.595L266.623 121.271V88.6143Z"
              fill="#37474F"
            />
            <path
              id="tv"
              d="M254.88 112.154L264.178 117.51V90.5331L254.88 85.1772V112.154Z"
              fill="#F5F5F5"
            />
            <path
              id="tv"
              d="M254.88 112.154L264.178 117.51V90.5331L254.88 85.1772V112.154Z"
              fill="#407BFF"
            />
            <g opacity="0.7">
              <path
                id="tv"
                d="M254.88 112.154L264.178 117.51V90.5331L254.88 85.1772V112.154Z"
                fill="white"
              />
            </g>
            <path
              id="tv"
              opacity="0.6"
              d="M264.196 108.514C263.754 108.547 263.31 108.547 262.868 108.514C261.319 108.395 259.795 108.064 258.336 107.531C257.212 107.117 256.089 106.577 254.899 106.541V112.16L256.161 112.886C256.652 112.436 257.243 112.109 257.886 111.932C259.689 111.459 261.492 112.358 263.355 112.568C263.634 112.6 263.915 112.614 264.196 112.61V108.514Z"
              fill="white"
            />
            <path
              id="tv"
              opacity="0.6"
              d="M264.196 101.821C262.117 101.221 259.989 100.699 258.499 99.176C257.297 97.9465 256.738 96.2492 256.341 94.5819C255.944 92.9145 255.68 91.1932 254.923 89.6578C254.923 89.6578 254.923 89.6279 254.923 89.6099V102.019C255.043 102.193 255.157 102.367 255.283 102.535C256.647 104.382 258.661 105.923 260.957 106.043C262.032 106.097 263.15 105.845 264.22 105.851L264.196 101.821Z"
              fill="white"
            />
            <path
              id="tv"
              opacity="0.6"
              d="M264.196 95.6247C263.393 94.9186 262.782 94.0205 262.421 93.0146C262.061 92.0086 261.962 90.9278 262.135 89.8734C262.135 89.7175 262.201 89.5616 262.243 89.4116L258.637 87.3486C258.637 87.5825 258.637 87.8164 258.667 88.0503C258.629 89.414 258.727 90.7782 258.961 92.1223C259.222 93.2381 259.72 94.2848 260.422 95.1913C261.124 96.0977 262.014 96.8428 263.03 97.3758C263.394 97.5658 263.775 97.7243 264.166 97.8496L264.196 95.6247Z"
              fill="white"
            />
            <path
              id="tv"
              d="M265.554 137.417L264.995 137.753L253.498 131.126L254.063 130.796L265.554 137.417Z"
              fill="#455A64"
            />
            <path
              id="tv"
              d="M254.063 130.796L264.996 137.094V125.668L254.063 119.371V130.796Z"
              fill="white"
            />
            <path
              id="tv"
              d="M252.446 131.737L266.053 139.606V125.056L252.44 117.217L252.446 131.737ZM253.498 119.041L264.995 125.638V137.723L253.498 131.126V119.041Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              d="M253.498 131.125L254.062 130.795V119.37L253.498 119.041V131.125Z"
              fill="#37474F"
            />
            <path
              id="tv"
              d="M252.44 117.217L253.011 116.887L266.624 124.731L266.053 125.055L252.44 117.217Z"
              fill="#455A64"
            />
            <path
              id="tv"
              d="M266.623 124.732L266.053 125.056V139.576L266.623 139.253V124.732Z"
              fill="#37474F"
            />
            <path
              id="tv"
              d="M262.051 127.551L260.476 129.002L261.041 131.437L257.585 124.012L254.514 127.557V130.459L264.593 136.264V133.362L262.051 127.551ZM260.59 126.459C261.005 126.699 261.335 126.507 261.335 126.033C261.323 125.775 261.248 125.523 261.119 125.299C260.989 125.075 260.808 124.884 260.59 124.744C260.181 124.504 259.845 124.696 259.845 125.176C259.859 125.433 259.934 125.683 260.063 125.906C260.193 126.129 260.373 126.319 260.59 126.459Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              opacity="0.6"
              d="M262.051 127.551L260.476 129.002L261.041 131.437L257.585 124.012L254.514 127.557V130.459L264.593 136.264V133.362L262.051 127.551ZM260.59 126.459C261.005 126.699 261.335 126.507 261.335 126.033C261.323 125.775 261.248 125.523 261.119 125.299C260.989 125.075 260.808 124.884 260.59 124.744C260.181 124.504 259.845 124.696 259.845 125.176C259.859 125.433 259.934 125.683 260.063 125.906C260.193 126.129 260.373 126.319 260.59 126.459Z"
              fill="white"
            />
            <path
              id="tv"
              d="M182.549 89.5915L181.991 89.9274L170.493 83.3005L171.052 82.9707L182.549 89.5915Z"
              fill="#455A64"
            />
            <path
              id="tv"
              d="M171.052 82.9707L181.991 89.2682V59.706L171.052 53.4146V82.9707Z"
              fill="white"
            />
            <path
              id="tv"
              d="M169.436 83.9128L183.06 91.7516V59.1007L169.448 51.2559L169.436 83.9128ZM170.493 53.0851L181.991 59.6825V89.9044L170.493 83.307V53.0851Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              d="M170.493 83.3009L171.051 82.971V53.4148L170.493 53.085V83.3009Z"
              fill="#37474F"
            />
            <path
              id="tv"
              d="M169.436 51.2555L170.007 50.9316L183.613 58.7759L183.048 59.0997L169.436 51.2555Z"
              fill="#455A64"
            />
            <path
              id="tv"
              d="M183.612 58.7769L183.048 59.1007V91.7516L183.612 91.4278V58.7769Z"
              fill="#37474F"
            />
            <path
              id="tv"
              d="M171.87 82.3175L181.167 87.6734V60.6962L171.87 55.3403V82.3175Z"
              fill="#F5F5F5"
            />
            <path
              id="tv"
              d="M171.87 82.3175L181.167 87.6734V60.6962L171.87 55.3403V82.3175Z"
              fill="#407BFF"
            />
            <g opacity="0.7">
              <path
                id="tv"
                d="M171.87 82.3175L181.167 87.6734V60.6962L171.87 55.3403V82.3175Z"
                fill="white"
              />
            </g>
            <path
              id="tv"
              opacity="0.6"
              d="M181.167 78.6765C180.725 78.7125 180.281 78.7125 179.839 78.6765C178.292 78.5629 176.768 78.2318 175.313 77.693C174.189 77.2792 173.066 76.7455 171.876 76.7095V82.3288L173.132 83.0544C173.624 82.6053 174.215 82.2768 174.857 82.0949C176.66 81.6271 178.463 82.5267 180.326 82.7366C180.605 82.7657 180.886 82.7797 181.167 82.7786V78.6765Z"
              fill="white"
            />
            <path
              id="tv"
              opacity="0.6"
              d="M181.167 71.9596C179.088 71.3599 176.96 70.8321 175.47 69.3087C174.268 68.1092 173.709 66.3819 173.318 64.7145C172.927 63.0472 172.651 61.3319 171.9 59.7905C171.897 59.7767 171.897 59.7624 171.9 59.7485V72.1576C172.014 72.3255 172.128 72.4994 172.254 72.6674C173.619 74.5146 175.632 76.062 177.928 76.176C179.01 76.2359 180.121 75.984 181.191 75.984L181.167 71.9596Z"
              fill="white"
            />
            <path
              id="tv"
              opacity="0.6"
              d="M181.167 65.7873C180.365 65.0785 179.756 64.1792 179.396 63.1727C179.035 62.1663 178.936 61.0852 179.106 60.03C179.136 59.8741 179.172 59.7242 179.214 59.5682L175.608 57.5112C175.608 57.7451 175.608 57.979 175.638 58.2129C175.606 59.5765 175.705 60.94 175.932 62.2849C176.195 63.4006 176.695 64.447 177.398 65.3533C178.101 66.2596 178.991 67.0048 180.007 67.5384C180.37 67.725 180.748 67.8814 181.137 68.0062L181.167 65.7873Z"
              fill="white"
            />
            <path
              id="tv"
              d="M182.555 53.4739L181.99 53.8097L170.499 47.1889L171.058 46.853L182.555 53.4739Z"
              fill="#455A64"
            />
            <path
              id="tv"
              d="M171.058 46.8527L181.991 53.1501V41.7247L171.058 35.4272V46.8527Z"
              fill="white"
            />
            <path
              id="tv"
              d="M169.442 47.7946L183.06 55.6395V41.1133L169.442 33.2744V47.7946ZM170.499 35.0977L181.991 41.695V53.8402L170.499 47.2428V35.0977Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              d="M170.499 47.1879L171.057 46.852V35.4275L170.499 35.0977V47.1879Z"
              fill="#37474F"
            />
            <path
              id="tv"
              d="M169.441 33.2745L170.006 32.9507L183.619 40.7889L183.048 41.1128L169.441 33.2745Z"
              fill="#455A64"
            />
            <path
              id="tv"
              d="M183.618 40.7891L183.048 41.1129V55.6391L183.618 55.3092V40.7891Z"
              fill="#37474F"
            />
            <path
              id="tv"
              d="M179.046 43.6077L177.477 45.059L178.042 47.4938L174.556 40.0454L171.485 43.5897V46.4923L181.564 52.2975V49.3949L179.046 43.6077ZM177.567 42.5222C177.982 42.7561 178.312 42.5642 178.312 42.0904C178.299 41.8322 178.224 41.5808 178.094 41.3567C177.965 41.1327 177.784 40.9423 177.567 40.801C177.158 40.5672 176.822 40.7591 176.822 41.2328C176.837 41.4908 176.912 41.7416 177.042 41.9655C177.171 42.1893 177.351 42.3799 177.567 42.5222Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              opacity="0.6"
              d="M179.046 43.6077L177.477 45.059L178.042 47.4938L174.556 40.0454L171.485 43.5897V46.4923L181.564 52.2975V49.3949L179.046 43.6077ZM177.567 42.5222C177.982 42.7561 178.312 42.5642 178.312 42.0904C178.299 41.8322 178.224 41.5808 178.094 41.3567C177.965 41.1327 177.784 40.9423 177.567 40.801C177.158 40.5672 176.822 40.7591 176.822 41.2328C176.837 41.4908 176.912 41.7416 177.042 41.9655C177.171 42.1893 177.351 42.3799 177.567 42.5222Z"
              fill="white"
            />
            <path
              id="tv"
              d="M232.445 146.329L181.125 116.791V118.404L232.445 147.942V146.329Z"
              fill="#B16668"
            />
            <path
              id="tv"
              d="M242.211 142.316L232.445 147.942V146.328L242.211 140.703V142.316Z"
              fill="#9A4A4D"
            />
            <path
              id="tv"
              d="M232.445 146.329L181.125 116.791L190.891 111.165L242.211 140.703L232.445 146.329Z"
              fill="#FAFAFA"
            />
            <path
              id="tv"
              d="M211.86 133.224L219.445 128.852C219.643 128.738 219.643 128.558 219.445 128.444L209.144 122.507C209.034 122.454 208.914 122.426 208.792 122.426C208.67 122.426 208.55 122.454 208.441 122.507L200.856 126.879C200.658 126.993 200.658 127.173 200.856 127.287L211.157 133.224C211.267 133.277 211.387 133.304 211.509 133.304C211.631 133.304 211.751 133.277 211.86 133.224Z"
              fill="#E0E0E0"
            />
            <path
              id="tv"
              d="M232.697 145.003L240.282 140.631C240.324 140.616 240.361 140.589 240.387 140.552C240.413 140.516 240.427 140.472 240.427 140.427C240.427 140.382 240.413 140.339 240.387 140.302C240.361 140.266 240.324 140.238 240.282 140.223L229.981 134.292C229.871 134.236 229.749 134.207 229.626 134.207C229.503 134.207 229.381 134.236 229.271 134.292L221.687 138.658C221.488 138.772 221.488 138.952 221.687 139.066L231.988 145.003C232.099 145.056 232.22 145.084 232.343 145.084C232.465 145.084 232.587 145.056 232.697 145.003Z"
              fill="#E0E0E0"
            />
            <path
              id="tv"
              d="M218.862 128.673L218.573 128.517L218.838 128.457C218.862 128.487 218.878 128.523 218.882 128.561C218.886 128.6 218.879 128.639 218.862 128.673Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              opacity="0.5"
              d="M218.862 128.673L218.573 128.517L218.838 128.457C218.862 128.487 218.878 128.523 218.882 128.561C218.886 128.6 218.879 128.639 218.862 128.673Z"
              fill="black"
            />
            <path
              id="tv"
              d="M211.223 132.511C211.315 132.563 211.418 132.591 211.524 132.591C211.629 132.591 211.733 132.563 211.824 132.511L218.435 128.714L208.579 123.131L208.344 122.993L201.733 126.699C201.696 126.709 201.664 126.731 201.64 126.762C201.617 126.792 201.604 126.829 201.604 126.867C201.604 126.906 201.617 126.943 201.64 126.973C201.664 127.003 201.696 127.025 201.733 127.035L211.223 132.511Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              d="M213.711 125.434L216.007 126.753L217.498 125.896L219.223 126.897V128.049C219.223 128.199 219.054 128.415 218.994 128.379C218.88 128.403 218.769 128.442 218.664 128.493C218.491 128.59 218.332 128.709 218.189 128.846L212.906 125.896L213.711 125.434Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              opacity="0.15"
              d="M213.711 125.434L216.007 126.753L217.498 125.896L219.223 126.897V128.049C219.223 128.199 219.054 128.415 218.994 128.379C218.88 128.403 218.769 128.442 218.664 128.493C218.491 128.59 218.332 128.709 218.189 128.846L212.906 125.896L213.711 125.434Z"
              fill="black"
            />
            <path
              id="tv"
              d="M218.261 127.012V128.259C218.346 128.206 218.443 128.175 218.543 128.169C218.607 128.162 218.671 128.179 218.723 128.217V126.742L218.261 127.012Z"
              fill="#37474F"
            />
            <path
              id="tv"
              d="M217.918 128.715C217.92 128.635 217.95 128.559 218.002 128.499C218.025 128.466 218.051 128.436 218.08 128.409C218.08 128.409 218.08 128.409 218.11 128.379L218.146 128.349L218.212 128.301V127.06L217.888 127.245L217.918 128.715Z"
              fill="#E0E0E0"
            />
            <path
              id="tv"
              opacity="0.4"
              d="M219.204 128.049C219.204 128.199 219.036 128.415 218.976 128.379L218.748 128.229V127.276L218.976 126.88L219.102 126.838L219.204 126.898V128.049Z"
              fill="black"
            />
            <path
              id="tv"
              d="M211.512 130.922V132.349C211.581 132.35 211.649 132.333 211.71 132.301L212.431 131.881L217.936 128.715V127.222L211.512 130.922Z"
              fill="#E0E0E0"
            />
            <path
              id="tv"
              d="M201.884 125.56V126.64C201.887 126.707 201.906 126.772 201.939 126.831C201.973 126.889 202.02 126.939 202.076 126.975L210.598 131.881L211.319 132.301C211.379 132.332 211.445 132.349 211.512 132.349V131.077L201.884 125.56Z"
              fill="#F5F5F5"
            />
            <path
              id="tv"
              d="M208.537 121.272L218.393 126.957V127.089C218.393 127.161 218.495 127.185 218.622 127.089C218.748 126.993 218.856 126.927 218.856 126.801V126.675L208.807 120.888H208.765C208.762 120.908 208.762 120.928 208.765 120.948V121.008C208.759 121.08 208.663 121.2 208.537 121.272Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              opacity="0.1"
              d="M208.537 121.272L218.393 126.957V127.089C218.393 127.161 218.495 127.185 218.622 127.089C218.748 126.993 218.856 126.927 218.856 126.801V126.675L208.807 120.888H208.765C208.762 120.908 208.762 120.928 208.765 120.948V121.008C208.759 121.08 208.663 121.2 208.537 121.272Z"
              fill="black"
            />
            <path
              id="tv"
              d="M211.806 130.747L218.249 127.041C218.327 126.999 218.405 126.963 218.435 126.981H218.393L208.537 121.296L208.417 121.23C208.365 121.215 208.311 121.212 208.258 121.22C208.205 121.229 208.155 121.248 208.11 121.278L201.691 124.936C201.529 125.032 201.529 125.182 201.691 125.272L211.199 130.747C211.291 130.801 211.396 130.829 211.503 130.829C211.609 130.829 211.714 130.801 211.806 130.747Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              d="M208.777 120.888H208.819L218.868 126.675H218.904L218.976 126.633L219.066 126.585C219.083 126.572 219.103 126.565 219.124 126.565C219.144 126.565 219.165 126.572 219.181 126.585L219.211 126.627V126.681V126.747V126.825C219.211 126.825 219.211 126.825 219.211 126.873V126.909C219.214 126.939 219.214 126.969 219.211 126.999V126.717C219.201 126.623 219.169 126.533 219.118 126.454C219.067 126.375 218.998 126.309 218.916 126.261L209.504 120.78C209.426 120.735 209.338 120.708 209.247 120.702C209.157 120.696 209.066 120.71 208.982 120.744L208.861 120.816L208.813 120.846L208.777 120.888Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              d="M211.806 132.511L212.203 132.283L218.171 128.847C218.174 128.768 218.201 128.693 218.249 128.631C218.32 128.539 218.408 128.462 218.507 128.403C218.594 128.355 218.691 128.326 218.79 128.319C218.857 128.316 218.924 128.337 218.976 128.379C219.051 128.226 219.088 128.057 219.084 127.887H219.313C219.324 128.013 219.31 128.139 219.271 128.259C219.231 128.378 219.168 128.489 219.084 128.583L218.97 128.649C218.904 128.685 218.856 128.685 218.856 128.649V128.589C218.856 128.523 218.748 128.529 218.622 128.589C218.495 128.649 218.393 128.775 218.393 128.841V128.901C218.393 128.937 218.303 129.015 218.201 129.081L212.431 132.403L211.83 132.763C211.739 132.807 211.638 132.83 211.536 132.829V132.571C211.629 132.572 211.722 132.552 211.806 132.511Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              opacity="0.3"
              d="M211.806 132.511L212.203 132.283L218.171 128.847C218.174 128.768 218.201 128.693 218.249 128.631C218.32 128.539 218.408 128.462 218.507 128.403C218.594 128.355 218.691 128.326 218.79 128.319C218.857 128.316 218.924 128.337 218.976 128.379C219.051 128.226 219.088 128.057 219.084 127.887H219.313C219.324 128.013 219.31 128.139 219.271 128.259C219.231 128.378 219.168 128.489 219.084 128.583L218.97 128.649C218.904 128.685 218.856 128.685 218.856 128.649V128.589C218.856 128.523 218.748 128.529 218.622 128.589C218.495 128.649 218.393 128.775 218.393 128.841V128.901C218.393 128.937 218.303 129.015 218.201 129.081L212.431 132.403L211.83 132.763C211.739 132.807 211.638 132.83 211.536 132.829V132.571C211.629 132.572 211.722 132.552 211.806 132.511Z"
              fill="black"
            />
            <path
              id="tv"
              d="M211.806 130.753L212.203 130.526L216.789 127.887L218.249 127.047C218.351 126.987 218.435 126.963 218.441 126.993V127.059C218.441 127.131 218.543 127.131 218.67 127.059C218.716 127.038 218.757 127.007 218.79 126.967C218.822 126.928 218.845 126.881 218.856 126.831V126.759C218.854 126.743 218.856 126.727 218.861 126.711C218.866 126.696 218.875 126.681 218.886 126.669H218.922L218.994 126.627L219.084 126.579C219.101 126.566 219.121 126.559 219.142 126.559C219.162 126.559 219.182 126.566 219.199 126.579V126.633V126.699V126.777C219.199 126.777 219.199 126.777 219.199 126.825V126.861C219.202 126.891 219.202 126.921 219.199 126.951V127.845H218.97V126.819C218.946 126.909 218.903 126.994 218.844 127.066C218.785 127.138 218.711 127.197 218.628 127.239C218.545 127.292 218.449 127.321 218.351 127.323C218.278 127.326 218.207 127.3 218.153 127.251H218.117L212.347 130.574L211.746 130.933C211.658 130.981 211.558 131.004 211.458 130.999V130.741C211.57 130.78 211.691 130.784 211.806 130.753Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              opacity="0.3"
              d="M211.806 130.753L212.203 130.526L216.789 127.887L218.249 127.047C218.351 126.987 218.435 126.963 218.441 126.993V127.059C218.441 127.131 218.543 127.131 218.67 127.059C218.716 127.038 218.757 127.007 218.79 126.967C218.822 126.928 218.845 126.881 218.856 126.831V126.759C218.854 126.743 218.856 126.727 218.861 126.711C218.866 126.696 218.875 126.681 218.886 126.669H218.922L218.994 126.627L219.084 126.579C219.101 126.566 219.121 126.559 219.142 126.559C219.162 126.559 219.182 126.566 219.199 126.579V126.633V126.699V126.777C219.199 126.777 219.199 126.777 219.199 126.825V126.861C219.202 126.891 219.202 126.921 219.199 126.951V127.845H218.97V126.819C218.946 126.909 218.903 126.994 218.844 127.066C218.785 127.138 218.711 127.197 218.628 127.239C218.545 127.292 218.449 127.321 218.351 127.323C218.278 127.326 218.207 127.3 218.153 127.251H218.117L212.347 130.574L211.746 130.933C211.658 130.981 211.558 131.004 211.458 130.999V130.741C211.57 130.78 211.691 130.784 211.806 130.753Z"
              fill="black"
            />
            <path
              id="tv"
              d="M201.595 125.104V125.368C201.599 125.404 201.612 125.439 201.633 125.468C201.654 125.497 201.682 125.521 201.715 125.536L210.598 130.652L211.199 131.012C211.288 131.059 211.387 131.084 211.488 131.084V130.82C211.385 130.821 211.284 130.796 211.193 130.748L210.803 130.52L201.691 125.272C201.662 125.255 201.638 125.23 201.621 125.201C201.604 125.172 201.595 125.138 201.595 125.104Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              opacity="0.2"
              d="M201.595 125.104V125.368C201.599 125.404 201.612 125.439 201.633 125.468C201.654 125.497 201.682 125.521 201.715 125.536L210.598 130.652L211.199 131.012C211.288 131.059 211.387 131.084 211.488 131.084V130.82C211.385 130.821 211.284 130.796 211.193 130.748L210.803 130.52L201.691 125.272C201.662 125.255 201.638 125.23 201.621 125.201C201.604 125.172 201.595 125.138 201.595 125.104Z"
              fill="black"
            />
            <path
              id="tv"
              d="M201.595 126.861V127.125C201.598 127.162 201.61 127.196 201.632 127.226C201.653 127.256 201.682 127.279 201.715 127.293L210.598 132.409L211.199 132.769C211.289 132.813 211.388 132.835 211.488 132.834V132.577C211.385 132.578 211.284 132.553 211.193 132.505L210.803 132.277L201.691 127.011C201.665 126.995 201.642 126.974 201.625 126.948C201.609 126.922 201.598 126.892 201.595 126.861Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              opacity="0.2"
              d="M201.595 126.861V127.125C201.598 127.162 201.61 127.196 201.632 127.226C201.653 127.256 201.682 127.279 201.715 127.293L210.598 132.409L211.199 132.769C211.289 132.813 211.388 132.835 211.488 132.834V132.577C211.385 132.578 211.284 132.553 211.193 132.505L210.803 132.277L201.691 127.011C201.665 126.995 201.642 126.974 201.625 126.948C201.609 126.922 201.598 126.892 201.595 126.861Z"
              fill="black"
            />
            <path
              id="tv"
              d="M218.664 126.153L211.975 129.979L202.401 124.498L209.228 120.773L218.664 126.153Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              opacity="0.6"
              d="M218.664 126.153L211.975 129.979L202.401 124.498L209.228 120.773L218.664 126.153Z"
              fill="black"
            />
            <path
              id="tv"
              d="M211.908 129.71L218.381 125.986C218.226 125.417 218.237 124.816 218.411 124.252L211.981 127.935C211.895 128.522 211.871 129.117 211.908 129.71Z"
              fill="#F5F5F5"
            />
            <path
              id="tv"
              d="M212.281 127.455C212.109 127.559 211.965 127.702 211.861 127.873C211.756 128.045 211.694 128.238 211.68 128.438V129.781C211.68 130.147 211.938 130.291 212.281 130.111L218.664 126.411V126.129L212.359 129.728C212.167 129.841 212.017 129.728 212.017 129.53V128.276C212.022 128.156 212.056 128.039 212.115 127.935C212.175 127.831 212.258 127.742 212.359 127.677L218.658 124.078V123.754L212.281 127.455Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              opacity="0.5"
              d="M212.281 127.455C212.109 127.559 211.965 127.702 211.861 127.873C211.756 128.045 211.694 128.238 211.68 128.438V129.781C211.68 130.147 211.938 130.291 212.281 130.111L218.664 126.411V126.129L212.359 129.728C212.167 129.841 212.017 129.728 212.017 129.53V128.276C212.022 128.156 212.056 128.039 212.115 127.935C212.175 127.831 212.258 127.742 212.359 127.677L218.658 124.078V123.754L212.281 127.455Z"
              fill="black"
            />
            <path
              id="tv"
              d="M218.663 123.778L209.089 118.303L202.706 121.973C202.54 122.081 202.401 122.228 202.302 122.399C202.203 122.571 202.146 122.764 202.136 122.963V124.306C202.128 124.376 202.139 124.448 202.169 124.512C202.198 124.577 202.245 124.632 202.304 124.672L211.872 130.153C211.814 130.111 211.768 130.054 211.739 129.989C211.709 129.924 211.697 129.852 211.704 129.781V128.438C211.718 128.238 211.78 128.044 211.884 127.873C211.989 127.702 212.133 127.558 212.305 127.454L218.663 123.778Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              opacity="0.1"
              d="M218.663 123.778L209.089 118.303L202.706 121.973C202.54 122.081 202.401 122.228 202.302 122.399C202.203 122.571 202.146 122.764 202.136 122.963V124.306C202.128 124.376 202.139 124.448 202.169 124.512C202.198 124.577 202.245 124.632 202.304 124.672L211.872 130.153C211.814 130.111 211.768 130.054 211.739 129.989C211.709 129.924 211.697 129.852 211.704 129.781V128.438C211.718 128.238 211.78 128.044 211.884 127.873C211.989 127.702 212.133 127.558 212.305 127.454L218.663 123.778Z"
              fill="black"
            />
            <path
              id="tv"
              d="M211.872 127.88C211.77 128.049 211.712 128.241 211.704 128.438V129.781C211.698 129.853 211.71 129.924 211.739 129.989C211.769 130.055 211.815 130.111 211.872 130.153L202.292 124.672C202.234 124.632 202.187 124.577 202.157 124.512C202.128 124.448 202.116 124.377 202.124 124.306V122.963C202.129 122.763 202.187 122.569 202.292 122.399L211.872 127.88Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              opacity="0.3"
              d="M211.872 127.88C211.77 128.049 211.712 128.241 211.704 128.438V129.781C211.698 129.853 211.71 129.924 211.739 129.989C211.769 130.055 211.815 130.111 211.872 130.153L202.292 124.672C202.234 124.632 202.187 124.577 202.157 124.512C202.128 124.448 202.116 124.377 202.124 124.306V122.963C202.129 122.763 202.187 122.569 202.292 122.399L211.872 127.88Z"
              fill="black"
            />
            <path
              id="tv"
              d="M203.65 123.167C203.466 123.917 203.466 124.701 203.65 125.451L204.125 125.727C203.939 124.975 203.939 124.189 204.125 123.436L203.65 123.167Z"
              fill="#FAFAFA"
            />
            <path
              id="tv"
              d="M209.787 126.699C209.6 127.449 209.6 128.234 209.787 128.984L210.261 129.26C210.074 128.508 210.074 127.721 210.261 126.969L209.787 126.699Z"
              fill="#FAFAFA"
            />
            <path
              id="tv"
              d="M238.978 140.433L232.288 144.26L222.72 138.778L229.542 135.06L238.978 140.433Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              opacity="0.6"
              d="M238.978 140.433L232.288 144.26L222.72 138.778L229.542 135.06L238.978 140.433Z"
              fill="black"
            />
            <path
              id="tv"
              d="M232.222 143.99L238.689 140.266C238.534 139.697 238.546 139.095 238.725 138.533L232.289 142.215C232.204 142.803 232.182 143.398 232.222 143.99Z"
              fill="#F5F5F5"
            />
            <path
              id="tv"
              d="M232.595 141.735C232.423 141.839 232.279 141.983 232.175 142.154C232.07 142.325 232.008 142.519 231.994 142.719V144.062C231.994 144.428 232.252 144.572 232.595 144.392L238.954 140.722V140.434L232.649 144.032C232.463 144.146 232.307 144.032 232.307 143.834V142.605C232.312 142.485 232.346 142.368 232.405 142.264C232.465 142.159 232.548 142.071 232.649 142.005L238.954 138.407V138.083L232.595 141.735Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              opacity="0.5"
              d="M232.595 141.735C232.423 141.839 232.279 141.983 232.175 142.154C232.07 142.325 232.008 142.519 231.994 142.719V144.062C231.994 144.428 232.252 144.572 232.595 144.392L238.954 140.722V140.434L232.649 144.032C232.463 144.146 232.307 144.032 232.307 143.834V142.605C232.312 142.485 232.346 142.368 232.405 142.264C232.465 142.159 232.548 142.071 232.649 142.005L238.954 138.407V138.083L232.595 141.735Z"
              fill="black"
            />
            <path
              id="tv"
              d="M238.954 138.058L229.38 132.583L222.997 136.253C222.831 136.363 222.694 136.509 222.594 136.681C222.495 136.853 222.438 137.045 222.426 137.243V138.586C222.418 138.657 222.429 138.728 222.459 138.792C222.489 138.857 222.535 138.912 222.594 138.952L232.168 144.433C232.109 144.392 232.062 144.336 232.032 144.271C232.003 144.205 231.992 144.133 232 144.062V142.718C232.014 142.518 232.076 142.325 232.181 142.153C232.285 141.982 232.429 141.839 232.601 141.735L238.954 138.058Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              opacity="0.1"
              d="M238.954 138.058L229.38 132.583L222.997 136.253C222.831 136.363 222.694 136.509 222.594 136.681C222.495 136.853 222.438 137.045 222.426 137.243V138.586C222.418 138.657 222.429 138.728 222.459 138.792C222.489 138.857 222.535 138.912 222.594 138.952L232.168 144.433C232.109 144.392 232.062 144.336 232.032 144.271C232.003 144.205 231.992 144.133 232 144.062V142.718C232.014 142.518 232.076 142.325 232.181 142.153C232.285 141.982 232.429 141.839 232.601 141.735L238.954 138.058Z"
              fill="black"
            />
            <path
              id="tv"
              d="M232.186 142.161C232.083 142.329 232.026 142.521 232.018 142.718V144.062C232.01 144.133 232.021 144.205 232.05 144.271C232.08 144.336 232.127 144.393 232.186 144.433L222.612 138.952C222.554 138.912 222.507 138.857 222.477 138.793C222.447 138.728 222.436 138.657 222.444 138.586V137.243C222.449 137.044 222.507 136.849 222.612 136.679L232.186 142.161Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              opacity="0.3"
              d="M232.186 142.161C232.083 142.329 232.026 142.521 232.018 142.718V144.062C232.01 144.133 232.021 144.205 232.05 144.271C232.08 144.336 232.127 144.393 232.186 144.433L222.612 138.952C222.554 138.912 222.507 138.857 222.477 138.793C222.447 138.728 222.436 138.657 222.444 138.586V137.243C222.449 137.044 222.507 136.849 222.612 136.679L232.186 142.161Z"
              fill="black"
            />
            <path
              id="tv"
              d="M223.964 137.447C223.78 138.198 223.78 138.982 223.964 139.732L224.444 140.008C224.257 139.258 224.257 138.473 224.444 137.723L223.964 137.447Z"
              fill="#FAFAFA"
            />
            <path
              id="tv"
              d="M230.101 140.98C229.914 141.73 229.914 142.515 230.101 143.265L230.575 143.541C230.39 142.788 230.39 142.002 230.575 141.25L230.101 140.98Z"
              fill="#FAFAFA"
            />
            <path
              id="tv"
              d="M204.167 119.85L196.42 124.311C196.204 124.421 195.966 124.478 195.723 124.478C195.481 124.478 195.242 124.421 195.026 124.311L185.464 118.746C185.079 118.524 185.079 118.146 185.464 117.948L193.211 113.481C193.427 113.371 193.666 113.314 193.908 113.314C194.151 113.314 194.389 113.371 194.605 113.481L204.161 119.046C204.245 119.075 204.318 119.128 204.37 119.2C204.421 119.272 204.449 119.357 204.45 119.446C204.451 119.534 204.424 119.62 204.373 119.693C204.323 119.765 204.251 119.82 204.167 119.85Z"
              fill="#E0E0E0"
            />
            <path
              id="tv"
              d="M203.188 118.992V119.646L196.012 123.778C195.934 123.827 195.845 123.858 195.753 123.868C195.595 123.892 195.434 123.86 195.297 123.778L186.233 118.566V117.889L195.032 122.968C195.225 123.067 195.438 123.118 195.654 123.118C195.87 123.118 196.084 123.067 196.276 122.968L203.188 118.992Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              opacity="0.6"
              d="M203.188 118.992V119.646L196.012 123.778C195.934 123.827 195.845 123.858 195.753 123.868C195.595 123.892 195.434 123.86 195.297 123.778L186.233 118.566V117.889L195.032 122.968C195.225 123.067 195.438 123.118 195.654 123.118C195.87 123.118 196.084 123.067 196.276 122.968L203.188 118.992Z"
              fill="white"
            />
            <path
              id="tv"
              opacity="0.2"
              d="M203.188 118.992V119.646L196.012 123.778C195.934 123.827 195.845 123.858 195.753 123.868H195.681V123.112C195.891 123.113 196.098 123.062 196.282 122.962L203.188 118.992Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              d="M196.282 122.967L203.194 118.985C203.371 118.867 203.518 118.708 203.622 118.523C203.726 118.338 203.786 118.13 203.795 117.918V116.64C203.786 116.427 203.726 116.219 203.622 116.032C203.518 115.846 203.371 115.686 203.194 115.567L194.395 110.505C194.202 110.408 193.989 110.357 193.773 110.357C193.557 110.357 193.344 110.408 193.151 110.505L186.239 114.487C186.062 114.607 185.916 114.766 185.811 114.953C185.707 115.139 185.648 115.347 185.638 115.561V116.814C185.648 117.024 185.707 117.229 185.811 117.412C185.916 117.594 186.063 117.749 186.239 117.864L195.038 122.949C195.23 123.05 195.442 123.103 195.658 123.107C195.874 123.11 196.088 123.062 196.282 122.967Z"
              fill="#455A64"
            />
            <path
              id="tv"
              d="M195.681 114.02L203.212 115.567C203.389 115.687 203.536 115.846 203.64 116.033C203.744 116.219 203.804 116.427 203.813 116.641V117.918C203.804 118.131 203.744 118.338 203.64 118.523C203.536 118.709 203.389 118.867 203.212 118.986L196.282 122.968C196.098 123.067 195.891 123.119 195.681 123.118V114.02Z"
              fill="#263238"
            />
            <path
              id="tv"
              d="M203.188 116.28L196.282 120.263C196.089 120.36 195.876 120.411 195.66 120.411C195.444 120.411 195.231 120.36 195.038 120.263L186.239 115.201C186.165 115.175 186.101 115.127 186.055 115.063C186.01 114.999 185.985 114.923 185.985 114.844C185.985 114.766 186.01 114.689 186.055 114.625C186.101 114.561 186.165 114.513 186.239 114.487L193.151 110.505C193.344 110.408 193.557 110.357 193.773 110.357C193.989 110.357 194.202 110.408 194.395 110.505L203.194 115.567C203.268 115.593 203.332 115.642 203.377 115.706C203.422 115.771 203.446 115.847 203.445 115.926C203.444 116.004 203.419 116.08 203.373 116.144C203.327 116.208 203.262 116.255 203.188 116.28Z"
              fill="#37474F"
            />
            <path
              id="tv"
              d="M195.381 115.154C195.46 115.182 195.529 115.234 195.577 115.303C195.625 115.372 195.651 115.454 195.651 115.538C195.651 115.622 195.625 115.704 195.577 115.772C195.529 115.841 195.46 115.893 195.381 115.921C195.174 116.025 194.945 116.079 194.714 116.079C194.482 116.079 194.254 116.025 194.047 115.921C193.674 115.712 193.674 115.37 194.047 115.154C194.254 115.05 194.482 114.997 194.714 114.997C194.945 114.997 195.174 115.05 195.381 115.154Z"
              fill="#FAFAFA"
            />
            <path
              id="tv"
              d="M187.363 116.527C187.433 116.574 187.491 116.636 187.533 116.708C187.574 116.781 187.598 116.863 187.603 116.946C187.603 117.108 187.495 117.168 187.363 117.096C187.291 117.051 187.232 116.989 187.189 116.916C187.146 116.843 187.121 116.761 187.117 116.677C187.117 116.515 187.225 116.455 187.363 116.527Z"
              fill="#FAFAFA"
            />
            <path
              id="tv"
              d="M187.363 117.463C187.433 117.509 187.491 117.571 187.533 117.644C187.574 117.717 187.598 117.798 187.603 117.882C187.603 118.043 187.495 118.103 187.363 118.031C187.291 117.986 187.232 117.925 187.189 117.852C187.146 117.779 187.121 117.697 187.117 117.612C187.117 117.451 187.225 117.415 187.363 117.463Z"
              fill="#FAFAFA"
            />
            <path
              id="tv"
              d="M232.445 135.203L181.125 105.665V107.278L232.445 136.817V135.203Z"
              fill="#B16668"
            />
            <path
              id="tv"
              d="M242.211 131.191L232.445 136.816V135.203L242.211 129.578V131.191Z"
              fill="#9A4A4D"
            />
            <path
              id="tv"
              d="M232.445 135.203L181.125 105.665L190.891 100.04L242.211 129.578L232.445 135.203Z"
              fill="#FAFAFA"
            />
            <path
              id="tv"
              d="M187.363 107.417L196.853 112.88L203.146 109.264L193.65 103.8L187.363 107.417Z"
              fill="#E0E0E0"
            />
            <path
              id="tv"
              d="M196.625 110.949L196.222 111.141L188.83 106.883L189.227 106.691L196.625 110.949Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              opacity="0.2"
              d="M196.625 110.949L196.222 111.141L188.83 106.883L189.227 106.691L196.625 110.949Z"
              fill="black"
            />
            <path
              id="tv"
              d="M189.226 106.691L196.264 110.745L197.286 100.237L190.248 96.1831L189.226 106.691Z"
              fill="#407BFF"
            />
            <g opacity="0.8">
              <path
                id="tv"
                d="M189.226 106.691L196.264 110.745L197.286 100.237L190.248 96.1831L189.226 106.691Z"
                fill="white"
              />
            </g>
            <path
              id="tv"
              d="M188.073 107.219L196.835 112.263L198.037 99.8776L189.275 94.8276L188.073 107.219ZM189.876 95.9612L197.274 100.225L196.216 111.129L188.818 106.871L189.876 95.9612Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              d="M188.073 107.219L196.835 112.263L198.037 99.8776L189.275 94.8276L188.073 107.219ZM189.876 95.9612L197.274 100.225L196.216 111.129L188.818 106.871L189.876 95.9612Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              d="M188.83 106.882L189.227 106.69L190.248 96.183L189.888 95.9731L188.83 106.882Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              opacity="0.35"
              d="M188.83 106.882L189.227 106.69L190.248 96.183L189.888 95.9731L188.83 106.882Z"
              fill="black"
            />
            <path
              id="tv"
              d="M189.281 94.8397L189.683 94.6538L198.446 99.6974L198.043 99.8893L189.281 94.8397Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              opacity="0.3"
              d="M189.281 94.8397L189.683 94.6538L198.446 99.6974L198.043 99.8893L189.281 94.8397Z"
              fill="white"
            />
            <path
              id="tv"
              d="M198.446 99.6982L198.043 99.8901L196.835 112.274L197.238 112.088L198.446 99.6982Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              opacity="0.35"
              d="M198.446 99.6982L198.043 99.8901L196.835 112.274L197.238 112.088L198.446 99.6982Z"
              fill="black"
            />
            <path
              id="tv"
              d="M189.533 106.486L196.024 110.228L196.198 108.453L194.99 103.26L193.842 105.029L194.077 106.528L192.159 101.011L189.707 104.717L189.533 106.486Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              d="M195.08 101.072C195.216 101.155 195.326 101.273 195.401 101.413C195.476 101.553 195.513 101.71 195.507 101.869C195.508 101.931 195.492 101.992 195.459 102.044C195.426 102.097 195.379 102.138 195.323 102.165C195.267 102.191 195.205 102.2 195.143 102.191C195.082 102.182 195.025 102.156 194.978 102.115C194.842 102.032 194.73 101.914 194.655 101.774C194.579 101.634 194.541 101.477 194.545 101.317C194.587 101.03 194.822 100.916 195.08 101.072Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              d="M228.652 127.238C226.849 128.264 226.849 129.925 228.652 130.951C229.65 131.456 230.752 131.72 231.871 131.72C232.989 131.72 234.092 131.456 235.089 130.951C236.892 129.925 236.892 128.264 235.089 127.238C234.091 126.736 232.989 126.474 231.871 126.474C230.753 126.474 229.65 126.736 228.652 127.238Z"
              fill="#E0E0E0"
            />
            <path
              id="tv"
              d="M228.135 127.064C228.167 126.732 228.287 126.415 228.482 126.144C228.678 125.873 228.942 125.659 229.247 125.523C230.079 125.1 231 124.88 231.934 124.88C232.868 124.88 233.788 125.1 234.62 125.523C234.926 125.659 235.19 125.873 235.385 126.144C235.581 126.415 235.7 126.732 235.732 127.064V128.732C235.703 129.065 235.584 129.385 235.388 129.657C235.193 129.929 234.927 130.144 234.62 130.279C233.788 130.702 232.868 130.922 231.934 130.922C231 130.922 230.079 130.702 229.247 130.279C228.941 130.143 228.676 129.928 228.481 129.656C228.286 129.384 228.166 129.065 228.135 128.732V127.064Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              d="M228.135 127.064C228.167 126.732 228.287 126.415 228.482 126.144C228.678 125.873 228.942 125.659 229.247 125.523C230.079 125.1 231 124.88 231.934 124.88C232.868 124.88 233.788 125.1 234.62 125.523C234.926 125.659 235.19 125.873 235.385 126.144C235.581 126.415 235.7 126.732 235.732 127.064V128.732C235.703 129.065 235.584 129.385 235.388 129.657C235.193 129.929 234.927 130.144 234.62 130.279C233.788 130.702 232.868 130.922 231.934 130.922C231 130.922 230.079 130.702 229.247 130.279C228.941 130.143 228.676 129.928 228.481 129.656C228.286 129.384 228.166 129.065 228.135 128.732V127.064Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              opacity="0.2"
              d="M228.135 127.064C228.167 126.732 228.287 126.415 228.482 126.144C228.678 125.873 228.942 125.659 229.247 125.523C230.079 125.1 231 124.88 231.934 124.88C232.868 124.88 233.788 125.1 234.62 125.523C234.926 125.659 235.19 125.873 235.385 126.144C235.581 126.415 235.7 126.732 235.732 127.064V128.732C235.703 129.065 235.584 129.385 235.388 129.657C235.193 129.929 234.927 130.144 234.62 130.279C233.788 130.702 232.868 130.922 231.934 130.922C231 130.922 230.079 130.702 229.247 130.279C228.941 130.143 228.676 129.928 228.481 129.656C228.286 129.384 228.166 129.065 228.135 128.732V127.064Z"
              fill="white"
            />
            <path
              id="tv"
              d="M234.59 128.618C233.758 129.041 232.838 129.261 231.904 129.261C230.97 129.261 230.049 129.041 229.217 128.618C227.733 127.76 227.733 126.375 229.217 125.523C230.049 125.1 230.97 124.88 231.904 124.88C232.838 124.88 233.758 125.1 234.59 125.523C236.075 126.375 236.075 127.76 234.59 128.618Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              opacity="0.15"
              d="M234.59 128.618C233.758 129.041 232.838 129.261 231.904 129.261C230.97 129.261 230.049 129.041 229.217 128.618C227.733 127.76 227.733 126.375 229.217 125.523C230.049 125.1 230.97 124.88 231.904 124.88C232.838 124.88 233.758 125.1 234.59 125.523C236.075 126.375 236.075 127.76 234.59 128.618Z"
              fill="black"
            />
            <path
              id="tv"
              opacity="0.4"
              d="M229.157 130.243L229.217 130.279C230.05 130.702 230.97 130.923 231.904 130.923C232.838 130.923 233.758 130.702 234.59 130.279C234.974 130.078 235.296 129.778 235.522 129.41V127.749C235.294 128.116 234.973 128.416 234.59 128.618L234.464 128.69C234.426 129.107 234.261 129.503 233.991 129.824C233.722 130.146 233.361 130.378 232.956 130.489C231.695 130.811 230.365 130.725 229.157 130.243Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              opacity="0.1"
              d="M235.035 128.312C235.228 128.153 235.392 127.963 235.521 127.749V129.41C235.394 129.625 235.229 129.816 235.035 129.973V128.312Z"
              fill="black"
            />
            <path
              id="tv"
              d="M228.737 125.397C228.737 125.043 229.031 124.672 229.548 124.378C230.288 124.011 231.102 123.82 231.928 123.82C232.754 123.82 233.568 124.011 234.308 124.378C234.825 124.672 235.119 125.043 235.119 125.397V127.07C235.119 127.424 234.825 127.796 234.308 128.09C233.568 128.457 232.754 128.647 231.928 128.647C231.102 128.647 230.288 128.457 229.548 128.09C229.031 127.796 228.737 127.424 228.737 127.07V125.397Z"
              fill="#263238"
            />
            <path
              id="tv"
              d="M228.737 125.397V127.07C228.737 127.424 229.031 127.796 229.548 128.09C230.288 128.456 231.102 128.647 231.928 128.647C232.754 128.647 233.568 128.456 234.308 128.09C234.825 127.796 235.119 127.424 235.119 127.07V125.397C235.119 125.751 234.825 126.123 234.308 126.416C233.57 126.787 232.754 126.98 231.928 126.98C231.101 126.98 230.286 126.787 229.548 126.416C229.007 126.123 228.737 125.751 228.737 125.397ZM235.035 127.262C235.055 127.232 235.071 127.2 235.083 127.166C235.075 127.224 235.059 127.281 235.035 127.334V127.262ZM235.035 127.076C235.055 127.046 235.071 127.014 235.083 126.98C235.076 127.038 235.06 127.095 235.035 127.148V127.076ZM235.035 126.89C235.055 126.86 235.071 126.828 235.083 126.794C235.076 126.853 235.06 126.909 235.035 126.962V126.89ZM235.035 126.704C235.055 126.674 235.071 126.642 235.083 126.608C235.076 126.667 235.06 126.723 235.035 126.776V126.704ZM235.035 126.524C235.054 126.492 235.07 126.458 235.083 126.422C235.076 126.481 235.06 126.537 235.035 126.59V126.524ZM235.035 126.339C235.054 126.306 235.07 126.272 235.083 126.237C235.076 126.295 235.06 126.351 235.035 126.404V126.339ZM235.035 126.153C235.054 126.12 235.07 126.086 235.083 126.051C235.076 126.109 235.06 126.166 235.035 126.219V126.153ZM235.035 125.967C235.054 125.934 235.07 125.9 235.083 125.865C235.076 125.923 235.06 125.98 235.035 126.033V125.967ZM235.035 125.781C235.054 125.748 235.07 125.714 235.083 125.679C235.076 125.737 235.06 125.794 235.035 125.847V125.781ZM234.729 127.634C234.829 127.552 234.916 127.455 234.987 127.346V127.436C234.92 127.556 234.832 127.663 234.729 127.754V127.634ZM234.729 127.448C234.829 127.366 234.916 127.269 234.987 127.16V127.25C234.92 127.37 234.832 127.478 234.729 127.568V127.448ZM234.729 127.262C234.829 127.18 234.916 127.083 234.987 126.974V127.064C234.92 127.184 234.832 127.292 234.729 127.382V127.262ZM234.729 127.076C234.827 126.995 234.914 126.9 234.987 126.794V126.878C234.92 126.998 234.832 127.106 234.729 127.196V127.076ZM234.729 126.89C234.827 126.809 234.914 126.714 234.987 126.608V126.692C234.92 126.812 234.832 126.92 234.729 127.01V126.89ZM234.729 126.704C234.827 126.623 234.914 126.528 234.987 126.422V126.506C234.92 126.626 234.832 126.734 234.729 126.824V126.704ZM234.729 126.518C234.827 126.437 234.914 126.342 234.987 126.237V126.321C234.92 126.44 234.832 126.548 234.729 126.638V126.518ZM234.729 126.339C234.826 126.253 234.913 126.157 234.987 126.051V126.141C234.918 126.257 234.83 126.362 234.729 126.452V126.339ZM234.729 126.153C234.826 126.067 234.913 125.971 234.987 125.865V125.955C234.918 126.071 234.83 126.177 234.729 126.267V126.153ZM234.278 127.952H234.326C234.45 127.879 234.569 127.797 234.681 127.706V127.82C234.562 127.923 234.434 128.014 234.296 128.09L234.278 127.952ZM234.278 127.766H234.326C234.45 127.693 234.569 127.611 234.681 127.52V127.61C234.562 127.714 234.434 127.804 234.296 127.88L234.278 127.766ZM234.278 127.58H234.326C234.45 127.507 234.569 127.425 234.681 127.334V127.448C234.562 127.552 234.434 127.642 234.296 127.718L234.278 127.58ZM234.278 127.394H234.326C234.45 127.321 234.569 127.239 234.681 127.148V127.268C234.561 127.368 234.432 127.456 234.296 127.532L234.278 127.394ZM234.278 127.208H234.326C234.45 127.135 234.569 127.053 234.681 126.962V127.082C234.559 127.182 234.431 127.272 234.296 127.352L234.278 127.208ZM234.278 127.022H234.326C234.45 126.949 234.569 126.867 234.681 126.776V126.896C234.559 126.996 234.431 127.086 234.296 127.166L234.278 127.022ZM234.278 126.836H234.326C234.45 126.764 234.569 126.681 234.681 126.59V126.71C234.561 126.812 234.432 126.902 234.296 126.98L234.278 126.836ZM234.278 126.65H234.326C234.45 126.578 234.569 126.495 234.681 126.404V126.524C234.561 126.626 234.432 126.716 234.296 126.794L234.278 126.65ZM234.278 126.464H234.326C234.45 126.392 234.569 126.309 234.681 126.219V126.339C234.561 126.44 234.432 126.531 234.296 126.608L234.278 126.464ZM233.881 128.138C233.998 128.092 234.112 128.04 234.224 127.982V128.108C234.114 128.17 233.999 128.224 233.881 128.27V128.138ZM233.881 127.952C233.998 127.906 234.112 127.854 234.224 127.796V127.922C234.114 127.984 233.999 128.038 233.881 128.084V127.952ZM233.881 127.766C233.998 127.72 234.112 127.668 234.224 127.61V127.736C234.114 127.798 233.999 127.852 233.881 127.898V127.766ZM233.881 127.58C233.998 127.534 234.112 127.482 234.224 127.424V127.55C234.114 127.612 233.999 127.666 233.881 127.712V127.58ZM233.881 127.394C233.998 127.348 234.112 127.296 234.224 127.238V127.364C234.114 127.426 233.999 127.48 233.881 127.526V127.394ZM233.881 127.208C233.998 127.162 234.112 127.11 234.224 127.052V127.178C234.114 127.24 233.999 127.295 233.881 127.34V127.208ZM233.881 127.022C233.998 126.976 234.112 126.924 234.224 126.866V127.01C234.114 127.072 233.999 127.127 233.881 127.172V127.022ZM233.881 126.836C233.998 126.79 234.112 126.738 234.224 126.68V126.806C234.114 126.869 233.999 126.923 233.881 126.968V126.836ZM233.881 126.65C233.998 126.604 234.112 126.552 234.224 126.494V126.62C234.114 126.683 233.999 126.737 233.881 126.782V126.65ZM233.442 128.288L233.833 128.156V128.288L233.442 128.42V128.288ZM233.442 128.102L233.833 127.97V128.102C233.705 128.153 233.575 128.197 233.442 128.234V128.102ZM233.442 127.916L233.833 127.784V127.916C233.705 127.967 233.575 128.011 233.442 128.048V127.916ZM233.442 127.73L233.833 127.598V127.73C233.705 127.781 233.575 127.825 233.442 127.862V127.73ZM233.442 127.544C233.575 127.507 233.705 127.463 233.833 127.412V127.544C233.705 127.595 233.575 127.639 233.442 127.676V127.544ZM233.442 127.358C233.575 127.321 233.705 127.277 233.833 127.226V127.358C233.705 127.409 233.575 127.453 233.442 127.49V127.358ZM233.442 127.172C233.581 127.136 233.707 127.088 233.833 127.046V127.172C233.705 127.223 233.575 127.267 233.442 127.304V127.172ZM233.442 126.986C233.575 126.951 233.705 126.909 233.833 126.86V127.01C233.705 127.061 233.575 127.105 233.442 127.142V126.986ZM233.442 126.8C233.575 126.766 233.705 126.723 233.833 126.674V126.8C233.706 126.854 233.576 126.898 233.442 126.932V126.8ZM232.968 128.396C233.118 128.396 233.256 128.336 233.394 128.3V128.432C233.255 128.473 233.112 128.505 232.968 128.527V128.396ZM232.968 128.21C233.118 128.21 233.256 128.15 233.394 128.114V128.246C233.255 128.287 233.112 128.319 232.968 128.342V128.21ZM232.968 128.024C233.118 128.024 233.256 127.964 233.394 127.928V128.06C233.255 128.101 233.112 128.134 232.968 128.156V128.024ZM232.968 127.838C233.118 127.838 233.256 127.778 233.394 127.742V127.874C233.255 127.916 233.112 127.948 232.968 127.97V127.838ZM232.968 127.652C233.118 127.652 233.256 127.592 233.394 127.556V127.688C233.256 127.73 233.118 127.76 232.968 127.79V127.652ZM232.968 127.466C233.112 127.444 233.255 127.412 233.394 127.37V127.502C233.256 127.544 233.118 127.574 232.968 127.604V127.466ZM232.968 127.28C233.112 127.258 233.255 127.226 233.394 127.184V127.322L232.968 127.418V127.28ZM232.968 127.094C233.112 127.072 233.255 127.04 233.394 126.998V127.136L232.968 127.232V127.094ZM232.968 126.908C233.112 126.886 233.255 126.854 233.394 126.812V126.95L232.968 127.046V126.908ZM232.469 128.462C232.625 128.462 232.775 128.444 232.92 128.408V128.539C232.775 128.539 232.625 128.587 232.469 128.599V128.462ZM232.469 128.276C232.625 128.276 232.775 128.258 232.92 128.222V128.354C232.775 128.354 232.625 128.402 232.469 128.414V128.276ZM232.469 128.09C232.625 128.09 232.775 128.072 232.92 128.036V128.168C232.775 128.168 232.625 128.216 232.469 128.228V128.09ZM232.469 127.91L232.92 127.85V127.982C232.775 127.982 232.625 128.03 232.469 128.042V127.91ZM232.469 127.724L232.92 127.664V127.796C232.775 127.796 232.625 127.844 232.469 127.856V127.724ZM232.469 127.538L232.92 127.478V127.61C232.775 127.61 232.625 127.658 232.469 127.67V127.538ZM232.469 127.352L232.92 127.292V127.424C232.775 127.424 232.625 127.472 232.469 127.484V127.352ZM232.469 127.166L232.92 127.106V127.238C232.775 127.238 232.625 127.286 232.469 127.298V127.166ZM232.469 126.98L232.92 126.92V127.052C232.771 127.082 232.62 127.102 232.469 127.112V126.98ZM231.952 128.491H232.421V128.629C232.264 128.629 232.108 128.629 231.952 128.629V128.491ZM231.952 128.306H232.421V128.444C232.264 128.444 232.108 128.444 231.952 128.444V128.306ZM231.952 128.12C232.108 128.12 232.264 128.12 232.421 128.12V128.21C232.264 128.21 232.108 128.21 231.952 128.21V128.12ZM231.952 127.934C232.108 127.934 232.264 127.934 232.421 127.934V128.072C232.264 128.072 232.108 128.072 231.952 128.072V127.934ZM231.952 127.748C232.108 127.748 232.264 127.748 232.421 127.748V127.886C232.264 127.886 232.108 127.886 231.952 127.886V127.748ZM231.952 127.562C232.108 127.562 232.264 127.562 232.421 127.562V127.7H231.952V127.562ZM231.952 127.376C232.108 127.385 232.265 127.385 232.421 127.376V127.514H231.952V127.376ZM231.952 127.19C232.108 127.199 232.265 127.199 232.421 127.19V127.328H231.952V127.19ZM231.952 127.004C232.108 127.013 232.265 127.013 232.421 127.004V127.142H231.952V127.004ZM231.435 128.467H231.904V128.599C231.748 128.599 231.591 128.599 231.435 128.599V128.467ZM231.435 128.282H231.904V128.414C231.748 128.414 231.591 128.414 231.435 128.414V128.282ZM231.435 128.096C231.591 128.096 231.748 128.096 231.904 128.096V128.228C231.748 128.228 231.591 128.228 231.435 128.228V128.096ZM231.435 127.91C231.591 127.91 231.748 127.91 231.904 127.91V128.042C231.748 128.042 231.591 128.042 231.435 128.042V127.91ZM231.435 127.724C231.591 127.724 231.748 127.724 231.904 127.724V127.856C231.748 127.856 231.591 127.856 231.435 127.856V127.724ZM231.435 127.538C231.591 127.538 231.748 127.538 231.904 127.538V127.67H231.435V127.538ZM231.435 127.352C231.591 127.361 231.748 127.361 231.904 127.352V127.484H231.435V127.352ZM231.435 127.166C231.591 127.175 231.748 127.175 231.904 127.166V127.298H231.435V127.166ZM231.435 126.98C231.591 126.989 231.748 126.989 231.904 126.98V127.112H231.435V126.98ZM230.936 128.408C231.089 128.432 231.239 128.45 231.387 128.462V128.599C231.237 128.599 231.087 128.563 230.936 128.539V128.408ZM230.936 128.222L231.387 128.276V128.414C231.237 128.414 231.087 128.378 230.936 128.354V128.222ZM230.936 128.036L231.387 128.09V128.21C231.237 128.21 231.087 128.174 230.936 128.15V128.036ZM230.936 127.85L231.387 127.91V128.042C231.237 128.042 231.087 128.006 230.936 127.982V127.85ZM230.936 127.664L231.387 127.724V127.856C231.237 127.856 231.087 127.82 230.936 127.796V127.664ZM230.936 127.478L231.387 127.538V127.67C231.237 127.67 231.087 127.634 230.936 127.61V127.478ZM230.936 127.292L231.387 127.352V127.484C231.237 127.484 231.087 127.448 230.936 127.424V127.292ZM230.936 127.106L231.387 127.166V127.298C231.237 127.298 231.087 127.262 230.936 127.238V127.106ZM230.936 126.92L231.387 126.98V127.112C231.236 127.101 231.085 127.081 230.936 127.052V126.92ZM230.461 128.3C230.6 128.336 230.744 128.372 230.888 128.396V128.527C230.744 128.505 230.601 128.473 230.461 128.432V128.3ZM230.461 128.114C230.6 128.15 230.744 128.186 230.888 128.21V128.342C230.744 128.319 230.601 128.287 230.461 128.246V128.114ZM230.461 127.928C230.6 127.964 230.744 128 230.888 128.024V128.156C230.744 128.133 230.601 128.101 230.461 128.06V127.928ZM230.461 127.742C230.6 127.778 230.744 127.814 230.888 127.838V127.97C230.744 127.947 230.601 127.915 230.461 127.874V127.742ZM230.461 127.556C230.6 127.592 230.744 127.628 230.888 127.652V127.79C230.744 127.76 230.6 127.73 230.461 127.688V127.556ZM230.461 127.37C230.6 127.406 230.744 127.442 230.888 127.466V127.61C230.744 127.58 230.6 127.55 230.461 127.508V127.37ZM230.461 127.184C230.601 127.225 230.744 127.257 230.888 127.28V127.418L230.461 127.322V127.184ZM230.461 126.998C230.601 127.039 230.744 127.071 230.888 127.094V127.232L230.461 127.136V126.998ZM230.461 126.812C230.601 126.853 230.744 126.885 230.888 126.908V127.046L230.461 126.95V126.812ZM230.023 128.156L230.413 128.288V128.42L230.023 128.288V128.156ZM230.023 127.97L230.413 128.102V128.21C230.281 128.174 230.149 128.126 230.023 128.078V127.97ZM230.023 127.784L230.413 127.916V128.048C230.281 128.012 230.149 127.964 230.023 127.916V127.784ZM230.023 127.598L230.413 127.73V127.862C230.281 127.826 230.149 127.778 230.023 127.73V127.598ZM230.023 127.412C230.149 127.46 230.281 127.508 230.413 127.544V127.676C230.281 127.64 230.149 127.592 230.023 127.544V127.412ZM230.023 127.226C230.149 127.274 230.281 127.322 230.413 127.358V127.49C230.281 127.454 230.149 127.406 230.023 127.358V127.226ZM230.023 127.046C230.149 127.088 230.281 127.136 230.413 127.172V127.304C230.281 127.268 230.149 127.22 230.023 127.172V127.046ZM230.023 126.86C230.149 126.908 230.281 126.95 230.413 126.986V127.118C230.281 127.082 230.149 127.034 230.023 126.986V126.86ZM230.023 126.674C230.149 126.722 230.281 126.764 230.413 126.8V126.932C230.28 126.897 230.15 126.853 230.023 126.8V126.674ZM229.632 127.982C229.74 128.036 229.854 128.09 229.975 128.138V128.27C229.857 128.223 229.743 128.169 229.632 128.108V127.982ZM229.632 127.796C229.74 127.85 229.854 127.904 229.975 127.952V128.084C229.857 128.037 229.743 127.983 229.632 127.922V127.796ZM229.632 127.61C229.74 127.664 229.854 127.718 229.975 127.766V127.898C229.857 127.851 229.743 127.797 229.632 127.736V127.61ZM229.632 127.424C229.74 127.478 229.854 127.532 229.975 127.58V127.712C229.857 127.665 229.743 127.611 229.632 127.55V127.424ZM229.632 127.238C229.74 127.292 229.854 127.346 229.975 127.394V127.526C229.857 127.479 229.743 127.425 229.632 127.364V127.238ZM229.632 127.052C229.74 127.106 229.854 127.16 229.975 127.208V127.34C229.857 127.293 229.743 127.239 229.632 127.178V127.052ZM229.632 126.866C229.74 126.92 229.854 126.974 229.975 127.022V127.154C229.857 127.107 229.743 127.053 229.632 126.992V126.866ZM229.632 126.68C229.74 126.734 229.854 126.788 229.975 126.836V126.968C229.857 126.921 229.743 126.867 229.632 126.806V126.68ZM229.632 126.494C229.74 126.548 229.854 126.602 229.975 126.65V126.782C229.857 126.736 229.743 126.682 229.632 126.62V126.494ZM229.175 127.694C229.288 127.786 229.409 127.868 229.536 127.94H229.578V128.066C229.441 127.988 229.312 127.898 229.193 127.796L229.175 127.694ZM229.175 127.508C229.288 127.6 229.409 127.682 229.536 127.754H229.578V127.88C229.441 127.803 229.312 127.712 229.193 127.61L229.175 127.508ZM229.175 127.322C229.288 127.414 229.409 127.497 229.536 127.568H229.578V127.694C229.441 127.617 229.312 127.526 229.193 127.424L229.175 127.322ZM229.175 127.136C229.288 127.228 229.409 127.311 229.536 127.382H229.578V127.508C229.443 127.431 229.314 127.342 229.193 127.244L229.175 127.136ZM229.175 126.95C229.288 127.042 229.409 127.125 229.536 127.196H229.578V127.322C229.444 127.241 229.315 127.151 229.193 127.052L229.175 126.95ZM229.175 126.764C229.288 126.857 229.409 126.939 229.536 127.01H229.578V127.136C229.444 127.055 229.315 126.965 229.193 126.866L229.175 126.764ZM229.175 126.578C229.288 126.671 229.409 126.753 229.536 126.824H229.578V126.95C229.444 126.869 229.315 126.779 229.193 126.68L229.175 126.578ZM229.175 126.392C229.288 126.485 229.409 126.567 229.536 126.638H229.578V126.764C229.443 126.685 229.314 126.595 229.193 126.494L229.175 126.392ZM229.175 126.207C229.288 126.299 229.409 126.381 229.536 126.452H229.578V126.584C229.443 126.505 229.314 126.415 229.193 126.315L229.175 126.207ZM228.869 127.358C228.942 127.465 229.028 127.562 229.127 127.646V127.766C229.026 127.673 228.938 127.566 228.869 127.448V127.358ZM228.869 127.172C228.942 127.279 229.028 127.376 229.127 127.46V127.58C229.026 127.488 228.938 127.38 228.869 127.262V127.172ZM228.869 126.986C228.942 127.093 229.028 127.19 229.127 127.274V127.394C229.026 127.302 228.938 127.194 228.869 127.076V126.986ZM228.869 126.806C228.943 126.91 229.03 127.005 229.127 127.088V127.208C229.026 127.116 228.938 127.009 228.869 126.89V126.806ZM228.869 126.62C228.943 126.724 229.03 126.819 229.127 126.902V127.022C229.026 126.93 228.938 126.823 228.869 126.704V126.62ZM228.869 126.434C228.943 126.538 229.03 126.633 229.127 126.716V126.836C229.026 126.744 228.938 126.637 228.869 126.518V126.434ZM228.869 126.249C228.943 126.353 229.03 126.447 229.127 126.53V126.65C229.026 126.558 228.938 126.451 228.869 126.333V126.249ZM228.869 126.063C228.945 126.167 229.031 126.264 229.127 126.351V126.464C229.027 126.373 228.94 126.268 228.869 126.153V126.063ZM228.821 125.859C228.798 125.805 228.782 125.748 228.773 125.691C228.786 125.726 228.802 125.76 228.821 125.793V125.859ZM228.821 126.045C228.798 125.991 228.782 125.934 228.773 125.877C228.786 125.912 228.802 125.946 228.821 125.979V126.045ZM228.821 126.231C228.798 126.177 228.782 126.12 228.773 126.063C228.786 126.098 228.802 126.132 228.821 126.165V126.231ZM228.821 126.416C228.798 126.362 228.782 126.306 228.773 126.249C228.786 126.284 228.802 126.318 228.821 126.351V126.416ZM228.821 126.602C228.784 126.543 228.756 126.478 228.737 126.41C228.75 126.446 228.766 126.48 228.785 126.512L228.821 126.602ZM228.821 126.788C228.798 126.734 228.782 126.678 228.773 126.62C228.785 126.654 228.801 126.686 228.821 126.716V126.788ZM228.821 126.974C228.798 126.92 228.782 126.864 228.773 126.806C228.785 126.84 228.801 126.872 228.821 126.902V126.974ZM228.821 127.16C228.787 127.113 228.759 127.063 228.737 127.01C228.749 127.044 228.765 127.076 228.785 127.106L228.821 127.16ZM228.821 127.346C228.799 127.292 228.783 127.236 228.773 127.178C228.785 127.212 228.801 127.244 228.821 127.274V127.346ZM229.127 126.147V126.261C229.027 126.169 228.94 126.064 228.869 125.949V125.859C228.937 125.964 229.015 126.063 229.103 126.153L229.127 126.147Z"
              fill="#455A64"
            />
            <path
              id="tv"
              d="M228.135 121.013C228.135 120.221 228.983 119.262 230.034 118.866C231.269 118.47 232.598 118.47 233.833 118.866C234.885 119.262 235.732 120.221 235.732 121.013V125.415C235.702 125.748 235.584 126.068 235.388 126.34C235.192 126.612 234.927 126.827 234.62 126.962C233.788 127.385 232.867 127.605 231.934 127.605C231 127.605 230.079 127.385 229.247 126.962C228.941 126.826 228.676 126.611 228.481 126.339C228.285 126.067 228.166 125.748 228.135 125.415V122.416V121.013Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              opacity="0.2"
              d="M228.135 121.013C228.135 120.221 228.983 119.262 230.034 118.866C231.269 118.47 232.598 118.47 233.833 118.866C234.885 119.262 235.732 120.221 235.732 121.013V125.415C235.702 125.748 235.584 126.068 235.388 126.34C235.192 126.612 234.927 126.827 234.62 126.962C233.788 127.385 232.867 127.605 231.934 127.605C231 127.605 230.079 127.385 229.247 126.962C228.941 126.826 228.676 126.611 228.481 126.339C228.285 126.067 228.166 125.748 228.135 125.415V122.416V121.013Z"
              fill="white"
            />
            <path
              id="tv"
              opacity="0.35"
              d="M234.458 122.638C233.681 123.083 232.8 123.317 231.904 123.317C231.008 123.317 230.127 123.083 229.35 122.638C227.937 121.727 227.937 120.239 229.35 119.346C230.127 118.901 231.008 118.667 231.904 118.667C232.8 118.667 233.681 118.901 234.458 119.346C235.871 120.257 235.871 121.727 234.458 122.638Z"
              fill="white"
            />
            <path
              id="tv"
              opacity="0.4"
              d="M234.296 122.38C233.565 122.801 232.736 123.023 231.892 123.023C231.048 123.023 230.219 122.801 229.488 122.38C228.172 121.528 228.172 120.155 229.488 119.303C230.219 118.882 231.048 118.661 231.892 118.661C232.736 118.661 233.565 118.882 234.296 119.303C235.618 120.155 235.618 121.528 234.296 122.38Z"
              fill="white"
            />
            <path
              id="tv"
              opacity="0.4"
              d="M229.506 127.094L230.047 127.016C231.153 126.848 232.177 126.334 232.97 125.547C233.763 124.76 234.284 123.741 234.458 122.638C234.761 122.476 235.018 122.239 235.204 121.951C235.39 121.662 235.5 121.331 235.522 120.989V126.074C235.296 126.443 234.974 126.743 234.59 126.944C233.805 127.338 232.943 127.556 232.065 127.582C231.186 127.608 230.313 127.441 229.506 127.094Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              opacity="0.1"
              d="M235.035 122.152C235.337 121.839 235.51 121.424 235.521 120.989V126.074C235.394 126.29 235.229 126.481 235.035 126.638V122.152Z"
              fill="black"
            />
            <path
              id="tv"
              d="M231.08 120.899V120.749H231.141C231.192 120.66 231.267 120.588 231.357 120.539C231.549 120.441 231.761 120.391 231.976 120.391C232.191 120.391 232.403 120.441 232.595 120.539C232.688 120.584 232.763 120.658 232.811 120.749H232.853V120.899C232.846 120.975 232.819 121.049 232.773 121.111C232.728 121.174 232.666 121.222 232.595 121.252C232.403 121.35 232.191 121.401 231.976 121.401C231.761 121.401 231.549 121.35 231.357 121.252C231.282 121.225 231.217 121.177 231.168 121.115C231.119 121.052 231.089 120.977 231.08 120.899Z"
              fill="#37474F"
            />
            <path
              id="tv"
              d="M232.577 121.109C232.653 121.084 232.72 121.036 232.767 120.971C232.815 120.907 232.84 120.829 232.84 120.749C232.84 120.669 232.815 120.591 232.767 120.526C232.72 120.461 232.653 120.413 232.577 120.389C232.385 120.292 232.173 120.241 231.958 120.241C231.743 120.241 231.531 120.292 231.339 120.389C231.262 120.413 231.196 120.461 231.148 120.526C231.101 120.591 231.076 120.669 231.076 120.749C231.076 120.829 231.101 120.907 231.148 120.971C231.196 121.036 231.262 121.084 231.339 121.109C231.531 121.203 231.743 121.253 231.958 121.253C232.173 121.253 232.384 121.203 232.577 121.109Z"
              fill="#455A64"
            />
            <path
              id="tv"
              d="M231.964 121.012C232.073 121.015 232.181 120.988 232.277 120.934C232.409 120.856 232.457 120.736 232.397 120.629C232.388 120.622 232.378 120.618 232.367 120.618C232.356 120.618 232.345 120.622 232.337 120.629C232.333 120.633 232.329 120.637 232.327 120.642C232.325 120.647 232.324 120.653 232.324 120.659C232.324 120.664 232.325 120.67 232.327 120.675C232.329 120.68 232.333 120.685 232.337 120.688C232.373 120.748 232.337 120.82 232.252 120.874C232.169 120.916 232.076 120.938 231.982 120.938C231.888 120.938 231.795 120.916 231.712 120.874C231.645 120.832 231.609 120.79 231.609 120.742C231.613 120.713 231.624 120.686 231.642 120.662C231.66 120.639 231.684 120.621 231.712 120.611C231.83 120.549 231.965 120.528 232.096 120.551H232.144C232.146 120.539 232.143 120.527 232.137 120.517C232.13 120.507 232.12 120.5 232.108 120.497C231.957 120.471 231.801 120.495 231.664 120.563C231.622 120.579 231.586 120.607 231.56 120.644C231.535 120.681 231.521 120.725 231.521 120.769C231.521 120.814 231.535 120.858 231.56 120.895C231.586 120.931 231.622 120.96 231.664 120.976C231.759 121.013 231.862 121.026 231.964 121.012Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              d="M232.048 120.737L232.384 120.545C232.391 120.536 232.395 120.526 232.395 120.515C232.395 120.504 232.391 120.493 232.384 120.485C232.377 120.479 232.367 120.475 232.357 120.475C232.347 120.475 232.338 120.479 232.33 120.485L231.994 120.677C231.987 120.685 231.984 120.696 231.984 120.707C231.984 120.718 231.987 120.728 231.994 120.737C232.002 120.743 232.011 120.747 232.021 120.747C232.031 120.747 232.041 120.743 232.048 120.737Z"
              fill="#407BFF"
            />
            <path
              id="tv"
              d="M230.54 120.287V120.143C230.555 120.116 230.578 120.093 230.606 120.077C230.665 120.048 230.731 120.032 230.798 120.032C230.864 120.032 230.93 120.048 230.99 120.077C231.02 120.091 231.045 120.114 231.062 120.143V120.287C231.059 120.312 231.05 120.336 231.035 120.356C231.021 120.376 231.001 120.392 230.978 120.401C230.918 120.431 230.852 120.446 230.786 120.446C230.719 120.446 230.653 120.431 230.594 120.401C230.576 120.388 230.562 120.371 230.552 120.351C230.543 120.331 230.538 120.309 230.54 120.287Z"
              fill="#37474F"
            />
            <path
              id="tv"
              d="M231.008 120.257C231.116 120.191 231.116 120.095 231.008 120.029C230.948 120 230.882 119.984 230.816 119.984C230.749 119.984 230.683 120 230.624 120.029C230.516 120.095 230.516 120.191 230.624 120.257C230.683 120.287 230.749 120.302 230.816 120.302C230.882 120.302 230.948 120.287 231.008 120.257Z"
              fill="#455A64"
            />
            <path
              id="tv"
              d="M232.715 121.541V121.397C232.729 121.368 232.752 121.344 232.781 121.331C232.841 121.301 232.907 121.286 232.973 121.286C233.04 121.286 233.106 121.301 233.165 121.331C233.195 121.346 233.219 121.369 233.237 121.397V121.541C233.237 121.583 233.207 121.619 233.153 121.655C233.094 121.684 233.028 121.7 232.961 121.7C232.895 121.7 232.829 121.684 232.769 121.655C232.745 121.613 232.715 121.613 232.715 121.541Z"
              fill="#37474F"
            />
            <path
              id="tv"
              d="M233.183 121.505C233.208 121.499 233.231 121.485 233.247 121.465C233.263 121.445 233.271 121.42 233.271 121.394C233.271 121.368 233.263 121.343 233.247 121.323C233.231 121.303 233.208 121.289 233.183 121.283C233.124 121.253 233.058 121.238 232.991 121.238C232.925 121.238 232.859 121.253 232.799 121.283C232.774 121.289 232.752 121.303 232.736 121.323C232.72 121.343 232.711 121.368 232.711 121.394C232.711 121.42 232.72 121.445 232.736 121.465C232.752 121.485 232.774 121.499 232.799 121.505C232.858 121.537 232.924 121.555 232.991 121.555C233.058 121.555 233.125 121.537 233.183 121.505Z"
              fill="#455A64"
            />
            <path
              id="tv"
              d="M229.583 124.762L228.953 124.402C228.943 124.394 228.935 124.384 228.93 124.373C228.925 124.361 228.922 124.349 228.923 124.336V124.012C228.917 123.955 228.923 123.897 228.941 123.843C228.959 123.788 228.987 123.737 229.025 123.694C229.059 123.666 229.101 123.65 229.145 123.65C229.189 123.65 229.231 123.666 229.265 123.694C229.375 123.781 229.464 123.893 229.524 124.02C229.585 124.146 229.615 124.285 229.613 124.426V124.786C229.613 124.786 229.601 124.774 229.583 124.762Z"
              fill="#37474F"
            />
            <path
              id="tv"
              d="M228.953 124.509L229.583 124.869C229.583 124.869 229.583 124.911 229.583 124.935C229.583 125.193 229.415 125.319 229.235 125.217C229.133 125.135 229.049 125.032 228.99 124.915C228.931 124.798 228.898 124.67 228.893 124.539C228.893 124.539 228.935 124.497 228.953 124.509Z"
              fill="#37474F"
            />
            <path
              id="tv"
              d="M229.217 125.403C229.056 125.294 228.926 125.145 228.841 124.97C228.755 124.796 228.717 124.602 228.731 124.408C228.73 124.401 228.732 124.394 228.735 124.388C228.737 124.382 228.742 124.376 228.747 124.371C228.752 124.367 228.758 124.364 228.764 124.362C228.771 124.36 228.778 124.359 228.785 124.36C228.797 124.36 228.81 124.365 228.819 124.374C228.828 124.383 228.833 124.395 228.833 124.408C228.818 124.584 228.85 124.762 228.926 124.922C229.002 125.082 229.119 125.219 229.265 125.319C229.3 125.339 229.34 125.35 229.38 125.35C229.42 125.35 229.459 125.339 229.494 125.319C229.556 125.273 229.606 125.212 229.638 125.142C229.671 125.072 229.685 124.995 229.68 124.917C229.683 124.905 229.689 124.893 229.699 124.884C229.709 124.876 229.721 124.871 229.734 124.87C229.734 124.87 229.782 124.87 229.776 124.923C229.782 125.017 229.763 125.11 229.722 125.194C229.681 125.278 229.619 125.35 229.542 125.403C229.501 125.429 229.452 125.442 229.404 125.439H229.314V125.745L229.452 125.823C229.46 125.832 229.465 125.844 229.465 125.856C229.465 125.868 229.46 125.88 229.452 125.889C229.438 125.894 229.423 125.894 229.41 125.889L229.091 125.703C229.08 125.697 229.072 125.686 229.068 125.674C229.065 125.661 229.067 125.648 229.073 125.637C229.079 125.626 229.09 125.618 229.102 125.614C229.115 125.611 229.128 125.613 229.139 125.619L229.223 125.667V125.379L229.217 125.403Z"
              fill="#37474F"
            />
            <path
              id="tv"
              d="M244.29 118.116L244.387 118.056C244.583 117.929 244.746 117.757 244.863 117.555C244.98 117.353 245.047 117.126 245.06 116.893V79.5279C245.045 79.2934 244.974 79.0659 244.852 78.8645C244.731 78.663 244.563 78.4936 244.363 78.3703L192.983 48.8862C192.774 48.7812 192.543 48.7266 192.309 48.7266C192.076 48.7266 191.845 48.7812 191.636 48.8862C191.44 49.0138 191.277 49.1856 191.161 49.3878C191.044 49.5899 190.976 49.8167 190.963 50.0497V87.4267C190.975 87.6601 191.042 87.8874 191.159 88.0898C191.276 88.2921 191.439 88.4637 191.636 88.5903L242.908 118.134C243.123 118.241 243.361 118.295 243.601 118.292C243.842 118.289 244.078 118.229 244.29 118.116Z"
              fill="#37474F"
            />
            <path
              id="tv"
              d="M242.716 80.1037L244.862 78.8682C244.984 79.0669 245.053 79.2944 245.06 79.5279V116.893C245.047 117.126 244.98 117.353 244.863 117.555C244.746 117.757 244.583 117.929 244.387 118.056L244.291 118.116C244.081 118.22 243.851 118.274 243.617 118.274C243.384 118.274 243.154 118.22 242.944 118.116L242.716 117.984V80.1037Z"
              fill="#263238"
            />
            <path
              id="tv"
              d="M243.617 117.726V80.3614C243.604 80.1283 243.537 79.9016 243.42 79.6994C243.303 79.4973 243.14 79.3255 242.944 79.1978L191.672 49.6417C191.3 49.4258 190.999 49.5997 190.999 50.0255V87.4266C191.011 87.6599 191.078 87.8872 191.195 88.0896C191.312 88.2919 191.475 88.4635 191.672 88.5901L242.944 118.134C243.317 118.326 243.617 118.152 243.617 117.726Z"
              fill="#455A64"
            />
            <path
              id="tv"
              d="M190.999 50.0439L191.089 62.279L191.12 74.5082V86.7373C191.12 86.9832 191.12 87.259 191.12 87.4869C191.152 87.7141 191.238 87.9301 191.372 88.1167C191.511 88.3035 191.695 88.4521 191.907 88.5485L192.574 88.9264L195.23 90.4498L200.543 93.4965L221.741 105.78L232.343 111.921L242.908 118.117L232.288 112.077L221.657 106.02L200.399 93.8444L195.08 90.7436L192.448 89.2262L191.787 88.8424C191.547 88.7167 191.341 88.5358 191.186 88.3146C191.018 88.0855 190.912 87.8169 190.879 87.5349C190.879 87.253 190.879 87.0191 190.879 86.7552L190.909 74.5261L190.939 62.297L190.999 50.0439Z"
              fill="#455A64"
            />
            <path
              id="tv"
              d="M216.927 101.593L214.943 100.454C214.793 100.37 214.673 100.454 214.673 100.586C214.681 100.676 214.709 100.764 214.756 100.841C214.803 100.919 214.867 100.986 214.943 101.035L216.927 102.175C217.071 102.259 217.191 102.175 217.191 102.037C217.183 101.948 217.155 101.862 217.109 101.785C217.064 101.708 217.001 101.643 216.927 101.593Z"
              fill="#E0E0E0"
            />
            <path
              id="tv"
              d="M241.893 80.1396L192.802 51.795C192.586 51.675 192.418 51.795 192.418 52.0169V85.4415C192.425 85.5749 192.463 85.7048 192.53 85.8205C192.597 85.9362 192.69 86.0345 192.802 86.1072L241.893 114.416C242.103 114.536 242.277 114.416 242.277 114.194V80.8293C242.274 80.6918 242.237 80.5571 242.17 80.4369C242.103 80.3168 242.008 80.2147 241.893 80.1396Z"
              fill="#263238"
            />
            <path
              id="sofa"
              d="M85.9279 202.307L86.5409 193.515L90.808 191.056L88.3679 200.897L85.9279 202.307Z"
              fill="#B16668"
            />
            <path
              id="sofa"
              d="M85.9279 202.307L83.4878 200.897L83.5299 191.782L86.5409 193.515L85.9279 202.307Z"
              fill="#9A4A4D"
            />
            <path
              id="sofa"
              d="M56.0159 185.076L56.6349 176.284L60.902 173.825L58.462 183.672L56.0159 185.076Z"
              fill="#B16668"
            />
            <path
              id="sofa"
              d="M56.0159 185.076L53.5758 183.672L53.6239 174.551L56.6349 176.284L56.0159 185.076Z"
              fill="#9A4A4D"
            />
            <path
              id="sofa"
              d="M158.77 160.336L158.151 152.252L153.884 154.711L156.324 161.745L158.77 160.336Z"
              fill="#B16668"
            />
            <path
              id="sofa"
              d="M156.324 161.745L153.884 160.336L150.879 152.977L153.884 154.71L156.324 161.745Z"
              fill="#9A4A4D"
            />
            <path
              id="sofa"
              d="M85.9279 193.155L159.166 150.962V153.775L85.9279 195.968V193.155Z"
              fill="#B16668"
            />
            <path
              id="sofa"
              d="M51.7487 176.278L85.9279 195.968V193.155L51.7487 173.465V176.278Z"
              fill="#9A4A4D"
            />
            <path
              id="sofa"
              d="M85.9279 193.155L159.166 150.962L124.987 131.266L51.7487 173.465L85.9279 193.155Z"
              fill="#9A4A4D"
            />
            <path
              id="sofa"
              d="M159.209 133.642V148.504C159.16 149.331 158.917 150.136 158.499 150.853C158.082 151.57 157.501 152.178 156.805 152.63L156.113 153.026H156.083C155.152 153.483 154.108 153.66 153.078 153.536L91.373 187.722C91.3027 188.516 91.0538 189.285 90.6448 189.97C90.2359 190.655 89.6775 191.24 89.0111 191.68L88.3199 192.082C88.2636 192.119 88.2031 192.149 88.1396 192.172C88.1102 192.193 88.0777 192.209 88.0435 192.22C86.8684 192.711 85.5573 192.773 84.3413 192.394C84.2004 192.349 84.062 192.297 83.9266 192.238L83.8545 192.244C83.758 192.203 83.6637 192.157 83.572 192.106L52.524 174.215C51.826 173.765 51.2444 173.157 50.8266 172.44C50.4089 171.723 50.1667 170.917 50.12 170.089V137.9C50.1696 137.072 50.4129 136.268 50.8304 135.551C51.2479 134.835 51.828 134.226 52.524 133.774L120.997 94.2974C121.737 93.9246 122.554 93.7305 123.383 93.7305C124.211 93.7305 125.029 93.9246 125.769 94.2974L127.716 95.4129C128.427 95.8791 129.037 96.483 129.509 97.1887C129.982 97.8944 130.308 98.6875 130.468 99.5213L132.344 115.409L156.823 129.515C157.516 129.969 158.093 130.579 158.507 131.295C158.922 132.012 159.162 132.815 159.209 133.642Z"
              fill="#37474F"
            />
            <path
              id="sofa"
              d="M127.728 95.4184L125.787 94.2969C125.047 93.9242 124.229 93.73 123.401 93.73C122.572 93.73 121.754 93.9242 121.015 94.2969L52.5239 133.773L52.2775 133.929C51.1279 134.793 50.3674 136.076 50.162 137.498C50.3363 136.298 51.3279 135.842 52.5179 136.526L54.4652 137.665C55.2051 138.038 56.0223 138.232 56.8512 138.232C57.68 138.232 58.4973 138.038 59.2372 137.665L127.728 98.1653C129.032 97.4096 129.032 96.1801 127.728 95.4184Z"
              fill="#455A64"
            />
            <path
              id="sofa"
              d="M159.209 133.641V148.503C159.16 149.331 158.917 150.135 158.499 150.852C158.082 151.569 157.501 152.178 156.805 152.629L156.113 153.025H156.083C155.222 153.464 154.252 153.647 153.289 153.553C152.607 153.517 151.942 153.33 151.341 153.007L129.254 140.274C128.557 139.825 127.975 139.218 127.557 138.502C127.139 137.786 126.897 136.981 126.85 136.154V121.31C126.897 120.482 127.139 119.676 127.556 118.959C127.974 118.242 128.556 117.633 129.254 117.184L132.326 115.384L156.805 129.491C157.504 129.945 158.087 130.557 158.505 131.278C158.923 132 159.164 132.809 159.209 133.641Z"
              fill="#263238"
            />
            <path
              id="sofa"
              d="M132.344 115.408L129.266 117.207C127.956 117.963 127.956 119.199 129.266 119.954L151.359 132.687C152.057 133.137 152.638 133.744 153.056 134.46C153.473 135.176 153.716 135.981 153.763 136.808V151.676C153.763 153.187 154.839 153.805 156.167 153.049L156.853 152.653C157.549 152.202 158.13 151.593 158.548 150.876C158.965 150.159 159.208 149.355 159.257 148.527V133.641C159.208 132.813 158.966 132.008 158.548 131.291C158.131 130.575 157.55 129.966 156.853 129.515L132.344 115.408Z"
              fill="#455A64"
            />
            <path
              id="sofa"
              d="M153.745 136.784V151.652C153.745 153.163 154.821 153.781 156.15 153.025L156.835 152.629C157.531 152.178 158.112 151.569 158.53 150.852C158.947 150.136 159.19 149.331 159.239 148.503V133.641C159.208 132.811 158.966 132.002 158.536 131.29L153.078 134.439C153.496 135.151 153.726 135.958 153.745 136.784Z"
              fill="#37474F"
            />
            <path
              id="sofa"
              d="M152.754 153.571C152.527 154.048 152.233 154.49 151.882 154.884C151.207 155.502 150.453 156.028 149.641 156.45L94.2999 188.351C93.9276 188.54 93.5157 188.639 93.0979 188.639C92.6801 188.639 92.2683 188.54 91.8959 188.351L84.1369 183.877L68.613 174.934C67.8904 174.556 67.2854 173.987 66.8633 173.29C66.4412 172.593 66.2181 171.794 66.2181 170.979C66.2181 170.165 66.4412 169.366 66.8633 168.668C67.2854 167.971 67.8904 167.402 68.613 167.024L77.4177 161.95L84.155 158.057L123.948 135.11C124.688 134.74 125.505 134.546 126.334 134.546C127.162 134.546 127.979 134.74 128.72 135.11L150.806 147.861C152.129 148.623 153.211 149.211 153.211 150.956C153.192 151.846 153.038 152.727 152.754 153.571Z"
              fill="#263238"
            />
            <path
              id="sofa"
              d="M94.306 183.193L152.003 149.924C152.664 149.547 153.205 149.853 153.205 150.614V153.013C153.18 153.427 153.059 153.829 152.85 154.188C152.641 154.546 152.351 154.851 152.003 155.076L94.306 188.339C93.6509 188.717 93.104 188.411 93.104 187.655V185.256C93.1269 184.842 93.2478 184.439 93.4567 184.081C93.6656 183.722 93.9567 183.418 94.306 183.193Z"
              fill="#37474F"
            />
            <path
              id="sofa"
              d="M123.941 126.552L99.0779 140.892C98.3805 141.343 97.7994 141.952 97.3817 142.669C96.964 143.386 96.7215 144.191 96.6738 145.019V146.62C96.7215 147.448 96.964 148.253 97.3817 148.97C97.7994 149.687 98.3805 150.295 99.0779 150.746L121.171 163.455C121.911 163.831 122.73 164.027 123.56 164.027C124.39 164.027 125.209 163.831 125.949 163.455L150.812 149.121C151.51 148.67 152.091 148.061 152.509 147.345C152.926 146.628 153.169 145.823 153.216 144.995V143.393C153.17 142.565 152.928 141.759 152.51 141.042C152.093 140.325 151.511 139.717 150.812 139.267L128.719 126.534C127.977 126.164 127.158 125.973 126.328 125.976C125.499 125.979 124.681 126.177 123.941 126.552Z"
              fill="#37474F"
            />
            <path
              id="sofa"
              d="M123.563 156.936V164.055C122.723 164.065 121.895 163.858 121.159 163.455L99.0599 150.728C98.3625 150.277 97.7814 149.669 97.3638 148.952C96.9461 148.235 96.7036 147.43 96.6559 146.602V145.001C96.701 144.223 96.9165 143.464 97.2872 142.778C97.6579 142.092 98.1748 141.495 98.8015 141.03C97.7317 141.798 97.8158 142.92 99.0419 143.627L121.141 156.354C121.884 156.753 122.719 156.954 123.563 156.936Z"
              fill="#263238"
            />
            <path
              id="sofa"
              d="M125.925 156.372L150.789 142.032C152.105 141.276 152.105 140.041 150.789 139.285L128.696 126.552C127.951 126.174 127.127 125.978 126.292 125.978C125.456 125.978 124.632 126.174 123.888 126.552L99.0239 140.892C97.7077 141.654 97.7077 142.884 99.0239 143.645L121.117 156.372C121.861 156.753 122.685 156.951 123.521 156.951C124.357 156.951 125.181 156.753 125.925 156.372Z"
              fill="#455A64"
            />
            <path
              id="sofa"
              d="M93.4705 144.119L68.6069 158.459C67.9083 158.908 67.3262 159.515 66.9083 160.231C66.4904 160.947 66.2486 161.752 66.2029 162.58V164.187C66.2486 165.015 66.4904 165.819 66.9083 166.536C67.3262 167.252 67.9083 167.859 68.6069 168.307L90.6999 181.04C91.4398 181.413 92.257 181.607 93.0859 181.607C93.9147 181.607 94.732 181.413 95.4719 181.04L120.335 166.7C121.034 166.25 121.616 165.642 122.034 164.925C122.451 164.207 122.693 163.402 122.739 162.574V160.972C122.692 160.144 122.449 159.339 122.032 158.622C121.614 157.905 121.033 157.297 120.335 156.846L98.2786 144.119C97.5349 143.738 96.7107 143.539 95.8745 143.539C95.0383 143.539 94.2142 143.738 93.4705 144.119Z"
              fill="#37474F"
            />
            <path
              id="sofa"
              d="M93.1099 174.503V181.61C92.2729 181.629 91.445 181.433 90.7059 181.04L68.631 168.313C67.9329 167.863 67.3513 167.255 66.9336 166.538C66.5158 165.821 66.2737 165.015 66.2269 164.187V162.586C66.2712 161.807 66.4864 161.048 66.8571 160.362C67.2279 159.676 67.7452 159.08 68.3725 158.615C67.3027 159.377 67.3869 160.498 68.6189 161.206L90.7119 173.939C91.4501 174.328 92.2755 174.522 93.1099 174.503Z"
              fill="#263238"
            />
            <path
              id="sofa"
              d="M95.496 173.933L120.36 159.598C121.676 158.837 121.676 157.607 120.36 156.846L98.2786 144.119C97.5396 143.743 96.722 143.547 95.8926 143.547C95.0633 143.547 94.2457 143.743 93.5066 144.119L68.643 158.459C67.3208 159.215 67.3208 160.45 68.643 161.206L90.736 173.939C91.4744 174.31 92.2899 174.503 93.1167 174.502C93.9435 174.501 94.7585 174.306 95.496 173.933Z"
              fill="#455A64"
            />
            <path
              id="sofa"
              d="M82.3219 135.866C80.7893 135.71 79.5272 137.473 76.9789 138.715C73.4471 140.314 70.3347 142.707 67.8857 145.708C65.674 148.281 64.8386 147.849 64.1595 149.451C63.4803 151.052 65.3615 151.736 66.245 154.009C67.7475 157.841 69.6106 160.414 71.5518 162.01C74.9776 164.829 74.4547 166.808 76.0173 166.772C77.6761 166.772 77.5559 165.332 80.1703 164.319C86.3486 161.92 88.8788 159.791 91.7336 155.574C92.8515 153.931 94.2699 154.069 94.5403 152.479C94.6785 151.682 93.5186 151.28 92.4729 148.761C90.736 144.617 87.9593 140.724 85.2608 138.703C84.0768 137.815 83.8544 136.016 82.3219 135.866Z"
              fill="#407BFF"
            />
            <path
              id="sofa"
              opacity="0.3"
              d="M82.3219 135.866C80.7893 135.71 79.5272 137.473 76.9789 138.715C73.4471 140.314 70.3347 142.707 67.8857 145.708C65.674 148.281 64.8386 147.849 64.1595 149.451C63.4803 151.052 65.3615 151.736 66.245 154.009C67.7475 157.841 69.6106 160.414 71.5518 162.01C74.9776 164.829 74.4547 166.808 76.0173 166.772C77.6761 166.772 77.5559 165.332 80.1703 164.319C86.3486 161.92 88.8788 159.791 91.7336 155.574C92.8515 153.931 94.2699 154.069 94.5403 152.479C94.6785 151.682 93.5186 151.28 92.4729 148.761C90.736 144.617 87.9593 140.724 85.2608 138.703C84.0768 137.815 83.8544 136.016 82.3219 135.866Z"
              fill="black"
            />
            <path
              id="sofa"
              opacity="0.2"
              d="M65.8244 152.113C67.1285 153.961 66.9543 155.802 69.6407 159.191C72.2191 162.453 74.0822 163.389 74.8575 164.828C75.5006 166.028 76.378 166.628 76.5884 165.194C76.7987 163.761 75.6748 159.706 73.0785 156.228C70.0735 152.221 68.1803 150.686 66.8881 150.098C64.8808 149.175 64.8147 150.662 65.8244 152.113Z"
              fill="black"
            />
            <path
              id="sofa"
              opacity="0.2"
              d="M80.2485 162.747C78.5416 163.346 78.4455 164.84 77.6161 166.009C78.3182 165.257 79.1838 164.677 80.1463 164.312C82.4596 163.482 84.6587 162.363 86.6913 160.983C84.5337 162.129 81.5106 162.321 80.2485 162.747ZM90.9224 154.95C89.8646 155.922 89.9668 157.649 88.6986 159.316C89.825 158.178 90.8319 156.928 91.7037 155.586C92.7254 154.087 93.9935 154.069 94.4142 152.863C93.5067 154.027 92.2145 153.763 90.9464 154.932L90.9224 154.95Z"
              fill="black"
            />
            <path
              id="sofa"
              opacity="0.3"
              d="M80.1944 139.531C76.444 140.209 73.0139 142.079 70.416 144.862C69.9233 145.448 69.6834 146.205 69.7489 146.967C69.7807 147.443 69.9323 147.903 70.1897 148.304C70.4471 148.706 70.802 149.036 71.2213 149.264C72.1648 149.68 73.2105 149.807 74.2264 149.63C76.1075 149.39 77.2314 148.898 79.6354 148.863C80.5304 148.871 81.4103 149.093 82.2017 149.51C83.4037 150.176 84.2992 150.932 85.351 151.489C86.7994 152.269 89.3717 151.915 90.2672 151.021C91.1627 150.128 91.4332 148.623 90.5797 146.823C88.6926 142.871 85.1587 138.985 80.1944 139.531Z"
              fill="#407BFF"
            />
            <path
              id="sofa"
              d="M122.223 112.937C123.557 112.164 125.432 113.243 128.269 113.327C132.585 113.387 136.844 114.321 140.788 116.074C143.865 117.508 144.448 116.764 145.728 117.945C147.008 119.127 145.59 120.524 145.728 122.959C145.95 127.068 145.313 130.156 144.208 132.436C142.254 136.412 143.54 137.983 142.116 138.613C140.589 139.279 140.115 137.935 137.308 138.085C130.697 138.451 126.159 137.486 121.814 134.799C120.119 133.761 118.881 134.469 117.98 133.131C117.523 132.466 118.406 131.596 118.322 128.897C118.19 124.399 119.104 119.715 120.726 116.764C121.435 115.474 120.87 113.717 122.223 112.937Z"
              fill="#407BFF"
            />
            <path
              id="sofa"
              opacity="0.3"
              d="M122.223 112.937C123.557 112.164 125.432 113.243 128.269 113.327C132.585 113.387 136.844 114.321 140.788 116.074C143.865 117.508 144.448 116.764 145.728 117.945C147.008 119.127 145.59 120.524 145.728 122.959C145.95 127.068 145.313 130.156 144.208 132.436C142.254 136.412 143.54 137.983 142.116 138.613C140.589 139.279 140.115 137.935 137.308 138.085C130.697 138.451 126.159 137.486 121.814 134.799C120.119 133.761 118.881 134.469 117.98 133.131C117.523 132.466 118.406 131.596 118.322 128.897C118.19 124.399 119.104 119.715 120.726 116.764C121.435 115.474 120.87 113.717 122.223 112.937Z"
              fill="black"
            />
            <path
              id="sofa"
              opacity="0.2"
              d="M145.301 121.04C144.875 123.259 145.794 124.867 144.754 129.065C143.757 133.095 142.435 134.697 142.35 136.346C142.266 137.719 141.707 138.595 140.926 137.39C140.145 136.184 139.484 131.992 140.409 127.793C141.473 122.911 142.579 120.728 143.51 119.661C144.965 117.969 145.632 119.295 145.301 121.04Z"
              fill="black"
            />
            <path
              id="sofa"
              opacity="0.2"
              d="M129.964 137.719C132.385 138.144 134.851 138.256 137.302 138.055C138.329 137.992 139.357 138.165 140.307 138.559C139.045 137.851 138.36 136.508 136.563 136.676C135.259 136.796 132.422 137.869 129.964 137.719ZM118.214 133.401C119.091 134.325 120.257 133.821 121.82 134.769C123.172 135.628 124.608 136.349 126.105 136.922C124.26 135.926 123.641 134.307 122.277 133.863C120.624 133.317 119.554 134.067 118.214 133.401Z"
              fill="black"
            />
            <path
              id="sofa"
              opacity="0.3"
              d="M125.678 115.402C129.284 114.521 134.093 114.551 137.524 116.062C138.179 116.38 139.369 117.262 139.616 117.975C139.784 118.421 139.837 118.902 139.77 119.374C139.702 119.846 139.517 120.293 139.231 120.674C138.546 121.44 137.649 121.987 136.653 122.246C134.85 122.803 132.993 122.605 130.643 123.445C129.633 123.876 128.732 124.525 128.004 125.346C127.181 126.45 126.676 127.505 125.955 128.447C124.951 129.755 122.463 130.492 121.285 130.048C120.017 129.569 119.23 128.357 119.266 126.372C119.314 121.946 120.937 116.95 125.678 115.402Z"
              fill="#407BFF"
            />
            <path
              id="sofa"
              d="M85.958 190.732V175.864C85.9089 175.037 85.6657 174.234 85.2481 173.518C84.8305 172.802 84.2502 172.194 83.5539 171.744L59.093 157.637L57.2179 141.744C57.0566 140.914 56.7298 140.126 56.2569 139.425C55.784 138.725 55.1747 138.126 54.4653 137.665L52.524 136.544C51.2078 135.788 50.12 136.406 50.12 137.917V170.106C50.1667 170.935 50.4089 171.74 50.8266 172.457C51.2444 173.174 51.826 173.782 52.524 174.233L83.572 192.124C84.8822 192.843 85.958 192.244 85.958 190.732Z"
              fill="#263238"
            />
            <path
              id="sofa"
              d="M91.4211 172.715V187.583C91.4241 187.633 91.4241 187.683 91.4211 187.733C91.3507 188.528 91.1018 189.296 90.6929 189.981C90.284 190.667 89.7256 191.251 89.0592 191.692L88.368 192.093C88.3117 192.13 88.2512 192.161 88.1877 192.183C88.1582 192.204 88.1258 192.22 88.0915 192.231L87.8992 192.303C86.771 192.715 85.5396 192.751 84.3893 192.405C84.2485 192.361 84.11 192.309 83.9747 192.249C85.1226 192.723 86.0061 192.081 86.0121 190.708V175.87C85.9648 175.042 85.7225 174.237 85.3048 173.52C84.8871 172.803 84.3058 172.194 83.608 171.744L79.2748 169.243L59.093 157.637L62.1702 155.838C62.9101 155.465 63.7273 155.271 64.5562 155.271C65.385 155.271 66.2022 155.465 66.9422 155.838L84.7079 166.076L89.0351 168.565C89.732 169.02 90.3113 169.634 90.7259 170.355C91.1405 171.076 91.3787 171.885 91.4211 172.715Z"
              fill="#455A64"
            />

            <path
              id="sofa"
              d="M85.9579 175.87V190.726C85.9579 192.1 85.0685 192.742 83.9205 192.268C84.0559 192.327 84.1943 192.379 84.3352 192.424C85.4855 192.769 86.7169 192.733 87.8451 192.322L88.0615 192.244C88.0957 192.233 88.1282 192.217 88.1576 192.196C88.2211 192.173 88.2817 192.143 88.3379 192.106L89.0291 191.704C89.6955 191.264 90.2539 190.679 90.6628 189.994C91.0718 189.309 91.3207 188.54 91.391 187.746C91.394 187.696 91.394 187.646 91.391 187.596V172.716C91.36 171.887 91.118 171.08 90.6879 170.371L85.2307 173.519C85.6708 174.228 85.9212 175.038 85.9579 175.87Z"
              fill="#37474F"
            />
            <path
              id="plant"
              d="M33.1815 189.535C29.9541 186.213 28.0609 177.816 31.2102 175.177H47.233C50.3762 177.816 48.4831 186.207 45.2617 189.529L45.1715 189.619L45.0633 189.733L44.7688 189.991L44.6907 190.051L44.4503 190.237C44.3166 190.337 44.176 190.427 44.0296 190.507C41.3792 192.054 37.076 192.054 34.4135 190.507C34.2671 190.427 34.1265 190.337 33.9928 190.237L33.7644 190.063L33.6743 189.991C33.5746 189.912 33.4803 189.825 33.3918 189.733L33.2596 189.607L33.1815 189.535Z"
              fill="#37474F"
            />
            <path
              id="plant"
              d="M45.8266 174.116C49.4807 176.245 49.4807 179.699 45.8266 181.828C42.1724 183.957 36.2525 183.957 32.6044 181.828C28.9563 179.699 28.9503 176.245 32.6044 174.116C36.2585 171.987 42.1784 171.993 45.8266 174.116Z"
              fill="#455A64"
            />
            <path
              id="plant"
              d="M44.0717 175.141C46.7582 176.706 46.7582 179.237 44.0717 180.803C41.3852 182.368 37.0399 182.368 34.3534 180.803C31.6669 179.237 31.673 176.706 34.3534 175.141C37.0339 173.576 41.3912 173.576 44.0717 175.141Z"
              fill="#263238"
            />
            <path
              id="plant"
              d="M34.3533 177.828C37.0398 176.263 41.3911 176.263 44.0716 177.828C44.7224 178.185 45.2754 178.696 45.6823 179.316C45.2772 179.937 44.7237 180.448 44.0716 180.803C41.3911 182.368 37.0398 182.368 34.3533 180.803C33.7017 180.45 33.1498 179.938 32.7487 179.316C33.1515 178.695 33.703 178.183 34.3533 177.828Z"
              fill="#FAFAFA"
            />
            <path
              id="plant"
              d="M37.016 157.982C35.9342 159.343 32.6887 159.943 31.072 156.602C29.5515 153.472 27.9468 150.521 27.466 149.364C27.3956 149.214 27.3569 149.052 27.3524 148.887C27.3478 148.722 27.3775 148.557 27.4396 148.404C27.5017 148.251 27.5948 148.112 27.7131 147.997C27.8314 147.881 27.9723 147.791 28.1271 147.733C28.1271 147.733 28.085 145.934 31.1862 146.923C32.6513 147.318 34.0199 148.008 35.2076 148.951C36.3953 149.893 37.3768 151.069 38.0918 152.404C39.6183 155.199 39.0053 157.43 37.016 157.982Z"
              fill="#407BFF"
            />
            <path
              id="plant"
              opacity="0.45"
              d="M37.016 157.982C35.9342 159.343 32.6887 159.943 31.072 156.602C29.5515 153.472 27.9468 150.521 27.466 149.364C27.3956 149.214 27.3569 149.052 27.3524 148.887C27.3478 148.722 27.3775 148.557 27.4396 148.404C27.5017 148.251 27.5948 148.112 27.7131 147.997C27.8314 147.881 27.9723 147.791 28.1271 147.733C28.1271 147.733 28.085 145.934 31.1862 146.923C32.6513 147.318 34.0199 148.008 35.2076 148.951C36.3953 149.893 37.3768 151.069 38.0918 152.404C39.6183 155.199 39.0053 157.43 37.016 157.982Z"
              fill="white"
            />
            <path
              id="plant"
              d="M38.6746 162.433C38.5768 161.826 38.4443 161.226 38.2779 160.634C37.2383 157.111 35.4486 153.854 33.0311 151.086C32.1225 150.028 31.1164 149.059 30.0261 148.189C30.0261 148.159 29.972 148.231 30.0261 148.255C31.8538 149.898 33.4509 151.781 34.7741 153.851C36.0564 155.886 37.0666 158.079 37.7791 160.376C37.9774 161.018 38.1697 161.665 38.338 162.313C38.5063 162.961 38.6325 163.651 38.8008 164.31C38.8008 164.376 38.921 164.412 38.921 164.31C38.8853 163.679 38.8029 163.052 38.6746 162.433Z"
              fill="#407BFF"
            />
            <path
              id="plant"
              opacity="0.3"
              d="M38.6746 162.433C38.5768 161.826 38.4443 161.226 38.2779 160.634C37.2383 157.111 35.4486 153.854 33.0311 151.086C32.1225 150.028 31.1164 149.059 30.0261 148.189C30.0261 148.159 29.972 148.231 30.0261 148.255C31.8538 149.898 33.4509 151.781 34.7741 153.851C36.0564 155.886 37.0666 158.079 37.7791 160.376C37.9774 161.018 38.1697 161.665 38.338 162.313C38.5063 162.961 38.6325 163.651 38.8008 164.31C38.8008 164.376 38.921 164.412 38.921 164.31C38.8853 163.679 38.8029 163.052 38.6746 162.433Z"
              fill="black"
            />
            <path
              id="plant"
              d="M40.5438 155.589C37.725 156.458 35.6335 154.264 36.3367 150.821C37.0399 147.379 40.688 143.559 42.0523 144.584C42.9117 143.733 44.7929 144.038 45.6583 146.833C46.5238 149.628 45.7785 156.806 40.5438 155.589Z"
              fill="#407BFF"
            />
            <path
              id="plant"
              opacity="0.25"
              d="M40.5438 155.589C37.725 156.458 35.6335 154.264 36.3367 150.821C37.0399 147.379 40.688 143.559 42.0523 144.584C42.9117 143.733 44.7929 144.038 45.6583 146.833C46.5238 149.628 45.7785 156.806 40.5438 155.589Z"
              fill="white"
            />
            <path
              id="plant"
              d="M42.1965 146.683C41.3943 148.687 40.767 150.755 40.3214 152.867C39.8445 155.003 39.4814 157.163 39.2335 159.338C38.781 163.552 38.5923 167.791 38.6686 172.029C38.6686 173.198 38.6686 174.374 38.7167 175.544C38.7647 176.713 38.7167 177.943 38.8248 179.142C38.8669 179.604 39.522 179.478 39.528 179.058C39.5701 176.953 39.4559 174.86 39.4319 172.725C39.4078 170.59 39.4319 168.556 39.4739 166.469C39.5507 162.231 39.9344 158.003 40.6219 153.82C40.8262 152.657 41.0486 151.487 41.319 150.336C41.5895 149.184 41.9561 147.937 42.2806 146.737C42.2806 146.677 42.2205 146.617 42.1965 146.683Z"
              fill="#407BFF"
            />
            <path
              id="plant"
              opacity="0.3"
              d="M42.1965 146.683C41.3943 148.687 40.767 150.755 40.3214 152.867C39.8445 155.003 39.4814 157.163 39.2335 159.338C38.781 163.552 38.5923 167.791 38.6686 172.029C38.6686 173.198 38.6686 174.374 38.7167 175.544C38.7647 176.713 38.7167 177.943 38.8248 179.142C38.8669 179.604 39.522 179.478 39.528 179.058C39.5701 176.953 39.4559 174.86 39.4319 172.725C39.4078 170.59 39.4319 168.556 39.4739 166.469C39.5507 162.231 39.9344 158.003 40.6219 153.82C40.8262 152.657 41.0486 151.487 41.319 150.336C41.5895 149.184 41.9561 147.937 42.2806 146.737C42.2806 146.677 42.2205 146.617 42.1965 146.683Z"
              fill="black"
            />
            <path
              id="plant"
              d="M35.303 165.011C34.4917 166.678 31.7391 167.314 29.2509 165.425C26.7628 163.536 23.1928 154.852 25.8853 154.714C26.0956 153.365 33.9868 154.282 36.5291 159.896C38.3802 163.98 35.303 165.011 35.303 165.011Z"
              fill="#407BFF"
            />
            <path
              id="plant"
              opacity="0.25"
              d="M35.303 165.011C34.4917 166.678 31.7391 167.314 29.2509 165.425C26.7628 163.536 23.1928 154.852 25.8853 154.714C26.0956 153.365 33.9868 154.282 36.5291 159.896C38.3802 163.98 35.303 165.011 35.303 165.011Z"
              fill="white"
            />
            <path
              id="plant"
              d="M38.6025 168.67C38.3702 168.138 38.1011 167.623 37.7972 167.129C37.1866 166.118 36.5246 165.139 35.8139 164.196C34.3676 162.26 32.7285 160.476 30.9217 158.87C29.9329 157.957 28.887 157.108 27.7904 156.327C27.7904 156.327 27.7544 156.375 27.7904 156.387C28.6799 157.131 29.5935 157.869 30.4168 158.672C31.2402 159.476 32.0997 160.394 32.881 161.311C34.3856 163.071 35.7501 164.946 36.9618 166.919C37.3044 167.483 37.6169 168.058 37.9655 168.616C38.3141 169.174 38.7408 169.75 39.0773 170.344C39.1254 170.427 39.2516 170.427 39.2035 170.308C39.0052 169.744 38.8189 169.198 38.6025 168.67Z"
              fill="#407BFF"
            />
            <path
              id="plant"
              opacity="0.3"
              d="M38.6025 168.67C38.3702 168.138 38.1011 167.623 37.7972 167.129C37.1866 166.118 36.5246 165.139 35.8139 164.196C34.3676 162.26 32.7285 160.476 30.9217 158.87C29.9329 157.957 28.887 157.108 27.7904 156.327C27.7904 156.327 27.7544 156.375 27.7904 156.387C28.6799 157.131 29.5935 157.869 30.4168 158.672C31.2402 159.476 32.0997 160.394 32.881 161.311C34.3856 163.071 35.7501 164.946 36.9618 166.919C37.3044 167.483 37.6169 168.058 37.9655 168.616C38.3141 169.174 38.7408 169.75 39.0773 170.344C39.1254 170.427 39.2516 170.427 39.2035 170.308C39.0052 169.744 38.8189 169.198 38.6025 168.67Z"
              fill="black"
            />
            <path
              id="plant"
              d="M40.4656 164.304C38.8549 163.938 38.7707 162.007 40.7841 159.638C42.7975 157.269 47.87 156.238 48.1104 157.239C49.2403 157.239 49.2403 160.765 46.7401 164.004C44.2399 167.242 40.6218 166.481 40.4656 164.304Z"
              fill="#407BFF"
            />
            <path
              id="plant"
              opacity="0.25"
              d="M40.4656 164.304C38.8549 163.938 38.7707 162.007 40.7841 159.638C42.7975 157.269 47.87 156.238 48.1104 157.239C49.2403 157.239 49.2403 160.765 46.7401 164.004C44.2399 167.242 40.6218 166.481 40.4656 164.304Z"
              fill="white"
            />
            <path
              id="plant"
              d="M43.627 160.861C41.4948 162.338 39.8671 164.431 38.9632 166.859C38.9091 166.997 39.1495 167.194 39.2036 167.044C40.1192 164.646 41.6434 162.526 43.627 160.891C43.627 160.891 43.627 160.843 43.627 160.861Z"
              fill="#407BFF"
            />
            <path
              id="plant"
              opacity="0.3"
              d="M43.627 160.861C41.4948 162.338 39.8671 164.431 38.9632 166.859C38.9091 166.997 39.1495 167.194 39.2036 167.044C40.1192 164.646 41.6434 162.526 43.627 160.891C43.627 160.891 43.627 160.843 43.627 160.861Z"
              fill="black"
            />
            <path
              id="plant"
              d="M42.3046 176.059C40.0689 176.965 41.0305 179.615 43.2062 181.625C45.0819 183.257 47.5032 184.128 49.9915 184.065C50.6316 184.067 51.2675 183.962 51.8727 183.753C52.0074 182.53 52.0074 181.295 51.8727 180.071C51.6352 178.727 51.0146 177.479 50.0852 176.477C49.1559 175.475 47.9569 174.762 46.6319 174.422C43.134 173.48 42.3046 174.74 42.3046 176.059Z"
              fill="#407BFF"
            />
            <path
              id="plant"
              opacity="0.45"
              d="M42.3046 176.059C40.0689 176.965 41.0305 179.615 43.2062 181.625C45.0819 183.257 47.5032 184.128 49.9915 184.065C50.6316 184.067 51.2675 183.962 51.8727 183.753C52.0074 182.53 52.0074 181.295 51.8727 180.071C51.6352 178.727 51.0146 177.479 50.0852 176.477C49.1559 175.475 47.9569 174.762 46.6319 174.422C43.134 173.48 42.3046 174.74 42.3046 176.059Z"
              fill="white"
            />
            <path
              id="plant"
              d="M48.4771 179.976C47.4797 178.782 46.3324 177.722 45.0633 176.821C43.7892 175.988 42.1004 175.28 40.5738 175.796C39.9728 176 39.0653 176.587 39.1795 177.313C39.1795 177.385 39.3177 177.565 39.4079 177.469C39.6396 177.129 39.9076 176.815 40.2072 176.533C40.559 176.275 40.9745 176.118 41.4092 176.078C42.4986 176.004 43.5857 176.252 44.5345 176.791C45.9848 177.67 47.2988 178.755 48.435 180.012C48.435 180.012 48.4891 179.988 48.4771 179.976Z"
              fill="#407BFF"
            />
            <path
              id="plant"
              opacity="0.3"
              d="M48.4771 179.976C47.4797 178.782 46.3324 177.722 45.0633 176.821C43.7892 175.988 42.1004 175.28 40.5738 175.796C39.9728 176 39.0653 176.587 39.1795 177.313C39.1795 177.385 39.3177 177.565 39.4079 177.469C39.6396 177.129 39.9076 176.815 40.2072 176.533C40.559 176.275 40.9745 176.118 41.4092 176.078C42.4986 176.004 43.5857 176.252 44.5345 176.791C45.9848 177.67 47.2988 178.755 48.435 180.012C48.435 180.012 48.4891 179.988 48.4771 179.976Z"
              fill="black"
            />
            <path
              id="plant"
              d="M33.8245 167.357C33.8245 166.415 32.1297 164.478 27.9467 164.808C23.7637 165.138 21.0111 167.441 20.5363 168.346C20.0615 169.252 19.9353 170.145 20.6866 170.217C21.4378 170.289 24.0822 170.073 25.9033 170.535C27.7243 170.997 31.5708 172.664 33.7825 171.555C35.9942 170.445 35.1528 168.052 33.8245 167.357Z"
              fill="#407BFF"
            />
            <path
              id="plant"
              opacity="0.45"
              d="M33.8245 167.357C33.8245 166.415 32.1297 164.478 27.9467 164.808C23.7637 165.138 21.0111 167.441 20.5363 168.346C20.0615 169.252 19.9353 170.145 20.6866 170.217C21.4378 170.289 24.0822 170.073 25.9033 170.535C27.7243 170.997 31.5708 172.664 33.7825 171.555C35.9942 170.445 35.1528 168.052 33.8245 167.357Z"
              fill="white"
            />
            <path
              id="plant"
              d="M37.5268 169.96C35.1228 166.709 30.477 166.433 26.8349 167.117C25.6351 167.344 24.4683 167.718 23.3611 168.232C23.3611 168.232 23.3611 168.28 23.3611 168.274C25.2648 167.58 27.2673 167.194 29.293 167.129C31.2898 167.025 33.2824 167.399 35.1047 168.22C35.9955 168.66 36.7902 169.272 37.4426 170.02C37.5208 170.121 37.5749 170.026 37.5268 169.96Z"
              fill="#407BFF"
            />
            <path
              id="plant"
              opacity="0.3"
              d="M37.5268 169.96C35.1228 166.709 30.477 166.433 26.8349 167.117C25.6351 167.344 24.4683 167.718 23.3611 168.232C23.3611 168.232 23.3611 168.28 23.3611 168.274C25.2648 167.58 27.2673 167.194 29.293 167.129C31.2898 167.025 33.2824 167.399 35.1047 168.22C35.9955 168.66 36.7902 169.272 37.4426 170.02C37.5208 170.121 37.5749 170.026 37.5268 169.96Z"
              fill="black"
            />
            <path
              id="plant"
              d="M44.4624 159.338C44.4083 160.933 46.656 161.856 48.8377 160.477C51.0193 159.098 53.2971 157.754 55.3165 157.233C57.3359 156.711 58.3215 155.074 57.6544 154.276C56.9873 153.478 56.0017 151.475 50.6948 152.129C45.3879 152.783 43.4827 155.17 42.7795 156.855C42.0764 158.54 43.663 159.793 44.4624 159.338Z"
              fill="#407BFF"
            />
            <path
              id="plant"
              opacity="0.45"
              d="M44.4624 159.338C44.4083 160.933 46.656 161.856 48.8377 160.477C51.0193 159.098 53.2971 157.754 55.3165 157.233C57.3359 156.711 58.3215 155.074 57.6544 154.276C56.9873 153.478 56.0017 151.475 50.6948 152.129C45.3879 152.783 43.4827 155.17 42.7795 156.855C42.0764 158.54 43.663 159.793 44.4624 159.338Z"
              fill="white"
            />
            <path
              id="plant"
              d="M53.0987 154.27C52.333 154.197 51.5604 154.279 50.8269 154.51C50.1568 154.676 49.5046 154.907 48.8797 155.2C47.6281 155.78 46.4998 156.594 45.5561 157.598C45.2884 157.882 45.0395 158.182 44.8108 158.498C44.5675 158.776 44.3651 159.087 44.2098 159.422C44.2098 159.53 44.33 159.697 44.4262 159.59C44.6846 159.29 44.883 158.918 45.1294 158.6C45.4084 158.259 45.7096 157.936 46.0309 157.634C46.6444 157.018 47.3306 156.479 48.0743 156.027C48.7898 155.583 49.5491 155.213 50.3401 154.924C50.7788 154.768 51.2176 154.642 51.6623 154.528C52.1293 154.385 52.6164 154.318 53.1047 154.33C53.1167 154.33 53.1288 154.276 53.0987 154.27Z"
              fill="#407BFF"
            />
            <path
              id="plant"
              opacity="0.3"
              d="M53.0987 154.27C52.333 154.197 51.5604 154.279 50.8269 154.51C50.1568 154.676 49.5046 154.907 48.8797 155.2C47.6281 155.78 46.4998 156.594 45.5561 157.598C45.2884 157.882 45.0395 158.182 44.8108 158.498C44.5675 158.776 44.3651 159.087 44.2098 159.422C44.2098 159.53 44.33 159.697 44.4262 159.59C44.6846 159.29 44.883 158.918 45.1294 158.6C45.4084 158.259 45.7096 157.936 46.0309 157.634C46.6444 157.018 47.3306 156.479 48.0743 156.027C48.7898 155.583 49.5491 155.213 50.3401 154.924C50.7788 154.768 51.2176 154.642 51.6623 154.528C52.1293 154.385 52.6164 154.318 53.1047 154.33C53.1167 154.33 53.1288 154.276 53.0987 154.27Z"
              fill="black"
            />
            <path
              id="plant"
              d="M40.658 167.95C39.9127 167.213 37.8934 167.381 36.9378 169.576C35.9822 171.771 37.9895 174.169 38.2119 174.841C39.1374 174.313 39.8526 174.625 41.4754 174.313C42.3784 174.097 43.18 173.578 43.7464 172.844C44.3129 172.11 44.6101 171.204 44.5886 170.277C44.4804 168.268 43.627 166.943 40.658 167.95Z"
              fill="#407BFF"
            />
            <path
              id="plant"
              opacity="0.45"
              d="M40.658 167.95C39.9127 167.213 37.8934 167.381 36.9378 169.576C35.9822 171.771 37.9895 174.169 38.2119 174.841C39.1374 174.313 39.8526 174.625 41.4754 174.313C42.3784 174.097 43.18 173.578 43.7464 172.844C44.3129 172.11 44.6101 171.204 44.5886 170.277C44.4804 168.268 43.627 166.943 40.658 167.95Z"
              fill="white"
            />
            <path
              id="plant"
              d="M40.6219 167.729C40.2197 167.989 39.8825 168.338 39.6362 168.748C39.3745 169.131 39.1606 169.543 38.9991 169.978C38.6513 170.866 38.5537 171.832 38.7167 172.772C38.7167 172.808 38.7527 172.772 38.7527 172.772C38.6783 171.828 38.8393 170.88 39.2215 170.014C39.4001 169.618 39.6261 169.245 39.8946 168.904C40.0331 168.724 40.1816 168.552 40.3394 168.388C40.4976 168.263 40.6408 168.12 40.7661 167.963C40.8262 167.855 40.7421 167.675 40.6219 167.729Z"
              fill="#407BFF"
            />
            <path
              id="plant"
              opacity="0.3"
              d="M40.6219 167.729C40.2197 167.989 39.8825 168.338 39.6362 168.748C39.3745 169.131 39.1606 169.543 38.9991 169.978C38.6513 170.866 38.5537 171.832 38.7167 172.772C38.7167 172.808 38.7527 172.772 38.7527 172.772C38.6783 171.828 38.8393 170.88 39.2215 170.014C39.4001 169.618 39.6261 169.245 39.8946 168.904C40.0331 168.724 40.1816 168.552 40.3394 168.388C40.4976 168.263 40.6408 168.12 40.7661 167.963C40.8262 167.855 40.7421 167.675 40.6219 167.729Z"
              fill="black"
            />
            <path
              id="plant"
              d="M37.6169 173.846C37.2022 172.263 35.2129 171.376 32.5745 171.184C31.2812 171.067 29.9812 171.319 28.8258 171.91C27.6703 172.501 26.7069 173.408 26.0475 174.524C24.6712 176.869 24.1003 178.722 24.9357 179.034C25.7711 179.346 29.299 179.832 31.5467 180.029C33.7945 180.227 36.6673 179.826 38.5244 178.098C40.3815 176.371 39.7625 174.206 37.6169 173.846Z"
              fill="#407BFF"
            />
            <path
              id="plant"
              opacity="0.25"
              d="M37.6169 173.846C37.2022 172.263 35.2129 171.376 32.5745 171.184C31.2812 171.067 29.9812 171.319 28.8258 171.91C27.6703 172.501 26.7069 173.408 26.0475 174.524C24.6712 176.869 24.1003 178.722 24.9357 179.034C25.7711 179.346 29.299 179.832 31.5467 180.029C33.7945 180.227 36.6673 179.826 38.5244 178.098C40.3815 176.371 39.7625 174.206 37.6169 173.846Z"
              fill="white"
            />
            <path
              id="plant"
              d="M37.689 173.637C36.7626 173.398 35.7968 173.353 34.8523 173.505C33.9417 173.608 33.045 173.809 32.1778 174.105C31.2615 174.428 30.3747 174.829 29.5273 175.304C29.0826 175.544 28.6499 175.802 28.2171 176.072C27.7995 176.315 27.398 176.586 27.0151 176.881C27.0151 176.881 27.0151 176.953 27.0151 176.941C27.4419 176.749 27.8445 176.473 28.2592 176.246C28.6739 176.018 29.1487 175.748 29.6055 175.52C30.4676 175.078 31.3615 174.701 32.2799 174.392C33.1809 174.085 34.1148 173.884 35.0626 173.793C35.9464 173.743 36.8328 173.765 37.713 173.859C37.8994 173.901 37.7972 173.673 37.689 173.637Z"
              fill="#407BFF"
            />
            <path
              id="plant"
              opacity="0.3"
              d="M37.689 173.637C36.7626 173.398 35.7968 173.353 34.8523 173.505C33.9417 173.608 33.045 173.809 32.1778 174.105C31.2615 174.428 30.3747 174.829 29.5273 175.304C29.0826 175.544 28.6499 175.802 28.2171 176.072C27.7995 176.315 27.398 176.586 27.0151 176.881C27.0151 176.881 27.0151 176.953 27.0151 176.941C27.4419 176.749 27.8445 176.473 28.2592 176.246C28.6739 176.018 29.1487 175.748 29.6055 175.52C30.4676 175.078 31.3615 174.701 32.2799 174.392C33.1809 174.085 34.1148 173.884 35.0626 173.793C35.9464 173.743 36.8328 173.765 37.713 173.859C37.8994 173.901 37.7972 173.673 37.689 173.637Z"
              fill="black"
            />
            <path
              id="plant"
              d="M42.3588 169.966C40.5558 168.538 41.1568 165.108 47.4673 164.922C53.7779 164.736 58.2854 166.379 58.0871 168.406C59.1028 169.42 58.5859 172.263 53.4774 173.144C48.3688 174.026 41.0606 173.594 42.3588 169.966Z"
              fill="#407BFF"
            />
            <path
              id="plant"
              opacity="0.25"
              d="M42.3588 169.966C40.5558 168.538 41.1568 165.108 47.4673 164.922C53.7779 164.736 58.2854 166.379 58.0871 168.406C59.1028 169.42 58.5859 172.263 53.4774 173.144C48.3688 174.026 41.0606 173.594 42.3588 169.966Z"
              fill="white"
            />
            <path
              id="plant"
              d="M55.1181 168.43C53.2555 168.126 51.3662 168.015 49.4807 168.101C47.728 168.093 45.9807 168.294 44.276 168.7C43.8409 168.82 43.4167 168.977 43.0079 169.168C42.8185 169.259 42.634 169.359 42.455 169.468C42.3107 169.552 42.1484 169.63 42.1004 169.798C42.0954 169.824 42.0967 169.851 42.1041 169.876C42.1115 169.901 42.1249 169.925 42.143 169.944C42.1612 169.963 42.1837 169.978 42.2087 169.987C42.2336 169.996 42.2603 169.999 42.2867 169.996C42.6707 169.847 43.0407 169.664 43.3925 169.45C43.7459 169.294 44.1093 169.162 44.4803 169.054C45.1985 168.85 45.9322 168.706 46.674 168.622C48.44 168.402 50.2193 168.303 51.9989 168.329C53.0387 168.329 54.0724 168.424 55.1061 168.502C55.1362 168.508 55.1482 168.436 55.1181 168.43Z"
              fill="#407BFF"
            />
            <path
              id="plant"
              opacity="0.3"
              d="M55.1181 168.43C53.2555 168.126 51.3662 168.015 49.4807 168.101C47.728 168.093 45.9807 168.294 44.276 168.7C43.8409 168.82 43.4167 168.977 43.0079 169.168C42.8185 169.259 42.634 169.359 42.455 169.468C42.3107 169.552 42.1484 169.63 42.1004 169.798C42.0954 169.824 42.0967 169.851 42.1041 169.876C42.1115 169.901 42.1249 169.925 42.143 169.944C42.1612 169.963 42.1837 169.978 42.2087 169.987C42.2336 169.996 42.2603 169.999 42.2867 169.996C42.6707 169.847 43.0407 169.664 43.3925 169.45C43.7459 169.294 44.1093 169.162 44.4803 169.054C45.1985 168.85 45.9322 168.706 46.674 168.622C48.44 168.402 50.2193 168.303 51.9989 168.329C53.0387 168.329 54.0724 168.424 55.1061 168.502C55.1362 168.508 55.1482 168.436 55.1181 168.43Z"
              fill="black"
            />

            <path
              id="desk"
              d="M183.619 173.007V184.258L190.946 180.042V168.791L183.619 173.007Z"
              fill="#9A4A4D"
            />
            <path
              id="desk"
              opacity="0.3"
              d="M183.619 173.007V184.258L190.946 180.042V168.791L183.619 173.007Z"
              fill="black"
            />
            <path
              id="desk"
              d="M220.239 191.293L190.94 174.392L125.027 212.392V213.796L154.326 230.679L220.239 192.702V191.293Z"
              fill="#B16668"
            />
            <path
              id="desk"
              d="M125.027 212.393L154.326 229.27L220.239 191.293L190.946 174.416L125.027 212.393Z"
              fill="#9A4A4D"
            />
            <path
              id="desk"
              opacity="0.1"
              d="M125.027 212.393L154.326 229.27L220.239 191.293L190.946 174.416L125.027 212.393Z"
              fill="black"
            />
            <path
              id="desk"
              d="M211.746 188.6C211.737 188.493 211.7 188.391 211.637 188.303C211.575 188.216 211.49 188.146 211.392 188.103C211.125 187.967 210.829 187.896 210.529 187.896C210.23 187.896 209.934 187.967 209.667 188.103C209.567 188.145 209.481 188.214 209.418 188.302C209.354 188.39 209.316 188.493 209.306 188.6V190.585C209.316 190.693 209.354 190.796 209.418 190.884C209.481 190.972 209.567 191.04 209.667 191.083C209.935 191.216 210.23 191.286 210.529 191.286C210.829 191.286 211.124 191.216 211.392 191.083C211.49 191.04 211.575 190.97 211.637 190.883C211.7 190.795 211.737 190.693 211.746 190.585V188.6Z"
              fill="#F0F0F0"
            />
            <path
              id="desk"
              d="M209.667 188.103C209.561 188.136 209.468 188.202 209.402 188.292C209.336 188.381 209.301 188.489 209.301 188.6C209.301 188.711 209.336 188.82 209.402 188.909C209.468 188.999 209.561 189.065 209.667 189.098C209.934 189.234 210.229 189.305 210.529 189.305C210.829 189.305 211.125 189.234 211.392 189.098C211.495 189.062 211.584 188.995 211.648 188.905C211.711 188.816 211.745 188.71 211.745 188.6C211.745 188.491 211.711 188.385 211.648 188.295C211.584 188.206 211.495 188.139 211.392 188.103C211.125 187.967 210.829 187.896 210.529 187.896C210.229 187.896 209.934 187.967 209.667 188.103Z"
              fill="#E0E0E0"
            />
            <path
              id="desk"
              d="M192.22 177.348C192.21 177.241 192.172 177.138 192.108 177.05C192.045 176.962 191.959 176.894 191.859 176.851C191.592 176.715 191.296 176.644 190.997 176.644C190.697 176.644 190.401 176.715 190.134 176.851C190.036 176.894 189.951 176.964 189.889 177.051C189.826 177.139 189.789 177.241 189.78 177.348V179.334C189.789 179.441 189.826 179.543 189.889 179.631C189.951 179.718 190.036 179.788 190.134 179.831C190.401 179.967 190.697 180.038 190.997 180.038C191.296 180.038 191.592 179.967 191.859 179.831C191.959 179.788 192.045 179.72 192.108 179.632C192.172 179.544 192.21 179.441 192.22 179.334V177.348Z"
              fill="#F0F0F0"
            />
            <path
              id="desk"
              d="M190.134 176.851C190.031 176.887 189.941 176.954 189.878 177.044C189.815 177.133 189.781 177.239 189.781 177.348C189.781 177.458 189.815 177.564 189.878 177.653C189.941 177.743 190.031 177.81 190.134 177.846C190.402 177.979 190.697 178.049 190.997 178.049C191.296 178.049 191.591 177.979 191.859 177.846C191.965 177.813 192.058 177.747 192.124 177.657C192.19 177.568 192.225 177.46 192.225 177.348C192.225 177.237 192.19 177.129 192.124 177.04C192.058 176.95 191.965 176.884 191.859 176.851C191.592 176.715 191.296 176.644 190.997 176.644C190.697 176.644 190.401 176.715 190.134 176.851Z"
              fill="#E0E0E0"
            />
            <path
              id="desk"
              d="M215.358 191.293V202.545L222.679 198.328V187.071L215.358 191.293Z"
              fill="#B16668"
            />
            <path
              id="desk"
              d="M215.358 202.545L212.912 201.141V191.293L183.619 174.416V184.258L181.179 182.855V171.603L215.358 191.293V202.545Z"
              fill="#9A4A4D"
            />
            <path
              id="desk"
              d="M181.179 171.603L215.358 191.293L222.679 187.071L188.499 167.381L181.179 171.603Z"
              fill="#9A4A4D"
            />
            <path
              id="desk"
              opacity="0.2"
              d="M181.179 171.603L215.358 191.293L222.679 187.071L188.499 167.381L181.179 171.603Z"
              fill="black"
            />
            <path
              id="desk"
              d="M117.701 210.983V222.235L125.027 218.019V206.767L117.701 210.983Z"
              fill="#9A4A4D"
            />
            <path
              id="desk"
              opacity="0.3"
              d="M117.701 210.983V222.235L125.027 218.019V206.767L117.701 210.983Z"
              fill="black"
            />
            <path
              id="desk"
              d="M147 234.896L154.326 230.698V229.27L125.027 212.393L117.701 216.591V218.001"
              fill="#9A4A4D"
            />
            <path
              id="desk"
              d="M147 233.493L154.326 229.27L125.027 212.393L117.701 216.609"
              fill="#9A4A4D"
            />
            <path
              id="desk"
              opacity="0.1"
              d="M147 233.493L154.326 229.27L125.027 212.393L117.701 216.609"
              fill="black"
            />
            <path
              id="desk"
              d="M145.798 226.571C145.788 226.463 145.75 226.36 145.686 226.273C145.623 226.185 145.537 226.116 145.437 226.073C145.17 225.938 144.875 225.867 144.575 225.867C144.275 225.867 143.98 225.938 143.713 226.073C143.614 226.117 143.529 226.186 143.467 226.274C143.405 226.361 143.367 226.464 143.358 226.571V228.562C143.367 228.669 143.405 228.772 143.467 228.859C143.529 228.947 143.614 229.016 143.713 229.06C143.98 229.193 144.276 229.262 144.575 229.262C144.874 229.262 145.169 229.193 145.437 229.06C145.537 229.017 145.623 228.948 145.686 228.861C145.75 228.773 145.788 228.67 145.798 228.562V226.571Z"
              fill="#F0F0F0"
            />
            <path
              id="desk"
              d="M143.694 226.079C143.591 226.116 143.502 226.183 143.439 226.272C143.375 226.361 143.341 226.468 143.341 226.577C143.341 226.686 143.375 226.793 143.439 226.882C143.502 226.971 143.591 227.038 143.694 227.075C143.962 227.211 144.257 227.281 144.557 227.281C144.857 227.281 145.152 227.211 145.419 227.075C145.526 227.041 145.618 226.975 145.684 226.886C145.75 226.796 145.785 226.688 145.785 226.577C145.785 226.466 145.75 226.358 145.684 226.268C145.618 226.179 145.526 226.113 145.419 226.079C145.152 225.943 144.857 225.873 144.557 225.873C144.257 225.873 143.962 225.943 143.694 226.079Z"
              fill="#E0E0E0"
            />
            <path
              id="desk"
              d="M126.247 215.326C126.238 215.219 126.201 215.116 126.138 215.028C126.076 214.941 125.991 214.872 125.893 214.828C125.624 214.692 125.328 214.621 125.027 214.621C124.726 214.621 124.43 214.692 124.162 214.828C124.063 214.872 123.979 214.941 123.916 215.028C123.854 215.116 123.816 215.219 123.807 215.326V217.317C123.817 217.423 123.855 217.524 123.918 217.61C123.98 217.697 124.064 217.765 124.162 217.808C124.43 217.944 124.726 218.015 125.027 218.015C125.328 218.015 125.624 217.944 125.893 217.808C125.99 217.765 126.074 217.697 126.137 217.61C126.199 217.524 126.237 217.423 126.247 217.317V215.326Z"
              fill="#F0F0F0"
            />
            <path
              id="desk"
              d="M124.162 214.828C124.058 214.864 123.969 214.931 123.906 215.021C123.843 215.11 123.809 215.216 123.809 215.326C123.809 215.435 123.843 215.541 123.906 215.631C123.969 215.72 124.058 215.787 124.162 215.823C124.43 215.959 124.726 216.03 125.027 216.03C125.328 216.03 125.624 215.959 125.893 215.823C125.996 215.787 126.085 215.72 126.149 215.631C126.212 215.541 126.246 215.435 126.246 215.326C126.246 215.216 126.212 215.11 126.149 215.021C126.085 214.931 125.996 214.864 125.893 214.828C125.624 214.692 125.328 214.621 125.027 214.621C124.726 214.621 124.43 214.692 124.162 214.828Z"
              fill="#E0E0E0"
            />
            <path
              id="desk"
              d="M149.44 229.27V240.522L156.766 236.305V225.048L149.44 229.27Z"
              fill="#B16668"
            />
            <path
              id="desk"
              d="M149.44 240.522L147 239.118V229.27L117.701 212.393V222.235L115.261 220.832V209.58L149.44 229.27V240.522Z"
              fill="#9A4A4D"
            />
            <path
              id="desk"
              d="M115.261 209.58L149.44 229.27L156.766 225.048L122.587 205.358L115.261 209.58Z"
              fill="#9A4A4D"
            />
            <path
              id="desk"
              opacity="0.2"
              d="M115.261 209.58L149.44 229.27L156.766 225.048L122.587 205.358L115.261 209.58Z"
              fill="black"
            />
            <path
              id="desk"
              d="M149.44 223.644L222.679 181.445V183.658L149.44 225.858V223.644Z"
              fill="#B16668"
            />
            <path
              id="desk"
              d="M115.261 206.167L149.44 225.857V223.644L115.261 203.954V206.167Z"
              fill="#9A4A4D"
            />
            <path
              id="desk"
              d="M115.862 203.954L188.499 162.103L222.078 181.445L149.44 223.296L115.862 203.954Z"
              fill="#FAFAFA"
            />
            <path
              id="desk"
              d="M188.499 162.445L221.477 181.445L149.44 222.972L116.463 203.978L188.499 162.469M188.499 161.779L115.261 203.954L149.44 223.644L222.679 181.445L188.499 161.755V161.779Z"
              fill="#E0E0E0"
            />
            <path
              id="desk"
              d="M171.425 192.385C173.444 193.44 173.444 195.161 171.425 196.223C170.275 196.744 169.027 197.014 167.765 197.014C166.502 197.014 165.254 196.744 164.105 196.223C162.085 195.161 162.085 193.44 164.105 192.385C165.253 191.86 166.502 191.588 167.765 191.588C169.028 191.588 170.276 191.86 171.425 192.385Z"
              fill="#E0E0E0"
            />
            <path
              id="desk"
              d="M164.549 194.267C162.788 192.468 161.755 188 163.468 186.579H172.2C173.919 188 172.885 192.468 171.124 194.261C171.112 194.28 171.095 194.297 171.076 194.309L171.016 194.369L170.86 194.513L170.818 194.543C170.776 194.581 170.732 194.615 170.686 194.645C170.612 194.697 170.536 194.746 170.457 194.789C169.645 195.2 168.747 195.414 167.837 195.414C166.926 195.414 166.029 195.2 165.216 194.789C165.137 194.747 165.061 194.699 164.988 194.645C164.944 194.617 164.901 194.585 164.862 194.549L164.814 194.513L164.658 194.375L164.585 194.303L164.549 194.267Z"
              fill="#37474F"
            />
            <path
              id="desk"
              d="M171.443 186.009C173.438 187.155 173.438 189.008 171.443 190.165C170.325 190.73 169.09 191.024 167.837 191.024C166.584 191.024 165.348 190.73 164.231 190.165C162.235 189.014 162.235 187.167 164.231 186.009C165.348 185.441 166.583 185.146 167.837 185.146C169.09 185.146 170.326 185.441 171.443 186.009Z"
              fill="#455A64"
            />
            <path
              id="desk"
              d="M170.031 186.819C171.233 187.521 171.233 188.654 170.031 189.35C169.35 189.693 168.599 189.872 167.837 189.872C167.075 189.872 166.323 189.693 165.643 189.35C164.441 188.654 164.441 187.521 165.643 186.819C166.323 186.476 167.075 186.297 167.837 186.297C168.599 186.297 169.35 186.476 170.031 186.819Z"
              fill="#263238"
            />
            <path
              id="desk"
              d="M165.631 188.018C166.311 187.675 167.063 187.497 167.825 187.497C168.587 187.497 169.338 187.675 170.018 188.018C170.311 188.179 170.56 188.407 170.746 188.684C170.564 188.964 170.313 189.193 170.018 189.35C169.338 189.693 168.587 189.872 167.825 189.872C167.063 189.872 166.311 189.693 165.631 189.35C165.336 189.193 165.086 188.964 164.904 188.684C165.089 188.407 165.339 188.179 165.631 188.018Z"
              fill="#37474F"
            />
            <path
              id="desk"
              d="M169.766 188.683C170.387 188.056 170.92 187.348 171.353 186.578C172.086 185.283 172.218 183.55 171.84 183.34C171.461 183.13 169.916 184.851 169.916 184.851C170.058 184.125 170.113 183.384 170.079 182.644C170.018 181.493 169.736 180.443 169.405 180.245C169.075 180.048 168.336 181.487 168.017 182.542C167.699 183.598 167.512 184.461 167.512 184.461C167.384 183.648 167.193 182.847 166.941 182.063C166.557 180.971 166.208 180.719 165.938 180.827C165.667 180.935 165.487 181.427 165.409 182.902C165.381 183.599 165.403 184.296 165.475 184.989C165.475 184.989 164.928 184.389 164.327 183.79C163.726 183.19 163.377 183.064 163.191 183.19C163.005 183.316 162.945 184.306 163.972 186.159C164.484 187.101 165.139 187.959 165.914 188.701C165.914 188.701 167.332 189.601 169.766 188.683Z"
              fill="#407BFF"
            />
            <g
              id="click-area"
              onClick={() => {
                if (!isSofaClick) {
                  setSofaClick(true);
                } else {
                  setSofaClick(false);
                }
              }}
            >
              <rect
                className="click-area-rect"
                x="85"
                y="118"
                width="40"
                height="40"
                pointerEvents="all"
                fill="transparent"
              />
              <path
                id="sofa-button"
                d="M110.172 139.094C110.172 141.982 107.825 144.324 104.929 144.324C102.033 144.324 99.6868 141.982 99.6868 139.094C99.6868 136.207 102.033 133.864 104.929 133.864C107.825 133.864 110.172 136.207 110.172 139.094Z"
                fill="white"
                stroke="#407BFF"
              />
            </g>

            <g
              id="click-area"
              onClick={() => {
                if (!isWindowClick) {
                  setWindowClick(true);
                } else {
                  setWindowClick(false);
                }
              }}
            >
              <rect
                className="click-area-rect"
                x="101"
                y="50"
                width="40"
                height="40"
                pointerEvents="all"
                fill="transparent"
              />
              <path
                id="window-button"
                d="M128.965 70.3282C128.965 73.2156 126.619 75.5582 123.722 75.5582C120.826 75.5582 118.48 73.2156 118.48 70.3282C118.48 67.4407 120.826 65.0981 123.722 65.0981C126.619 65.0981 128.965 67.4407 128.965 70.3282Z"
                fill="white"
                stroke="#407BFF"
              />
            </g>

            <g
              id="click-area"
              onClick={() => {
                if (!isTvClick) {
                  setTvClick(true);
                } else {
                  setTvClick(false);
                }
              }}
            >
              <rect
                className="click-area-rect"
                x="205"
                y="68"
                width="40"
                height="40"
                pointerEvents="all"
                fill="transparent"
              />
              <path
                id="tv-button"
                d="M231.284 89.0826C231.284 91.97 228.938 94.3126 226.041 94.3126C223.145 94.3126 220.799 91.97 220.799 89.0826C220.799 86.1951 223.145 83.8525 226.041 83.8525C228.938 83.8525 231.284 86.1951 231.284 89.0826Z"
                fill="white"
                stroke="#407BFF"
              />
            </g>

            <g
              id="click-area"
              onClick={() => {
                if (!isDeskClick) {
                  setDeskClick(true);
                } else {
                  setDeskClick(false);
                }
              }}
            >
              <rect
                className="click-area-rect"
                x="130"
                y="187"
                width="40"
                height="40"
                pointerEvents="all"
                fill="transparent"
              />
              <path
                id="desk-button"
                d="M155.067 206.818C155.067 209.705 152.721 212.048 149.824 212.048C146.928 212.048 144.582 209.705 144.582 206.818C144.582 203.93 146.928 201.588 149.824 201.588C152.721 201.588 155.067 203.93 155.067 206.818Z"
                fill="white"
                stroke="#407BFF"
              />
            </g>

            <g
              id="click-area"
              onClick={() => {
                if (!isCarpetClick) {
                  setCarpetClick(true);
                } else {
                  setCarpetClick(false);
                }
              }}
            >
              <rect
                className="click-area-rect"
                x="158"
                y="131"
                width="40"
                height="40"
                pointerEvents="all"
                fill="transparent"
              />
              <path
                id="rug-button"
                d="M184.301 151.597C184.301 154.485 181.955 156.827 179.058 156.827C176.162 156.827 173.816 154.485 173.816 151.597C173.816 148.71 176.162 146.367 179.058 146.367C181.955 146.367 184.301 148.71 184.301 151.597Z"
                fill="white"
                stroke="#407BFF"
              />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Room;
