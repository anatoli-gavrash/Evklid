function addClass(collection, targetChild, name) {
  for (const collectionItem of collection) {
    if (collectionItem === targetChild) collectionItem.classList.add(name);
    else if (collectionItem.children[0] && collectionItem.children[0] === targetChild) {
      collectionItem.children[0].classList.add(name);
    }
  }
}

function deleteClass(collection, name) {
  for (const collectionItem of collection) {
    if (collectionItem.classList.contains(name)) {
      collectionItem.classList.remove(name);
    } else if (collectionItem.children[0] && collectionItem.children[0].classList.contains(name)) {
      collectionItem.children[0].classList.remove(name);
    }
  }
}

function getCollectionChildIndex(collection, child) {
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] === child) return i;
    else if (collection[i].children[0] && collection[i].children[0] === child) {
      return i;
    }
  }
}

function search() {
  const search = document.querySelector('.header__search');
  const searchField = document.querySelector('.header__search-field');
  const searchMagnifier = document.querySelector('.header__button-magnifier');
  const searchButtonClose = document.querySelector('.header__button-close');

  searchMagnifier.addEventListener('click', evnt => {
    if (search.classList.contains('box-shadow-none')) {
      search.classList.remove('box-shadow-none');
      searchField.classList.remove('display-none');
      searchButtonClose.classList.remove('display-none');
      evnt.preventDefault();
    }
  });
  
  searchButtonClose.addEventListener('click', evnt => {
    if (!search.classList.contains('box-shadow-none')) {
      search.classList.add('box-shadow-none');
      searchField.classList.add('display-none');
      searchButtonClose.classList.add('display-none');
    }
  });
}

function slider() {
  let currentSlideNumber = 0;
  const slider = document.querySelector('.advertising__slider-list');
  const sliderNav = document.querySelector('.advertising__slider-nav-list');
  const sliderNavChildren = sliderNav.children;
  const slidePictures = [
    './images/slides/slide-1.jpg',
    './images/slides/slide-2.jpg',
    './images/slides/slide-3.jpg'
  ];

  function addSlidesOnPage(slidePictures) {  
    slidePictures.forEach((slide, index) => {
      const newLi = document.createElement('li');
      const newImg = document.createElement('img');
      const newNavLi = document.createElement('li');
      const newNavButton = document.createElement('button');
      
      newLi.className = 'advertising__slider-list-item';
      newImg.className = 'advertising__slider-image';
      newImg.src = slide;
      newLi.appendChild(newImg);
      slider.appendChild(newLi);
      
      newNavLi.className = 'advertising__slider-nav-list-item';
      newNavButton.className = 'advertising__slider-nav-button';
      if (index === 0) newNavButton.classList.add('advertising__slider-nav-button--active');
      newNavLi.appendChild(newNavButton);
      sliderNav.appendChild(newNavLi);
    });
  }

  function moveSlide(slideNumber) {
    slider.style.transform = `translateX(-${slideNumber * 100}%)`;
  }

  function autoMoveSlide(slideNumber, maxSlides) {
    if (slideNumber >= 0 && slideNumber < maxSlides - 1) {
      moveSlide(slideNumber + 1);
      currentSlideNumber++;
      deleteClass(sliderNavChildren, 'advertising__slider-nav-button--active');
      sliderNavChildren[slideNumber + 1].firstChild.classList.add('advertising__slider-nav-button--active');
    } else if (slideNumber >= maxSlides - 1) {
      moveSlide(0);
      currentSlideNumber = 0;
      deleteClass(sliderNavChildren, 'advertising__slider-nav-button--active');
      sliderNavChildren[0].firstChild.classList.add('advertising__slider-nav-button--active');
    }
  }

  let sliderIntervalHandler = setInterval(() => autoMoveSlide(currentSlideNumber, slidePictures.length), 10000);

  sliderNav.addEventListener('click', evnt => {
    if (evnt.target.classList.contains('advertising__slider-nav-button')) {
      deleteClass(sliderNavChildren, 'advertising__slider-nav-button--active');
      addClass(sliderNavChildren, evnt.target, 'advertising__slider-nav-button--active');
      
      if (currentSlideNumber !== getCollectionChildIndex(sliderNavChildren, evnt.target)) {
        currentSlideNumber = getCollectionChildIndex(sliderNavChildren, evnt.target);
        moveSlide(currentSlideNumber);
        clearInterval(sliderIntervalHandler);
        sliderIntervalHandler = setInterval(() => autoMoveSlide(currentSlideNumber, slidePictures.length), 10000);
      }
    }
  });

  addSlidesOnPage(slidePictures);
}

