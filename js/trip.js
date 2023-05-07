const trips = [
  {
    title: "Flight Booking",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
    img: "john-mcarthur-703645-unsplash.png",
  },
  {
    title: "Hotel Resort Booking",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
    img: "shawn-lee-785068-unsplash.png",
  },
  {
    title: "Family Trip Planner",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
    img: "natalya-zaritskaya-144626-unsplash.png",
  },
  {
    title: "Cruise Tour",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
    img: "vidar-nordli-mathisen-559120-unsplash.png",
  },
  {
    title: "Fire Camp",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
    img: "mo-baghdadi-109634-unsplash.png",
  },
  {
    title: "Corporate Holidays",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
    img: "robson-hatsukami-morgan-178532-unsplash.png",
  },
];

const openModal = (tripInfo) => {
  const modal = document.getElementById("modal");
  const modalTitle = document.querySelector(".modal-title");
  const modalDesc = document.querySelector(".modal-desc");
  const modalImg = document.querySelector(".modal-img");
  const modalCloseBtn = document.querySelector(".modal-close-btn");

  modalCloseBtn.addEventListener("click", closeModal);

  modalTitle.textContent = "";
  modalDesc.textContent = "";
  modalImg.textContent = "";

  modalTitle.textContent = tripInfo.title;
  modalDesc.textContent = tripInfo.desc;

  const img = document.createElement("img");
  img.setAttribute("src", tripInfo.imageUrl);
  modalImg.appendChild(img);

  modal.classList.add("show");
};

const closeModal = () => {
  const modal = document.getElementById("modal");
  modal.classList.remove("show");
};

const renderTrips = (trips = []) => {
  const tripsContainer = document.querySelector(".trips-grid");
  tripsContainer.innerHTML = "";

  trips.slice(0, 6).forEach((trip) => {
    const tile = document.createElement("div");
    tile.classList.add("trip-tile");

    const tripImg = document.createElement("img");
    tripImg.setAttribute("src", "./imgs/" + trip.img);
    tripImg.classList.add("trip-img");

    tile.appendChild(tripImg);

    const title = document.createElement("h2");
    title.textContent = trip.title;
    title.classList.add("title-style");

    const desc = document.createElement("p");
    desc.textContent = trip.desc;

    desc.classList.add(".p-text");
    tile.appendChild(title);
    tile.appendChild(desc);

    tripsContainer.appendChild(tile);

    tripImg.addEventListener("click", () => {
      openModal({
        title: trip.title,
        desc: trip.desc,
        imageUrl: "./imgs/" + trip.img,
      });
    });
  });
};

renderTrips(trips);
