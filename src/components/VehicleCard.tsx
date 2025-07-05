import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface VehicleCardProps {
  name: string;
  image: string;
  capacity: string;
  features: string[];
}

const VehicleCard = ({ name, image, capacity, features }: VehicleCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100">
      <div className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader className="bg-gradient-to-r from-travel-50 to-white">
        <CardTitle className="text-travel-900">{name}</CardTitle>
        <CardDescription className="text-travel-700 font-medium">Capacity: {capacity}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow pt-4">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 text-accent-600 mt-1"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-2">
        <Button asChild className="w-full bg-gradient-to-r from-travel-800 to-accent-600 hover:from-travel-900 hover:to-accent-700">
          <Link to="/book-now">Book This Vehicle</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VehicleCard;