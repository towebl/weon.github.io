const product = [
    {
        id: 0,
        image: 'images/groove/groove1.jpeg',
        title: 'soweto naledi',
        price: 80.00,
    },
    {
        id: 1,
        image: 'images/groove/groove2.jpeg',
        title: 'johannesburg, maboneng',
        price: 80.00,
    },
    {
        id: 2,
        image: 'images/groove/groove3.jpg',
        title: 'petoria, mahuba',
        price: 80.00,
    },
    {
        id: 3,
        image: 'images/groove/groove4.jpg',
        title: 'johannesburg, oxford',
        price: 80.00,
    },
    {
        id: 4,
        image: 'images/groove/groove5.jpg',
        title: 'soweto pimville',
        price: 80.00,
    },
    {
        id: 5,
        image: 'images/groove/groove6.jpg',
        title: 'vaal, ps',
        price: 80.00,
    },
    {
        id: 6,
        image: 'images/groove/groove7.jpg',
        title: 'roderpoort florida',
        price: 80.00,
    },
    {
        id: 7,
        image: 'images/groove/groove8.jpg',
        title: 'vaal, famer',
        price: 80.00,
    },
    {
        id: 8,
        image: 'images/groove/groove9.jpg',
        title: 'soweto zola',
        price: 80.00,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return (
        `<div class="box">
            <div class="img-box">
                <img class="images" src=${image} alt="">
            </div>
            <div class="bottom">
                <p>${title}</p>
                <h2>R ${price}</h2>` +
                "<button onclick='addtocart("+(i++)+")'>Add to cart</button>" +
            `</div>
        </div>`
    )
}).join('');

var cart = [];

function addtocart(a) {
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a) {
    let j = 0, total=0;
    document.getElementById('count').innerHTML=cart.length;
    if(cart.length==0) {
        document.getElementById('cartitem').innerHTML = 'Your cart is empty';
        document.getElementById('total').innerHTML = "R "+0+".00";
    }
    else {
        document.getElementById('cartitem').innerHTML = cart.map((items) =>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById('total').innerHTML = "R "+total+".00";
            return (
                `<div class="cart-item">
                    <div class="row-img">
                        <img class="rowing" src=${image}>
                    </div>
                    <p style="font-size:12px;">${title}</p>
                    <h2 style="font-size: 15px;">R ${price}</h2>` +
                    "<i class='fas fa-trash-alt' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}

