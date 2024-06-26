import { Box, Flex, Spacer, Text } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import React, {useEffect, useState} from 'react';
import { fetchData } from '../../utils/fetchApi';

const Property = () => {
    const [address, setAddress] = useState('');
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);
    const[error, setError] = useState(null);

const handleFetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchData(address);
      setPropertyDetails(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
};

  return (
    <div>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter address..."
      />
      <button onClick={handleFetchData} disabled={!address || loading}>
        Fetch Property Details
      </button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {propertyDetails && (
        <div>
          <h2>Property Details</h2>
          <pre>{JSON.stringify(propertyDetails, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default PropertyDetailsComponent;



{/*
{
    "id": "5500-Grand-Lake-Dr,-San-Antonio,-TX-78244",
    "formattedAddress": "5500 Grand Lake Dr, San Antonio, TX 78244",
    "addressLine1": "5500 Grand Lake Dr",
    "addressLine2": null,
    "city": "San Antonio",
    "state": "TX",
    "zipCode": "78244",
    "county": "Bexar",
    "latitude": 29.475962,
    "longitude": -98.351442,
    "propertyType": "Single Family",
    "bedrooms": 3,
    "bathrooms": 2,
    "squareFootage": 1878,
    "lotSize": 8843,
    "yearBuilt": 1973,
    "assessorID": "05076-103-0500",
    "legalDescription": "CB 5076A BLK 3 LOT 50",
    "subdivision": "CONV A/S CODE",
    "zoning": "RH",
    "lastSaleDate": "2017-10-19T00:00:00.000Z",
    "lastSalePrice": 185000,
    "features": {
      "architectureType": "Contemporary",
      "cooling": true,
      "coolingType": "Central",
      "exteriorType": "Wood",
      "floorCount": 1,
      "foundationType": "Slab / Mat / Raft",
      "garage": true,
      "garageType": "Garage",
      "heating": true,
      "heatingType": "Forced Air",
      "pool": true,
      "roofType": "Asphalt",
      "roomCount": 5,
      "unitCount": 1
    },
    "taxAssessments": {
      "2019": {
        "value": 135430,
        "land": 23450,
        "improvements": 111980
      },
      "2020": {
        "value": 142610,
        "land": 23450,
        "improvements": 119160
      },
      "2021": {
        "value": 163440,
        "land": 45050,
        "improvements": 118390
      },
      "2022": {
        "value": 197600,
        "land": 49560,
        "improvements": 148040
      },
      "2023": {
        "value": 225790,
        "land": 59380,
        "improvements": 166410
      }
    },
    "propertyTaxes": {
      "2019": {
        "total": 2984
      },
      "2020": {
        "total": 3023
      },
      "2021": {
        "total": 3455
      },
      "2022": {
        "total": 4091
      },
      "2023": {
        "total": 4675
      }
    },
    "owner": {
      "names": [
        "Michael Smith"
      ],
      "mailingAddress": {
        "id": "149-Weaver-Blvd,---264,-Weaverville,-NC-28787",
        "formattedAddress": "149 Weaver Blvd, # 264, Weaverville, NC 28787",
        "addressLine1": "149 Weaver Blvd",
        "addressLine2": "# 264",
        "city": "Weaverville",
        "state": "NC",
        "zipCode": "28787"
      }
    },
    "ownerOccupied": false
  }


  */}