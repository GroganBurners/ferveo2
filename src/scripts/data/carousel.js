module.exports = {
  autumn : {
    id : 'autumn-carousel',
    active: true,
    title : 'Autumn Deals',
    text : "Autumn is here! As the weather gets cold, we always recommend servicing your heating appliance!",
    image : '/img/carousel/autumn.jpg',
    image_alt : 'Picture of Autumn Leaves',
    buttons: [
    {location: "#gas", text: 'Gas Services >'},
    {location: "#oil", text: 'Oil Services >'}
    ]
  },
  winter : {
    id : 'winter-carousel',
    title : 'Winter Deals',
    text : "Winter is coming! Our prices will keep you warm inside, while the cold keeps coming on the outside!",
    image : '/img/carousel/pic3.jpg',
    image_alt : 'Picture of a Gas Hob',
    buttons: [
    {location: "#gas", text: 'See Gas >'},
    {location: "#oil", text: 'See Oil >'},
    {location: "#repair", text: 'See Repairs >'}
    ]
  }
  /*,
  summer : {
    id : 'summer-carousel',
    active: true,
    title : 'Summer Offers',
    text : "Summer is here! We've got discounts lined up for you while the weather is good.",
    image : '/img/carousel/pic.jpg',
    image_alt : 'Picture of a Gas Hob',
    buttons: [
    {location: "#summer", text: 'See Offers >'},
    ]
  }*/
};
