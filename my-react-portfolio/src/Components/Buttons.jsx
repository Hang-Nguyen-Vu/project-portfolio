export const Buttons = ({ homepage, url }) => {
        return (
        <div className="buttons">
            <button type="button" className="live-demo button" onClick={window.location.href = homepage}>
                <span className="button-icon">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.495 39.99C32.97 39.99 39.99 32.985 39.99 24.495C39.99 16.02 32.97 9 24.48 9C16.005 9 9 16.02 9 24.495C9 32.985 16.02 39.99 24.495 39.99ZM15.465 15.06C16.965 13.635 18.78 12.54 20.805 11.94C19.74 13.005 18.84 14.505 18.165 16.335C17.115 16.005 16.215 15.57 15.465 15.06ZM28.2001 11.955C30.21 12.555 32.025 13.635 33.51 15.06C32.775 15.585 31.8751 16.005 30.825 16.35C30.15 14.505 29.25 13.005 28.2001 11.955ZM25.545 12.435C26.79 13.035 27.93 14.655 28.74 16.86C27.75 17.04 26.685 17.145 25.545 17.19V12.435ZM20.25 16.86C21.075 14.655 22.2001 13.035 23.445 12.435V17.19C22.305 17.145 21.24 17.04 20.25 16.86ZM11.445 23.4451C11.655 20.895 12.615 18.54 14.085 16.605C15 17.28 16.185 17.865 17.565 18.3C17.175 19.86 16.92 21.5999 16.845 23.4451H11.445ZM32.145 23.4451C32.07 21.5999 31.815 19.86 31.425 18.3C32.805 17.865 33.99 17.295 34.89 16.605C36.375 18.54 37.335 20.895 37.545 23.4451H32.145ZM18.99 23.4451C19.065 21.81 19.29 20.25 19.635 18.84C20.835 19.08 22.1099 19.23 23.445 19.29V23.4451H18.99ZM25.545 23.4451V19.29C26.88 19.23 28.155 19.08 29.355 18.84C29.7 20.25 29.925 21.81 30 23.4451H25.545ZM11.445 25.545H16.845C16.92 27.42 17.175 29.175 17.565 30.75C16.2 31.185 15.03 31.755 14.13 32.43C12.63 30.4799 11.655 28.11 11.445 25.545ZM18.99 25.545H23.445V29.775C22.125 29.835 20.835 29.985 19.65 30.21C19.29 28.785 19.05 27.195 18.99 25.545ZM25.545 29.775V25.545H30C29.94 27.195 29.7 28.785 29.34 30.21C28.155 29.985 26.88 29.835 25.545 29.775ZM31.425 30.75C31.83 29.175 32.07 27.42 32.145 25.545H37.545C37.335 28.11 36.3601 30.4799 34.86 32.43C33.9601 31.755 32.79 31.185 31.425 30.75ZM25.545 31.875C26.6699 31.9199 27.735 32.025 28.71 32.205C27.9 34.365 26.775 35.97 25.545 36.555V31.875ZM20.28 32.205C21.255 32.025 22.32 31.9199 23.445 31.875V36.555C22.215 35.97 21.09 34.365 20.28 32.205ZM15.51 33.975C16.245 33.465 17.145 33.0451 18.18 32.715C18.855 34.515 19.74 35.985 20.775 37.035C18.795 36.435 16.995 35.3701 15.51 33.975ZM30.81 32.715C31.845 33.0451 32.745 33.465 33.4801 33.975C31.995 35.3701 30.1949 36.435 28.215 37.035C29.25 35.985 30.135 34.515 30.81 32.715Z" fill="#333333"/>
                    </svg>
                </span>
                <span className="button-text">Live demo</span>  
            </button>

            <button type="button" className="github-link button" onClick={window.location.href =  url}>
                <svg width="219" height="48" viewBox="0 0 219 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="219" height="48" rx="24" fill="#F5F5F5"/>
                    <path d="M18.6452 33.7684C18.6452 33.6363 18.5161 33.5042 18.3226 33.5042C18.129 33.5042 18 33.6363 18 33.7684C18 33.9006 18.129 34.0327 18.3226 33.9667C18.5161 33.9667 18.6452 33.9006 18.6452 33.7684ZM16.6452 33.4381C16.6452 33.5702 16.7742 33.7684 16.9677 33.7684C17.0968 33.8345 17.2903 33.7684 17.3548 33.6363C17.3548 33.5042 17.2903 33.372 17.0968 33.3059C16.9032 33.2399 16.7097 33.3059 16.6452 33.4381ZM19.5484 33.372C19.3548 33.372 19.2258 33.5042 19.2258 33.7024C19.2258 33.8345 19.4194 33.9006 19.6129 33.8345C19.8065 33.7684 19.9355 33.7024 19.871 33.5702C19.871 33.4381 19.6774 33.3059 19.5484 33.372ZM23.7419 8C14.8387 8 8 15.0037 8 24.1218C8 31.4559 12.4516 37.7328 18.9032 39.9793C19.7419 40.1115 20 39.5829 20 39.1864C20 38.7239 20 36.4774 20 35.0899C20 35.0899 15.4839 36.081 14.5161 33.1077C14.5161 33.1077 13.8065 31.1916 12.7742 30.7291C12.7742 30.7291 11.2903 29.6719 12.8387 29.6719C12.8387 29.6719 14.4516 29.8041 15.3548 31.3898C16.7742 33.9667 19.0968 33.2399 20.0645 32.7774C20.1935 31.7202 20.5806 30.9934 21.0968 30.5309C17.4839 30.1344 13.8065 29.6059 13.8065 23.2628C13.8065 21.4128 14.3226 20.5539 15.3548 19.3645C15.1613 18.902 14.6452 17.1841 15.5484 14.8716C16.8387 14.4751 20 16.6556 20 16.6556C21.2903 16.2591 22.6452 16.127 24 16.127C25.4194 16.127 26.7742 16.2591 28.0645 16.6556C28.0645 16.6556 31.1613 14.4091 32.5161 14.8716C33.4194 17.1841 32.8387 18.902 32.7097 19.3645C33.7419 20.5539 34.3871 21.4128 34.3871 23.2628C34.3871 29.6059 30.5806 30.1344 26.9677 30.5309C27.5484 31.0595 28.0645 32.0506 28.0645 33.6363C28.0645 35.8167 28 38.5918 28 39.1204C28 39.5829 28.3226 40.1115 29.1613 39.9132C35.6129 37.7328 40 31.4559 40 24.1218C40 15.0037 32.7097 8 23.7419 8ZM14.2581 30.7952C14.129 30.8612 14.1935 31.0595 14.2581 31.1916C14.3871 31.2577 14.5161 31.3237 14.6452 31.2577C14.7097 31.1916 14.7097 30.9934 14.5806 30.8612C14.4516 30.7952 14.3226 30.7291 14.2581 30.7952ZM13.5484 30.2666C13.4839 30.3987 13.5484 30.4648 13.6774 30.5309C13.8065 30.5969 13.9355 30.5969 14 30.4648C14 30.3987 13.9355 30.3327 13.8065 30.2666C13.6774 30.2005 13.6129 30.2005 13.5484 30.2666ZM15.6129 32.6452C15.5484 32.7113 15.5484 32.9095 15.7419 33.0416C15.871 33.1738 16.0645 33.2399 16.129 33.1077C16.1935 33.0416 16.1935 32.8434 16.0645 32.7113C15.9355 32.5791 15.7419 32.5131 15.6129 32.6452ZM14.9032 31.6541C14.7742 31.7202 14.7742 31.9184 14.9032 32.0506C15.0323 32.1827 15.1613 32.2488 15.2903 32.1827C15.3548 32.1166 15.3548 31.9184 15.2903 31.7863C15.1613 31.6541 15.0323 31.588 14.9032 31.6541Z" fill="#333333"/>
                    <path d="M69.68 17L63.58 31H61.02L54.9 17H57.72L62.38 27.8L67.08 17H69.68ZM71.015 20.32H73.515V31H71.015V20.32ZM72.275 18.56C71.8217 18.56 71.4417 18.42 71.135 18.14C70.8283 17.8467 70.675 17.4867 70.675 17.06C70.675 16.6333 70.8283 16.28 71.135 16C71.4417 15.7067 71.8217 15.56 72.275 15.56C72.7283 15.56 73.1083 15.7 73.415 15.98C73.7217 16.2467 73.875 16.5867 73.875 17C73.875 17.44 73.7217 17.8133 73.415 18.12C73.1217 18.4133 72.7417 18.56 72.275 18.56ZM86.8363 25.72C86.8363 25.8933 86.8229 26.14 86.7963 26.46H78.4163C78.5629 27.2467 78.9429 27.8733 79.5563 28.34C80.1829 28.7933 80.9563 29.02 81.8763 29.02C83.0496 29.02 84.0163 28.6333 84.7763 27.86L86.1163 29.4C85.6363 29.9733 85.0296 30.4067 84.2963 30.7C83.5629 30.9933 82.7363 31.14 81.8163 31.14C80.6429 31.14 79.6096 30.9067 78.7163 30.44C77.8229 29.9733 77.1296 29.3267 76.6363 28.5C76.1563 27.66 75.9163 26.7133 75.9163 25.66C75.9163 24.62 76.1496 23.6867 76.6163 22.86C77.0963 22.02 77.7563 21.3667 78.5963 20.9C79.4363 20.4333 80.3829 20.2 81.4363 20.2C82.4763 20.2 83.4029 20.4333 84.2163 20.9C85.0429 21.3533 85.6829 22 86.1363 22.84C86.6029 23.6667 86.8363 24.6267 86.8363 25.72ZM81.4363 22.2C80.6363 22.2 79.9563 22.44 79.3963 22.92C78.8496 23.3867 78.5163 24.0133 78.3963 24.8H84.4563C84.3496 24.0267 84.0229 23.4 83.4763 22.92C82.9296 22.44 82.2496 22.2 81.4363 22.2ZM105.702 20.32L101.762 31H99.3623L96.6023 23.64L93.8023 31H91.4023L87.4823 20.32H89.8423L92.6623 28.2L95.6023 20.32H97.7023L100.582 28.24L103.482 20.32H105.702ZM119.369 30.42C119.075 30.66 118.715 30.84 118.289 30.96C117.875 31.08 117.435 31.14 116.969 31.14C115.795 31.14 114.889 30.8333 114.249 30.22C113.609 29.6067 113.289 28.7133 113.289 27.54V22.4H111.529V20.4H113.289V17.96H115.789V20.4H118.649V22.4H115.789V27.48C115.789 28 115.915 28.4 116.169 28.68C116.422 28.9467 116.789 29.08 117.269 29.08C117.829 29.08 118.295 28.9333 118.669 28.64L119.369 30.42ZM127.485 20.2C128.832 20.2 129.912 20.5933 130.725 21.38C131.538 22.1667 131.945 23.3333 131.945 24.88V31H129.445V25.2C129.445 24.2667 129.225 23.5667 128.785 23.1C128.345 22.62 127.718 22.38 126.905 22.38C125.985 22.38 125.258 22.66 124.725 23.22C124.192 23.7667 123.925 24.56 123.925 25.6V31H121.425V16.16H123.925V21.56C124.338 21.12 124.845 20.7867 125.445 20.56C126.058 20.32 126.738 20.2 127.485 20.2ZM145.254 25.72C145.254 25.8933 145.241 26.14 145.214 26.46H136.834C136.981 27.2467 137.361 27.8733 137.974 28.34C138.601 28.7933 139.374 29.02 140.294 29.02C141.468 29.02 142.434 28.6333 143.194 27.86L144.534 29.4C144.054 29.9733 143.448 30.4067 142.714 30.7C141.981 30.9933 141.154 31.14 140.234 31.14C139.061 31.14 138.028 30.9067 137.134 30.44C136.241 29.9733 135.548 29.3267 135.054 28.5C134.574 27.66 134.334 26.7133 134.334 25.66C134.334 24.62 134.568 23.6867 135.034 22.86C135.514 22.02 136.174 21.3667 137.014 20.9C137.854 20.4333 138.801 20.2 139.854 20.2C140.894 20.2 141.821 20.4333 142.634 20.9C143.461 21.3533 144.101 22 144.554 22.84C145.021 23.6667 145.254 24.6267 145.254 25.72ZM139.854 22.2C139.054 22.2 138.374 22.44 137.814 22.92C137.268 23.3867 136.934 24.0133 136.814 24.8H142.874C142.768 24.0267 142.441 23.4 141.894 22.92C141.348 22.44 140.668 22.2 139.854 22.2ZM158.083 31.14C156.976 31.14 155.983 30.9067 155.103 30.44C154.223 29.9733 153.536 29.3267 153.043 28.5C152.55 27.66 152.303 26.7133 152.303 25.66C152.303 24.6067 152.55 23.6667 153.043 22.84C153.536 22.0133 154.216 21.3667 155.083 20.9C155.963 20.4333 156.963 20.2 158.083 20.2C159.136 20.2 160.056 20.4133 160.843 20.84C161.643 21.2667 162.243 21.88 162.643 22.68L160.723 23.8C160.416 23.3067 160.03 22.94 159.563 22.7C159.11 22.4467 158.61 22.32 158.063 22.32C157.13 22.32 156.356 22.6267 155.743 23.24C155.13 23.84 154.823 24.6467 154.823 25.66C154.823 26.6733 155.123 27.4867 155.723 28.1C156.336 28.7 157.116 29 158.063 29C158.61 29 159.11 28.88 159.563 28.64C160.03 28.3867 160.416 28.0133 160.723 27.52L162.643 28.64C162.23 29.44 161.623 30.06 160.823 30.5C160.036 30.9267 159.123 31.14 158.083 31.14ZM169.448 31.14C168.368 31.14 167.394 30.9067 166.528 30.44C165.661 29.9733 164.981 29.3267 164.488 28.5C164.008 27.66 163.768 26.7133 163.768 25.66C163.768 24.6067 164.008 23.6667 164.488 22.84C164.981 22.0133 165.661 21.3667 166.528 20.9C167.394 20.4333 168.368 20.2 169.448 20.2C170.541 20.2 171.521 20.4333 172.388 20.9C173.254 21.3667 173.928 22.0133 174.408 22.84C174.901 23.6667 175.148 24.6067 175.148 25.66C175.148 26.7133 174.901 27.66 174.408 28.5C173.928 29.3267 173.254 29.9733 172.388 30.44C171.521 30.9067 170.541 31.14 169.448 31.14ZM169.448 29C170.368 29 171.128 28.6933 171.728 28.08C172.328 27.4667 172.628 26.66 172.628 25.66C172.628 24.66 172.328 23.8533 171.728 23.24C171.128 22.6267 170.368 22.32 169.448 22.32C168.528 22.32 167.768 22.6267 167.168 23.24C166.581 23.8533 166.288 24.66 166.288 25.66C166.288 26.66 166.581 27.4667 167.168 28.08C167.768 28.6933 168.528 29 169.448 29ZM187.998 16.16V31H185.598V29.62C185.185 30.1267 184.672 30.5067 184.058 30.76C183.458 31.0133 182.792 31.14 182.058 31.14C181.032 31.14 180.105 30.9133 179.278 30.46C178.465 30.0067 177.825 29.3667 177.358 28.54C176.892 27.7 176.658 26.74 176.658 25.66C176.658 24.58 176.892 23.6267 177.358 22.8C177.825 21.9733 178.465 21.3333 179.278 20.88C180.105 20.4267 181.032 20.2 182.058 20.2C182.765 20.2 183.412 20.32 183.998 20.56C184.585 20.8 185.085 21.16 185.498 21.64V16.16H187.998ZM182.358 29C182.958 29 183.498 28.8667 183.978 28.6C184.458 28.32 184.838 27.9267 185.118 27.42C185.398 26.9133 185.538 26.3267 185.538 25.66C185.538 24.9933 185.398 24.4067 185.118 23.9C184.838 23.3933 184.458 23.0067 183.978 22.74C183.498 22.46 182.958 22.32 182.358 22.32C181.758 22.32 181.218 22.46 180.738 22.74C180.258 23.0067 179.878 23.3933 179.598 23.9C179.318 24.4067 179.178 24.9933 179.178 25.66C179.178 26.3267 179.318 26.9133 179.598 27.42C179.878 27.9267 180.258 28.32 180.738 28.6C181.218 28.8667 181.758 29 182.358 29ZM201.309 25.72C201.309 25.8933 201.296 26.14 201.269 26.46H192.889C193.036 27.2467 193.416 27.8733 194.029 28.34C194.656 28.7933 195.429 29.02 196.349 29.02C197.522 29.02 198.489 28.6333 199.249 27.86L200.589 29.4C200.109 29.9733 199.502 30.4067 198.769 30.7C198.036 30.9933 197.209 31.14 196.289 31.14C195.116 31.14 194.082 30.9067 193.189 30.44C192.296 29.9733 191.602 29.3267 191.109 28.5C190.629 27.66 190.389 26.7133 190.389 25.66C190.389 24.62 190.622 23.6867 191.089 22.86C191.569 22.02 192.229 21.3667 193.069 20.9C193.909 20.4333 194.856 20.2 195.909 20.2C196.949 20.2 197.876 20.4333 198.689 20.9C199.516 21.3533 200.156 22 200.609 22.84C201.076 23.6667 201.309 24.6267 201.309 25.72ZM195.909 22.2C195.109 22.2 194.429 22.44 193.869 22.92C193.322 23.3867 192.989 24.0133 192.869 24.8H198.929C198.822 24.0267 198.496 23.4 197.949 22.92C197.402 22.44 196.722 22.2 195.909 22.2Z" fill="#333333"/>
                </svg>
            </button>
        </div>
    )
}