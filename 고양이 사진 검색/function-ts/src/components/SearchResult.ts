import { api } from '../shared/api';
import { $ } from '../shared/dom';
import { Cat } from '../shared/interface';
import { renderImageInfo } from './ImageInfo';

const SEARCH_RESULT_TEMPLATE = `<section class="search-result"></section>`;

export const renderSearhResult = (cats?: Cat[]) => {
  $('#app')?.insertAdjacentHTML('beforeend', SEARCH_RESULT_TEMPLATE);
  const $searchResult = $('.search-result') as HTMLDivElement;

  if (!cats) {
    $searchResult.innerHTML = `
      <div class="no-result">
        <span>검색 결과가 없습니다.</span>
      </div>
    `;

    return;
  }

  $searchResult.innerHTML = cats
    .map(
      (cat) => `
          <div class="item">
            <img src=${cat.url} alt=${cat.name} class="lazy"/>
            <span class="cat-name hidden">${cat.name}</span>
          </div>
        `
    )
    .join('');

  $searchResult.querySelectorAll('.item').forEach(($item, index) => {
    $item.addEventListener('click', async () => {
      const cat = await api.fetchCatDetails(cats[index].id);
      console.log(cat);
      renderImageInfo(cat);
    });
    $item.addEventListener('mouseover', () => {});
    $item.addEventListener('mouseleave', () => {});
  });

  //       $item.addEventListener('click', () => {
  //         this.onClick(this.data[index]);
  //       });
  //       $item.addEventListener('mouseover', () => {
  //         const $catName = $item.querySelector('.cat-name');
  //         $catName.style.visibility = 'visible';
  //       });
  //       $item.addEventListener('mouseleave', () => {
  //         const $catName = $item.querySelector('.cat-name');
  //         $catName.style.visibility = 'hidden';
  //       });
};

// async (image) => {
//   const { data } = await api.fetchCatDetails(image.id);
//   this.$imageInfo.setState({
//     visible: true,
//     image: data,
//   });
// },
// export default class SearchResult {
//   $searchResult = null;
//   data = null;
//   onClick = null;

//   constructor({ $target, initialData, onClick }) {
//     this.$searchResult = document.createElement('section');
//     this.$searchResult.className = 'SearchResult';
//     $target.append(this.$searchResult);

//     this.data = initialData;
//     this.onClick = onClick;

//     this.render();
//     this.initiateObserver();
//   }

//   setState(nextData) {
//     this.data = nextData;
//     this.render();
//     this.initiateObserver();
//   }

//   initiateObserver() {
//     const options = { threshold: 0 };
//     const callback = (entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           observer.unobserve(entry.target);
//           entry.target.src = entry.target.dataset.src;
//         }
//       });
//     };
//     const io = new IntersectionObserver(callback, options);
//     const lazyImages = Array.from(document.getElementsByClassName('lazy'));
//     lazyImages.forEach((image) => {
//       io.observe(image);
//     });
//   }

//   render() {
//     if (!this.data) {
//       return;
//     }
//     if (this.data.length === 0) {
//       this.$searchResult.innerHTML = '검색 결과가 없습니다.';
//       return;
//     }

//     this.$searchResult.innerHTML = this.data
//       .map(
//         (cat) => `
//           <div class="item">
//             <img src=${cat.url} alt=${cat.name} class="lazy"/>
//             <span class="cat-name hidden">${cat.name}</span>
//           </div>
//         `
//       )
//       .join('');

//     this.$searchResult.querySelectorAll('.item').forEach(($item, index) => {
//       $item.addEventListener('click', () => {
//         this.onClick(this.data[index]);
//       });
//       $item.addEventListener('mouseover', () => {
//         const $catName = $item.querySelector('.cat-name');
//         $catName.style.visibility = 'visible';
//       });
//       $item.addEventListener('mouseleave', () => {
//         const $catName = $item.querySelector('.cat-name');
//         $catName.style.visibility = 'hidden';
//       });
//     });
//   }
// }

// // 랜덤 고양이 배너 섹션 추가
// // 현재 검색 결과 목록 위에 배너 형태의 랜덤 고양이 섹션을 추가합니다.

// // 검색 결과가 많더라도 화면에 5개만 노출하며 각 이미지는 좌, 우 슬라이드 이동 버튼을 갖습니다.
// // 좌, 우 버튼을 클릭하면, 현재 노출된 이미지는 사라지고 이전 또는 다음 이미지를 보여줍니다.(트렌지션은 선택)
