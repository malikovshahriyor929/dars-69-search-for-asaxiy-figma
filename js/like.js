// let like_product = document.querySelector(".like_product");
// let like_p = document.querySelector(".like_p");

// let like = JSON.parse(localStorage.getItem("like")) || [];
// function getLike(data) {
//   data.forEach((value) => {
//     let liked = document.createElement("div");
//     liked.innerHTML = `
//         <div class="rounded-[20px] bg-white p-3 cc relative">
//       <i id=${
//         value.id
//       } class="like_btn text-red-500 absolute top-3 left-4 fa-solid fa-heart"></i>
//       <div class="flex items-center flex-col gap-5">
//         <img class="h-[160px] object-cover im" src="${value.img}" alt="" />
//       </div>
//       <div class="flex flex-col gap-2">
//         <h2
//           class="text-[14px] font-medium text-[#141821] hover:text-primary duration-500"
//         >
//           ${value.name}
//         </h2>
//         <div class="flex items-center justify-between gap-4">
//           <img class="w-[60px]" src="./assets/svg/star.svg" alt="" />
//           <p class="text-[12px] text-[#c2c6d1] font-medium">
//             ${value.have} отзывов
//           </p>
//         </div>
//         <p class="text-[12px] text-[#94a3b8] line-through">
//           ${value.old_price?.toLocaleString()} сум
//         </p>
//         <p class="text-[18px] font-bold text-primary">
//           ${value.price?.toLocaleString()} сум
//         </p>
//         <p
//           class="font-medium text-[#fe7300] border-[1.5px] py-0.5 px-2 rounded-lg border-[#fe7300]"
//         >
//           ${value.month_payment?.toLocaleString()} сум x ${value.month} мес
//         </p>
//         <div class="flex items-center gap-1">
//           <button
//             class="rounded-xl bg-primary py-1.5 px-4 text-white w-full text-[14px]"
//           >
//             Купить в один клик
//           </button>
//           <button
//             id=${value.id}
//             class="cart_btn rounded-xl bg-[#00bfaf] py-2 px-4"
//           >
//             <img src="./assets/svg/cart-single.svg.svg" alt="" />
//           </button>
//         </div>
//       </div>
//     </div>
//         `;
//     like_product.append(liked);
//   });
//   like_p.innerHTML = data.length;
// }
// like_product.addEventListener("click", (e) => {
//   let id = e.target.id;
//   if (e.target.classList.contains("like_btn")) {
//     deleteLike(id);
//     getLike(like);
//     like_p.innerHTML = like.length;
//   }
// });

// function deleteLike(id) {
//   like = like.map((value) => value.id !== +id);
//   localStorage.setItem("like", JSON.stringify(like));
// }
// getLike(like);