function stages() {
  const stepsList = document.querySelector('.stages__steps-list');
  const stepsListChildren = stepsList.children;
  const stepsTextData = [
    {
      title: 'Проводим консультацию',
      text: [
        'Влечёт за собой процесс внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями.',
        'А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований. Кстати, стремящиеся вытеснить традиционное производство, нанотехнологии освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, призваны к ответу.'
      ],
      image: 'stage-1.jpg'
    }, {
      title: 'Составляем смету',
      text: ['Внедрения и модернизации приоритизации разума над эмоциями. В рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с зарубежных источников, современные исследования подвергнуты целой серии независимых исследований.'],
      image: 'stage-2.jpg'
    }, {
      title: 'Привлекаем подрядчиков',
      text: ['Идейные соображения высшего порядка, а также новая модель организационной деятельности требует анализа прогресса профессионального сообщества. Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнить важные задания по разработке прогресса профессионального сообщества.'],
      image: 'stage-3.jpg'
    }, {
      title: 'Инспектируем все этапы работ',
      text: ['Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от дальнейших направлений развития. Разнообразный и богатый опыт говорит нам, что новая модель организационной деятельности говорит о возможностях системы массового участия. Принимая во внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет.'],
      image: 'stage-4.jpg'
    }
  ];
  
  function addStepsOnPage(data) {
    for (i = 0; i < data.length; i++) {
      const newLi = document.createElement('li');
      const newButton = document.createElement('button');
        
      newLi.className = 'stages__steps-item';
      newButton.className = 'stages__steps-button';
      if (i === 0) newButton.classList.add('stages__steps-button--active');
      newButton.innerText = `${i + 1} шаг`;
      newLi.appendChild(newButton);
      stepsList.appendChild(newLi);
    }

    addTextContentOnPage(data);
    addImageOnPage(data);
  }

  function addTextContentOnPage(data, stepIndex = 0) {
    const stagesDescriptionTitle = document.querySelector('.stages__description-title');
    const stagesDescriptionText = document.querySelector('.stages__description-text');
    const newBr = document.createElement('br');

    stagesDescriptionTitle.innerText = data[stepIndex].title;

    if (data[stepIndex].text.length > 1) {
      stagesDescriptionText.innerText = '';
      data[stepIndex].text.forEach((text, index) => {
        stagesDescriptionText.innerText += text;
        if (index !== data[stepIndex].text.length - 1) stagesDescriptionText.appendChild(newBr);
      });
    } else {
      stagesDescriptionText.innerText = data[stepIndex].text[0];
    }
  };

  function addImageOnPage(data, imageIndex = 0) {
    const stagesImage = document.querySelector('.stages__image');
    const pathToImages = './images/stages/1920/';
    stagesImage.src = pathToImages + data[imageIndex].image;
  }
  addStepsOnPage(stepsTextData);

  stepsList.addEventListener('click', evnt => {
    if (evnt.target.classList.contains('stages__steps-button')) {
      deleteClass(stepsListChildren, 'stages__steps-button--active');
      addClass(stepsListChildren, evnt.target, 'stages__steps-button--active');
      addTextContentOnPage(stepsTextData, getCollectionChildIndex(stepsListChildren, evnt.target));
      addImageOnPage(stepsTextData, getCollectionChildIndex(stepsListChildren, evnt.target));
    }
  });
}

function accordion() {
  const accordionList = document.querySelector('.faq__accordion-list');
  
  accordionList.addEventListener('click', evnt => {
    const targetClasses = evnt.target.classList;
    const targetParentClasses = evnt.target.parentElement.classList;
    const targetGrandparentClasses = evnt.target.parentElement.parentElement.classList;

    if (targetClasses.contains('faq__accordion-wrapper')) {
      targetParentClasses.add('faq__accordion-item--active');
    } else if (targetClasses.contains('faq__accordion-title')) {
      targetGrandparentClasses.add('faq__accordion-item--active');
    } else if (targetClasses.contains('faq__accordion-button')) {
      if (targetGrandparentClasses.contains('faq__accordion-item--active')) {
        targetGrandparentClasses.remove('faq__accordion-item--active');
      } else {
        targetGrandparentClasses.add('faq__accordion-item--active');
      }
    }
  });
}

search();
slider();
stages();
accordion();