import {fromJS} from "immutable";
import AppartmentImage from "../../static/images/appartment.jpg";
import SellerImage from "../../static/images/cs.jpg";

const initialState = fromJS({
  apartments: {
      1: {
          images: [AppartmentImage, AppartmentImage, AppartmentImage],
          type: "Multi Family",
          coolingData: "No Data",
          heatingData: "No Data",
          parkingData: "No Data",
          yearBuilt: 1999,
          facilities: ["Swimming Pool", "Gym"],
          amenities: ["WIFI"], otherDetails: ["Large Dogs Allowed", "Bicycle"],
          size: 1000,
          bedroomNum: 2,
          bathroomNum: 2,
          price: 199,
          location: "Sede Warburg, Israel",
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet',
          tags: ["Family", "Romantic"],
          tourStatus: "upcoming",
          seller: {
              name: "Roy Seller",
              email: "roy@gmail.com",
              phone: "+12345678",
              image: SellerImage
          }
      }
  }
});

export default function ApartmentsReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}