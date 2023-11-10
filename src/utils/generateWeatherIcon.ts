export const generateWeatherIcon = (weather: string): string => {
  switch (weather) {
		case 'sunny cloudy':
			return '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="42" viewBox="0 0 60 42" fill="none"><path d="M8.41667 5.29053L7.76667 4.71579C7.11667 4.14105 6.06667 4.15579 5.43333 4.71579L5.41667 4.73053C4.76667 5.30526 4.76667 6.23368 5.41667 6.79368L6.06667 7.36842C6.71667 7.94316 7.75 7.94316 8.4 7.36842L8.41667 7.35368C9.06667 6.79368 9.06667 5.85053 8.41667 5.29053Z" fill="white"/><path d="M3.35 14.6632H1.65C0.733333 14.6632 0 15.3116 0 16.1221V16.1368C0 16.9474 0.733333 17.5958 1.65 17.5958H3.33333C4.26667 17.6105 5 16.9621 5 16.1516V16.1368C5 15.3116 4.26667 14.6632 3.35 14.6632Z" fill="white"/><path d="M18.35 0H18.3333C17.4 0 16.6667 0.648421 16.6667 1.45895V2.87368C16.6667 3.68421 17.4 4.33263 18.3167 4.33263H18.3333C19.2667 4.34737 20 3.69895 20 2.88842V1.45895C20 0.648421 19.2667 0 18.35 0Z" fill="white"/><path d="M31.25 4.73053C30.6 4.15579 29.55 4.15579 28.9 4.71579L28.25 5.29053C27.6 5.86526 27.6 6.79368 28.25 7.35368L28.2667 7.36842C28.9167 7.94316 29.9667 7.94316 30.6 7.36842L31.25 6.79368C31.9 6.21895 31.9 5.30526 31.25 4.73053Z" fill="white"/><path d="M18.3333 7.29474C12.8167 7.29474 8.33333 11.2589 8.33333 16.1368C8.33333 19.2987 10.2171 22.0767 13.0449 23.6399C14.3981 20.1739 18.1202 17.6842 22.5 17.6842C22.6724 17.6842 22.8437 17.6881 23.0139 17.6957C23.7359 15.4301 25.1818 13.4328 27.117 11.9113C25.4197 9.16245 22.12 7.29474 18.3333 7.29474Z" fill="white"/><path d="M5.41667 27.5432C6.06667 28.1179 7.11667 28.1179 7.76667 27.5432L8.41667 26.9684C9.06667 26.3937 9.05 25.4653 8.41667 24.9053L8.4 24.8905C7.75 24.3158 6.7 24.3158 6.05 24.8905L5.4 25.4653C4.76667 26.0547 4.76667 26.9684 5.41667 27.5432Z" fill="white"/><path d="M17.5 42H50C55.5228 42 60 38.0413 60 33.1579C60 29.0106 56.7708 25.5302 52.4143 24.5752C52.4709 24.1272 52.5 23.6719 52.5 23.2105C52.5 16.4959 46.3439 11.0526 38.75 11.0526C32.4514 11.0526 27.142 14.7973 25.5139 19.9062C25.3437 19.8986 25.1724 19.8947 25 19.8947C19.4772 19.8947 15 23.8535 15 28.7368C15 28.8623 15.003 28.9872 15.0088 29.1114C12.0912 30.0196 10 32.4781 10 35.3684C10 39.0309 13.3579 42 17.5 42Z" fill="white"/></svg>'
			break

		case 'sunny':
			return '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="57" viewBox="0 0 60 57" fill="none"><path d="M15.1307 10.7927L14.1552 9.87476C13.1798 8.95682 11.6041 8.98036 10.6536 9.87476L10.6286 9.89829C9.65319 10.8162 9.65319 12.299 10.6286 13.1934L11.6041 14.1114C12.5795 15.0293 14.1302 15.0293 15.1057 14.1114L15.1307 14.0878C16.1061 13.1934 16.1061 11.6871 15.1307 10.7927ZM7.52722 25.7621H4.97606C3.60044 25.7621 2.49994 26.7977 2.49994 28.0922V28.1158C2.49994 29.4103 3.60044 30.4459 4.97606 30.4459H7.50221C8.90285 30.4694 10.0034 29.4338 10.0034 28.1393V28.1158C10.0034 26.7977 8.90285 25.7621 7.52722 25.7621ZM30.0375 2.34299H30.0124C28.6118 2.34299 27.5113 3.37861 27.5113 4.67313V6.93266C27.5113 8.22718 28.6118 9.2628 29.9874 9.2628H30.0124C31.4131 9.28634 32.5136 8.25072 32.5136 6.9562V4.67313C32.5136 3.37861 31.4131 2.34299 30.0375 2.34299ZM49.3963 9.89829C48.4208 8.98036 46.8451 8.98036 45.8697 9.87476L44.8942 10.7927C43.9188 11.7106 43.9188 13.1934 44.8942 14.0878L44.9192 14.1114C45.8947 15.0293 47.4704 15.0293 48.4208 14.1114L49.3963 13.1934C50.3717 12.2755 50.3717 10.8162 49.3963 9.89829ZM44.8692 45.4388L45.8446 46.3568C46.8201 47.2747 48.3958 47.2747 49.3712 46.3568C50.3467 45.4388 50.3467 43.956 49.3712 43.0381L48.3958 42.1201C47.4204 41.2022 45.8446 41.2257 44.8942 42.1201C43.8938 43.0616 43.8938 44.5209 44.8692 45.4388ZM50.0215 28.0922V28.1158C50.0215 29.4103 51.122 30.4459 52.4977 30.4459H55.0238C56.3994 30.4459 57.4999 29.4103 57.4999 28.1158V28.0922C57.4999 26.7977 56.3994 25.7621 55.0238 25.7621H52.4977C51.122 25.7621 50.0215 26.7977 50.0215 28.0922ZM30.0124 13.9937C21.7337 13.9937 15.0056 20.3251 15.0056 28.1158C15.0056 35.9064 21.7337 42.2378 30.0124 42.2378C38.2912 42.2378 45.0193 35.9064 45.0193 28.1158C45.0193 20.3251 38.2912 13.9937 30.0124 13.9937ZM29.9874 53.8885H30.0124C31.3881 53.8885 32.4886 52.8529 32.4886 51.5584V49.2989C32.4886 48.0043 31.3881 46.9687 30.0124 46.9687H29.9874C28.6118 46.9687 27.5113 48.0043 27.5113 49.2989V51.5584C27.5113 52.8529 28.6118 53.8885 29.9874 53.8885ZM10.6286 46.3332C11.6041 47.2512 13.1798 47.2512 14.1552 46.3332L15.1307 45.4153C16.1061 44.4974 16.0811 43.0145 15.1307 42.1201L15.1057 42.0966C14.1302 41.1787 12.5545 41.1787 11.5791 42.0966L10.6036 43.0145C9.65319 43.956 9.65319 45.4153 10.6286 46.3332Z" fill="white"/></svg>'
			break

		case 'rainy':
			return '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="57" viewBox="0 0 60 57" fill="none"><path d="M12.5 39.8306H45C50.5229 39.8306 55 35.6347 55 30.4587C55 26.0629 51.7708 22.374 47.4143 21.3618C47.4709 20.887 47.5 20.4043 47.5 19.9153C47.5 12.7984 41.3439 7.02893 33.75 7.02893C27.4514 7.02893 22.142 10.998 20.5139 16.413C20.3437 16.4049 20.1724 16.4008 20 16.4008C14.4772 16.4008 10 20.5968 10 25.7728C10 25.9058 10.003 26.0382 10.0088 26.1698C7.09123 27.1324 5 29.7382 5 32.8017C5 36.6837 8.35786 39.8306 12.5 39.8306Z" fill="white"/><path d="M18.5365 42.1736C17.9013 42.1736 17.3206 42.51 17.0365 43.0424L13.7135 49.2709C13.156 50.316 13.9668 51.5455 15.2135 51.5455C15.8487 51.5455 16.4294 51.2092 16.7135 50.6767L20.0365 44.4482C20.594 43.4032 19.7832 42.1736 18.5365 42.1736Z" fill="white"/><path d="M26.0365 42.1736C27.2832 42.1736 28.094 43.4032 27.5365 44.4482L24.2135 50.6767C23.9294 51.2092 23.3487 51.5455 22.7135 51.5455C21.4668 51.5455 20.656 50.316 21.2135 49.2709L24.5365 43.0424C24.8206 42.51 25.4013 42.1736 26.0365 42.1736Z" fill="white"/><path d="M41.0365 42.1736C42.2832 42.1736 43.094 43.4032 42.5365 44.4482L39.2135 50.6767C38.9294 51.2092 38.3488 51.5455 37.7135 51.5455C36.4668 51.5455 35.656 50.316 36.2135 49.2709L39.5365 43.0424C39.8206 42.51 40.4013 42.1736 41.0365 42.1736Z" fill="white"/><path d="M33.5365 42.1736C34.7832 42.1736 35.594 43.4032 35.0365 44.4482L31.7135 50.6767C31.4294 51.2092 30.8487 51.5455 30.2135 51.5455C28.9668 51.5455 28.156 50.316 28.7135 49.2709L32.0365 43.0424C32.3206 42.51 32.9013 42.1736 33.5365 42.1736Z" fill="white"/></svg>'
			break

		case 'thunder':
			return '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="57" viewBox="0 0 60 57" fill="none"><path d="M37.5222 39.8307H45C50.5229 39.8307 55 35.6347 55 30.4587C55 26.0629 51.7708 22.374 47.4143 21.3618C47.4709 20.887 47.5 20.4043 47.5 19.9153C47.5 12.7984 41.3439 7.02895 33.75 7.02895C27.4514 7.02895 22.142 10.998 20.5139 16.413C20.3437 16.405 20.1724 16.4009 20 16.4009C14.4772 16.4009 10 20.5968 10 25.7728C10 25.9058 10.003 26.0382 10.0088 26.1698C7.09123 27.1324 5 29.7382 5 32.8017C5 36.6837 8.35786 39.8307 12.5 39.8307H19.6206L30.3294 22.2674C31.6013 20.1813 35 21.0272 35 23.4298V32.8017H37.5C39.4196 32.8017 40.623 34.7452 39.6706 36.3071L37.5222 39.8307Z" fill="white"/><path d="M22.5 39.8307L32.5 23.4298V35.1447H37.5L27.5 51.5456V39.8307H22.5Z" fill="white"/></svg>'
			break

		case 'sunny rainy':
			return '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="50" viewBox="0 0 60 50" fill="none"><path d="M7.76667 4.44445L8.41667 4.98611C9.06667 5.51389 9.06667 6.40278 8.41667 6.93056L8.4 6.94445C7.75 7.48611 6.71667 7.48611 6.06667 6.94445L5.41667 6.40278C4.76667 5.875 4.76667 5 5.41667 4.45833L5.43333 4.44445C6.06667 3.91667 7.11667 3.90278 7.76667 4.44445Z" fill="white"/><path d="M1.65 13.8194H3.35C4.26667 13.8194 5 14.4306 5 15.2083V15.2222C5 15.9861 4.26667 16.5972 3.33333 16.5833H1.65C0.733333 16.5833 0 15.9722 0 15.2083V15.1944C0 14.4306 0.733333 13.8194 1.65 13.8194Z" fill="white"/><path d="M18.3333 0H18.35C19.2667 0 20 0.611111 20 1.375V2.72222C20 3.48611 19.2667 4.09722 18.3333 4.08333H18.3167C17.4 4.08333 16.6667 3.47222 16.6667 2.70833V1.375C16.6667 0.611111 17.4 0 18.3333 0Z" fill="white"/><path d="M28.9 4.44445C29.55 3.91667 30.6 3.91667 31.25 4.45833C31.9 5 31.9 5.86111 31.25 6.40278L30.6 6.94445C29.9667 7.48611 28.9167 7.48611 28.2667 6.94445L28.25 6.93056C27.6 6.40278 27.6 5.52778 28.25 4.98611L28.9 4.44445Z" fill="white"/><path d="M8.33333 15.2083C8.33333 10.6111 12.8167 6.875 18.3333 6.875C22.12 6.875 25.4197 8.63524 27.117 11.226C25.1818 12.6599 23.7359 14.5423 23.0139 16.6775C22.8437 16.6703 22.6724 16.6667 22.5 16.6667C18.1202 16.6667 14.3981 19.0131 13.0449 22.2797C10.2171 20.8064 8.33333 18.1883 8.33333 15.2083Z" fill="white"/><path d="M7.76667 25.9583C7.11667 26.5 6.06667 26.5 5.41667 25.9583C4.76667 25.4167 4.76667 24.5556 5.4 24L6.05 23.4583C6.7 22.9167 7.75 22.9167 8.4 23.4583L8.41667 23.4722C9.05 24 9.06667 24.875 8.41667 25.4167L7.76667 25.9583Z" fill="white"/><path d="M50 39.5833H17.5C13.3579 39.5833 10 36.7851 10 33.3333C10 30.6093 12.0912 28.2923 15.0088 27.4364C15.003 27.3193 15 27.2016 15 27.0833C15 22.481 19.4772 18.75 25 18.75C25.1724 18.75 25.3437 18.7536 25.5139 18.7608C27.142 13.9459 32.4514 10.4167 38.75 10.4167C46.3439 10.4167 52.5 15.5467 52.5 21.875C52.5 22.3098 52.4709 22.739 52.4143 23.1612C56.7708 24.0612 60 27.3413 60 31.25C60 35.8524 55.5228 39.5833 50 39.5833Z" fill="white"/><path d="M24.9635 47.9775L28.2865 42.4392C28.5706 41.9657 29.1513 41.6667 29.7865 41.6667C31.0332 41.6667 31.844 42.76 31.2865 43.6892L27.9635 49.2275C27.6794 49.7009 27.0987 50 26.4635 50C25.2168 50 24.406 48.9067 24.9635 47.9775Z" fill="white"/><path d="M32.4635 47.9775L35.7865 42.4392C36.0706 41.9657 36.6513 41.6667 37.2865 41.6667C38.5332 41.6667 39.344 42.76 38.7865 43.6892L35.4635 49.2275C35.1794 49.7009 34.5987 50 33.9635 50C32.7168 50 31.906 48.9067 32.4635 47.9775Z" fill="white"/></svg>'
			break

		case 'night cloudy':
			return '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none"> <g clip-path="url(#clip0_8_435)"> <path d="M4.1904 10.0237C4.04072 10.0764 3.89885 10.1456 3.76697 10.2292C3.17992 9.98631 2.63005 9.62496 2.1535 9.14513C0.218366 7.21653 0.218366 4.08131 2.1535 2.15271C2.35146 1.95491 2.55933 1.77688 2.78204 1.61864C3.15323 1.35654 3.73723 1.79666 3.69764 2.20711C3.56401 3.62141 4.03913 5.09012 5.12795 6.1731C5.54352 6.59022 6.0151 6.9172 6.51872 7.15432C5.19643 7.37273 4.18794 8.52137 4.18794 9.90555C4.18794 9.94512 4.18877 9.98451 4.1904 10.0237Z" fill="white"/> <path d="M8.04549 3.953L8.41275 5.17064C8.37653 5.19971 8.34085 5.22942 8.30572 5.25977L7.23538 4.53348L5.99667 5.37401L6.42528 3.953L5.23367 3.05209L6.73613 3.01029L7.23538 1.61714L7.73463 3.01029L9.2371 3.05209L8.04549 3.953Z" fill="white"/> <path d="M12.2804 3.12639L13.0528 2.54591L12.0826 2.52269L11.7576 1.61714L11.4326 2.52269L10.4624 2.54591L11.2348 3.12639L10.9569 4.04588L11.7576 3.50255L12.5583 4.04588L12.2804 3.12639Z" fill="white"/> <path d="M5.58226 14.7857H14.6453C16.1854 14.7857 17.434 13.5371 17.434 11.997C17.434 10.689 16.5335 9.59139 15.3186 9.29021C15.3344 9.14892 15.3425 9.00531 15.3425 8.85981C15.3425 6.74214 13.6258 5.02544 11.5081 5.02544C9.75166 5.02544 8.27105 6.20644 7.81705 7.81769C7.76958 7.81529 7.7218 7.81407 7.67373 7.81407C6.13361 7.81407 4.8851 9.06258 4.8851 10.6027C4.8851 10.6423 4.88592 10.6817 4.88756 10.7208C4.07395 11.0073 3.49078 11.7826 3.49078 12.6942C3.49078 13.8493 4.42717 14.7857 5.58226 14.7857Z" fill="white"/> </g> <defs> <clipPath id="clip0_8_435"> <rect width="16.7318" height="16.7318" fill="white" transform="translate(0.702148 0.145325)"/> </clipPath> </defs> </svg>'
			break

		case 'night':
			return '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"> <path d="M12.3745 2.85136L10.6107 4.20385L11.2451 6.33716L9.4116 5.0753L7.57807 6.33716L8.21249 4.20385L6.44868 2.85136L8.67261 2.78862L9.4116 0.697144L10.1506 2.78862L12.3745 2.85136ZM14.8146 7.66873L13.6712 8.54018L14.0826 9.92055L12.8974 9.10488L11.7122 9.92055L12.1235 8.54018L10.9802 7.66873L12.4164 7.63387L12.8974 6.27441L13.3784 7.63387L14.8146 7.66873ZM13.2251 11.1197C13.8037 11.0639 14.4242 11.8865 14.0547 12.4094C13.8316 12.7231 13.5946 13.0159 13.3017 13.2948C10.5759 16.0346 6.16284 16.0346 3.44392 13.2948C0.718033 10.5759 0.718033 6.1559 3.44392 3.43698C3.72279 3.15811 4.01559 2.90714 4.32931 2.68405C4.85218 2.31455 5.67483 2.93502 5.61906 3.51366C5.43083 5.50754 6.1001 7.5781 7.63385 9.10488C9.16062 10.6386 11.2242 11.3079 13.2251 11.1197Z" fill="white"/> </svg>'
			break

		case 'night thunder':
			return '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"> <g clip-path="url(#clip0_8_403)"> <path d="M3.06482 8.68956C3.1967 8.60598 3.33858 8.53674 3.48825 8.48405C3.48662 8.44487 3.48579 8.40548 3.48579 8.3659C3.48579 6.98172 4.49428 5.83309 5.81657 5.61468C5.31295 5.37756 4.84137 5.05058 4.42581 4.63346C3.33699 3.55048 2.86186 2.08177 2.99549 0.667465C3.03509 0.257019 2.45108 -0.183098 2.07989 0.0789941C1.85718 0.237238 1.64932 0.415263 1.45135 0.613068C-0.483783 2.54167 -0.483783 5.67688 1.45135 7.60548C1.9279 8.08531 2.47777 8.44667 3.06482 8.68956Z" fill="white"/> <path d="M7.7106 3.631L7.34334 2.41335L8.53495 1.51245L7.03249 1.47065L6.53323 0.077494L6.03398 1.47065L4.53152 1.51245L5.72313 2.41335L5.29452 3.83437L6.53323 2.99383L7.60357 3.72012C7.6387 3.68978 7.67438 3.66007 7.7106 3.631Z" fill="white"/> <path d="M12.3507 1.00627L11.5782 1.58675L11.8561 2.50623L11.0554 1.9629L10.2547 2.50623L10.5326 1.58675L9.76021 1.00627L10.7305 0.983049L11.0554 0.0774977L11.3804 0.983049L12.3507 1.00627Z" fill="white"/> <path d="M13.9432 13.246H11.8579L12.457 12.1976C12.7226 11.7328 12.387 11.1545 11.8517 11.1545H11.1545V8.3659C11.1545 7.65099 10.2068 7.3993 9.85208 8.02002L6.86579 13.246H4.88011C3.72502 13.246 2.78863 12.3096 2.78863 11.1545C2.78863 10.243 3.3718 9.46762 4.18541 9.1812C4.18378 9.14203 4.18295 9.10264 4.18295 9.06306C4.18295 7.52294 5.43147 6.27443 6.97159 6.27443C7.01965 6.27443 7.06743 6.27564 7.1149 6.27805C7.5689 4.6668 9.04951 3.48579 10.806 3.48579C12.9236 3.48579 14.6403 5.2025 14.6403 7.32017C14.6403 7.46567 14.6322 7.60928 14.6164 7.75057C15.8313 8.05175 16.7318 9.1494 16.7318 10.4574C16.7318 11.9975 15.4833 13.246 13.9432 13.246Z" fill="white"/> <path d="M7.66875 13.246H9.06306V16.7318L11.8517 11.8517H10.4574V8.3659L7.66875 13.246Z" fill="white"/> </g> <defs> <clipPath id="clip0_8_403"> <rect width="16.7318" height="16.7318" fill="white"/> </clipPath> </defs> </svg>'
			break

		default:
			return '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="42" viewBox="0 0 60 42" fill="none"><path d="M8.41667 5.29053L7.76667 4.71579C7.11667 4.14105 6.06667 4.15579 5.43333 4.71579L5.41667 4.73053C4.76667 5.30526 4.76667 6.23368 5.41667 6.79368L6.06667 7.36842C6.71667 7.94316 7.75 7.94316 8.4 7.36842L8.41667 7.35368C9.06667 6.79368 9.06667 5.85053 8.41667 5.29053Z" fill="white"/><path d="M3.35 14.6632H1.65C0.733333 14.6632 0 15.3116 0 16.1221V16.1368C0 16.9474 0.733333 17.5958 1.65 17.5958H3.33333C4.26667 17.6105 5 16.9621 5 16.1516V16.1368C5 15.3116 4.26667 14.6632 3.35 14.6632Z" fill="white"/><path d="M18.35 0H18.3333C17.4 0 16.6667 0.648421 16.6667 1.45895V2.87368C16.6667 3.68421 17.4 4.33263 18.3167 4.33263H18.3333C19.2667 4.34737 20 3.69895 20 2.88842V1.45895C20 0.648421 19.2667 0 18.35 0Z" fill="white"/><path d="M31.25 4.73053C30.6 4.15579 29.55 4.15579 28.9 4.71579L28.25 5.29053C27.6 5.86526 27.6 6.79368 28.25 7.35368L28.2667 7.36842C28.9167 7.94316 29.9667 7.94316 30.6 7.36842L31.25 6.79368C31.9 6.21895 31.9 5.30526 31.25 4.73053Z" fill="white"/><path d="M18.3333 7.29474C12.8167 7.29474 8.33333 11.2589 8.33333 16.1368C8.33333 19.2987 10.2171 22.0767 13.0449 23.6399C14.3981 20.1739 18.1202 17.6842 22.5 17.6842C22.6724 17.6842 22.8437 17.6881 23.0139 17.6957C23.7359 15.4301 25.1818 13.4328 27.117 11.9113C25.4197 9.16245 22.12 7.29474 18.3333 7.29474Z" fill="white"/><path d="M5.41667 27.5432C6.06667 28.1179 7.11667 28.1179 7.76667 27.5432L8.41667 26.9684C9.06667 26.3937 9.05 25.4653 8.41667 24.9053L8.4 24.8905C7.75 24.3158 6.7 24.3158 6.05 24.8905L5.4 25.4653C4.76667 26.0547 4.76667 26.9684 5.41667 27.5432Z" fill="white"/><path d="M17.5 42H50C55.5228 42 60 38.0413 60 33.1579C60 29.0106 56.7708 25.5302 52.4143 24.5752C52.4709 24.1272 52.5 23.6719 52.5 23.2105C52.5 16.4959 46.3439 11.0526 38.75 11.0526C32.4514 11.0526 27.142 14.7973 25.5139 19.9062C25.3437 19.8986 25.1724 19.8947 25 19.8947C19.4772 19.8947 15 23.8535 15 28.7368C15 28.8623 15.003 28.9872 15.0088 29.1114C12.0912 30.0196 10 32.4781 10 35.3684C10 39.0309 13.3579 42 17.5 42Z" fill="white"/></svg>'
	} 
}