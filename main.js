// Responsive Y-Axis LocationDiv
const header = document.querySelector("header")
const headerHeight = getComputedStyle(header).height
const locationDiv = document.querySelector(".locate_div")

locationDiv.style.top = headerHeight


//  Responsive Functionality
const toggleBtn = document.querySelector(".toggle_btn")
const nav = document.querySelector("nav")
let toggled = false

toggleBtn.addEventListener("click", () => {
    toggled = !toggled
    toggleBtn.classList.toggle("active", toggled)
    nav.classList.toggle("active", toggled)
})

const tablet = document.querySelector(".tablets")
const tabs = document.querySelectorAll(".tab")
const movable = document.querySelector(".movable")
const tabWidth = getComputedStyle(tabs[0]).width
const tabHeight = getComputedStyle(tabs[0]).height

movable.style.width = tabWidth
movable.style.height = tabHeight

tabs.forEach((tab, i) => {

    tab.addEventListener("click", (e) => {
        let tabWidth = getComputedStyle(tabs[i]).width
        let tabHeight = getComputedStyle(tabs[i]).height

        movable.style.width = tabWidth
        movable.style.height = tabHeight
        

        movable.style.transform = `translateX(calc(100% * ${i}))`
    })
})

// PAGE IDENTIFIER

const locArr = location.pathname.split("/")
const loc = locArr[locArr.length - 1]
console.log(loc)
console.log(locArr)


if (loc == "index.html" || loc == "") {

    
    // BEGIN OFFER LIST
    const listContainer = document.querySelector(".offers_list .list")
    const offerImages = ['bucket.webp', 'jacks.webp', 'nuggets.webp', 'tenders.jpg', 'nuggets.webp', 'tenders.jpg', 'nuggets.webp', 'tenders.jpg', 'nuggets.webp', 'tenders.jpg']
    
    
    offerImages.forEach((img, i) => {
        createCard(img, listContainer)
    })
    
    const cards = document.querySelectorAll(".card")
    const cardFlexBasis = getComputedStyle(cards[0]).flexBasis
    const cardWidth = parseInt(cardFlexBasis.substring(cardFlexBasis.indexOf("(") + 1, cardFlexBasis.indexOf("%")))
    const slideNum = Math.ceil(cards.length / parseInt((100 / cardWidth)))
    let gap = getComputedStyle(listContainer).gap
    
    
    console.log(typeof cardWidth)
    console.log(slideNum)
    const sliderBtns = document.querySelector(".slider_btns")
    
    for (i = 1; i <= slideNum; i++) {
        createCarousel(sliderBtns)
    }
    
    const carousels = document.querySelectorAll(".carousel")
    
    carousels[0].classList.add("active")
    
    carousels.forEach((car, i) => {
    
        car.addEventListener("click", () => {toggleCarousel(i, carousels, listContainer, slideNum, cardWidth, gap)})
    
    })

}

