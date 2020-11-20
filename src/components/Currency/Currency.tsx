import React from "react";

interface PriceProps {
  currency: string;
  value: number;
}

export const Currency: React.FC<PriceProps> = ({ currency, value }) => {
  const valueFormatted = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency,
  }).format(value);
  return <>{`${currency} ${valueFormatted}`}</>;
};
