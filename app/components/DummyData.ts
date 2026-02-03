export interface Property {
  id: number;
  url: string;
  address: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface Photo {
  id: number;
  property_id: number;
  url: string;
  room_type: string | null;
  stage: "before" | "after";
  created_at: string;
  updated_at: string;
}

export interface Renovation {
  id: number;
  property_id: number;
  bathroom: boolean;
  kitchen: boolean;
  living_room: boolean;
  bedroom: boolean;
  basement: boolean;
  house: boolean;
  created_at: string;
  updated_at: string;
}

export const mockProperties: Property[] = [
  {
    id: 1,
    url: "https://www.bhg.com/thmb/3Vf9GXp3T-adDlU6tKpTbb-AEyE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
    address: "123 Main Street, Springfield, IL 62701",
    description: "Beautiful 3-bedroom home with modern renovations throughout. Features updated kitchen, bathrooms, and hardwood floors.",
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-01-15T10:30:00Z"
  },
  {
    id: 2,
    url: "https://example.com/listing/67890",
    address: "456 Oak Avenue, Riverside, CA 92501",
    description: "Spacious family home with recent bathroom and kitchen renovations. Perfect for growing families.",
    created_at: "2024-01-20T14:45:00Z",
    updated_at: "2024-01-20T14:45:00Z"
  },
  {
    id: 3,
    url: "https://example.com/listing/54321",
    address: "789 Pine Road, Boulder, CO 80301",
    description: "Charming cottage with complete bedroom renovation and updated living spaces. Mountain views included.",
    created_at: "2024-01-25T09:15:00Z",
    updated_at: "2024-01-25T09:15:00Z"
  }
];

export const mockPhotos: Photo[] = [
  
  // Property 1 

  {
    id: 1,
    property_id: 1,
    url: "https://www.bhg.com/thmb/3Vf9GXp3T-adDlU6tKpTbb-AEyE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
    room_type: "house",
    stage: "after",
    created_at: "2024-01-15T10:50:00Z",
    updated_at: "2024-01-15T10:50:00Z"
  },
  {
    id: 2,
    property_id: 1,
    url: "https://hips.hearstapps.com/hmg-prod/images/edc100124gambrel-006-66e0bc34ac150.jpg?crop=0.688xw:1.00xh;0.276xw,0&resize=1120:*",
    room_type: "kitchen",
    stage: "after",
    created_at: "2024-01-15T10:35:00Z",
    updated_at: "2024-01-15T10:35:00Z"
  },
  {
    id: 3,
    property_id: 1,
    url: "https://hips.hearstapps.com/hmg-prod/images/1737-q54a-jm-0403-lowres-designer-jennifer-mcgee-67dc655a1d1ac.jpg?crop=1.00xw:1.00xh;0,0&resize=1400:*",
    room_type: "bathroom",
    stage: "after",
    created_at: "2024-01-15T10:40:00Z",
    updated_at: "2024-01-15T10:40:00Z"
  },
  {
    id: 4,
    property_id: 1,
    url: "https://cdn.prod.website-files.com/6334a8d89862a1cc15eae9e1/64dd7082e537179482d40ad5_8d94c852.jpeg",
    room_type: "bedroom",
    stage: "after",
    created_at: "2024-01-15T10:45:00Z",
    updated_at: "2024-01-15T10:45:00Z"
  },
  {
    id: 5,
    property_id: 1,
    url: "https://rnb.scene7.com/is/image/roomandboard/metro_505736_25e?size=2400,2400&scl=1",
    room_type: "living_room",
    stage: "after",
    created_at: "2024-01-15T10:50:00Z",
    updated_at: "2024-01-15T10:50:00Z"
  },
  // Before images for Property 1
  {
    id: 6,
    property_id: 1,
    url: "https://www.thespruce.com/thmb/1BV677bSSYcpu-UbpE6KOarsNCY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-601799249-5890dfb55f9b5874ee7dcd57.jpg",
    room_type: "house",
    stage: "before",
    created_at: "2024-01-15T10:50:00Z",
    updated_at: "2024-01-15T10:50:00Z"
  },
  {
    id: 7,
    property_id: 1,
    url: "https://www.bhg.com/thmb/R2pu0J48R485ff35mbImDTMXnKA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wood-kitchen-remodel-before-6452409-235916e00f284e42b78fb6af7543de45.jpg",
    room_type: "kitchen",
    stage: "before",
    created_at: "2024-01-15T10:35:00Z",
    updated_at: "2024-01-15T10:35:00Z"
  },
  {
    id: 8,
    property_id: 1,
    url: "https://www.bigbathroomshop.co.uk/info/blog/wp-content/uploads/a-dated-bathroom-in-need-of-renovation.jpg",
    room_type: "bathroom",
    stage: "before",
    created_at: "2024-01-15T10:40:00Z",
    updated_at: "2024-01-15T10:40:00Z"
  },
  {
    id: 9,
    property_id: 1,
    url: "https://pinkpeppermintdesign.com/wp-content/uploads/2018/05/878Da4079FCF4F9-1405741.jpg",
    room_type: "bedroom",
    stage: "before",
    created_at: "2024-01-15T10:45:00Z",
    updated_at: "2024-01-15T10:45:00Z"
  },
  {
    id: 10,
    property_id: 1,
    url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisjs-8RezsHihlHXPEti4TS1fdrSd8B8xM_KcJAKZXtshi-nSkYrcyBXDnPN85CzmnzIBNm9F8xuvlmYc3wPDLNFWPPTgLdfJTIShGaNSyLngDcwb-QfwRY_tUOoD7MImGA674LyMavBQ/s1600/Log_Cabin_Living_Room_Renovation_before.jpg",
    room_type: "living_room",
    stage: "before",
    created_at: "2024-01-15T10:50:00Z",
    updated_at: "2024-01-15T10:50:00Z"
  },

  
  // Property 2 
  {
    id: 11,
    property_id: 2,
    url: "https://example.com/photos/property2/kitchen2.jpg",
    room_type: "kitchen",
    stage: "after",
    created_at: "2024-01-20T14:50:00Z",
    updated_at: "2024-01-20T14:50:00Z"
  },
  {
    id: 12,
    property_id: 2,
    url: "https://example.com/photos/property2/bathroom2.jpg",
    room_type: "bathroom",
    stage: "after",
    created_at: "2024-01-20T14:55:00Z",
    updated_at: "2024-01-20T14:55:00Z"
  },
  {
    id: 13,
    property_id: 2,
    url: "https://example.com/photos/property2/basement1.jpg",
    room_type: "basement",
    stage: "after",
    created_at: "2024-01-20T15:00:00Z",
    updated_at: "2024-01-20T15:00:00Z"
  },
  // Before for Property 2
  {
    id: 14,
    property_id: 2,
    url: "https://example.com/before/property2/kitchen.jpg",
    room_type: "kitchen",
    stage: "before",
    created_at: "2024-01-20T14:50:00Z",
    updated_at: "2024-01-20T14:50:00Z"
  },
  {
    id: 15,
    property_id: 2,
    url: "https://example.com/before/property2/bathroom.jpg",
    room_type: "bathroom",
    stage: "before",
    created_at: "2024-01-20T14:55:00Z",
    updated_at: "2024-01-20T14:55:00Z"
  },
  {
    id: 16,
    property_id: 2,
    url: "https://example.com/before/property2/basement.jpg",
    room_type: "basement",
    stage: "before",
    created_at: "2024-01-20T15:00:00Z",
    updated_at: "2024-01-20T15:00:00Z"
  },
  // Property 3 
  {
    id: 17,
    property_id: 3,
    url: "https://example.com/photos/property3/bedroom2.jpg",
    room_type: "bedroom",
    stage: "after",
    created_at: "2024-01-25T09:20:00Z",
    updated_at: "2024-01-25T09:20:00Z"
  },
  {
    id: 18,
    property_id: 3,
    url: "https://example.com/photos/property3/livingroom2.jpg",
    room_type: "living_room",
    stage: "after",
    created_at: "2024-01-25T09:25:00Z",
    updated_at: "2024-01-25T09:25:00Z"
  },
  // Before for Property 3
  {
    id: 19,
    property_id: 3,
    url: "https://example.com/before/property3/bedroom.jpg",
    room_type: "bedroom",
    stage: "before",
    created_at: "2024-01-25T09:20:00Z",
    updated_at: "2024-01-25T09:20:00Z"
  },
  {
    id: 20,
    property_id: 3,
    url: "https://example.com/before/property3/living_room.jpg",
    room_type: "living_room",
    stage: "before",
    created_at: "2024-01-25T09:25:00Z",
    updated_at: "2024-01-25T09:25:00Z"
  }
];

export const mockRenovations: Renovation[] = [
  {
    id: 1,
    property_id: 1,
    bathroom: true,
    kitchen: true,
    living_room: true,
    bedroom: true,
    basement: false,
    house: true,
    created_at: "2024-01-15T11:00:00Z",
    updated_at: "2024-01-15T11:00:00Z"
  },
  {
    id: 2,
    property_id: 2,
    bathroom: true,
    kitchen: true,
    living_room: false,
    bedroom: false,
    basement: true,
    house: true,
    created_at: "2024-01-20T15:30:00Z",
    updated_at: "2024-01-20T15:30:00Z"
  },
  {
    id: 3,
    property_id: 3,
    bathroom: false,
    kitchen: false,
    living_room: true,
    bedroom: true,
    basement: false,
    house: true,
    created_at: "2024-01-25T10:00:00Z",
    updated_at: "2024-01-25T10:00:00Z"
  }
];

export const getPhotosByPropertyId = (propertyId: number): Photo[] => {
  return mockPhotos.filter(photo => photo.property_id == propertyId);
};

export const getRenovationByPropertyId = (propertyId: number): Renovation | undefined => {
  return mockRenovations.find(renovation => renovation.property_id == propertyId);
};

export const getPhotosByRoomType = (roomType: string): Photo[] => {
  return mockPhotos.filter(photo => photo.room_type == roomType);
};

export const getPhotosByPropertyAndRoomType = (propertyId: number, roomType: string): Photo[] => {
  return mockPhotos.filter(photo => photo.property_id == propertyId && photo.room_type == roomType);
};

export const getPropertiesWithRenovations = () => {
  return mockProperties.map(property => ({
    id: property.id,
    url: property.url,
    address: property.address,
    created_at: property.created_at,
    updated_at: property.updated_at,

    renovation: getRenovationByPropertyId(property.id),
    photos: getPhotosByPropertyId(property.id)
  }));
};
