import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { InfoIcon } from '../components/Icons'
import CarDetail from '../components/CarDetail'

function CarsPage() {
  const cars=[
    {
      "name": "Maruti Suzuki Alto 800",
      "PriceRange": "₹2.99 - ₹4.41 lakh",
      "Engine": "0.8L Petrol",
      "PowerOutput": "47 bhp",
      "Mileage": "22.05 kmpl",
      "SeatingCapacity": 5,
      "Transmission": "5-speed manual or automatic",
      "SafetyFeatures": "Dual airbags, ABS with EBD",
      "KeyFeatures": "Manual air conditioning, touchscreen infotainment system",
      "Photo":"./images/carImages/Alto.jpg"
    },
    {
      "name": "Hyundai i20",
      "PriceRange": "₹6.85 - ₹11.40 lakh",
      "Engine": "1.2L Petrol, 1.5L Diesel, 1.0L Turbo Petrol",
      "PowerOutput": "83 bhp (Petrol), 98 bhp (Diesel), 118 bhp (Turbo Petrol)",
      "Mileage": "20.25 kmpl (Petrol), 25.2 kmpl (Diesel), 20.28 kmpl (Turbo Petrol)",
      "SeatingCapacity": 5,
      "Transmission": "5-speed manual, 6-speed manual, or automatic",
      "SafetyFeatures": "6 airbags, ABS with EBD",
      "KeyFeatures": "Touchscreen infotainment system, wireless charging",
      "Photo":"./images/carImages/i20.jpg"
    },
    {
      "name": "Tata Nexon",
      "PriceRange": "₹7.19 - ₹13.04 lakh",
      "Engine": "1.2L Petrol, 1.5L Diesel",
      "PowerOutput": "118 bhp (Petrol), 108 bhp (Diesel)",
      "Mileage": "17.4 kmpl (Petrol), 21.5 kmpl (Diesel)",
      "SeatingCapacity": 5,
      "Transmission": "6-speed manual or automatic",
      "SafetyFeatures": "Dual front airbags, ESP, Hill Hold Control",
      "KeyFeatures": "Harman infotainment system, multi-drive modes",
      "Photo":"./images/carImages/nexon.jpg"
    },
    {
      "name": "Honda City",
      "PriceRange": "₹11.16 - ₹15.53 lakh",
      "Engine": "1.5L Petrol, 1.5L Diesel",
      "PowerOutput": "118 bhp (Petrol), 98 bhp (Diesel)",
      "Mileage": "17.8 kmpl (Petrol), 24.1 kmpl (Diesel)",
      "SeatingCapacity": 5,
      "Transmission": "6-speed manual or automatic",
      "SafetyFeatures": "6 airbags, ABS with EBD",
      "KeyFeatures": "7-inch touchscreen infotainment, sunroof",
      "Photo":"./images/carImages/hondacity.jpg"
    },
    {
      "name": "Kia Seltos",
      "PriceRange": "₹9.95 - ₹17.65 lakh",
      "Engine": "1.5L Petrol, 1.4L Turbo Petrol, 1.5L Diesel",
      "PowerOutput": "113 bhp (Petrol), 138 bhp (Turbo Petrol), 113 bhp (Diesel)",
      "Mileage": "16.5 kmpl (Petrol), 18.0 kmpl (Turbo Petrol), 21.0 kmpl (Diesel)",
      "SeatingCapacity": 5,
      "Transmission": "6-speed manual or automatic",
      "SafetyFeatures": "6 airbags, ABS with EBD, ESC",
      "KeyFeatures": "UVO Connect, Bose sound system",
      "Photo":"./images/carImages/kiaseltos.jpg"
    },
    {
      "name": "Mahindra Thar",
      "PriceRange": "₹12.11 - ₹16.25 lakh",
      "Engine": "2.0L Petrol, 2.2L Diesel",
      "PowerOutput": "150 bhp (Petrol), 130 bhp (Diesel)",
      "Mileage": "13.0 kmpl (Petrol), 15.2 kmpl (Diesel)",
      "SeatingCapacity": "4/6",
      "Transmission": "6-speed manual or automatic",
      "SafetyFeatures": "Dual airbags, ABS with EBD, Roll Cage",
      "KeyFeatures": "4x4 capability, removable roof and doors",
      "Photo":"./images/carImages/thar.jpg"
    },
    {
      "name": "Ford EcoSport",
      "PriceRange": "₹8.19 - ₹11.73 lakh",
      "Engine": "1.5L Petrol, 1.5L Diesel",
      "PowerOutput": "120 bhp (Petrol), 99 bhp (Diesel)",
      "Mileage": "15.9 kmpl (Petrol), 21.7 kmpl (Diesel)",
      "SeatingCapacity": 5,
      "Transmission": "5-speed manual or automatic",
      "SafetyFeatures": "6 airbags, ABS with EBD, ESC",
      "KeyFeatures": "SYNC 3 infotainment, sunroof",
      "Photo":"./images/carImages/ecosport.jpg"
    },
    {
      "name": "Volkswagen Polo",
      "PriceRange": "₹6.17 - ₹10.58 lakh",
      "Engine": "1.0L Petrol, 1.0L TSI Petrol",
      "PowerOutput": "75 bhp (Petrol), 108 bhp (TSI Petrol)",
      "Mileage": "18.24 kmpl (Petrol), 18.24 kmpl (TSI Petrol)",
      "SeatingCapacity": 5,
      "Transmission": "5-speed manual or automatic",
      "SafetyFeatures": "Dual airbags, ABS with EBD",
      "KeyFeatures": "Touchscreen infotainment, cruise control",
      "Photo":"./images/carImages/polo.jpg"
    },
    {
      "name": "Toyota Innova Crysta",
      "PriceRange": "₹16.59 - ₹24.92 lakh",
      "Engine": "2.7L Petrol, 2.4L Diesel",
      "PowerOutput": "164 bhp (Petrol), 148 bhp (Diesel)",
      "Mileage": "11.25 kmpl (Petrol), 15.1 kmpl (Diesel)",
      "SeatingCapacity": "7/8",
      "Transmission": "5-speed manual or automatic",
      "SafetyFeatures": "7 airbags, ABS with EBD",
      "KeyFeatures": "Captain seats, touchscreen infotainment",
      "Photo":"./images/carImages/crysta.jpg"
    },
    {
      "name": "Hyundai Creta",
      "PriceRange": "₹10.16 - ₹17.81 lakh",
      "Engine": "1.5L Petrol, 1.4L Turbo Petrol, 1.5L Diesel",
      "PowerOutput": "113 bhp (Petrol), 138 bhp (Turbo Petrol), 113 bhp (Diesel)",
      "Mileage": "16.8 kmpl (Petrol), 16.9 kmpl (Turbo Petrol), 21.4 kmpl (Diesel)",
      "SeatingCapacity": 5,
      "Transmission": "6-speed manual or automatic",
      "SafetyFeatures": "6 airbags, ABS with EBD, ESC",
      "KeyFeatures": "Panoramic sunroof, touchscreen infotainment",
      "Photo":"./images/carImages/creta.jpg"
    },
    {
      "name": "Maruti Suzuki Swift",
      "PriceRange": "₹5.97 - ₹9.22 lakh",
      "Engine": "1.2L Petrol, 1.3L Diesel",
      "PowerOutput": "82 bhp (Petrol), 74 bhp (Diesel)",
      "Mileage": "23.2 kmpl (Petrol), 28.4 kmpl (Diesel)",
      "SeatingCapacity": 5,
      "Transmission": "5-speed manual or automatic",
      "SafetyFeatures": "Dual airbags, ABS with EBD",
      "KeyFeatures": "Touchscreen infotainment, sporty design",
      "Photo":"./images/carImages/swift.jpg"
    },
    {
      "name": "Nissan Magnite",
      "PriceRange": "₹5.59 - ₹10.0 lakh",
      "Engine": "1.0L Turbo Petrol",
      "PowerOutput": "98 bhp",
      "Mileage": "17.7 kmpl",
      "SeatingCapacity": 5,
      "Transmission": "5-speed manual or CVT automatic",
      "SafetyFeatures": "Dual airbags, ABS with EBD",
      "KeyFeatures": "8-inch touchscreen, wireless Apple CarPlay",
      "Photo":"./images/carImages/magnite.jpg"
    },
    {
      "name": "Tata Harrier",
      "PriceRange": "₹14.59 - ₹21.09 lakh",
      "Engine": "2.0L Diesel",
      "PowerOutput": "168 bhp",
      "Mileage": "16.35 kmpl",
      "SeatingCapacity": 5,
      "Transmission": "6-speed manual or automatic",
      "SafetyFeatures": "6 airbags, ABS with EBD, ESP",
      "KeyFeatures": "Large touchscreen infotainment, premium interiors",
      "Photo":"./images/carImages/harrier.jpg"
    },
    {
      "name": "Ford Figo",
      "PriceRange": "₹5.82 - ₹9.27 lakh",
      "Engine": "1.2L Petrol, 1.5L Diesel",
      "PowerOutput": "95 bhp (Petrol), 99 bhp (Diesel)",
      "Mileage": "18.5 kmpl (Petrol), 24.4 kmpl (Diesel)",
      "SeatingCapacity": 5,
      "Transmission": "5-speed manual or automatic",
      "SafetyFeatures": "6 airbags, ABS with EBD, ESP",
      "KeyFeatures": "SYNC 3 infotainment, comfortable cabin",
      "Photo":"./images/carImages/figo.jpg"
    },
    {
      "name": "Mahindra XUV300",
      "PriceRange": "₹8.3 - ₹12.68 lakh",
      "Engine": "1.2L Petrol, 1.5L Diesel",
      "PowerOutput": "109 bhp (Petrol), 115 bhp (Diesel)",
      "Mileage": "17.0 kmpl (Petrol), 20.0 kmpl (Diesel)",
      "SeatingCapacity": 5,
      "Transmission": "6-speed manual or automatic",
      "SafetyFeatures": "7 airbags, ABS with EBD, Hill Start Assist",
      "KeyFeatures": "Touchscreen infotainment, sunroof",
      "Photo":"./images/carImages/XUV500.jpg"
    },
    {
      "name": "Volkswagen Vento",
      "PriceRange": "₹10.00 - ₹14.50 lakh",
      "Engine": "1.0L TSI Petrol",
      "PowerOutput": "108 bhp",
      "Mileage": "17.69 kmpl",
      "SeatingCapacity": 5,
      "Transmission": "6-speed manual or automatic",
      "SafetyFeatures": "4 airbags, ABS with EBD",
      "KeyFeatures": "Solid build quality, comfortable ride",
      "Photo":"./images/carImages/vento.jpg"
    },
    {
      "name": "Renault Triber",
      "PriceRange": "₹5.30 - ₹7.82 lakh",
      "Engine": "1.0L Petrol",
      "PowerOutput": "71 bhp",
      "Mileage": "19.0 kmpl",
      "SeatingCapacity": 7,
      "Transmission": "5-speed manual or AMT",
      "SafetyFeatures": "Dual airbags, ABS with EBD",
      "KeyFeatures": "Modular seating, spacious cabin",
      "Photo":"./images/carImages/triber.jpg"
    },
    {
      "name": "Skoda Octavia",
      "PriceRange": "₹25.99 - ₹35.99 lakh",
      "Engine": "2.0L Petrol, 2.0L Diesel",
      "PowerOutput": "187 bhp (Petrol), 143 bhp (Diesel)",
      "Mileage": "15.81 kmpl (Petrol), 21 kmpl (Diesel)",
      "SeatingCapacity": 5,
      "Transmission": "7-speed DSG automatic",
      "SafetyFeatures": "8 airbags, ABS with EBD, ESC",
      "KeyFeatures": "Premium interiors, virtual cockpit",
      "Photo":"./images/carImages/skodaoctavia.png"
    },
    {
      "name": "Jeep Compass",
      "PriceRange": "₹17.29 - ₹28.29 lakh",
      "Engine": "1.4L Turbo Petrol, 2.0L Diesel",
      "PowerOutput": "163 bhp (Petrol), 170 bhp (Diesel)",
      "Mileage": "14.3 kmpl (Petrol), 17.1 kmpl (Diesel)",
      "SeatingCapacity": 5,
      "Transmission": "6-speed manual or automatic",
      "SafetyFeatures": "6 airbags, ABS with EBD, Hill Start Assist",
      "KeyFeatures": "Off-road capability, UConnect infotainment",
      "Photo":"./images/carImages/jeepcompas.jpg"
    }
  ]
  const [activeCar,setActiveCar]=useState({})
  

  return (
    <>
    <Navbar activeTab="cars"/>
    <div className='mt-20 mb-12  w-[95%] mx-auto flex flex-row gap-1 p-1'>
     <div className='w-1/2 '>
      <div className='font-bold text-[50px]   text-[#7289DA]'>Browse Cars</div>
      <div className='max-h-[460px] mt-5 overflow-y-auto  p-1 flex flex-col gap-2'>
        {
          cars.map((node)=>(
        <div className={`flex flex-row justify-between p-3 rounded-md cursor-pointer  ${node.name===activeCar.name?"bg-[#7289DA] text-white":"bg-[#f7f7f7]"}`}
        onClick={()=>setActiveCar(node)}
        >
          <div>{node.name}</div>
          <div><InfoIcon/></div>
        </div>
          ))
        }
      </div>
     </div>
     {activeCar.name?
    <CarDetail data={activeCar}/>:
    <div className='mx-auto font-bold text-[#ccc] mt-[20%]'>Choose Any Car</div>
    }
    </div>
    <Footer/>
    </>
  )
}

export default CarsPage