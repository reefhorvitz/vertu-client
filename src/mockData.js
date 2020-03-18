import AppartmentImage from './static/images/appartment.jpg'
import SellerImage from './static/images/cs.jpg'
export default {
    pricePerMonth: 100, bathroomNum:2, bedroomNum:2, size:"100m",
    images: [AppartmentImage, AppartmentImage, AppartmentImage],
    description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet',
    sellerName: "Reef Horvitz", email: "reefhorvitz@gmail.com", phone:"+972546203986", sellerImg: SellerImage,
    type:"Multi Family", coolingData:"No Data", heatingData:"No Data", parkingData:"No Data", yearBuilt:1999,
    facilities:["Swimming Pool", "Gym"], amenities:["WIFI"], otherDetails:["Large Dogs Allowed", "Bicycle"],
    steps:["Accompany", "Reason", "Habit", "Location"],
    questions: [{question:"Who are you moving with?", answers:["Bae", "Reef", "Shmul", "House"]},
        {question:"Why are you moving?", answers:["Internship", "Reef", "Job", "House"]},
        {question:"Who are you moving with?", answers:["Bae", "Reef", "Shmul", "House"]},
        {question:"Why are you moving?", answers:["Internship", "Reef", "Job", "House"]}
    ],
    apartments: [
        {images: [AppartmentImage, AppartmentImage, AppartmentImage],
            size: 1000,
            bedroomNum: 2,
            bathroomNum: 2,
            price: 199,
            location: "Sede Warburg, Israel",
            appointmentTime: new Date()}
    ]
}