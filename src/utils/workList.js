import messengerPic from "../images/messenger.PNG";
import restaurantPic from "../images/restaurant.PNG";
import shopPic from "../images/shop.PNG";
import rpgPic from "../images/rpg.PNG";

const workList = 
[
    {
        image: messengerPic,
        link: "https://benskov.com/messenger/",
        title: "Messenger",
        desc: "This is a heavily Discord-inspired and simple messenger app I made with React, with a Java REST API for the back-end. <br /><br /> You can use the app to send/receive friend requests and send direct messages to people on your friend list. <br /><br /> I also set it up to use Websockets for real-time communication, and with Electron to make it available as a desktop app."
    },
    {
        image: restaurantPic,
        link: "https://benskov.com/restaurant/",
        title: "Restaurant",
        desc: "A generic restaurant website I made with Vue and TypeScript. I also set up a basic REST API in Node (with TypeScript as well) for the menu items."
    },
    {
        image: shopPic,
        link: "https://benskov.com/shop/",
        title: "Webshop",
        desc: "This is an older project I made for an assignment while I was studying CS. It's a basic webshop made with React and Java for the back-end. <br /><br /> I also used two external APIs - one for the products, and one for price conversion from USD to DKK.  <br /><br />In the app you can add products to your cart, buy them, and request refunds on completed orders (which are manually handled by an admin user)."
    },
    {
        image: rpgPic,
        link: "https://benskov.com/rpg/",
        title: "RPG",
        desc: "Inspired by a turn-based RPG played in a terminal I made almost 2 years ago, this project is still in the early stages. <br /><br /> My vision is that it will be a more fast-paced RPG with a lot more depth than the first game in terms of both combat and gearing. I play a lot of games with similar systems, so this is a project I am pretty passionate about. <br /><br /> It's also very ambitious (I have a lot of ideas for it), so I'm just working on it a little bit at a time."
    }
]

export default workList;