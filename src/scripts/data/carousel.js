module.exports = {  
  summer : {
    id : 'summer-carousel',
    active: true,
    title : 'Summer Offers',
    text : "Summer is here! We've got discounts lined up for you while the weather is good.",
    image : '/dist/img/carousel/pic.jpg',
    image_alt : 'Picture of a Gas Hob',
    buttons: [
    {location: "#summer", text: 'See Offers >'},
    ]
  },
  winter : {
    id : 'winter-carousel',
    title : 'Winter Deals',
    text : "Winter is here! Our prices will keep you warm inside, while the cold keeps coming on the outside!",
    image : '/dist/img/carousel/pic3.jpg',
    image_alt : 'Picture of a Gas Hob',
    buttons: [
    {location: "#gas", text: 'See Gas Offers >'},
    {location: "#oil", text: 'See Oil Offers >'}
    ]
  }
};