if (loc == "menu.html") {
    
    // BEGIN MENU PAGE
    
    const listArr = [
            [
                {
                    loc: "combos",
                    img: 'chicken_sandwich-combo.avif',
                    label: "Chicken Sandwich Combo",
                    price: "$12.99"
                },
                {
                    loc: "combos",
                    img: '8-piece.png',
                    label: "8 Piece Combo",
                    price: "$8.99"
                },
                {
                    loc: "combos",
                    img: '5-piece.avif',
                    label: "5 piece Combo",
                    price: "$5.99"
                },
                {
                    loc: "combos",
                    img: '4-piece.avif',
                    label: "4 piece Combo",
                    price: "$5.99"
                },
                {
                    loc: "combos",
                    img: 'canes.avif',
                    label: "Canes 4 Finger Combo",
                    price: "$12.99"
                }
            ],
            [
                {
                    loc: "sandwich",
                    img: 'beast_buffalo.jpg',
                    label: "Beast Buffalo",
                    price: "$12.99"
                },
                {
                    loc: "sandwich",
                    img: 'chicken_bacon_swiss.jpg',
                    label: "Chicken Bacon Swiss Sandwich",
                    price: "$8.99"
                },
                {
                    loc: "sandwich",
                    img: 'grilled_buffalo.webp',
                    label: "Grilled Buffalo Sandwich",
                    price: "$8.99"
                },
                {
                    loc: "sandwich",
                    img: 'homemade_style.webp',
                    label: "Homemade Style Sandwich",
                    price: "$5.99"
                },
                {
                    loc: "sandwich",
                    img: 'ohio_shredded.jpg',
                    label: "Ohio Shredded Chicken Sandwich",
                    price: "$12.99"
                },
                {
                    loc: "sandwich",
                    img: 'spicy_mayo.jpg',
                    label: "Spicy Mayo Sandwich",
                    price: "$8.99"
                }
            ],
            [
                {
                    loc: "tenders",
                    img: '4-piece-buffalo.jpg',
                    label: "4 Piece Buffalo Tenders",
                    price: "$5.99"
                },
                {
                    loc: "tenders",
                    img: 'cornflake-tenders.jpg',
                    label: "Cornflake Tenders",
                    price: "$6.99"
                },
                {
                    loc: "tenders",
                    img: 'hot-honey.jpg',
                    label: "Hot Honey Tenders",
                    price: "$6.99"
                },
                {
                    loc: "tenders",
                    img: 'parmesean.jpg',
                    label: "Parmesan Tenders",
                    price: "$6.99"
                }
            ],
            [
                {
                    loc: "dessert",
                    img: 'cherry-porfait.jpg',
                    label: "Cherry Porfiat",
                    price: "$4.99"
                },
                {
                    loc: "dessert",
                    img: 'jamocha_shake.jpg',
                    label: "Jamocha Shake",
                    price: "$5.99"
                },
                {
                    loc: "dessert",
                    img: 'monte_bun.jpg',
                    label: "Monte Bun",
                    price: "$4.99"
                },
                {
                    loc: "dessert",
                    img: 'oreo_kreme.jpg',
                    label: "Oreo Kreme",
                    price: "$4.99"
                }
            ]
        ]

    const menuContainer = document.querySelector(".menu_list")
    const menuLists = document.querySelectorAll(".menu_list .list")
    const options = document.querySelectorAll(".options li")

    listArr.forEach((list, ind) => {


        list.forEach(el => {
            
            const item = document.createElement("div")
            item.className = "item"
            item.innerHTML = `
                <div class="top" style="background-image: url(./Images/${el.loc}/${el.img});"></div>
                <div class="bottom">
                    <h3 class="title">${el.label}</h3>
                    <p class="price">${el.price}</p>
                </div>
            `
    
            menuLists[ind].appendChild(item)

        })
    })

    const menuListHeights = []
    menuLists.forEach(list => {
        const listHeght = getComputedStyle(list).height
        const conv = parseInt(listHeght)

        menuListHeights.push(conv)
    })

    const maxHeightList = Math.max(...menuListHeights)

    menuContainer.style.height = `${maxHeightList}px`
    menuLists[0].classList.add("active")

    options.forEach((o, ind) => {
        o.addEventListener("click", () => {
            
            menuLists.forEach((list, i) => {
                if (ind != i && list.classList.contains("active")) {
                    list.classList.remove("active")
                } else if (ind == i) {
                    list.classList.add("active")
                }
            })

        })
    })


    // END MENU PAGE

}

if (loc == "catering.html") {

    const cateringOptEl = document.querySelector(".catering_options")

    const cateringArr = [
                    {
                        img: '30-count-nuggets.webp',
                        label: "30 Count Nuggets",
                        price: "$8.99"
                    },
                    {
                        img: 'bucket-catering.webp',
                        label: "2 Bucket Cater",
                        price: "$18.99"
                    },
                    {
                        img: 'daves-catering.jpg',
                        label: "Daves Chicken Slider Catering",
                        price: "$13.99"
                    },
                    {
                        img: 'hot-chicken.avif',
                        label: "Hot Chicken Deluxe Cater",
                        price: "$15.99"
                    },
                    {
                        img: 'star-bird.jpg',
                        label: "Stars Bird",
                        price: "$13.99"
                    }
                ]

                cateringArr.forEach(opt => {
                    
                    const option = document.createElement("div")
                    option.className = "option"
                    option.innerHTML = `
                        <div class="top" style="background-image: url(./Images/catering/${opt.img})"></div>
                        <div class="bottom">
                            <h3 class="label">${opt.label}</h3>
                            <p class="price">${opt.price}</p>
                            <a class="btn">Add</a>
                        </div>
                    `

                    cateringOptEl.appendChild(option)
                })


}



function toggleCarousel(i, carousels, listContainer, slideNum, cardWidth, gap) {

    let currentCarouselIndex = [...carousels].findIndex(car => {
        return car.classList.contains("active")
    })

    let currentCarousel = carousels[currentCarouselIndex]

    console.log(currentCarousel)
    if (currentCarousel.classList.contains("active")) {
        currentCarousel.classList.remove("active")
    }

    let dividerNum
    if (i > slideNum - 1) {
        index = 0
    }

    currentCarousel = carousels[i]

    currentCarousel.classList.add("active")

    switch(cardWidth) {
        case 33:
            dividerNum = 1.2
        break;
        case 50:
            dividerNum = 1.2
        break;
        case 100:
            dividerNum = 2
        break;
    }

    listContainer.style.transform = `translateX(calc(-${100 * i}% - (${(parseInt(gap) * i) + 0.5}px))`
}

function createCarousel(sliderBtns) {

    const carousel = document.createElement("div")
    carousel.className = "carousel"
    carousel.innerHTML = `<div class="expand"></div>`

    sliderBtns.appendChild(carousel)

}

function createCard(img, parentEl) {

    const card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `
        <div class="top" style="background-image: url(./Images/${img});"></div>
        <div class="bottom">
            <p class="desc">Bucket with Tasty Chicken for all</p>
            <p class="price">$18.99</p>
        </div>
    `

    parentEl.appendChild(card)



}