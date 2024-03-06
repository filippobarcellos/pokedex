import {
  AlertCircleIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CircleIcon,
  InfoIcon,
  LaptopIcon,
  MoonIcon,
  MoreHorizontalIcon,
  RulerIcon,
  SearchIcon,
  SunIcon,
  Volume2Icon,
  WeightIcon,
} from "lucide-react";

type IconProps = React.ComponentPropsWithoutRef<"svg">;

export const Icons = {
  Logo: (props: IconProps) => (
    <svg
      width="153"
      height="56"
      viewBox="0 0 153 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_235_917)">
        <path
          d="M84.9083 3.24249e-05L82.3539 1.31838L71.8453 13.3464L73.6923 15.5252L71.6863 16.5918L63.077 8.96719L63.0742 8.97238L60.515 10.3578L60.0231 11.2887L60.0668 9.20056L46.0705 13.6636L46.0708 13.671L43.4911 15.0526L43.8577 22.5236L46.2719 21.9143L46.4226 23.5729C44.3836 23.2838 42.2059 23.5741 40.1382 24.446C39.2394 24.837 38.4014 25.3174 37.6292 25.8762C38.1539 23.5588 38.0294 21.2744 37.1448 19.237C36.1001 16.8296 34.2618 14.8401 32.0077 13.5848C30.4275 12.5341 28.5439 11.8795 26.5732 11.6568C21.73 10.8118 15.9143 11.6793 10.1905 14.1133C8.08626 15.0093 6.12351 16.026 4.35316 17.1515L2.11553 18.568L2.11703 18.5709L0 20.7178L6.82823 32.2226L9.39697 31.122L20.387 56L30.8278 52.6382L33.3275 50.9613L33.3977 50.939L32.7459 48.4285L31.2049 42.5237C32.025 44.121 33.2519 45.2946 33.2519 45.2946C34.3613 46.377 35.7211 47.1647 37.2382 47.6068C40.1561 48.4449 43.4493 47.8986 46.2763 46.0993C46.9039 45.7029 47.7195 45.1049 48.3296 44.5722L48.6795 48.4234L58.5157 46.9711L61.1427 45.5967L61.1474 45.5961L61.1366 39.39L79.2092 48.3255L81.7767 46.9416L81.7636 46.9347V38.4528L81.7676 38.4737C83.8809 38.1598 85.6948 37.3791 87.4782 36.3092C87.5091 36.2909 87.5405 36.2701 87.5715 36.2513L86.7951 40.9625L97.9328 42.7416L100.072 41.5915L101.435 44.1056L103.451 42.9999L103.852 46.314L116.505 48.5537L119.033 47.1659L118.931 47.1363L119.041 47.1557L118.553 44.0698C119.426 43.9711 120.334 43.8539 121.116 43.5762C121.427 43.4697 121.864 43.2956 122.332 43.0903L121.83 47.5336L130.218 48.7392L130.299 52.149L139.002 54.9176L141.592 53.5473L141.585 53.5415L141.604 53.5475L153 19.2639L141.133 16.385L141.129 16.4031L139.269 17.3922L138.964 15.8871L125.02 12.8236V12.823L122.445 14.2103L122.531 21.259C121.081 21.2253 119.586 21.4758 118.135 22.0232C117.115 22.4125 116.168 22.9242 115.31 23.5464L113.206 10.2919H103.979L103.977 10.2824L103.959 10.2919H103.932L103.929 10.3075L101.382 11.6756L101.357 11.8161H93.9159L93.9021 11.9002L93.9033 11.8036L91.3704 13.1947L90.8421 16.4014C88.5756 14.2814 85.6202 13.1216 82.3987 13.0543L90.6861 8.6083L84.9074 0.000557663L84.9011 0.00771475L84.9083 3.24249e-05ZM84.4624 3.82325L87.5182 7.9665L78.7817 12.2893L78.1784 11.3742L84.4624 3.82325ZM106.376 12.8578H111.099L113.059 25.5739C110.565 28.4098 109.353 32.2221 110.186 35.7097C110.831 38.4135 112.496 40.5909 114.882 41.8627C115.122 41.9834 115.371 42.1028 115.628 42.206L115.877 43.8545L108.912 42.7927L107.058 30.5314L104.436 37.2953L100.509 28.8414H100.464L98.9126 38.6315L92.3676 37.4948L93.288 32.0317C93.535 31.7999 93.7781 31.5675 94.0172 31.3221L96.1385 29.1418L94.0766 27.2991L96.2673 14.2886H102.871L104.523 23.2951L106.376 12.8578ZM63.9963 13.0311L70.1207 18.853L61.5557 27.8595L69.6026 31.0364C70.5014 32.7366 71.8724 34.1813 73.5928 35.2456C75.2559 36.2702 77.1614 36.8759 79.177 37.0748L79.1782 42.835L58.7066 32.6154L58.7249 38.0117L58.576 38.1239L58.7255 38.1978L58.7428 43.323L53.4473 44.0439L53.0782 39.6301C54.7134 36.8316 55.3113 33.534 54.4579 30.51C53.9895 28.8478 53.1242 27.405 51.9483 26.2489L51.1887 17.2498L48.8106 17.8654L48.7057 15.5899L57.2098 13.0624L57.3999 16.2542L57.3882 16.2762L57.4011 16.2722L57.7313 21.817L63.9963 13.0311ZM22.7893 14.0762C23.9484 14.0785 25.0549 14.173 26.0961 14.3566C27.5695 14.5221 29.1291 14.9557 30.4952 15.8608C32.3694 16.9143 33.8031 18.4139 34.6298 20.3238C36.646 24.9743 33.2779 31.6667 26.6116 35.7732L30.0971 49.1222L24.4555 50.9211L12.8792 25.1161C12.2495 25.4465 11.0865 26.0005 10.0185 26.523L5.82656 19.4549C7.49357 18.3923 9.32177 17.4504 11.2664 16.6303C15.3596 14.8927 19.312 14.0694 22.7893 14.0762ZM81.9827 15.7003C85.2583 15.6614 88.0757 16.9988 89.9627 19.3099L81.438 28.3666C82.016 28.4754 82.9352 28.3241 83.6138 28.162C84.8361 27.8645 85.7332 27.3554 86.4729 26.7422C86.4654 26.7522 86.4572 26.7618 86.4502 26.7721C86.4894 26.7363 86.5276 26.705 86.568 26.6721L86.5639 26.6675C87.0149 26.282 87.4076 25.8581 87.7813 25.4205L91.188 28.4795L92.2201 29.4101C91.7727 29.872 91.3028 30.308 90.827 30.7064C88.8625 32.3283 86.6231 33.3857 83.6644 34.0992C83.0177 34.2471 82.3838 34.3547 81.7638 34.4091C77.0677 34.8698 73.1279 32.7177 71.6329 29.2267C71.4467 28.8039 71.303 28.3758 71.1945 27.919C70.503 24.9789 71.0936 22.3512 72.5488 20.2923C72.9679 19.6916 73.4652 19.144 74.0239 18.6509C75.3945 17.4302 77.1443 16.5427 79.1338 16.0655C80.1124 15.83 81.0657 15.7114 81.9829 15.7005L81.9827 15.7003ZM127.493 16.0478L136.59 17.8726L139.648 32.3503L142.785 19.3705L149.705 20.8967L139.959 50.3544L135.905 49.1488L135.11 48.5343L134.697 31.1056L132.263 44.8448L126.983 44.0036L127.361 40.048C130.809 37.1402 132.637 32.553 131.635 28.3961C131.195 26.5554 130.247 24.9526 128.91 23.7342L129.356 19.069L127.36 18.5386L127.493 16.0478ZM122.233 23.5698C123.947 23.5425 125.529 24.0242 126.781 24.9228C127.518 25.4442 128.13 26.1078 128.612 26.8791C128.977 27.4883 129.261 28.1597 129.433 28.893C130.047 31.4308 129.316 34.1489 127.712 36.3387C127.025 37.2721 126.188 38.1108 125.222 38.7976C124.5 39.3105 123.706 39.7463 122.852 40.0608C121.166 40.7018 119.49 40.835 117.996 40.5386C116.954 40.3335 116.005 39.9283 115.179 39.3417C113.865 38.393 112.898 36.9921 112.471 35.233C111.974 33.1197 112.432 30.8632 113.571 28.8865C114.139 27.9202 114.867 27.0121 115.729 26.2295C116.69 25.3692 117.805 24.6648 119.045 24.1887C120.127 23.7858 121.204 23.5863 122.233 23.5698ZM68.3556 24.357C68.242 25.5391 68.3005 26.7754 68.5486 28.0289L65.7011 26.9322L65.7014 26.9319L68.3556 24.357ZM45.0574 25.5551C46.6721 25.5707 48.1695 26.0299 49.394 26.8603C50.7385 27.7705 51.7638 29.139 52.2424 30.8539C52.3026 31.0358 52.3423 31.227 52.3826 31.414C52.5194 32.0674 52.5745 32.7373 52.5484 33.3975C52.4837 35.385 51.7525 37.3765 50.5283 39.0613C49.3638 40.6906 47.737 42.0354 45.823 42.8577C40.9287 44.9273 36.0345 42.8576 34.7269 38.2196C33.4601 33.7351 36.4075 28.3968 41.1496 26.3577C42.4746 25.7994 43.8015 25.543 45.0574 25.5551ZM48.317 44.4322L48.3179 44.4409C48.3046 44.4455 48.291 44.4504 48.2773 44.4552C48.2904 44.4474 48.3039 44.4401 48.317 44.4322L48.317 44.4322Z"
          fill="#1d4ed8"
        ></path>
        <path
          d="M30.1704 25.1959C29.6599 22.462 26.0784 20.9551 22.5274 22.8882L23.4427 26.0171L24.8826 30.6409L25.5395 32.7469C28.2036 31.0371 30.8812 28.9827 30.1704 25.1959ZM26.6433 29.3998C26.2555 28.1366 25.405 25.409 25.405 25.409C25.409 25.4214 25.2375 24.8253 25.0342 24.1429C25.7871 24.0086 26.5104 24.063 27.1055 24.3486C27.4382 24.5068 28.023 24.8757 28.1508 25.575C28.4449 27.1471 27.914 28.2692 26.6433 29.3998Z"
          fill="#1d4ed8"
        ></path>
        <path
          d="M83.9026 20.8582C81.9176 19.0407 78.8323 19.1819 77.0216 21.1614C75.2002 23.1376 75.3433 26.2188 77.3311 28.0289C77.4929 28.1848 77.6678 28.3123 77.8438 28.4375L84.2467 21.1999C84.1337 21.0821 84.0201 20.9648 83.9026 20.8582ZM77.8569 25.9491C77.2306 24.8015 77.3572 23.3444 78.2935 22.3232C79.194 21.3439 80.5737 21.0651 81.7501 21.5179L77.8569 25.9491Z"
          fill="#1d4ed8"
        ></path>
        <path
          d="M125.337 27.3698C125.391 27.5846 125.419 27.7971 125.412 28.0233C125.353 29.3755 124.08 30.4194 122.561 30.3485C121.044 30.2964 119.853 29.1471 119.912 27.7983C119.963 26.5339 121.092 25.5331 122.486 25.4691C122.221 25.4095 121.945 25.3784 121.656 25.3682C119.117 25.2588 117.041 27.0542 116.953 29.2893C116.856 31.6797 118.775 33.6287 121.275 33.7369C123.818 33.8384 125.893 32.0368 125.994 29.6577C126.023 28.8331 125.779 28.0425 125.337 27.3698Z"
          fill="#1d4ed8"
        ></path>
        <path
          d="M48.2918 30.0997C48.2918 31.4576 47.0546 32.5457 45.5392 32.5457C44.0198 32.5457 42.7871 31.457 42.7871 30.0997C42.7871 28.8342 43.8716 27.7909 45.2615 27.6696C44.9952 27.6214 44.7181 27.5937 44.432 27.5937C41.8929 27.5937 39.8897 29.4735 39.8897 31.712C39.8897 34.1008 41.8934 35.9744 44.3911 35.9744C46.9325 35.9744 48.9339 34.0996 48.9339 31.712C48.9339 30.8852 48.6603 30.106 48.1896 29.4644C48.2532 29.6577 48.2918 29.8719 48.2918 30.0997Z"
          fill="#1d4ed8"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_235_917">
          <rect width="153" height="56" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  ),
  Pokeball: (props: IconProps) => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.0845 2.57792C23.1539 2.57792 28.9533 8.0028 29.5413 14.9169H21.1331C20.6327 12.5392 18.5243 10.7497 15.9969 10.7497C13.4694 10.7497 11.3611 12.5392 10.8606 14.9169H2.62757C3.2219 8.0028 9.02131 2.57792 16.0845 2.57792ZM18.8935 14.9169C19.0186 15.2548 19.0874 15.6177 19.0874 15.9993H19.0936C19.0936 16.381 19.0248 16.7439 18.8997 17.0818C18.4618 18.2581 17.3294 19.0903 16.0031 19.0903C14.6768 19.0903 13.5445 18.2519 13.1065 17.0818C12.9814 16.7439 12.9126 16.381 12.9126 15.9993H12.9064C12.9064 15.6177 12.9752 15.2548 13.1003 14.9169C13.5382 13.7405 14.6706 12.9083 15.9969 12.9083C17.3232 12.9083 18.4555 13.7468 18.8935 14.9169ZM15.9093 29.427C8.83988 29.427 3.04047 24.0021 2.45239 17.0881H10.8606C11.3611 19.4658 13.4694 21.2553 15.9969 21.2553C18.5243 21.2553 20.6327 19.4658 21.1331 17.0881H29.3724C28.7781 23.9959 22.9787 29.427 15.9093 29.427ZM15.9969 0C7.16325 0 0 7.16435 0 15.9993C0 24.8343 7.16325 31.9987 15.9969 31.9987C24.8305 31.9987 32 24.8406 32 15.9993C32 7.1581 24.8368 0 15.9969 0Z"
        fill="white"
      />
    </svg>
  ),
  ChevronLeft: ChevronLeftIcon,
  ChevronRight: ChevronRightIcon,
  MoreHorizontal: MoreHorizontalIcon,
  Check: CheckIcon,
  Circle: CircleIcon,
  Moon: MoonIcon,
  Sun: SunIcon,
  Laptop: LaptopIcon,
  Search: SearchIcon,
  Weight: WeightIcon,
  Length: RulerIcon,
  Info: InfoIcon,
  Volume2: Volume2Icon,
  Alert: AlertCircleIcon,
};
