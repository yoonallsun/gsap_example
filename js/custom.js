// JavaScript
let title = 'GSAP Example'; // 타이틀 텍스트 저장
let displayTitle = document.getElementById('title'); // 타이틀 요소 아이디 저장
let i = 0; // i 변수 0으로 초기화

function typeWriter() {
  // typeWriter 함수 정의
  if (i < title.length) {
    // i가 title.length(12)보다 작으면 true 조건 실행
    displayTitle.innerHTML += title.charAt(i);
    i++;
    setTimeout(typeWriter, 300); // Wait for 300ms before next character
  }
}

typeWriter(); // typeWriter 함수 실행

document.addEventListener('DOMContentLoaded', function () {
  // html 파일 내 요소들이 모두 로드되었을 때 실행
  // luxy init
  // luxy.init({
  //   wrapperSpeed: 0.9,
  // });

  // ========= GSAP EFFECT =========
  gsap.registerPlugin(ScrollTrigger); // gsap scrollTrigger 플러그인 등록

  const tl = gsap.timeline(); // 타임라인인 등록되면 from, to와 같은 효과를 사용할 수 있다.
  tl.from(
    '.title .char',
    1,
    /* duration:1 */ {
      opacity: 0,
      yPercent: 130,
      stagger: 0.1,
      ease: 'expo.out',
    }
  );

  // scrollTrigger 공통 옵션
  const commonScrollTrigger = {
    header: {
      // 컨트롤러 등록(요소, 시작점, 끝나는점, 스크롤 동기화 여부 등)
      trigger: '.header', // 애니메이션 시작점과 끝나는 지점의 기준
      start: 'top top', // 첫번째는 요소의 시작 위치, 두번째는 화면의 시작 위치
      scrub: 1.8, // 스크롤 동기화 여부, true일 경우 스크롤 타이밍에 맞춰 애니메이션 실행, 시간 적용 시 지정된 시간 만큼 지연 후 애니메이션 실행
      // markers: true, // 디버깅을 위한 마커 표시
    },
    about: {
      trigger: '.about',
      start: 'top bottom',
      scrub: 1.8,
    },
    benefits: {
      trigger: '.benefits_lists',
      start: 'top bottom',
      scrub: 1.8,
    },
    work: {
      trigger: '.work',
      start: 'top bottom',
      scrub: 1.8,
    },
    service: {
      trigger: '.service',
      start: 'top bottom',
      scrub: 1.8,
    },
    footer: {
      trigger: 'footer',
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: 1.8,
    },
  };

  // square rotate animation
  // const titleSquare = document.querySelector('.title-square');
  const titleSquares = gsap.utils.toArray('.title-square');

  titleSquares.forEach((square) => {
    tl.from(square, {
      scrollTrigger: {
        trigger: square,
        start: 'top bottom',
        scrub: 1.8,
      },
      rotate: 760,
    });
  });

  function headerAnimation(xValue) {
    // 이미지 애니메이션
    tl.to(
      '.header-img',
      3,
      {
        clipPath: 'circle(141.2% at 0 100%)',
        ease: 'expo.out',
      },
      '2' // 화면 시작 후 2초 뒤에 애니메이션 실행
    );

    tl.to('.header-img', {
      scrollTrigger: commonScrollTrigger.header,
      xPercent: xValue, // x축으로 70%만큼 이동
    });

    tl.to('.header-img img', {
      scrollTrigger: commonScrollTrigger.header,
      scale: 1.3, // 사진 크기 1.3배
    });

    tl.to('.title-text-up', {
      scrollTrigger: commonScrollTrigger.header,
      yPercent: -150,
    });

    tl.to('.title-stroke', {
      scrollTrigger: commonScrollTrigger.header,
      xPercent: 50,
    });

    tl.to('.header-marq-wrapper', {
      scrollTrigger: commonScrollTrigger.header,
      xPercent: -50,
    });

    tl.to('.header-marq-star img', {
      scrollTrigger: commonScrollTrigger.header,
      rotate: -720,
    });
  }

  function aboutAnimation() {
    tl.from('.about-img', {
      scrollTrigger: commonScrollTrigger.about,
      yPercent: 80,
    });

    tl.from('.about-img img', {
      scrollTrigger: commonScrollTrigger.about,
      scale: 1.6,
    });

    tl.to('.about-text', {
      scrollTrigger: commonScrollTrigger.about,
      yPercent: 50,
    });
  }

  aboutAnimation();

  function benefitAnimation() {
    const benefits_nums = gsap.utils.toArray('.benefits_num');

    benefits_nums.forEach((num) => {
      const data_speed = num.getAttribute('data-speed');

      tl.from(num, {
        scrollTrigger: commonScrollTrigger.benefits,
        x: -data_speed,
      });
    });
  }

  benefitAnimation();

  function workAnimation() {
    const work_elmts = gsap.utils.toArray('.work-item, .work-item-num');
    console.log(work_elmts);

    work_elmts.forEach((num) => {
      const data_speed = num.getAttribute('data-speed');

      tl.from(num, {
        scrollTrigger: commonScrollTrigger.work,
        y: -data_speed,
      });
    });

    tl.from('.work-item-image img', {
      scrollTrigger: commonScrollTrigger.work,
      scale: 1.6,
    });
  }

  workAnimation();

  function serviceAnimation() {
    const arrow_elmts = gsap.utils.toArray('.service-arrow');

    arrow_elmts.forEach((num) => {
      const data_speed = num.getAttribute('data-speed');

      tl.from(num, {
        scrollTrigger: commonScrollTrigger.service,
        x: -data_speed,
      });
    });
  }

  serviceAnimation();

  function footerAnimation() {
    const letter_elmts = gsap.utils.toArray('.footer-wrapper span');

    letter_elmts.forEach((num) => {
      const data_speed = num.getAttribute('data-speed');

      tl.from(num, {
        scrollTrigger: commonScrollTrigger.footer,
        y: -data_speed,
      });
    });
  }

  footerAnimation();

  const wWidth = window.outerWidth;

  if (wWidth > 1300) {
    headerAnimation(-70);
  } else {
    headerAnimation(0);
  }

  //================================
});

const arr = ['홍콩반점', '오복성', '동보성']; // 배열

console.log(arr[0]);

const obj = {
  홍콩반점: {
    짜장면: 5000,
    짬뽕: 6000,
  },
  오복성: ['짜장면', '짬뽕'],
  동보성: ['짜장면', '짬뽕'],
};

console.log(obj.홍콩반점.짜장면);
