import React from "react";

interface Props {
    className?: string;
    title?: string;
}

export const LogoStampInnovation = ({ className = "", title = "Innovasjon fra Fremtind" }: Props) => (
    <svg
        aria-labelledby="stampInnovationTitle"
        role="img"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 682.66669 682.66669"
    >
        <title id="stampInnovationTitle">{title}</title>
        <g fill="currentColor">
            <path d="M84.207 313.513l-42.013-4.86.367-3.181 42.013 4.863-.367 3.178M99.238 250.336l-43.349 11.823 35.563 11.749-.985 2.984-40.148-13.265 1.117-3.384 43.31-11.9-35.508-11.731.966-2.927 40.149 13.267-1.115 3.384M130.108 193.321l-44.933.414 31.41 20.406-1.712 2.635-35.46-23.039 1.942-2.989 44.914-.496-31.354-20.375 1.677-2.585 35.459 23.041-1.943 2.988M144.899 122.919c-3.096-.043-6.167 1.272-8.594 3.538-2.429 2.267-3.95 5.239-4.119 8.334-.362 5.806 3.982 10.724 7.4 14.385 3.42 3.661 8.069 8.376 13.883 8.41 3.099.045 6.17-1.271 8.596-3.537 2.431-2.268 3.951-5.24 4.118-8.333.365-5.807-4.02-10.768-7.44-14.428-3.416-3.664-8.026-8.336-13.844-8.37zm24.344 22.712c-.232 3.644-1.703 7.465-5.102 10.641-3.398 3.173-7.312 4.381-10.964 4.363-6.666-.059-11.825-4.787-15.976-9.234-4.15-4.445-8.473-9.872-8.075-16.526.232-3.644 1.706-7.467 5.105-10.642 3.397-3.172 7.312-4.38 10.96-4.361 6.666.057 11.786 4.743 15.937 9.19 4.152 4.445 8.516 9.915 8.115 16.569M210.459 120.941l-2.55 1.499-34.648-28.679 2.864-1.682L207 117.788l-7.6-39.385 2.865-1.683 8.195 44.221M246.507 63.227L245.4 88.8l17.483-5.814zm26.036 31.382l-7.648-9.212-19.66 6.54-.49 11.918-3.096 1.03 2.068-45.258 2.924-.971 28.938 34.943-3.036 1.01M326.595 82.717c-2.607 3.078-6.743 4.811-11.67 5.304-4.869.488-9.232-.636-12.354-3.32-2.323-1.985-4.062-4.808-4.684-7.982l3.246-.326c.55 2.463 1.983 4.658 3.774 6.156 2.516 2.086 6.174 2.859 9.718 2.504 3.67-.366 7.24-1.684 9.366-4.113 1.358-1.575 2.185-3.635 1.916-6.307-.403-4.034-3.94-7.218-9.112-7.361l-8.036-.213c-6.088-.171-10.875-3.11-11.524-9.578-.348-3.502.964-6.152 2.933-8.326 2.405-2.64 6.181-4.336 10.15-4.732 4.569-.459 9.318.925 12 3.474 2.014 1.896 3.435 3.972 3.98 6.976l-3.187.318c-.514-2.106-1.336-3.642-2.879-5.107-2.088-2.07-5.71-3.085-9.619-2.695-3.062.307-5.933 1.374-7.86 3.364-1.478 1.587-2.544 3.672-2.27 6.403.497 4.985 4.294 6.523 8.249 6.607l8.157.202c6.692.171 11.672 4.41 12.263 10.344.37 3.68-.768 6.252-2.557 8.408M376.176 85.537c-2.207 1.863-5.17 2.863-8.953 2.455-3.363-.364-5.876-1.833-7.664-3.827-2.388-2.658-3.295-6.656-2.888-10.989l3.181.341c-.37 3.443.199 6.623 2.09 8.804 1.238 1.455 3.085 2.374 5.609 2.646 2.88.312 5.072-.294 6.614-1.627 1.739-1.492 2.73-3.903 3.055-6.93l3.265-30.302 3.123.337-3.259 30.244c-.408 3.796-1.896 6.875-4.173 8.848M444.032 67.275c-1.44-2.746-4.063-4.815-7.213-5.868-3.151-1.052-6.49-.974-9.29.354-5.276 2.45-7.525 8.615-9.114 13.366-1.586 4.752-3.511 11.088-.766 16.218 1.44 2.744 4.06 4.815 7.211 5.868 3.15 1.052 6.49.972 9.29-.354 5.275-2.451 7.546-8.672 9.133-13.424 1.588-4.751 3.494-11.03.749-16.16zm-8.347 32.234c-3.314 1.534-7.377 2.063-11.788.59-4.412-1.475-7.338-4.34-9.068-7.559-3.128-5.887-1.434-12.677.495-18.447 1.924-5.769 4.632-12.16 10.672-14.981 3.312-1.535 7.375-2.064 11.787-.59 4.41 1.474 7.34 4.34 9.066 7.557 3.128 5.886 1.454 12.621-.473 18.39-1.927 5.77-4.653 12.216-10.69 15.04M490.89 132.69l-.937-44.917-20.041 31.64-2.65-1.68 22.622-35.721 3.01 1.904 1.018 44.901 20.008-31.59 2.601 1.648-22.624 35.721-3.008-1.907M576.71 160.65l-13.123 9.745 12.713 17.114-2.396 1.779-12.71-17.115-16.042 11.915-1.872-2.521 33.95-25.216 15.987 21.526-2.393 1.778-14.115-19.004M615.917 226.97l-4.992-11.463-16.95 7.382 4.989 11.462c2.823 6.48 7.417 8.958 12.937 6.553 5.524-2.405 6.836-7.455 4.016-13.935zm-16.645 13.309l-13.753 15.476-1.375-3.156 13.164-14.89-5.956-13.677-16.512 7.193-1.256-2.88 38.768-16.884 6.245 14.342c3.738 8.584 1.334 15.162-5.393 18.092-5.085 2.214-10.473.741-13.932-3.616M633.25 289.803l-25.147-4.767 3.244 18.137zm-34.791 21.261l10.214-6.247-3.649-20.396-11.724-2.197-.575-3.21 44.487 8.546.541 3.033-38.729 23.623-.565-3.152M134.343 503.013l-10.54 8.875 12.844 15.244-3.83 3.227-12.845-15.244-14.231 11.986-3.464-4.11 32.342-27.24 17.864 21.204-3.743 3.15-14.397-17.092M189.62 554.528l-9.301-6.617-8.604 12.103 9.301 6.617c4.133 2.94 8.261 3.389 11.37-.986 3.11-4.374 1.367-8.177-2.766-11.117zm-14.725 35.412l3.598-19.03-9.649-6.86-10.19 14.338-4.38-3.116 24.5-34.463 13.68 9.734c4.083 2.906 6.143 6.054 6.68 9.364.43 2.938-.078 5.946-2.22 8.958-2.142 3.015-4.577 4.356-7.494 4.918-1.795.333-3.859.11-5.91-.549l-3.795 20.138-4.82-3.432M221.964 615.233l14.935-39.57 26.778 10.102-1.725 4.578-21.753-8.207-4.55 12.055 19.096 7.204-1.768 4.686-19.096-7.2-5.161 13.672 21.752 8.206-1.727 4.574-26.781-10.1M332.999 639.53l2.749-35.56-15.95 33.942-4.217-.324-10.52-36.285-2.774 35.856-5.116-.394 3.26-42.16 7.708.595 10.232 35.305 15.478-33.32 7.53.58-3.263 42.16-5.117-.396M395.183 596.503l7.125 36.656-5.333 1.034-7.128-36.653-12.507 2.43-.945-4.86 30.356-5.898.942 4.86-12.51 2.43M454.212 617.63l-16.07-39.12 5.083-2.088 16.07 39.12-5.083 2.087M523.944 578.472l-36.75-15.716 19.557 27.81-4.247 2.99-24.328-34.592 4.94-3.476 36.82 15.812-19.628-27.905 4.248-2.991 24.328 34.593-4.94 3.475M554.29 500.155c-2.783.301-5.315 1.898-7.073 4.052l-6.029 7.398 25.199 20.538 6.028-7.398c1.756-2.154 2.808-4.957 2.541-7.744-.497-4.77-4.512-8.434-8.028-11.3-3.513-2.862-7.82-5.982-12.639-5.546zm25.731 16.297c.311 4.15-1.181 8.153-3.817 11.384l-9.424 11.563-32.779-26.718 9.427-11.564c2.63-3.23 6.3-5.464 10.424-5.994 6.399-.863 11.795 2.521 16.51 6.366 4.717 3.844 9.175 8.57 9.66 14.963M341.28 235.977L195.19 382.068l11.282 11.281 68.581-68.581 68.588 68.587 10.87-10.87-68.587-68.588 55.779-55.78 134.916 134.916 10.857-10.858L341.28 235.977" />
        </g>
    </svg>
);
