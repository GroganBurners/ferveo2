module.exports = {
  winter : {
    id : 'winter-carousel',
    active: true,
    title : 'Winter Deals',
    text : "Winter is coming! Our prices will keep you warm inside, while the cold keeps coming on the outside!",
    image : '/dist/img/carousel/pic3.jpg',
    image_alt : 'Picture of a Gas Hob',
    buttons: [
    {location: "#gas", text: 'See Gas >'},
    {location: "#oil", text: 'See Oil >'},
    {location: "#repair", text: 'See Repairs >'}
    ]
  },
  autumn : {
    id : 'autumn-carousel',
    title : 'Autumn Deals',
    text : "Autumn is here! As the weather gets cold, we always recommend servicing your heating appliance!",
    image : '/dist/img/carousel/autumn.jpg',
    image_alt : 'Picture of Autumn Leaves',
    buttons: [
    {location: "#gas", text: 'Gas Services >'},
    {location: "#oil", text: 'Oil Services >'}
    ]
  }/*,
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
  }*/
};
